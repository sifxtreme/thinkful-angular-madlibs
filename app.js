var myApp = angular.module('madlibsApp', ['ngAnimate']);

myApp.controller('MadlibsController', ['$scope', function($scope){
	$scope.submitted = false;
	$scope.showInputs = true;
	$scope.gender = 'm';

	$scope.changeGender = function(gender){
		$scope.gender = gender;
	};

	$scope.createStory = function(){
		$scope.submitted = true
		if($scope.madlibInputs.$valid){
			$scope.showInputs = false;
		}
	}

	$scope.changeLibs = function(){
		$scope.showInputs = true;
		$scope.submitted = false;
		$scope.person_name = '';
		$scope.job_title = '';
		$scope.tedious_task = '';
		$scope.dirty_task = '';
		$scope.celebrity =  '';
		$scope.useless_skill = '';
		$scope.obnoxious_celebrity = '';
		$scope.huge_number = '';
		$scope.adjective =  '';
	}

}]);