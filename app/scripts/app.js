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
      })      .when('/contact', {
        templateUrl: 'views/contact.html',
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

$(document).ready(function(){

  $("#maincarousel").carousel();
  $('.navbar-toggle').on('click',function(){
    $('.share.dropdown').slideUp("fast");
    $('.banner .share').css("visibility","visible");      
  });
  $(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 100 && $('.container-fluid .share').is(":hidden")) {
        //alert("scrolled");
        $('.banner .share').css("visibility","hidden");
        $('.share.dropdown').slideDown("slow");
        //$(this).off('scroll');
    }
    if (scrollPosition <= 50 && $('.container-fluid .share').is(":visible")) {
        //alert("scrolled");
        $('.banner .share').css("visibility","visible");
        $('.share.dropdown').slideUp("fast");
        //$(this).off('scroll');
    }    
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

   $('footer').on('click', function(){
        if($(this).height() < 100) {
          $('.info').show();
          $(this).animate({
            height: "+=100"
          },500);
        } else {
          $(this).animate({
            height: "-=100"
          },500, function(){
            $('.info').hide();
            });          
        }
   });


})

$(function() {
            $('#contactus').submit(function (event) {
                event.preventDefault();
                event.returnValue = false;
                $.ajax({
                    type: 'POST',
                    url: '/process-email.php',
                    data: $('#contactus').serialize(),
                    success: function(res) {
                        if (res == 'successful') {
                            alert("successful");
                        }
                        else {
                            alert("failed");
                        } 
                    },
                    error: function () {
                        alert("failed");
                    }
                });
            });
        });


