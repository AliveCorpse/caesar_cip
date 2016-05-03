angular.module('cipherApp', ['ui.router', 'templates', 'ng-rails-csrf', 'googlechart'])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

		$stateProvider
			.state('home', {
				url: '/',
				views: {
				    "": {
				      templateUrl: "index/_index.html",
				      controller: 'CipherCtrl'
				    },
				    "chart": {
				      templateUrl: "chart/_chart.html",
				      controller: 'ChartCtrl'
				    },
				  	"guess": {
				    	templateUrl: 'guess/_guess.html',
				    	controller: 'GuessCtrl'
				    }
				}
			});

		$locationProvider.html5Mode({
					enabled: true,
		  			requireBase: false
		  		});

		$urlRouterProvider.otherwise('/');
	}])