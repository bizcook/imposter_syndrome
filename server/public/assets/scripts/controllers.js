// nav bar code

$(window).resize(function() {
  var more = document.getElementById("js-centered-more");
  var windowWidth = $(window).width();
  var moreLeftSideToPageLeftSide = $(more).offset().left;
  var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

  if (moreLeftSideToPageRightSide < 330) {
    $("#js-centered-more .submenu .submenu").removeClass("fly-out-right");
    $("#js-centered-more .submenu .submenu").addClass("fly-out-left");
  }

  if (moreLeftSideToPageRightSide > 330) {
    $("#js-centered-more .submenu .submenu").removeClass("fly-out-left");
    $("#js-centered-more .submenu .submenu").addClass("fly-out-right");
  }
});

$(document).ready(function() {
  $(window).trigger("resize");
  var menuToggle = $("#js-centered-navigation-mobile-menu").unbind();
  $("#js-centered-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-centered-navigation-menu").slideToggle(function(){
      if($("#js-centered-navigation-menu").is(":hidden")) {
        $("#js-centered-navigation-menu").removeAttr("style");
      }
    });
  });
});


//// controllers START
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
