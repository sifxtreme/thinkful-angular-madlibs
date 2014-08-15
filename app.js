var myApp = angular.module('madlibsApp', []);

myApp.controller('MadlibsController', ['$scope', function($scope){
	$scope.person_name = 'person name';
	$scope.job_title = 'job title';
	$scope.tedious_task = 'tedious task';
	$scope.dirty_task = 'dirty task';
	$scope.celebrity =  'celebrity';
	$scope.useless_skill = 'useless skill';
	$scope.obnoxious_celebrity = 'obnoxious celebrity';
	$scope.huge_number = 'huge number';
	$scope.adjective =  'adjective';

	$scope.gender = 'm';

	$scope.changeGender = function(gender){
		$scope.gender = gender;
	};

}]);