'use strict';

/**
 * @ngdoc function
 * @name itrsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itrsApp
 */


var app = angular.module('itrsApp', [
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
      .when('/faq', {
        templateUrl: 'views/faq.html',
      })      
      .when('/contact', {
        templateUrl: 'views/contact.html',
      })
      .when('/thanks', {
        templateUrl: 'views/thanks.html',
      })     
      .otherwise({
        redirectTo: '/'
      });
  });


// Directive to handle menu highlighting
app.directive("myDataToggle", function(){
    function link(scope, element, attrs) {
        var e = angular.element(element);
        e.on('click', function(){
            e.parent().parent().children().removeClass('active');
            e.parent().addClass("active");
        })
    }
    return {
        restrict: 'A',
        link: link
    };
});

app.config(function(paginationTemplateProvider) {
  paginationTemplateProvider.setPath('views/dirPagination.tpl.html');
});
