angular.module('pickominoGame')

.factory('Registration', [
	'GameAction',
	'$http',
	function RegistrationFactory(GameAction, $http){
		
		return {
			newUser: function(user){
				//console.log(user);
				return $http.post('/users.json', user).success(function(response){
					//console.log(response.id);
					GameAction.status.userID = response.id;
					GameAction.status.firstname = response.firstname;
					GameAction.setStatus('gameRegistration', false);
					GameAction.setStatus('gameSetup', true);
				});
			}
		};

}]);
