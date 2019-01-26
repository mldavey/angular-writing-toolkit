var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/tools', {
		templateUrl: 'views/tools.html',
		controller: 'ToolsController'
	}).
	when('/calculate', {
		templateUrl: 'views/calculate.html',
		controller: 'CalculateController'
	}).
	otherwise({
		redirectTo: '/tools'
	});
}]);