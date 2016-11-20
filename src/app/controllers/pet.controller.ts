module PetStoreTs {
    'use strict';

    import IPets = PetStoreTs.IPets;

    export class PetController {
        pets: IPets[] = null;
        categoryId: number;
        resultDelete: boolean;
        petDataService: PetDataService;
        errorMessage: string;

        static $inject = ['PetDataService', '$stateParams'] ;
        constructor(  petDataService: PetDataService, $stateParams) {

            console.log('idid: ' + $stateParams.categoryId);
            this.categoryId = 0;
            this.categoryId = $stateParams.catId;
            this.resultDelete = false;
            this.petDataService = petDataService;
            console.log('Through service parameter: ' + this.categoryId);
            console.log(this.categoryId);

            //if ($stateParams.categoryId === undefined) {

             //   this.categoryId = 0;
           // }

            petDataService.getPets(this.categoryId).then((custs:IPets[]) => {
                console.log('getPets call categoryId: ' + this.categoryId);
                this.pets = custs;
                this.categoryId = this.categoryId;
            });
        }

          deletePet(indexToBeDeleted, rowIndex) {
            this.resultDelete = false;
            this.errorMessage = '';
            console.log('Delete Pet Id: ' + indexToBeDeleted );


               this.petDataService.deletePet(indexToBeDeleted).then((result: boolean) => {
                console.log('in then: ' + result);
                this.resultDelete = result ;

                   if ( !this.resultDelete ) {
                       console.log('IMPOSSIBLE');
                       this.errorMessage = 'Impossible to Delete yet';
                   } else {
                       this.errorMessage = 'Pet has been deleted';
                       console.log('DELETED');
                   }
               });

               console.log('Result Delete:' +  this.resultDelete);
               this.petDataService.getPets(this.categoryId).then((custs:IPets[]) => {
                   this.pets = custs;
               });

           }


    }

    angular.module('PetStoreTs').controller('PetController', PetController);
}