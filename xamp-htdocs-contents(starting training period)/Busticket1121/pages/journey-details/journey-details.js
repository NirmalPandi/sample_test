var apps=angular.module('myapp').controller('journeyctrl', function ($scope,$http,$filter) {


    $scope.hide_search_tab=true;
    
 
    $scope.today = new Date(); 
$scope.sortType     = 'busid'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchall   = ''; 
    $scope.model = {
      selectedStyle: "",
      selectedLevel: "",
      filterObject: { Name : "",Type : ""},
      recordDetails: undefined,
      options: {
        busoperator: ["", "KPN-Travels", "SRS-Travels","SRM-Travels","TAT-Travels"],
        bustypes: ["", "AC", "Berth", "semi"]
      }
    }
	 $scope.selectChange = function(){

  $scope.To="--select--";
	$scope.disableInputs0=true;
	$scope.disableInputs1=false;
  $scope.disableInputs2=false;
  $scope.disableInputs3=false;
  $scope.disableInputs4=false;
  $scope.disableInputs5=false;

  switch($scope.From){
    case '11' : 
      $scope.disableInputs1 =true;
      break;
    case '12' : 
      $scope.disableInputs2 = true;
      break;
    case '13' : 
      $scope.disableInputs3 = true;
      break;
    case '14' : 
      $scope.disableInputs4 = true;
      break;
      case '15' : 
      $scope.disableInputs5 = true;
      break;
    default :
      console.log("no value");

  }
}
  



        
     $scope.ButtonClick = function() {


if($scope.model.startDate)
{

       $scope.hide_search_tab=false;
        console.log('hello');
        $scope.formattedDate =   $filter('date')($scope.model.startDate, "dd");
        $scope.page=$scope.From+'_'+$scope.To+'_'+$scope.formattedDate;
    
       
            $scope.arrBirds = new Array;
            $http({method: 'GET',
                url: '../journey-details/json/'+$scope.page+'.json',
                dataType: 'json',
                })
            .then(function success(jsonData){
                $scope.arrBirds = jsonData.data;
                    $scope.list = $scope.arrBirds;
                },function (error)
                {

                });

  }



if($scope.model.endDate)
{
          $scope.hide_search_tab=false;
        console.log('hi');
        $scope.newformattedDate =   $filter('date')($scope.model.endDate, "dd");
        $scope.newpage=$scope.To+'_'+$scope.From+'_'+$scope.newformattedDate;                                                                                                                                               
            $scope.newarrBirds = new Array;
            $http({method:'GET',
                url: '../journey-details/json/'+$scope.newpage+'.json',
                dataType: 'json',
                })
            .then(function success(jsonData){
                $scope.newarrBirds = jsonData.data;
               $scope.newlist = $scope.newarrBirds;

                },function (error)
                {

                });

}

              
              } 

});


  