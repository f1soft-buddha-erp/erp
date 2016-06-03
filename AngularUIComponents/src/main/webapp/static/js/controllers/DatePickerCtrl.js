/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.controller('DatePickerCtrl', function ($scope) {
    $scope.myDate = new Date();

    $scope.dateOptions = {
        formatYear: 'yyyy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    $scope.format = "yyyy-MM-dd";

    $scope.opened = false;

    $scope.open = function () {
        $scope.opened = true;
    };
});