<%-- 
    Document   : machinery_list
    Created on : Jun 5, 2016, 5:12:34 PM
    Author     : nikesh.maharjan
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Machinery: List</title>

        <link rel="stylesheet" href="<c:url value='/static/css/angular/bootstrap.min.css' />" />

        <script src="<c:url value='/static/js/angular/angular.js' />"></script>
        <script src="<c:url value='/static/js/angular/angular-route.js' />"></script>
        <script src="<c:url value='/static/js/angular/ui-bootstrap-tpls.min.js' />"></script>
        <script src="<c:url value='/static/js/angular/angular-animate.js' />"></script>

        <script src="<c:url value='/static/js/Application.js' />"></script>
        <script src="<c:url value='/static/js/service/MachineryService.js' />"></script>
        <script src="<c:url value='/static/js/controller/MachineryController.js' />"></script>
        <script src="<c:url value='/static/js/controller/UpdateModalCtrlInstance.js' />"></script>
        <style type="text/css">
            .error{color:red; font-style: italic;}
        </style>
    </head>
    <body ng-app="application" ng-controller="MachineryController">
        {{machineryReturn}}
        <h1>List of machinery</h1>

        <!--<pre>{{machineryData| json}}</pre>-->

        <div class="col-md-6">
            <table class="table table-striped" style="width: 100%">
                <tr>
                    <th ng-repeat="header in tableHeaders">{{header}}</th>
                </tr>
                <tr ng-repeat="data in machineryListData.data">
                    <td>{{data.id}}</td>
                    <td>{{data.machineName}}</td>
                    <td>{{data.machineType}}</td>
                    <td>{{data.acquiredDate| date}}</td>
                    <td>
                        <a uib-tooltip="Details" style="cursor: pointer;margin: 0 2px;"><span class="glyphicon glyphicon-eye-open" style="color:black;"></span></a>
                        <a uib-tooltip="Delete" ng-click="deleteMachinery(data.id)" style="cursor: pointer;margin: 0 2px;"><span style="color:black;" class="glyphicon glyphicon-trash"></span></a>
                        <a uib-tooltip="Edit" ng-click="openUpdateModal(data)" style="cursor: pointer;margin: 0 2px;"><span class="glyphicon glyphicon-pencil" style="color:black;"></span></a>
                    </td>
                </tr>
            </table>
        </div>

        <a href="#" ng-click="$event.preventDefault();showMachineryAddStatus()">Add Machinery</a>

        <div class="col-md-5" ng-show="machineryAddStatus" style="margin: 5px">
            <form ng-submit="addMachinery()" name="addMachineryForm">
                <h2>Add Machinery</h2>
                <table class="table">
                    <tr>
                        <td><label for="machineryName">Machine Name</label></td>
                        <td>
                            <input type="text" name="name" ng-required="true" class="form-control" ng-model="machineryData.machineName" />
                        </td>
                        <td>
                            <span class="error" ng-show="addMachineryForm.name.$error.required && addMachineryForm.name.$touched">Required.</span>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="machineType">Machine Type</label></td>
                        <td><input type="text" required class="form-control" ng-model="machineryData.machineType" /></td>
                    </tr>
                    <tr>
                        <td><label for="acquiredDate">Acquired Date</label></td>
                        <td>
                            <p class="input-group">
                                <input type="text" required class="form-control" is-open="acquiredDateOpened" ng-required="true"
                                       ng-model="machineryData.acquiredDate" uib-datepicker-popup="{{dateformat}}" />
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-default" ng-click="acquiredDateOpened = !acquiredDateOpened"><i class="glyphicon glyphicon-calendar"></i></button>
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="maintenanceDate">Maintenance Date</label></td>
                        <td>
                            <p class="input-group">
                                <input type="text" required class="form-control" is-open="maintenanceDateOpened" ng-required="true"
                                       ng-model="machineryData.maintenanceDate" uib-datepicker-popup="{{dateFormat}}" />
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-default" ng-click="maintenanceDateOpened = !maintenanceDateOpened"><i class="glyphicon glyphicon-calendar"></i></button>
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="lastMaintenanceDate">Last Maintenance Date</label></td>
                        <td>
                            <p class="input-group">
                                <input type="text" required class="form-control" is-open="lastMaintenanceDateOpened" ng-required="false"
                                       ng-model="machineryData.lastMaintenanceDate" ng-value="0" uib-datepicker-popup="{{dateFormat}}" />
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-default" ng-click="lastMaintenanceDateOpened = !lastMaintenanceDateOpened"><i class="glyphicon glyphicon-calendar"></i></button>
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="maintenanceCycle">Maintenance Cycle per year</label></td>
                        <td>
                            <input type="number" class="form-control" ng-model="machineryData.maintenanceCyclePerYear" min="1" required />
                        </td>
                    </tr>
                    <tr>
                        <td><label for="active">Active</label></td>
                        <td>
                            <!--<select class="form-control" ng-model="machineryData.active" required="required"> <!--ng-options="a for a in activeStatus"
                                <option ng-repeat="status in activeStatus" ng-value="status">{{displayActiveStatus(status)}}</option>
                            </select>-->
                            <label ng-repeat="status in activeStatus">
                                <input type="radio" required name="activeStatus" ng-value="status" ng-model="machineryData.active" />
                                {{displayActiveStatus(status)}}
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="assignedTo">Assigned To</label></td>
                        <td>
                            <select class="form-control" ng-model="machineryData.assignedTo">
                                <option ng-repeat="farmer in farmersList" ng-value="{{farmer.id}}">{{farmer.name}}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="acquisitionCost">Acquisition Cost</label></td>
                        <td><input type="number" ng-model="machineryData.acquisitionCost" min="1" required class="form-control" /></td>
                    </tr>
                    <tr>
                        <td><label for="registrationNo">Registration No.</label></td>
                        <td><input type="text" ng-model="machineryData.registrationNo" required class="form-control" /></td>
                    </tr>
                    <tr>
                        <td><label for="companyName">Company Name</label></td>
                        <td><input type="text" ng-model="machineryData.machineCompanyName" required class="form-control" /></td>
                    </tr>
                    <tr>
                        <td><label for="depreciationRate">Depreciation Rate</label></td>
                        <td><input type="number" ng-model="machineryData.depreciationRate" min="1" required class="form-control" /></td>
                    </tr>
                    <tr>
                        <td><label for="currentValue">Current Value</label></td>
                        <td><input type="number" ng-model="machineryData.currentValue" min="1" required class="form-control" /></td>
                    </tr>
                    <tr>
                        <td><input type="submit" class="btn btn-success" value="Add" /></td>
                    </tr>
                </table>
            </form>
        </div>
    </body>
</html>
