angular.module('pickominoGame')		
	
.controller("LoginController", [
	'GameAction',
	'GameState',
	'$http',
	'$scope',
	function(GameAction, GameState, $http, $scope){
		this.gameStatus = GameAction.status;
		$scope.message = '';
		this.formData = {};
		context = this;
		
		this.setUser = function(userID, firstname){
			if(userID >= 0){
				GameAction.setStatus('userID', userID);
				GameAction.setStatus('firstname', firstname);
				GameAction.setStatus('gameLogin', false);
				GameAction.setStatus('gameSetup', true);
			}
		};
		
		this.register = function(){
			GameAction.setStatus('gameRegistration', true);
			GameAction.setStatus('gameLogin', false);
		};
		
		this.processForm = function(){
			 data = { user: {
			 	username: this.formData.username,
			 	password_digest: this.formData.password
			 }};
			 
			 $http.post('/users/login.json', data)
			 .success(function(response){
			 	if(response !== null){
			 		context.setUser(response.id, response.firstname);
			 	}else{
			 		$scope.message = 'Invalid Username/Password';
			 	}
			 });
		};
		
		this.guestLogin = function(){
			var randomPassword = "Guest" + Math.floor((Math.random() * 99999) + 1) + Date.now();
			newGuest = {
				firstname: "Guest",
				lastname: "",
				username: "Guest" + Math.floor((Math.random() * 99999) + 1) + Date.now(),
				password_digest: randomPassword,
				email: 'guest@guest.com'					
			};
			
			$http.post('/users.json', newGuest)
			.success(function(response){
				GameAction.setStatus('gameLogin', false);
				GameAction.setStatus('gameSetup', true);
				GameAction.setStatus('firstname', 'Guest');
				GameAction.setStatus('userID', response.id);
			});
		};
	}
]);	
