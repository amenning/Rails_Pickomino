angular.module('pickominoGame')		
	
.controller("RegistrationController", [
	'GameAction',
	'GameState',
	'$http',
	'$scope',
	function(GameAction, GameState, $http, $scope){
		this.gameStatus = GameAction.status;
		
		this.newUser = function(userID){
			GameAction.setStatus('userID', userID);
			GameAction.setStatus('gameRegistration', false);
			GameAction.setStatus('gameSetup', true);
		};
	}
]);	