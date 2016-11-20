
describe('backend test', function() {
    var result = {};
    var $controller, localhttp, location, petDataService,q,httpbackend;
    // Load the Petstore module which we'll create next
    beforeEach(angular.mock.module('PetStoreTs'));


    /*beforeEach(function() {
        // Initialize our local result object to an empty object before each test
        result = {};
        // Spy on our service call but allow it to continue to its implementation

    });*/


    beforeEach(inject(function (_$controller_, _$http_,_$location_,_$q_, _$httpBackend_,_PetDataService_) {

        // Initialize our local result object to an empty object before each test

       $controller = _$controller_;
        localhttp = _$http_;
        location = _$location_;
        categoryId = 0;
        API = 'http://localhost:8080/pet/findPetCategoryById/';
        RESPONSE_SUCCESS = [{"id":1,"make":"Persan","localUrl":"images/chats/persan.jpg","description":"Je suis un chat persan","price":100,"categoryId":0},{"id":31,"make":"Sphynx","localUrl":"images/chats/sphynx.jpg","description":"roi egypte","price":150,"categoryId":0},{"id":32,"make":"xcxcxc","localUrl":"xcxc","description":"xcxcx","price":6,"categoryId":0},{"id":33,"make":"xcxcxc","localUrl":"xcxc","description":"xcxcx","price":6,"categoryId":0},{"id":34,"make":"vdd","localUrl":"dd","description":"ddd","price":6,"categoryId":0},{"id":35,"make":"qdqsd","localUrl":"qsdqsd","description":"qsdqsd","price":5,"categoryId":0},{"id":36,"make":"dssssssssss","localUrl":"sss","description":"ssssssssss","price":6,"categoryId":0},{"id":37,"make":"dzz","localUrl":"zz","description":"zzz","price":56,"categoryId":0},{"id":38,"make":"aaaaa","localUrl":"a","description":"aaaaaa","price":555,"categoryId":0},{"id":39,"make":"sdqsdqsd","localUrl":"qsdqsd","description":"qsdqsdqsd","price":56,"categoryId":0},{"id":40,"make":"wxcwxc","localUrl":"wxcwxc","description":"wxcwxc","price":95,"categoryId":0},{"id":41,"make":"p","localUrl":"p","description":"p","price":6,"categoryId":0},{"id":42,"make":"qddqqsdqsd","localUrl":"qsdqsd","description":"qsd","price":6565,"categoryId":0},{"id":43,"make":"sdsds","localUrl":"dsd","description":"dsds","price":56,"categoryId":0},{"id":44,"make":"sd","localUrl":"sdsd","description":"sdsd","price":4545,"categoryId":0},{"id":45,"make":"TEST","localUrl":"TEST","description":"TEST","price":555,"categoryId":0}];
        $q = _$q_;
        httpbackend = _$httpBackend_;
        petDataService = _PetDataService_;


        //petDataService = $controller('PetDataService', { localhttp: _$http_,location: _$location_ });
    }));
    it('location service should exist', function() {
        expect(location).toBeDefined();
    });


    it('petDataService service should exist', function() {
        expect(petDataService).toBeDefined();
    });

    it('http call',function(){

        spyOn(petDataService, "getPets").and.callThrough();

        httpbackend.when("GET", function (url) {
                       return url.indexOf(".html") !== -1;
        }).respond('');
        httpbackend.flush();


        httpbackend.whenGET(API + categoryId).respond(200, $q.when(RESPONSE_SUCCESS));
        dump('BOUR after second httpbackend whenget:');

        expect(petDataService.getPets).not.toHaveBeenCalled();

        petDataService.getPets(categoryId)
            .then(function(res) {
                result = res;
            });

        httpbackend.flush();

        expect(petDataService.getPets).toHaveBeenCalledWith(0);
        expect(result[0].make).toEqual("Persan");



    });








});


