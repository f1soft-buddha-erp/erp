/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var gridApp = angular.module('gridApp', ['ngAnimate', 'ui.grid']);
gridApp.controller('GridController', function ($scope) {
    $scope.hideGrid = true;
    $scope.gridData = {
        enableSorting: true,
        columnDefs: [
            {name: "Firstname", field: "firstName", enableSorting: false},
            {name: "Lastname", field: "lastName"}
        ],
        data: [
            {
                firstName: "Nikesh",
                lastName: "Maharjan"
            },
            {
                firstName: "Sunil",
                lastName: "Thapa"
            },
            {
                firstName: "Suresh",
                lastName: "Karki"
            },
            {
                firstName: "Nikesh",
                lastName: "Maharjan"
            },
            {
                firstName: "Sunil",
                lastName: "Thapa"
            },
            {
                firstName: "Nikesh",
                lastName: "Maharjan"
            },
            {
                firstName: "Sunil",
                lastName: "Thapa"
            }
        ]
    };
});
