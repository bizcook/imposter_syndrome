myApp.factory("SmartService", ["$http", function($http){
  var data = {};
  var quotations = {};
  var dumber = {};

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

              //go to routes under quote.js and send back the json file.
    $http.get("/quote").then(function(response){

      //the JSON object from the quote route which pulled from the json
      quotations.data = response.data;
      dumber.data = response.data;
      console.log('hello why am i dumb in factory',dumber.data);
      // console.log("response.data: ", response.data);
      // var rando = ( Math.random( 0, 3 ) * 100 ) % response.data.quotes.length;
      // var randoInty = parseInt( rando );
      // console.log("in factory max: ", response.data.quotes.length);
      // console.log("in factory random man: ", rando);
      // console.log("in factory randoInty yo: ", randoInty);
      // console.log("in factory response.data.quotes[rando]: ", response.data.quotes[randoInty]);
      // console.log("in factory quotations: ", quotations);
      // dumb = response.data.quotes[randoInty];

    });
  };

  //below is public
  return {
    postSmart : postSmart,
    getSmart : getSmart,
    getQuote : getQuote,
    quotations : quotations,
    dumber : dumber,
    data : data
  };
}]);
