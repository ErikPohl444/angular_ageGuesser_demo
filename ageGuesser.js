var app = angular.module("ageGuesser", []);
function ageController($scope) {
	$scope.fullName = "Brad Green";
  $scope.age = Math.floor((Math.random()*10)+20);
  $scope.retryAge = function() {
  	$scope.age = Math.floor((Math.random()*20)+20);
  }
}