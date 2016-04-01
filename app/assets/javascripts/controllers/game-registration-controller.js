angular.module('pickominoGame')		
	
.controller("RegistrationController", [
	'GameAction',
	'GameState',
	'Registration',
	'$http',
	'$scope',
	function(GameAction, GameState, Registration, $http, $scope){
				
		this.newUser = function(){
			
			if($scope.password === $scope.password_check){
				data = {
					firstname: $scope.firstname,
					lastname: $scope.lastname,
					username: $scope.username,
					password: $scope.password,
					email: $scope.email
					};
			
				//console.log(data);
				//GameAction.setStatus('userID', userID);
				Registration.newUser(data);
			}else{
				console.log('Password do not match');
			}
		};
	}
]);	