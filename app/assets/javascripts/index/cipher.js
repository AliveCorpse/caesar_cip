angular.module('cipherApp')
	.factory('cipher', ['$http', function($http){
		var o = {
			plaintext: '',
			shift: 0,
			stat: {},
			guess_shift: 0,
			guess_text: ''
		};

		o.encode = function(){
			return $http.post('/encode.json', {plaintext: o.plaintext, shift: o.shift});
		};

		o.decode = function(){
			return $http.post('/decode.json', {plaintext: o.plaintext, shift: o.shift});
		};

		o.get_stat = function(){
			return $http.post('/statistic.json', {plaintext: o.plaintext})
				.success(function(data){
					o.stat = data.stat;
					o.guess_shift = data.guess_shift;
				});
		};

		return o;
	}])