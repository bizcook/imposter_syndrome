myApp.controller("AddController", ["$scope", "$http", "SmartService", function($scope, $http, SmartService){
  $scope.smarts = {};
  $scope.data = [];
          //this used to be addsmarts
  $scope.addSmart = function(postObject){
    console.log("in addcontrollers ADD SMART:", postObject);
    // var sendObject.positive = postObject.positive;
    //this used to be postObject.smarts
    // postObject.smarts = data.smarts;
    SmartService.postSmart(postObject);
  };
}]);

//show CONTROLLER
myApp.controller("ShowController", ["$scope", "SmartService", function($scope, SmartService){
    //show positive
    console.log("before GET CALL IN CONTROLLER:", SmartService.data);
    SmartService.getSmart();
    $scope.positive = SmartService.data;
    // $scope.data = SmartService.data;
    console.log("this is SmartService.data:", SmartService.data);
    console.log("this is $scope.positive:", $scope.positive);

}]);
