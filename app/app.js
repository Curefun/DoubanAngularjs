'use strict';

// Declare app level module which depends on views, and components
angular.module('movicecat', [
  'ngRoute',
	'moviecat.services.http',
  	'moviecat.category',
	'moviecat.directive.auto_focus'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]);
