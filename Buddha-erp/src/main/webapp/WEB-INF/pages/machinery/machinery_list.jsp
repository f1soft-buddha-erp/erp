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

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />

        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-route.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.3.3/ui-bootstrap-tpls.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.js"></script>

        <script src="http://ui-grid.info/release/ui-grid.js"></script>
        <link rel="stylesheet" href="http://ui-grid.info/release/ui-grid.css" type="text/css">

        <script src="<c:url value='/static/js/Application.js' />"></script>
        <script src="<c:url value='/static/js/service/MachineryService.js' />"></script>
        <script src="<c:url value='/static/js/controller/MachineryController.js' />"></script>
        <style>
            input,select,span {
                margin: 5px 0;
            }
        </style>
    </head>
    <body ng-app="application" ng-controller="MachineryController">
        <h1>List of machinery</h1>

        <pre>{{machineryData| json}}</pre>

        <button type="button" ng-click="showMachineryAddStatus()">Add Machinery</button>
        <div class="col-md-8">
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
                        <a ng-click="deleteMachinery(data.id)" style="cursor: pointer"><span class="glyphicon glyphicon-remove"></span></a>
                        <a  style="cursor: pointer"><span class="glyphicon glyphicon-edit"></span></a>
                    </td>
                </tr>
            </table>
        </div>

        <div class="col-md-3" ng-show="machineryAddStatus" style="margin: 5px">
            <form ng-submit="addMachinery()">
                <table>
                    <tr>
                        <td>Machine Name</td>
                        <td><input type="text" required class="form-control" ng-model="machineryData.machineName" /></td>
                    </tr>
                    <tr>
                        <td>Machine Type</td>
                        <td><input type="text" required class="form-control" ng-model="machineryData.machineType" /></td>
                    </tr>
                    <tr>
                        <td>Acquired Date</td>
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
                        <td>Maintenance Date</td>
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
                        <td>Last Maintenance Date</td>
                        <td>
                            <p class="input-group">
                                <input type="text" required class="form-control" is-open="lastMaintenanceDateOpened"
                                       ng-model="machineryData.lastMaintenanceDate" ng-value="" uib-datepicker-popup="{{dateFormat}}" />
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-default" ng-click="lastMaintenanceDateOpened = !lastMaintenanceDateOpened"><i class="glyphicon glyphicon-calendar"></i></button>
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Maintenance Cycle per year</td>
                        <td>
                            <input type="number" class="form-control" ng-model="machineryData.maintenanceCyclePerYear" required />
                        </td>
                    </tr>
                    <tr>
                        <td>Active</td>
                        <td>
                            <!--<select class="form-control" ng-model="machineryData.active" required="required"> <!--ng-options="a for a in activeStatus"
                                <option ng-repeat="status in activeStatus" ng-value="status">{{displayActiveStatus(status)}}</option>
                            </select>-->
                            <label ng-repeat="status in activeStatus">
                                <input type="radio" name="activeStatus" ng-value="status" ng-model="machineryData.active" />
                                {{displayActiveStatus(status)}}
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Assigned To</td>
                        <td>
                            <select class="form-control" ng-model="machineryData.assignedTo">
                                <option ng-repeat="farmer in farmersList" ng-value="{{farmer.id}}">{{farmer.name}}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Acquisition Cost</td>
                        <td><input type="number" ng-model="machineryData.acquisitionCost" required class="form-control" /></td>
                    </tr>
                    <tr>
                        <td>Registration No.</td>
                        <td><input type="text" ng-model="machineryData.registrationNo" required class="form-control" /></td>
                    </tr>
                    <tr>
                        <td>Company Name</td>
                        <td><input type="text" ng-model="machineryData.machineCompanyName" required class="form-control" /></td>
                    </tr>
                    <tr>
                        <td>Depreciation Rate</td>
                        <td><input type="number" ng-model="machineryData.depreciationRate" required class="form-control" /></td>
                    </tr>
                    <tr>
                        <td>Current Value</td>
                        <td><input type="number" ng-model="machineryData.currentValue" required class="form-control" /></td>
                    </tr>
                    <tr>
                        <td><input type="submit" class="btn btn-success" value="Add" /></td>
                    </tr>
                </table>
            </form>
        </div>
    </body>
</html>
