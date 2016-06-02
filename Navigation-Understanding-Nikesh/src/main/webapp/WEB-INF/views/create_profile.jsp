<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>Create Profile</title>
        <link rel="stylesheet"
              href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
        <script
        src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
        <script
        src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.3.3/ui-bootstrap.min.js"></script>
        
        <script src="<c:url value='/static/js/application.js' />"></script>
        <script>
            angular.module("app", []).
                    controller("ctrl", function ($scope) {
                        $scope.menuList = "Test value";
                    });
        </script>

    </head>
    <body >
        <!-- ng-app="app" ng-controller="CreateProfileController" -->
        <div ng-app="app" ng-controller="ctrl">
            {{ menuList}}
        </div>

    </body>
</html>