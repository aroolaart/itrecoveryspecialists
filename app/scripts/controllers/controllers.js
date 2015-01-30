
app.controller("InventoryCtrl", function($scope, $http) {
  $scope.inventory= [];
  //$http.jsonp('http://www.assetrecovery.com/inventory_json.php?callback=JSON_CALLBACK=?').success(function(data) { 
  $http.get('data/data.json').success(function(data) {   
      //console.log("success!");
      $scope.inventory = data.inventory;
          //console.log(data);
      });    
});

app.controller("CarouselCtrl", function($scope, $http) {
  $scope.carousel= [];
  //$http.jsonp('http://www.assetrecovery.com/inventory_json.php?callback=JSON_CALLBACK=?').success(function(data) { 
  $http.get('data/carousel.json').success(function(data) {   
      var shuffle = function(array) {
        var shuffled = [];

        while (array.length) {
          var index = Math.round(Math.random() * (array.length - 1));
          shuffled.push(array[index]);
          array.splice(index, 1);
        }
        return shuffled;
      };

      //imageArray = shuffle(imageArray);
      $scope.carousel = shuffle(data.carousel);
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
