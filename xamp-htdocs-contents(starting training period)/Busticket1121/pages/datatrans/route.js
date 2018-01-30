var app = angular.module("myApp1", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "parent.html"
    })
    .when("/child",
    {
        templateUrl : "child.html"
    });
});
