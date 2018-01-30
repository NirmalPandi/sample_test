var app = angular.module("myapp", ["ngRoute","ngSanitize", "ui.bootstrap"]);
app.config(function($routeProvider) {
    $routeProvider

    .when("/", {
        templateUrl : "../home/home.html"
    })
     .when("/login",
    {
        templateUrl : "../login/login.html"
    })
    .when("/journey",
    {
        templateUrl : "../journey-details/journey-details.html"
    })
    .when("/seat",
    {
        templateUrl : "../seat/seat.html"
    })
    .when("/confirmation",
    {
        templateUrl : "../confirmation/confirmation.html"
    })
    .when("/confirmationnew",
    {
        templateUrl : "../travelsummary/confirmation.html"
    })
    .when("/cancellation",
    {
        templateUrl : "../travelsummary/cancellation.html"
    })
    .when("/faq",
    {
        templateUrl : "../faq/faq.html"
    });
});
