myApp.controller("AddController", ["$scope", "$http", "SmartService", function($scope, $http, SmartService){
  $scope.smarts = {};
  $scope.data = [];



          //this used to be addsmarts
  $scope.addSmart = function(postObject){
    console.log("in addcontrollers ADD SMART:", postObject);

    SmartService.postSmart(postObject);
  }

}]);

//show CONTROLLER
myApp.controller("ShowController", ["$scope", "SmartService", function($scope, SmartService){
    //show positive
    console.log("before GET CALL IN CONTROLLER:", SmartService.data);
    SmartService.getSmart();
    $scope.positive = SmartService.data;

    console.log("this is SmartService.data:", SmartService.data);
    console.log("this is $scope.positive:", $scope.positive);

}]);


//for dummy route
myApp.controller("QuoteController", ["$scope", "$http", "SmartService", function($scope, $http, SmartService){
$scope.dumber = [];
$scope.rando = function(min,max){
  return Math.floor(Math.random() * (1 + max - min) + min);
};

console.log('quote controller is loaded');
SmartService.getQuote();
$scope.quote = SmartService.quotations;
$scope.dumber = SmartService.dumber;
console.log("$scope.quote", SmartService.quotations);
  }]);
