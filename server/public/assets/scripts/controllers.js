myApp.controller("AddController", ["$scope", "$http", "SmartService", function($scope, $http, SmartService){
  $scope.smarts = {};
  $scope.data = [];

  $scope.addSmarts = function(data){
    console.log("in controllers ADD SMART:", data);
    var postObject = {};
    postObject.smarts = data.smarts;

    SmartService.postSmart(postObject);
  };
}]);

//ADD OTHER CONTROLLERS
