angular.module('pickominoGame')

.directive("gameBody", function() {
	return {
		restrict: 'E',
		templateUrl: "game-body.html"
	};
});	