
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
	$scope.busdetail = [];
	$scope.showBusDetails = function(){
		$scope.busdetails = [

			{BUS_ID:001,BUS_NAME:'KPN',FROM:'CHENNAI',TO:'ERODE'},
			{BUS_ID:002,BUS_NAME:'SRM',FROM:'SALEM',TO:'ARCOT'},
			{BUS_ID:003,BUS_NAME:'TAT',FROM:'CHENNAI',TO:'COIMBATORE'}
		];
		
	};
	

});




