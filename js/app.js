(function() {
	var app = angular.module('patternSize', []);

	app.controller('FormController', ['$scope', function($scope){
		$scope.spice = 'very';

		$scope.chiliSpicy = function() {
			$scope.spice = 'chili';
		};

	}]);

})();