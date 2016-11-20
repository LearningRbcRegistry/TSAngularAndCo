describe('first test', function () {
    //'use strict';

    var  $stateParams , $controller, petDataService,PetTestController,http,httpBackend;

    beforeEach(module('PetStoreTs'));

    //dataService: DataService, $stateParams, $scope
    beforeEach(inject(function (_$controller_,_PetDataService_,_$stateParams_ ) {
        $stateParams = _$stateParams_;
        $controller = _$controller_;
        petDataService = _PetDataService_;
        dump(petDataService);
    }));

    beforeEach(function($http,$httpBackend) {

        http = $http;
        httpBackend = $httpBackend;
        httpBackend.when("GET","http://localhost:8080/category/findAllCategories").respond([]);

        PetTestController = $controller('PetController',{petDataService: petDataService, $stateParams: $stateParams});
    });

    it('PetController should be defined', function () {
      dump('FIRST TEST');
      expect(PetTestController.petDataService.getPets()).toBeDefined();
    });


});

describe('second Test', function(){


});