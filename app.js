// Declare AngularJS application
var app1 = angular.module('app1', []);

// Set up applcation controller
app1.controller('appController', function($scope) {
	$scope.imageURL = 'morty.png';
	$scope.content  = "Ughhhhhhh Rick, where are we?";

	$scope.morty = function() {
		$scope.imageURL = 'morty.png';
		$scope.content  = "Ughhhhhhh Rick, where are we?";
	};

	$scope.rick = function() {
		$scope.imageURL = 'rick.png';
		$scope.content  = "Jesus Morty! Can't you tell the blast threw us into an empty dimension, now give me my portal gun!";
	};
});