/// <reference path="controllers/add.pet.controller.ts"/>
/// <reference path="controllers/categories.controller.ts"/>
/// <reference path="controllers/pet.controller.ts"/>
/// <reference path="services/categories.service.ts"/>
/// <reference path="services/pet.service.ts"/>

module PetStoreTs {

    var app = angular.module('PetStoreTs', ['ui.router', 'ngAnimate']);
    app.controller('PetController', PetController);
    app.controller('CategoriesController', CategoriesController);
    app.service('PetDataService', PetDataService);
    app.controller('AddPetController', AddPetController);
    app.service('DataService', DataService);


 // definition of the application and inclusion of required "plugin"
 // https://www.sitepoint.com/write-modular-code-angular-ui-router-named-views/

        app.config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');

                console.log('url routing');

                $stateProvider
                    .state('pet' , {
                        url: '/:catId' ,
                        views: {
                            'petview1': {
                                controller:   CategoriesController ,
                                templateUrl:  'app/views/categories.html' ,
                                controllerAs: 'vm'
                            },
                            'details1': {
                                controller:   PetController ,
                                templateUrl:  'app/views/pet.html' ,
                                controllerAs: 'vm'

                            }
                        }
                    }).state('addpetform', {
                        url: '/:catId' ,
                        views: {
                        'petview1': {
                            controller:   'CategoriesController' ,
                            templateUrl:  'app/views/categories.html' ,
                            controllerAs: 'vm'
                        },
                        'addpetform': {
                            controller:   'AddPetController' ,
                            templateUrl:  'app/views/addPet.html' ,
                            controllerAs: 'vm'

                        }
                    }
                })
                  ;

            }
        ]);

}//)();













/*app.config(['$stateProvider', ($urlRouterProvider) => {

 $urlRouterProvider.otherwise('/');
 console.log('BOUR EST LA');
 console.log($stateProvider);

 $stateProvider
 .state('state1' , {
 url: '/' ,
 controller: 'PetStoreTs.CategoriesController' ,
 templateUrl: 'app/views/categories.html' ,
 controllerAs: 'vm'

 }).state('state2', {
 url: '/petCategory/:id' ,
 controller: 'PetStoreTs.PetController' ,
 templateUrl: 'app/views/pet.html' ,
 controllerAs: 'vm'
 });
 console.log('BOUR EST ICI');
 }]);*/

/*.state('details', {
 url: '/petCategory/:id' ,
 controller:   'PetStoreTs.PetController',
 templateUrl:  'app/views/pet.html',
 controllerAs: 'vm'

 })*/;

// $stateProvider.state('index', {
//     url: '/',
//     views: {
//         '': {
//             controller:   'PetStoreTs.CategoriesController' ,
//             templateUrl:  'app/views/categories.html' ,
//             controllerAs: 'vm'
//         },
//         'footer@index' : {
//             url: '/petCategory/:id' ,
//             controller:   'PetStoreTs.PetController',
//             templateUrl:  'app/views/pet.html',
//             controllerAs: 'vm'
//         }
//     }
// });

// var pet = {
//     views: {
//         'petstate':{
//             url: '/petCategory/:id' ,
//             controller:   'PetStoreTs.PetController',
//             templateUrl:  'app/views/pet.html',
//             controllerAs: 'vm'
//         },
//         'categorie':{
//             url: '/' ,
//             controller:   'PetStoreTs.CategoriesController' ,
//             templateUrl:  'app/views/categories.html' ,
//             controllerAs: 'vm'
//         }
//     }
//
// };


//       $stateProvider.state('pet');

/*$stateProvider
 .state('pet' , {
 url: '/' ,
 controller:   'PetStoreTs.CategoriesController' ,
 templateUrl:  'app/views/categories.html' ,
 controllerAs: 'vm'
 }).state('pet.petState', {
 url: '/petCategory/:id' ,
 controller:   'PetStoreTs.PetController' ,
 templateUrl:  'app/views/pet.html' ,
 controllerAs: 'vm'
 });*/