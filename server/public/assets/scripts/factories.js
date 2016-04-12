myApp.factory("SmartService", ["$http", function($http){
  var data = {};
  var quotations = "";

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
      quotations = response.data;
      console.log("response.data: ", response.data);
      var rando = ( Math.random( 0, 3 ) * 100 ) % response.data.quotes.length;
      var randoInty = parseInt( rando );
      console.log("max: ", response.data.quotes.length);
      console.log("random man: ", rando);
      console.log("randoInty yo: ", randoInty);
      console.log("response.data.quotes[rando]: ", response.data.quotes[randoInty]);
      console.log("quotations: ", quotations);


    });
  };

  //below is public
  return {
    postSmart : postSmart,
    getSmart : getSmart,
    getQuote : getQuote,
    quotations : quotations,
    data : data
  };
}]);
