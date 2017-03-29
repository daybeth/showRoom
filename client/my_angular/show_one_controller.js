app.controller('showOneController',['$scope', '$routeParams','ShowFactory', 'UserFactory',function($scope,$routeParams,ShowFactory,UserFactory){
	function currentUser(){
		UserFactory.currentUser(function(data){
			$scope.user = data;
		});
	}
	currentUser();

	$scope.logout = function(user){
		UserFactory.logout(user);
	}

	function getShows(){
		ShowFactory.getShows(function(data){
			// console.log(data);
			$scope.shows = data;

		})
	}
	getShows();

	function getOneShow(name){
		ShowFactory.getOneShow(name,function(data){
			$scope.show = data;
			var time = $scope.show.schedule.time.split(":")
			$scope.show.schedule.time = new Date(1988,6,4,time[0],time[1]).toLocaleTimeString();
			// $scope.show.summary.
		})
	}
	getOneShow($routeParams.name);
}])
