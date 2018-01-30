var myApp = angular.module('myApp1').controller('MyCtrl2', ['$rootScope','$scope',
  function($rootScope,$scope) {

    $rootScope.$on("downwards",function(event,data){
      $scope.message=data;
    });
  
  }
]);

