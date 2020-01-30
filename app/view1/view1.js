'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function($scope) {
	
	$scope.GenerateTable = function() {
		
		    $http.get('http://localhost:5000/pessoa-fisica/obter').
        then(function(response) {
            $scope.dataResponse = response.data;
        });
		
		
	};
	
			// let xhr = new XMLHttpRequest();
			// xhr.open('GET', 'http://localhost:5000/pessoa-fisica/obter');
			// $scope.dataResponse = [];
			// xhr.onload = function ()
			// {
				// $scope.dataResponse = JSON.parse(xhr.responseText);
			// }
			// xhr.send();
}]);