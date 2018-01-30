
$(document).ready(function(){
	var date_input=$('input[name="date"]'); //our date input has the name "date"
	var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
	var options={
	format: 'mm/dd/yyyy',
	container: container,
	todayHighlight: true,
	autoclose: true,
	};
	date_input.datepicker(options);
})

app.controller('myCtrl1', function($scope)
{
	/*$scope.busdetail = [];
	$scope.showBusDetails = function(){*/
		$scope.companies = [
                    { 'BUS_ID':'001',
                    'NAME':'Chennai',
                    	'FROM':'Parveen',
                    	'TO': 'Bangalore',
                    	'travelDate': '01/12/2017'},

                    	{ 'BUS_ID':'002',
                    	'NAME':'SRM',
                    	'FROM':'Chennai',
                    	'TO': 'Delhi',
                    	'travelDate': '01/12/2017'},

                    	{ 'BUS_ID':'003',
                    	'NAME':'KPN',
                    	'FROM':'Chennai',
                    	'TO': 'Chennai',
                    	'travelDate': '01/12/2017'},
                    	
                    ];
$scope.addRow = function(){		
	$scope.companies.push({'BUS_NAME':$scope.name,'FROM':$scope.from, 'TO': $scope.to, 'DATE':$scope.travelDate});
	/*$scope.BUS_ID='';*/
	$scope.name='';
	$scope.from='';
	$scope.to='';
	$scope.travelDate='';
};

});


