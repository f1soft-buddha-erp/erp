/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.factory('MenuListService', ['$http', '$q', function ($http, $q) {
        return {
            fetchAllMenus: function () {
                return $http.get('http://localhost:9090/Navigation-Understanding-Nikesh/api/menus')
                        .then(
                                function (response) {
                                    return response.data;
                                },
                                function (errResponse) {
                                    console.error('Error while fetching album');
                                    return $q.reject(errResponse);
                                }
                        );
            }
        };
    }]);
