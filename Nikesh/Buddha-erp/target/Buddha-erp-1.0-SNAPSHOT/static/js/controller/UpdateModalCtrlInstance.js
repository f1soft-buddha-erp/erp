/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.controller('UpdateModalCtrlInstance', function ($scope, $uibModalInstance, machinery, farmersList, activeStatus, displayActiveStatus, dateFormat) {
    $scope.machinery = machinery;
    $scope.farmersList = farmersList;
    $scope.activeStatus = activeStatus;
    $scope.displayActiveStatus = displayActiveStatus;
    $scope.dateFormat = dateFormat;

    /*$scope.acquiredDateOpened = false;
     $scope.maintenanceDateOpened = false;
     $scope.lastMaintenanceDateOpened = false;*/
    $scope.ok = function () {
        $uibModalInstance.close($scope.machinery);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});