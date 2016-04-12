myApp.factory("SmartService", ["$http", function($http){
  var data = {};

  var postSmart = function(data){
    console.log("here is data inside post smart funct in fact: ", data);
    $http.post("/smart", data).then(function(response){
      console.log("SMART SaVeD:", response);
      getSmart();
    });
  };

  var getSmart = function(){
    $http.get("/smart").then(function(response){
      console.log("get SMART inside factory:", response.data);
      //add key to cause data bind to happen
      data.response = response.data;
    });
  };

  var getQuote = function(){
    console.log('getQuote is firing');
    $http.get("/quote").then(function(response){
      console.log("GET REQ FOR QUOTE FIRED");
      console.log(response.data.quote); //array
      $scope.quotations = response.data.quote;

    });
  };

  //below is public
  return {
    postSmart : postSmart,
    getSmart : getSmart,
    getQuote : getQuote,
    data : data
  };
}]);
