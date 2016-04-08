(function() {
	var app = angular.module('patternSize', []);

	app.controller('FormController', ['$scope', function($scope){
		$scope.width = 0;
		$scope.height = 0;

		$scope.calculateSize = function() {
			$scope.width = $scope.patternWidth / $scope.fabricSize;
			$scope.height = $scope.patternHeight / $scope.fabricSize;
		};

	}]);

})();