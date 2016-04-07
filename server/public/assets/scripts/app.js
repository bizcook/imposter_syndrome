var myApp = angular.module("myApp", ["ngRoute"]);

//break the register thing into partials? and then set home page?
//change controller names once making new ones

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/smart", {
      templateUrl: "/assets/views/routes/smart.html",
      controller: "AddController"
    }).
    when("/register", {
      templateUrl: "/assets/views/routes/register.html",
      controller: "AddController"
    }).
    when("/dummy", {
      templateUrl: "/assets/views/routes/dummy.html",
      controller: "AddController"
    }).
    otherwise({
      redirectTo: "/index"
    });
}]);
