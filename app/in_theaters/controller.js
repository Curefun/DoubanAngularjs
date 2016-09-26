(function(angular){
	'use strict';
	//创建正在热映模块
	var module = angular.module('moviecat.in_theaters', ['ngRoute']);

		module.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/in_theaters/:page', {
				templateUrl: 'in_theaters/view.html',
				controller: 'InTheatersController'
			});
		}]);

		module.controller('InTheatersController', [
				'$scope',
				'$route',
				'$routeParams',
				'HttpService',
				function($scope,$route,$routeParams,HttpService) {
					var count = 3;//每页多少条
					var currentPage = parseInt($routeParams.page);//当前页
					var start = (currentPage - 1)*count;
					$scope.currentPage = currentPage;
					$scope.loading = false;
					HttpService.jsonp(
						'http://api.douban.com/v2/movie/in_theaters',
						{
							start:start,
							count:count
						},
						function(data) {
							$scope.loading = true;
							console.log(data);
							$scope.totalCount = data.total;
							$scope.totalPage = Math.ceil($scope.totalCount/count);
							$scope.title = data.title;
							$scope.subjects=data.subjects;
							$scope.$apply();
							// $apply的作用就是让指定的表达式重新同步
						});
						$scope.go = function(page){
							if (page >=1 && page<=$scope.totalPage)
							$route.updateParams({ page:page });
						}
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

