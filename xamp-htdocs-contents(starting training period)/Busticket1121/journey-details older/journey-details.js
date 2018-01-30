
angular.module('myapp').controller('DatepickerPopupDemoCtrl', function ($scope) {
 
    $scope.today = new Date(); 
 
 
	 $scope.selectChange = function(){
    $scope.To="--select--";
	$scope.disableInputs0=true;
	 $scope.disableInputs1=false;
      $scope.disableInputs2=false;
       $scope.disableInputs3=false;
        $scope.disableInputs4=false;
     
  switch($scope.From){
    case '001' : 
      $scope.disableInputs1 =true;
      break;
    case '002' : 
      $scope.disableInputs2 = true;
      break;
    case '003' : 
      $scope.disableInputs3 = true;
      break;
    case '004' : 
      $scope.disableInputs4 = true;
      break;
    default :
      console.log("no value");
  }
} 
});


 
