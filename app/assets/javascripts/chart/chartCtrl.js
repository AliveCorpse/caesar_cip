angular.module('cipherApp')
	.controller('ChartCtrl', ['cipher', '$scope', '$interval', function(cipher, $scope, $interval){

		$scope.init = function(){
			cipher.get_stat();

			$scope.chartObject = {};
			$scope.chartObject.type = "ColumnChart";
			$scope.chartObject.data = {	"cols": [
													{id: "t", label: "Letter", type: "string"},
													{id: "s", label: "Frequency", type: "number"},
									   			],
							   			"rows": {c: [
													{v: ''},
													{v: 0}
												]
											}
						   				};
		    $scope.chartObject.options = {
		        'title': 'Letter`s frequency', 
		    };			
		};
		

		$interval(function () {
			$scope.draw_stat();
		}, 500);

		$scope.draw_stat = function(){

			var rows = [];

			for(var key in cipher.stat){
				var value = cipher.stat[key];
				rows.push( 
					{c: [
							{v: key},
							{v: value}
						]
					}
				);
			}

			$scope.chartObject.data.rows = rows;
		};
	}])