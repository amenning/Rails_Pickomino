angular.module('pickominoGame')

.directive("gameSetup", function() {
	return {
		restrict: 'E',
		templateUrl: "game-setup.html"
	};
});	