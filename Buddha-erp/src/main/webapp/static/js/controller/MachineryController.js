/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global app */

app.controller('MachineryController', ['$scope', 'MachineryService', '$uibModal', function ($scope, MachineryService, $uibModal) {

        $scope.machineryAddStatus = false;

        $scope.showMachineryAddStatus = function () {
            $scope.machineryAddStatus = true;
        }

        $scope.acquiredDateOpened = false;
        $scope.maintenanceDateOpened = false;
        $scope.lastMaintenanceDateOpened = false;
        $scope.activeStatus = ["Y", "N", "U"];
        $scope.farmersList = [
            {
                id: '1234',
                name: 'Name One'
            },
            {
                id: '4321',
                name: 'Name Two'
            },
            {
                id: '4765',
                name: 'Name Three'
            }
        ];

        $scope.dateformat = "yyyy-MM-dd";

        $scope.tableHeaders = ["ID", "Name", "Type", "AcquiredDate", "Actions"];

        $scope.openUpdateModal = function (id) {
            var selectedMachinery = MachineryService.fetchMachineryById(id);
            var modalInstance = $uibModal.open({
                templateUrl: 'updateModalTemplate.html',
                controller: 'UpdateModalController',
                resolve: {
                    machinery: function () {
                        return selectedMachinery;
                    }
                }
            });
        };

        $scope.fetchAllMachinery = function () {
            MachineryService.fetchAllMachinery()
                    .then(
                            function (responseData) {
                                $scope.machineryListData.data = [];
                                $scope.machineryListData.data = responseData;
                            },
                            function (responseError) {
                                console.error("Error while fetching (MachineryController.js)")
                            }
                    );
        };

        $scope.deleteMachinery = function (id) {
            MachineryService.deleteMachinery(id)
                    .then(
                            $scope.fetchAllMachinery(),
                            function (responseError) {
                                console.error("Error while deleting (MachineryController.js)");
                            }
                    );
        }

        $scope.fetchAllMachinery();

        $scope.displayActiveStatus = function (status) {
            if (status === 'Y') {
                return "Yes";
            } else if (status === 'N') {
                return "No";
            } else {
                return "Under Maintenance";
            }
        };

        $scope.machineryData = {
            id: '',
            machineName: '',
            machineType: '',
            acquiredDate: '',
            maintenanceDate: '',
            lastMaintenanceDate: '',
            maintenanceCyclePerYear: '',
            active: '',
            assignedTo: '',
            acquisitionCost: '',
            registrationNo: '',
            machineCompanyName: '',
            depreciationRate: '',
            currentValue: ''
        };

        $scope.clicked = function (id) {
            alert("Clicked " + id);
        };

        $scope.machineryListData = {
            enableSorting: true,
            columnDefs: [
                {name: "ID", field: "id", enableSorting: false},
                {name: "Name", field: "machineName"},
                {name: "Type", field: "machineType"},
                {name: "Acquired Date", field: "acquiredDate"},
                {name: "Maintenance Date", field: "maintenanceDate"},
                {name: "Last Maintenance Date", field: "lastMaintenanceDate"}
            ]
        };

        $scope.addMachinery = function () {
            MachineryService.addMachinery($scope.machineryData)
                    .then(
                            $scope.fetchAllMachinery(),
                            function (responseError) {
                                console.error("Error while adding (MachineryController.js)");
                            }
                    );
        };
    }
]);