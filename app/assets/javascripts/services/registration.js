angular.module('pickominoGame')

.factory('Registration', [
	'GameAction',
	'$http',
	function RegistrationFactory(GameAction, $http){
		message = {info: ''};
		
		return {
			message: message,
			
			newUser: function(user){
				//console.log(user);
				return $http.post('/users.json', user).success(function(response){
					if(response !== null){
						GameAction.status.userID = response.id;
						GameAction.status.firstname = response.firstname;
						GameAction.setStatus('gameRegistration', false);
						GameAction.setStatus('gameSetup', true);
					}else{
						message.info = 'Username not available';
					}
				});
			}
		};

}]);
