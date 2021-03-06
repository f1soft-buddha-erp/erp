/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global app */

app.controller('MachineryController', ['$scope', 'MachineryService', '$uibModal', 'DataShareService',
    function ($scope, MachineryService, $uibModal, DataShareService) {

        $scope.machineryAddStatus = false;

        $scope.showMachineryAddStatus = function () {
            $scope.machineryAddStatus = true;
        };

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

        $scope.fetchAllMachinery = function () {
            MachineryService.fetchAllMachinery()
                    .then(
                            function (responseData) {
                                $scope.machineryListData.data = [];
                                $scope.machineryListData.data = responseData;
                            },
                            function (responseError) {
                                console.error("Error while fetching (MachineryController.js)");
                            }
                    );
        };

        $scope.deleteMachinery = function (id) {
            var confirmation = confirm("Are you sure?");
            if (!confirmation) {
                return;
            }
            MachineryService.deleteMachinery(id)
                    .then(
                            $scope.fetchAllMachinery(),
                            function (responseError) {
                                console.error("Error while deleting (MachineryController.js)");
                            }
                    );
            $scope.fetchAllMachinery();
        };

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
            $scope.fetchAllMachinery();
        };

        $scope.updateMachinery = function () {
            MachineryService.updateMachinery($scope.updatedMachinery)
                    .then(
                            $scope.fetchAllMachinery(),
                            function (responseError) {
                                console.error("Error while adding (MachineryController.js)");
                            }
                    );
            $scope.fetchAllMachinery();
        };

        /** Open update machinery modal **/
        $scope.openUpdateModal = function (data) {
            var modalInstance = $uibModal.open({
                templateUrl: '/BuddhaErp/static/modaltemplate/updateMachinery.html',
                controller: 'UpdateModalCtrlInstance',
                resolve: {
                    machinery: function () {
                        return data;
                    },
                    farmersList: function () {
                        return $scope.farmersList;
                    },
                    activeStatus: function () {
                        return $scope.activeStatus;
                    },
                    displayActiveStatus: function () {
                        return $scope.displayActiveStatus;
                    },
                    dateFormat: function () {
                        return $scope.dateformat;
                    }
                }
            });

            modalInstance.result.then(function (machinery) {
                $scope.updatedMachinery = machinery;
                $scope.updateMachinery();
            }, function () {
                $scope.fetchAllMachinery();
                console.info('Modal dismissed at: ' + new Date());
            });
        };
        
        /** Open machinery detail modal **/
        $scope.openDetailModal = function (data) {
            var modalInstance = $uibModal.open({
                templateUrl: '/BuddhaErp/static/modaltemplate/machineryDetail.html',
                controller: 'MachineryDetailModalCtrl',
                resolve: {
                    machinery: function () {
                        return data;
                    },
                    farmersList: function () {
                        return $scope.farmersList;
                    },
                    activeStatus: function () {
                        return $scope.activeStatus;
                    },
                    displayActiveStatus: function () {
                        return $scope.displayActiveStatus;
                    }
                }
            });

            modalInstance.result.then(function () {
                // do nothing
            }, function () {
                console.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.setData = function (data) {
            DataShareService.set(data);
            $scope.sharedData = DataShareService.get();
        }
    }
]);