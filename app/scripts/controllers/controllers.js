
app.controller("InventoryCtrl", function($scope, $http) {
  $scope.inventory= [];
  //$http.jsonp('http://www.assetrecovery.com/inventory_json.php?callback=JSON_CALLBACK=?').success(function(data) { 
  $http.get('data/data.json').success(function(data) {   
      console.log("success!");
      $scope.inventory = data.inventory;
          console.log(data);
      });    
});

app.controller("CarouselCtrl", function($scope, $http) {
  $scope.carousel= [];
  //$http.jsonp('http://www.assetrecovery.com/inventory_json.php?callback=JSON_CALLBACK=?').success(function(data) { 
  $http.get('data/carousel.json').success(function(data) {   
      console.log("success!");
      $scope.carousel = data.carousel;
          console.log(data);
      });    
});

app.controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
