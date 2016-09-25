(function(angular){
	'use strict';
	//创建正在热映模块
	var module = angular.module('moviecat.in_theaters', ['ngRoute']);

		module.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/in_theaters', {
				templateUrl: 'in_theaters/view.html',
				controller: 'InTheatersController'
			});
		}]);

		module.controller('InTheatersController', [
				'$scope','$http',
				function($scope,$http) {
				$scope.subjects='';
				$http({
					method:'GET',
					url:'/app/datas/in_theaters.json',
				}).then(function sucessCallback(response){
					$scope.subjects = response.data.subjects;
					console.log(response);
				},function errorCallback(response){

				});
		}]);
})(angular)

