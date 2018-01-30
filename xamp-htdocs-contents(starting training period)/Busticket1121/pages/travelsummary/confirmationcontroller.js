var apps=angular.module("myapp").controller("confirmationctrl",function($scope){
		    $scope.onwarddetails=[{"seats":"2","operator":"EVACAY","passenger":"Arjun","floc":"Chennai","tloc":"Bangalore","type":"AC","seatno":"21,22","dtime":"23:40","journey":"11/20/2017"}];
		    $scope.returns=[{"operator":"EVACAY","passenger":"Arjun","floc":"Bangalore","tloc":"Chennai","type":"AC","seatno":"6,7","dtime":"22:10","journey":"15/20/2017"}];
    });