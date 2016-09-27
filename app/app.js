'use strict';

// Declare app level module which depends on views, and components
angular.module('movicecat', [
  'ngRoute',
	'moviecat.services.http',
  	'moviecat.category'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]);
