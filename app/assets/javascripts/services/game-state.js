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
							gameStatus: JSON.stringify(GameAction.status),
							grillWorms: JSON.stringify(GrillWormsArray.array),
							deadGrillWorms: JSON.stringify(GrillWormsArray.deadArray),
							playerMessage: JSON.stringify(PlayerNotification.message),
						    activeDice: JSON.stringify(ActiveDiceArray.array),
						    frozenDice: JSON.stringify(FrozenDiceArray.array),
						    frozenDiceTotal: JSON.stringify(FrozenDiceArray.frozenStatus),
						    playerWorms: JSON.stringify(PlayerWormsArray.array),
						    playerWormsTotals: JSON.stringify(PlayerWormsArray.status)
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
				data = {
					game_state: gameState
				};
				
				return $http.post('/users/' + userID + '/games/' + gameState.gameID + '/game_states.json', data).success(function(response){
					gameStateID = response.id;
				});
			},
			
			loadGame: function(){
				userID = GameAction.status.userID;
				
				return $http.get('/users/' + userID + '.json').success(function(response){
					gameState.gameID = response.id;
				});
				
				/*
				data = {userID: gameState.gameStatus.userID};
				gameStateScope = this;
				
				return $http.post("app/assets/php/load_game.php", data)
					.success(function(data){
						if(data!=false){
							gameState.gameID=data;
							gameStateScope.loadGameState();
						}
					});
				*/
			},
			
			loadGameState: function(){
				/*
				data = {gameID: gameState.gameID};
				
				return $http.post("app/assets/php/load_game_state.php", data)
					.success(function(data){
						if(data!=false){
							gameState.gameStateID = data.gameStateID;
							GameAction.loadState(data.gameStatus);
							GrillWormsArray.loadGrillWormsState(data.grillWorms);
							GrillWormsArray.loadDeadGrillWormsState(data.deadGrillWorms);
							PlayerNotification.setMessage(data.playerMessage.info);
							ActiveDiceArray.loadState(data.activeDice);
							FrozenDiceArray.loadState(data.frozenDice);
							PlayerWormsArray.loadStatusState(data.playerWormsTotals);
							PlayerWormsArray.loadWormsState(data.playerWorms);					
						}
					});
				*/
			},
			
			clear: function(){
				
			}
		};
}]);		