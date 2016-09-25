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
				'$scope',
				'HttpService',
				function($scope,HttpService) {
					HttpService.jsonp(
						'http://api.douban.com/v2/movie/in_theaters',{},
						function(data) {
							console.log(data);
							$scope.subjects=data.subjects;
							$scope.$apply();
							// $apply的作用就是让指定的表达式重新同步
						});
				/*$http({
					method:'GET',
					url:'/app/datas/in_theaters.json',
				}).then(function sucessCallback(response){
					$scope.subjects = response.data.subjects;
					console.log(response);
				},function errorCallback(response){

				});*/
		}]);
})(angular)

