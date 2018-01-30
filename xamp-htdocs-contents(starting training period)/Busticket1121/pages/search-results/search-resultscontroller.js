var apps = angular.module("myapp").controller("searchresultsctrl", ['$scope',
  function($scope) {
     $scope.sortType     = 'busid'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchall   = ''; 
    $scope.model = {
      selectedStyle: "",
      selectedLevel: "",
      filterObject: { operator : "",bustype : ""},
     
      recordDetails: undefined,
      options: {
        busoperator: ["", "Parveen Travels", "Dream Liner","National Travels","Evacay Bus"],
        bustypes: ["", "AC", "Berth", "Semi-Sleeper"]
      },
      data:   [{"busid": 15131,"bustype": "AC","operator": "Dream Liner","from":"chennai","to":"bangalore","price": 100}, 
               {"busid": 15132,"bustype": "Berth","operator": "Parveen Travels","from":"bangalore","to":"mumbai","price": 200}, 
               {"busid": 15133,"bustype": "Semi-Sleeper","operator": "National Travels","from":"chennai","to":"delhi","price": 300}, 
               {"busid": 15144,"bustype": "AC","operator": "Dream Liner","from":"chennai","to":"bangalore","price": 400},
               {"busid": 15159,"bustype": "Semi-Sleeper","operator": "Evacay Bus","from":"hydrebad","to":"bangalore","price": 400},
               {"busid": 15189,"bustype": "Berth","operator": "Parveen Travels","from":"chennai","to":"hydrebad","price": 400},
               {"busid": 15132,"bustype": "AC","operator": "National Travels","from":"bangalore","to":"trissur","price": 400},
               {"busid": 15185,"bustype": "Berth","operator": "Dream Liner","from":"chennai","to":"trissur","price": 400},
               {"busid": 15114,"bustype": "Semi-Sleeper","operator": "Evacay Bus","from":"trissur","to":"mumbai","price": 400},
               {"busid": 15122,"bustype": "AC","operator": "Parveen Travels","from":"chennai","to":"bangalore","price": 400},
               {"busid": 15134,"bustype": "Berth","operator": "Dream Liner","from":"pondicherry","to":"chennai","price": 400}]
    }
  }




]);

