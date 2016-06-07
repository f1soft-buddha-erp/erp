/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('CreateProfileController', ['MenuListService', function ($scope, MenuListService) {
        $scope.menuList = [];

        $scope.fetchMenuList = function () {
            MenuListService.fetchMenuList()
                    .then(
                            function (d) {
                                $scope.menuList = d;
                            },
                            function (errResponse) {
                                console.error('Error while fetching');
                            }
                    );
        };
    }]);
