(function() {
	var app = angular.module('patternSize', []);

	app.controller('FormController', ['$scope', function($scope){
		$scope.width = 0;
		$scope.height = 0;
		$scope.fabricSize = 16;

		$scope.calculateSize = function() {
			if($scope.patternWidth > 0 && $scope.patternHeight > 0){
				$scope.width = $scope.patternWidth / $scope.fabricSize;
				$scope.height = $scope.patternHeight / $scope.fabricSize;
			}
		};


	}]);

})();