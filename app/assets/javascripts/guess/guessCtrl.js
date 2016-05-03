angular.module('cipherApp')
	.controller('GuessCtrl', ['cipher', '$scope', '$interval', function(cipher, $scope, $interval){

		$scope.draw_guess = function(){
			$scope.guess = cipher.text_guess;
			$scope.guess_shift = cipher.guess_shift;
		};	

		$interval(function () {
			$scope.draw_guess();
		}, 500);
	}])