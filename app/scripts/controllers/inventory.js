'use strict';

/**
 * @ngdoc function
 * @name arcmobileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the arcmobileApp
 */


var app = angular.module('arcmobileApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'angularUtils.directives.dirPagination',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CarouselCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/mgmt', {
        templateUrl: 'views/mgmt.html'
      })      
      .when('/services', {
        templateUrl: 'views/services.html'
      })      
      .when('/press', {
        templateUrl: 'views/press.html'
      })            
      .when('/inventory', {
        templateUrl: 'views/inventory.html',
        controller: 'InventoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('views/dirPagination.tpl.html');
  });


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

/*
app.controller('InventoryCtrl', function($scope, InventoryFactory) {
	InventoryFactory.getInventory().success(function(data)	{
		function init() {
			InventoryFactory.getInventory().success(function(data) {
				console.log('Success in Get');
				$scope.inventory = data;
			});
		}
		init();
	});
});

app.factory('InventoryFactory', function($http) {
	var factory = {};
	factory.getInventory = function() {
		return $http.jsonp('http://www.assetrecovery.com/inventory_json.php?callback=JSON_CALLBACK=?');
		//return $http.get('/data/data.json');
		//return $http.get('http://webapi.artbinder.com/api/exhibitions?thisweek=true');
	};
	return factory;
});
*/

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

 $('.glyphicon-hand-up').on('click',function(){
   $(this).hide();
   $('footer .info').show();
   $('.glyphicon-hand-down').show();
 });
 $('.glyphicon-hand-down').on('click',function(){
   $(this).hide();
   $('footer .info').hide();
   $('.glyphicon-hand-up').show();
 });

$(document).ready(function(){
     $("#maincarousel").carousel();
});



