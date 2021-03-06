/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global application */

app.factory('MachineryService', ['$http', '$q', function ($http, $q) {
        return {
            fetchAllMachinery: function () {
                return $http.get('http://localhost:9090/BuddhaErp/api/machinery/list')
                        .then(
                                function (response) {
                                    console.log("SUCCESS MACHINERY RETRIVAL");
                                    return response.data;
                                },
                                function (errResponse) {
                                    console.log("FAILED TO RETRIEVE MACHINERY LIST" + errResponse.status);
                                    return $q.reject(errResponse);
                                }
                        );
            },
            addMachinery: function (m) {
                return $http.post('http://localhost:9090/BuddhaErp/api/machinery/add', m)
                        .then(
                                function (response) {
                                    console.log("SUCCESS ADDING MACHINERY");
                                },
                                function (errResponse) {
                                    console.log("FAILED TO ADD MACHINERY");
                                    return $q.reject(errResponse);
                                }
                        );
            },
            deleteMachinery: function (id) {
                return $http.delete('http://localhost:9090/BuddhaErp/api/machinery/delete/' + id)
                        .then(
                                function (response) {
                                    console.log("MACHINERY DELETION SUCCESS");
                                },
                                function (errResponse) {
                                    console.log("FAILED TO DELETE MACHINERY");
                                    return $q.reject(errResponse);
                                }
                        );
            },
            updateMachinery: function (machinery) {
                return $http.post('http://localhost:9090/BuddhaErp/api/machinery/update', machinery)
                        .then(
                                function (response) {
                                    console.log("MACHINERY UPDATE SUCCESS");
                                    return response.data;
                                },
                                function (errResponse) {
                                    console.log("FAILED TO UPDATE MACHINERY");
                                    return $q.reject(errResponse);
                                }
                        );
            }
        };
    }]);