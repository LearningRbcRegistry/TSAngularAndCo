module PetStoreTs {
    'use strict';

    import ICategories = PetStoreTs.ICategories;

    export class AddPetController {
        pets: IPets[] = null;
        categoryId: number;
        resultDelete: boolean;
        petDataService: PetDataService;
        errorMessage: string;

        static $inject = ['PetDataService', '$stateParams', '$scope'];

        constructor(petDataService: PetDataService, $stateParams, $scope) {
            console.log('in add controller');
            this.categoryId = 0;
            this.categoryId = $stateParams.catId;
            this.resultDelete = false;
            this.petDataService = petDataService;
            console.log('ADD PET TO CATEGORY: ' + this.categoryId);

            $scope.addPets = () => {
                console.log('Add Pet method');
                console.log($scope);

                this.petDataService.addPet($scope.make, $scope.url, $scope.price, $scope.description, this.categoryId);

            };

            }


    }

    angular.module('PetStoreTs').controller('AddPetController', AddPetController);

}