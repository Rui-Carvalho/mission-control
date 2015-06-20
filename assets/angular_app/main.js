angular.module('mcApp', ['ngRoute', 'ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      'use strict';
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./partial1.html",
          controller: "HomeController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);



//Load controller
angular.module('mcApp')

.controller('HomeController', [
    '$scope',
    function($scope) {
      'use strict';
      $scope.test = "Testing...";
    }
]);