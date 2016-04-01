angular.module('pickominoGame')

.factory('Registration', [
	'GameAction',
	'$http',
	function RegistrationFactory(GameAction, $http){
		
		return {
			newUser: function(user){
				console.log(user);
				return $http.post('/users.json', user).success(function(data){
					console.log(data);
					//GameAction.status.userID = data.id;
				});
			}
		};

}]);
