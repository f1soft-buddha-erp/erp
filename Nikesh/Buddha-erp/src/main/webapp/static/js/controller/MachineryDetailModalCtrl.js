/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.controller('MachineryDetailModalCtrl', function ($scope, $uibModalInstance, machinery, farmersList, activeStatus, displayActiveStatus) {
    $scope.machinery = machinery;
    $scope.farmersList = farmersList;
    $scope.activeStatus = activeStatus;
    $scope.displayActiveStatus = displayActiveStatus;

    $scope.ok = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});