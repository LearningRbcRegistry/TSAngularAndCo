module PetStoreTs {

    export interface ICategories {
        id:number;
        make: string;
        localUrl: string;
    }

    export class DataService {

        categoryId: '0';

        static $inject = ['$http'];
        constructor(private localhttp: ng.IHttpService) {}

        getCategories(): ng.IPromise<ICategories[]> {

            return this.localhttp.get('http://localhost:8080/category/findAllCategories').then(response => {
                return response.data;
            });

        }

    }

    angular.module('PetStoreTs').service('DataService', DataService);

}