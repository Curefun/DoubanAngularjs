(function(angular){
	'use strict';
	var module = angular.module('moviecat.top250', ['ngRoute']);

		module.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/top250', {
				templateUrl: 'top250/view.html',
				controller: 'TopController'
			});
		}]);

		module.controller('TopController', [
				'$scope',
				function($scope) {

		}]);
})(angular)

