(function(angular){
	'use strict';
	//创建正在热映模块
	var module = angular.module('moviecat.coming_soon', ['ngRoute']);

		module.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/coming_soon', {
				templateUrl: 'coming_soon/view.html',
				controller: 'ComingSoonController'
			});
		}]);

		module.controller('ComingSoonController', [
				'$scope',
				function($scope) {

		}]);
})(angular)

