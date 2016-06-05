/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global app */

app.controller('MachineryController', ['$scope', 'MachineryService', function ($scope, MachineryService) {

        $scope.machineryListData = {
            enableSorting: true,
            columnDefs: [
                {name: "ID", field: "id", enableSorting: false},
                {name: "Name", field: "machineName"},
                {name: "Type", field: "machineType"},
                {name: "Acquired Date", field: "acquiredDate"},
                {name: "Maintenance Date", field: "maintenanceDate"},
                {name: "Last Maintenance Date", field: "lastMaintenanceDate"},
            ]
        };

        MachineryService.fetchAllMachinery()
                .then(
                        function (responseData) {
                            $scope.machineryListData.data = responseData;
                        },
                        function (responseError) {
                            console.error("Error while fetching (MachineryController.js)")
                        }
                );

    }
]);