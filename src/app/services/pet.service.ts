module PetStoreTs {

    import ILocationProvider = angular.ILocationProvider;
    export interface IPets {
        id: number;
        make: string;
        localUrl: string;
        price: number;
        description: string;
        location:ILocationProvider;
    }

    export class PetDataService {

        static $inject = ['$http' , '$location'];
        constructor(private localhttp: ng.IHttpService, private location: ng.ILocationService) {

            this.location = location;
        }

    // ID OF PET IS MISSING
        getPets(id: number): ng.IPromise<IPets[]> {


            console.log('Pet category Id to retrieve: ' + id);

            return this.localhttp.get('http://localhost:8080/pet/findPetCategoryById/' + id).then(response => {
                return response.data;
            });
        }

        addPet(make: string, url: string, price: number, description: string, categoryId:number) {

            console.log('make:' + make);
            console.log('url:' + url);
            console.log('price:' + price);
            console.log('description:' + description);
            url = url.split('/').join('@');
            this.localhttp.post('http://localhost:8080/pet/createPet' + '/'
                + make + '/' + categoryId + '/' + url + '/' + description + '/' + price ,
                                        null).then(function successCallBack(response){
                console.log('creation: ' + response.data);

            });

          this.location.path('/');
        }

        deletePet(id:number):ng.IPromise<boolean>  {

            console.log('Delete Pet Id: ' + id);
            return this.localhttp.delete('http://localhost:8080/pet/deletePetById/' + id).then(function successCallback(response) {

                console.log(response);

                if (response.data) {
                    console.log('True true true');
                    return true;
                } else {
                    console.log('false false false');
                    return false;
                }
            });
        }

    }

    angular.module('PetStoreTs').service('PetDataService', PetDataService);

}