/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('TimepickerCtrl', function ($scope) {
    $scope.time = new Date();

    $scope.hstep = 1;
    $scope.mstep = 1;

    $scope.clear = function () {
        $scope.time = null;
    }

    $scope.ismeridian = !true;
});
