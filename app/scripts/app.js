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
  ]);

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
