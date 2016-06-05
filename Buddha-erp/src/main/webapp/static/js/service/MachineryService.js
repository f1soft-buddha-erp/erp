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
                                    console.log("FAILED TO RETRIEVE MACHINERY LIST");
                                    return $q.reject(errResponse);
                                }
                        );
            }
        };
    }]);