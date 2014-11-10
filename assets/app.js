var app = angular.module('app',[]);

app.controller('PostsCtrl', function($scope, $http){
	
	$scope.addPost = function(){

		if ($scope.postBody) {
			
			$http.post('/api/posts', {
				username: 'devloper plz work',
				body: $scope.postBody 
			}).success(function (post) {
				$scope.posts.unshift(post);
				$scope.postBody = null;
			}).error(function(err){
				console.log(err);
			})
		}
	};

	$http.get('/api/posts')
		 .success(function (posts) {
		 	$scope.posts = posts;
	});

});