angular.module('pickominoGame')

.controller("GameHeaderController", ['GameAction', '$http', function(GameAction, $http){
	this.name = GameAction.status;
	
	this.logout = function(){
		$http.post('/users/logout.json').success(function(response){
			location.reload();
		});
	};
}]);