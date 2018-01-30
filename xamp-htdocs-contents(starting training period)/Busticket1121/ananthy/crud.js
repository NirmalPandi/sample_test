
 var app = angular.module('MyApp', ['mp.datePicker']);
 
    app.controller("Adminbus", function ($scope) {
		    $scope.btype=["AC","SEMISLEEPER","VOLVO"];
			$scope.names = ["SRM", "EVACAY", "RATHIMEENA","PARVEEN","VPNS"];
		    $scope.floc = ["Chennai", "Bangalore", "Trichy","Vellore","Nagapattinam","coimbatore","Erode","Hosur","Madurai","Pondicherry"];
		    $scope.tloc = ["Chennai", "Bangalore", "Trichy","Vellore","Nagapattinam","coimbatore","Erode","Hosur","Madurai","Pondicherry"];
        $scope.buss = [{"id":"1001","operator":"SRM","floc":"Chennai","tloc":"Bangalore","type":"AC","dtime":"23:40","atime":"06:00","cdate":"11/17/2017","odate":"11/24/2017"},{"id":"3001","operator":"SRM","floc":"Bangalore","tloc":"vellore","type":"VOLVO","dtime":"21:40","atime":"05:00","cdate":"11/21/2017","odate":"11/24/2017"}];
        $scope.addbus = function (bus) {
            $scope.buss.push(bus);
            $scope.bus = {};
        },
        $scope.removebus = function (index) {
            console.log(index);
            $scope.buss.splice(index, 1)
        },
        $scope.editbus = function (index) {
            $scope.editing = $scope.buss.indexOf(index);
        }
 
    });

    app.controller('TabController', function () {
        this.tab = 1;

        this.setTab = function (tabId) {
            this.tab = tabId;
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
        };
    });