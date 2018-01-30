


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

app.controller('myCtrl', function($scope)
{
	$scope.busdetails = [];
	$scope.showBusDetails = function(){
		$scope.busdetails = [
			{BUS_ID:01,BUS_NAME:'TAT',FROM:'Jani',TO:'Norway'},
			{BUS_ID:02,BUS_NAME:'KPN',FROM:'Hege',TO:'Sweden'},
			{BUS_ID:03,BUS_NAME:'SRM',FROM:'Kai',TO:'Denmark'}
		];
		
	};
	

});




