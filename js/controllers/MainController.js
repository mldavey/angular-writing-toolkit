app.controller('MainController', ['$scope', function($scope) {
	
	$scope.targetTotal = 0;
	$scope.currentTotal = 0;
	$scope.remainingTotal = 0;
	$scope.wordsPerDay = 0;
	$scope.daysLeft = 0;

	$scope.calculateRemaining = function() {

		var targetInt = parseInt($scope.targetTotal.replace(",", "")); //strip commas and make an integer for calculating the remaining total
		var currentInt = parseInt($scope.currentTotal.replace(",", "")); //strip commas and make an integer for calculating the remaining total

		$scope.remainingTotal = targetInt - currentInt;

		$scope.wordsPerDay = Math.ceil($scope.remainingTotal / $scope.daysLeft);

		return;
	}

}]);