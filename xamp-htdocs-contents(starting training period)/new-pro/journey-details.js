angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']).controller('DatepickerPopupDemoCtrl', function ($scope) {

  $scope.today = function() {
    $scope.dt = new Date();
  };

   $scope.dateOptions = {
    /* dateDisabled: disabled, */
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

$scope.popup2 = {
    opened: false
  };

});