myApp.controller("AddController", ["$scope", "$http", "SmartService", function($scope, $http, SmartService){
  $scope.smarts = {};
  $scope.data = [];
          //this used to be addsmarts
  $scope.addSmart = function(data){
    console.log("in controllers ADD SMART:", data);
    var postObject = {};
    //this used to be postObject.smarts
    postObject.positive = data.positive;

    SmartService.postSmart(postObject);
  };
}]);

//ADD OTHER CONTROLLERS
