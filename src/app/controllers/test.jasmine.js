describe('Categories', function() {
    var Pokemon;

    // Load the Petstore module which we'll create next
    beforeEach(module('PetStoreTs'));

    var  $stateParams , $controller, dataService,http,httpBackend;

    var categoriesList = [{"id":0,"make":"Chats","localUrl":"images/categories/chat.png"},
                          {"id":1,"make":"Chiens","localUrl":"images/categories/chien.png"},
                          {"id":2,"make":"Animaux sauvages","localUrl":"images/categories/lion.png"},
                          {"id":3,"make":"Animaux de la ferme","localUrl":"images/categories/cochon.png"}];

    //dataService: DataService, $stateParams, $scope
    beforeEach(inject(function (_$controller_,_DataService_,_$stateParams_ ) {
        $stateParams = _$stateParams_;
        $controller = _$controller_;
        dataService = _DataService_;

        spyOn(dataService, 'getCategories').and.callFake(function() {
            return categoriesList;
        });

   }));

    it('should exist', function() {
        expect(dataService.getCategories).toBeDefined();
    });

    it('returns a good value',function(){
        expect(dataService.getCategories()[0].make).toBe("Chats");
        expect(dataService.getCategories()[0].localUrl).toBe("images/categories/chat.png");
    });

    it('check inexisting value',function(){
        expect(dataService.getCategories()[48]).toBeFalsy();
    });
});

