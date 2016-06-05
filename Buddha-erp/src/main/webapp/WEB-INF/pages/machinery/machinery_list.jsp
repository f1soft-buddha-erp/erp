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
    </head>
    <body ng-app="application" ng-controller="MachineryController">
        <h1>List of machinery</h1>

        <div>
            <div ui-grid="machineryListData" style="height: 500px;"></div> <!-- width and height for this div element is important here -->
        </div>
    </body>
</html>
