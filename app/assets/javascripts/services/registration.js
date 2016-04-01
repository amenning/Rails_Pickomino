angular.module('pickominoGame')

.factory('Registration', [
	'GameAction',
	'$http',
	function RegistrationFactory(GameAction, $http){
		
		return {
			newUser: function(user){
				//console.log(user);
				return $http.post('/users.json', user).success(function(data){
					//console.log(data.id);
					GameAction.status.userID = data.id;
					GameAction.status.firstname = data.firstname;
					GameAction.setStatus('gameRegistration', false);
					GameAction.setStatus('gameSetup', true);
				});
			}
		};

}]);
