<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title>Spring Angular JS Example</title>
</head>
<!-- Declaring angular js -->
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js">
	
</script>

<body ng-app="MyApp">
	<div ng-controller="UserController as ctrl">
		<h1>User Registration Form</h1>
		<form ng-submit="ctrl.submit" name="myForm">
			<div>
				First Name: <input type="text" ng-model="ctrl.user.firstName"
					id="firstName" placeholder="Enter your first name" />
			</div>
			<div>
				<span ng-show="myForm.firstName.$error.required">This is a
					required field.</span> <span ng-show="myForm.firstName.$invalid">This
					field is invalid.</span>
			</div>
			<div>
				Last Name: <input type="text" ng-model="ctrl.user.lastName"
					id="lastName" placeholder="Enter your last name" />
			</div>
			<div>
				<span ng-show="lastName">This is a required field.</span> <span
					ng-show="myForm.lastName.$invalid">This field is invalid.</span>
			</div>
			<div>
				Mobile Number: <input type="text" ng-model="ctrl.user.mobileNumber"
					id="mobileNumber" placeholder="Enter your mobile Number" />
			</div>
			<div>
				<span ng-show="myForm.mobileNumber.$error.required">This is a
					required field.</span> <span ng-show="myForm.mobileNumber.$invalid">This
					field is invalid.</span>
			</div>
			<div>
				Email Address: <input type="text" ng-model="ctrl.user.emailAddress"
					id="emailAddress" placeholder="Enter your email Address" />
			</div>
			<div>
				<span ng-show="myForm.emailAddresse.$error.required">This is
					a required field.</span> <span ng-show="myForm.emailAddress.$invalid">This
					field is invalid.</span>
			</div>
			<div>
				Password: <input type="text" ng-model="ctrl.user.password"
					id="password" placeholder="Enter your password" />
			</div>
			<div>
				<span ng-show="myForm.password.$error.required">This is a
					required field.</span> <span ng-show="myForm.password.$invalid">This
					field is invalid.</span>
			</div>
			<div>
				<input type="submit" value="{{!ctrl.user.id ? 'Add':'Update'}}"
					ng-disabled="myForm.$invalid" />
				<button type="button" ng-click="ctrl.reset()"
					ng-disabled="myForm.$pristine">Reset Form</button>
			</div>
		</form>
	</div>

	<div>
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Mobile Number</th>
					<th>Email Address</th>
					<th>User Name</th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat="u in ctrl.users">
					<td><span ng-bind="u.id" /></td>
					<td><span ng-bind="u.firstName" /></td>
					<td><span ng-bind="u.lastName" /></td>
					<td><span ng-bind="u.mobileNumber" /></td>
					<td><span ng-bind="u.emailAddress" /></td>
					<td><span ng-bind="u.userName" /></td>
				</tr>
			</tbody>
		</table>
	</div>

	<script src="<c:url value='/static/js/app.js' />"></script>
	<script src="<c:url value='/static/js/service/user_service.js' />"></script>
	<script src="<c:url value='/static/js/controller/user_controller.js' />"></script>

</body>

</html>