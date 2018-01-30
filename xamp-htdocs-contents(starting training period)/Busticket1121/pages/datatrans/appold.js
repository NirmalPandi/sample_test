var myApp = angular.module('myApp1').controller('MyCtrl1',function($rootScope,$scope) {
     


    $scope.a=[10,20,30,40,50];
   
    $rootScope.$broadcast("downwards",$scope.a);

});

