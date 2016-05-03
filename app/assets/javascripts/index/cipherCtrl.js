angular.module('cipherApp')
	.controller('CipherCtrl', ['cipher', '$scope', function(cipher, $scope){

		$scope.encode = function(){
			cipher.plaintext = $scope.plaintext;
			cipher.shift = $scope.shift;

			cipher.encode().success(function(resp){
				$scope.result = resp.result;
			});
		};

		$scope.decode = function(){
			cipher.plaintext = $scope.plaintext;
			cipher.shift = $scope.shift;

			cipher.decode().success(function(resp){
				$scope.result = resp.result;
			});
		};

		$scope.update = function(){
			cipher.plaintext = $scope.plaintext;
			cipher.get_stat().success(function(){
				$scope.try_to_guess();
			});
		};

		$scope.try_to_guess = function(){
			if(cipher.guess_shift !== 0){
				var alphabet_len = Object.keys(cipher.stat).length;
				cipher.shift = alphabet_len + cipher.guess_shift;
				
				cipher.decode().success(function(resp){
					cipher.text_guess = resp.result;
				});
			}else{
				cipher.text_guess = 'It`s not encoded text.';
			}
		};

	}])