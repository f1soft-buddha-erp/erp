<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
    <head>
        <title>Spring Angular JS Example</title>
    </head>
    <!-- Declaring angular js -->

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ng-table/1.0.0-beta.9/ng-table.css">

    <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-route.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.3.3/ui-bootstrap-tpls.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ng-table/1.0.0-beta.9/ng-table.js"></script>
    <body ng-app="myApp">
        <div ng-controller="UserController as ctrl">
            <uib-alert ng-repeat="alert in ctrl.alerts" type="{{alert.type}}" close="closeAlert($index)">{{alert.msg}}</uib-alert>
            <h1>User Registration Form</h1>
            <form ng-submit="ctrl.submit()" name="myForm">
                <table>
                    <tr>
                        <td>
                            First Name: 
                        </td>
                        <td>
                            <input type="text" ng-model="ctrl.user.firstName"
                                   id="firstName" placeholder="Enter your first name" required="required" />
                        </td>
                        <td>
                            <span ng-show="myForm.firstName.$error.required">This is a
                                required field.</span> <span ng-show="myForm.firstName.$invalid">This
                                field is invalid.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Name: 
                        </td>
                        <td>
                            <input type="text" ng-model="ctrl.user.lastName"
                                   id="lastName" placeholder="Enter your last name" required="required" />
                        </td>
                        <td>
                            <span ng-show="lastName">This is a required field.</span> <span
                                ng-show="myForm.lastName.$invalid">This field is invalid.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Mobile Number:
                        </td>
                        <td>
                            <input type="text" ng-model="ctrl.user.mobileNumber"
                                   id="mobileNumber" placeholder="Enter your mobile Number" required="required" minlength="10" maxlength="10" />
                        </td>
                        <td>
                            <span ng-show="myForm.mobileNumber.$error.required">
                                This is a required field.
                            </span> 
                            <span ng-show="myForm.mobileNumber.$invalid">
                                This field is invalid.
                            </span>
                            <span ng-show="myForm.mobileNumber.$minLength"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Gender:
                        </td>
                        <td ng-repeat="m in ctrl.mapValues" >
                            <input name="{{m.radioLabel}}" type="radio" ng-model="ctrl.user.gender" value="{{m.radioValue}}" >
                            <span ng-bind="m.radioLabel"></span> 
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email Address:
                        </td>
                        <td> <input type="text" ng-model="ctrl.user.emailAddress"
                                    id="emailAddress" placeholder="Enter your email Address" required="required" />
                        </td>
                        <td>
                            <span ng-show="myForm.emailAddresse.$error.required">This is
                                a required field.</span> <span ng-show="myForm.emailAddress.$invalid">This
                                field is invalid.</span>
                        </td>
                    </tr>
                    <tr ng-controller="DatePickerController">
                        <td  >
                            Date of Birth:
                        </td>
                        <td> 
                            <input type="text" ng-model="ctrl.user.dob" is-open ="popup1.opened" 
                                   datepicker-options="dateOptions" close-text ="Close" uib-datepicker-popup />
                            <span>
                                <button type="button" ng-click="openDatePopUp()"><i class="glyphicon glyphicon-calendar"></i></button>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            User Name:
                        </td>
                        <td>
                            <input type="text" ng-model="ctrl.user.userName"
                                   id="userName" placeholder="Enter your user name" required="required" />
                        </td>
                        <td>
                            <span ng-show="myForm.userName.$error.required">This is a
                                required field.</span> <span ng-show="myForm.userName.$invalid">This
                                field is invalid.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Password:
                        </td>
                        <td> 
                            <input type="password" ng-model="ctrl.user.password"
                                   id="password" placeholder="Enter your password" required="required" />
                        </td>
                        <td>
                            <span ng-show="myForm.password.$error.required">This is a
                                required field.</span> <span ng-show="myForm.password.$invalid">This
                                field is invalid.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Select Option:
                        </td>
                        <td>
                            <select name="selectExample" id="selectExample">
                                <option ng-repeat="select in ctrl.users" value="select.firstName">{{select.firstName}}</option>
                            </select>
                        </td>
                    </tr>

                </table>
                <div>
                    <input type="submit" value="{{!ctrl.user.id ? 'Add':'Update'}}"
                           ng-disabled="myForm.$invalid" />
                    <button type="button" ng-click="ctrl.reset()"
                            >Reset Form</button>
                </div>
            </form>

            <!--        <ul ng-repeat="ctrl.user">
                        <li>{{u.firstName}}</li>
                    </ul>-->
            <!--            <div>
                            <table ng-table="ctrl.users" show-filter="true" border ="1" >
            
                                <tr ng-repeat="u in $user">
                                    <td title="ID" >{{u.id}}</td>
                                    <td title="FirstName" >{{u.firstName}}</td>
                                    <td title="LastName" >{{u.lastName}}</td>
                                    <td title="Gender">{{u.gender}}</td>
                                    <td title="MobileNumber" >{{u.mobileNumber}}</td>
                                    <td title="EmailAddress"  >{{u.emailAddress}}</td>
                                    <td title="Username"  >{{u.userName}}</td>
                                    <td title="DOB" >{{u.id}}</td>
                                    <td title="Actions" >
                                        <button type="button" ng-click="ctrl.edit(u.id)">Edit</button> 
                                        <button type="button" ng-click="ctrl.deleteUser(u.id)">Delete</button> 
                                    </td>
                                </tr>
                            </table>
                        </div>-->
            <div>
                <table border ="1" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Mobile Number</th>
                            <th>Email Address</th>
                            <th>User Name</th>
                            <th>DOB</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="u in ctrl.users">
                            <td>{{$index +1}}</td>
                            <td><span ng-bind="u.firstName" /></td>
                            <td><span ng-bind="u.lastName" /></td>
                            <td><span ng-bind="u.gender" /></td>
                            <td><span ng-bind="u.mobileNumber" /></td>
                            <td><span ng-bind="u.emailAddress" /></td>
                            <td><span ng-bind="u.userName" /></td>
                            <td><span ng-bind="u.dob" /></td>
                            <td>
                                <button type="button" ng-click="ctrl.edit(u.id)">Edit</button> 
                                <button type="button" ng-click="ctrl.deleteUser(u.id)">Delete</button> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <script src="<c:url value='/static/js/app.js' />"></script>
        <script src="<c:url value='/static/js/service/user_service.js' />"></script>
        <script src="<c:url value='/static/js/service/modal_service.js' />"></script>
        <script src="<c:url value='/static/js/controller/user_controller.js' />"></script>
        <script src="<c:url value='/static/js/controller/date_controller.js' />"></script>

    </body>

</html>