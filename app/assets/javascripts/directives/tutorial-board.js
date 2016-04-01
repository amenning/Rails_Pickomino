angular.module('pickominoGame')

.directive("tutorialBoard", function() {
	return {
		restrict: 'E',
		templateUrl: "tutorial-board.html"
	};
});	