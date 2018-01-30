angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('DatepickerPopupDemoCtrl', function ($scope,$http,$filter) {


    $scope.hide_search_tab=true;
    
 
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
  
        
     $scope.ButtonClick = function() {
      
     

       $scope.hide_search_tab=false;
        console.log($scope.day);
        $scope.formattedDate =   $filter('date')($scope.model.startDate, "dd");
         console.log($scope.formattedDate);
        $scope.page=$scope.From+'_'+$scope.To+'_'+$scope.formattedDate;
    
        console.log($scope.page);
        console.log('json/'+$scope.page+'.json');
            $scope.arrBirds = new Array;
            $http({method: 'GET',
                url: 'json/'+$scope.page+'.json',
                dataType: 'json',
                })
            .then(function success(jsonData){

                $scope.arrBirds = jsonData.data;
                    $scope.list = $scope.arrBirds;
                    console.log($scope.list);

                },function (error)
                {

                });
              
              } 

});


  