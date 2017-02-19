angular.module('pickominoGame')		
	
.controller("RegistrationController", [
	'GameAction',
	'GameState',
	'Registration',
	'$http',
	'$scope',
	function(GameAction, GameState, Registration, $http, $scope){
		
		$scope.message = Registration.message;
				
		this.newUser = function(){
			if($scope.password === $scope.password_check){
				data = {
					firstname: $scope.firstname,
					lastname: $scope.lastname,
					username: $scope.username,
					password_digest: $scope.password,
					email: $scope.email
					};
			
				//console.log(data);
				//GameAction.setStatus('userID', userID);
				Registration.newUser(data);
			}else{
				Registration.message.info = 'Passwords do not match';
			}
		};
	}
]);	
