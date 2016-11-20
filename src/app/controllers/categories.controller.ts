module PetStoreTs {
    'use strict';

    import ICategories = PetStoreTs.ICategories;

    export class CategoriesController {
        categories: ICategories[] = null;

        static $inject = ['DataService', '$stateParams', '$scope'];
           constructor(dataService: DataService, $stateParams, $scope) {

               dataService.getCategories().then((custs:ICategories[]) => {
                $stateParams.categoryName = 1;
                this.categories = custs;
            });
        }

    }

    angular.module('PetStoreTs').controller('CategoriesController', CategoriesController);

}