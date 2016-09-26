(function(angular){
	'use strict';
	//创建正在热映模块
	var module = angular.module('moviecat.coming_soon', ['ngRoute']);

		module.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/coming_soon/:page', {
				templateUrl: 'coming_soon/view.html',
				controller: 'ComingSoonController'
			});
		}]);

		module.controller('ComingSoonController', [
				'$scope',
				'$route',
				'$routeParams',
				'HttpService',
				function($scope,$route,$routeParams,HttpService) {
					var count = 3;
					var currentPage = parseInt($routeParams.page);
					var start = (currentPage-1)*count;
					$scope.loading = false;
				HttpService.jsonp('http://api.douban.com/v2/movie/coming_soon',
					{
						start:start,
						count:count
					},function(data){
						$scope.title = data.title;
						$scope.subjects=data.subjects;
						$scope.currentPage = currentPage;
						$scope.totalCount = data.total;
						$scope.totalPage = Math.ceil($scope.totalCount/count);
						console.log(data)
						$scope.loading = true;
						$scope.$apply();
					});
					$scope.go = function(page){
						if (page >=1 && page<=$scope.totalPage)
							$route.updateParams({ page:page });
					}
		}]);
})(angular)

