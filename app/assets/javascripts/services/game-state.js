angular.module('pickominoGame')				

.factory("GameState", [
	'FrozenDiceArray', 
	'ActiveDiceArray', 
	'GrillWormsArray',
	'GameAction',
	'PlayerNotification',
	'PlayerWormsArray',
	'$http',
	function GameStateFactory(FrozenDiceArray, ActiveDiceArray, GrillWormsArray, GameAction, PlayerNotification, PlayerWormsArray, $http){
	
		var gameStateID = null;
		
		var gameState = { 
							gameID: null,
							gameStatus: GameAction.status,
							grillWorms: GrillWormsArray.array,
							deadGrillWorms: GrillWormsArray.deadArray,
							playerMessage: PlayerNotification.message,
						    activeDice: ActiveDiceArray.array,
						    frozenDice: FrozenDiceArray.array,
						    frozenDiceTotal: FrozenDiceArray.frozenStatus,
						    playerWorms: PlayerWormsArray.array,
						    playerWormsTotals: PlayerWormsArray.status
		   				};
		
		return {	
			newGame: function(){
				userID = GameAction.status.userID;
				data = {
					game: {player_1_id: GameAction.status.userID}
				};
				
				return $http.post('/users/' + userID + '/games.json', data).success(function(response){
					gameState.gameID = response.id;
				});
			},
			
			save: function(){				
				userID = GameAction.status.userID;
				gameID = gameState.gameID;
				gameStateStringified = {};
				
				for (var key in gameState) {
    				gameStateStringified[key] = JSON.stringify(gameState[key]);
				}
				data = {
					game_state: gameStateStringified
				};
				
				return $http.post('/users/' + userID + '/games/' + gameID + '/game_states.json', data).success(function(response){
					gameStateID = response.id;
				});
			},
			
			loadGame: function(){
				userID = GameAction.status.userID;
				data = {
					user: {player_1_id: userID}
				};
				
				return $http.post('/users/continue_game.json', data).success(function(response){
					for (var key in response) {
    					if (key !== 'created_at' && key !== "updated_at"){
	    					try{
	    						response[key] = JSON.parse(response[key]);
	    					} catch (error) {
	 						   // Handle the error
	    						console.log(error.message);
							}
						}
					}	
					if(response !== null){
						gameStateID = response.id;
						gameState.gameID = response.gameID;
						GameAction.loadState(response.gameStatus);
						GrillWormsArray.loadGrillWormsState(response.grillWorms);
						GrillWormsArray.loadDeadGrillWormsState(response.deadGrillWorms);
						PlayerNotification.setMessage(response.playerMessage.info);
						ActiveDiceArray.loadState(response.activeDice);
						FrozenDiceArray.loadState(response.frozenDice);
						PlayerWormsArray.loadStatusState(response.playerWormsTotals);
						PlayerWormsArray.loadWormsState(response.playerWorms);
					}	
				});
			},
			
			clear: function(){
				
			}
		};
}]);		