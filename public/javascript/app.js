var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", { controller: "PostsCtrl", templateUrl: "posts.html"})
	.when("/register", { controller: "RegisterCtrl", templateUrl: "register.html"})
	.when("/login", { controller: "LoginCtrl", templateUrl: "login.html"});
});

app.service("PostsSvc", function ($http) {

	this.fetch = function() {
		return $http.get('/api/posts');
	};

	this.create = function(post) {
		return $http.post('/api/posts', post);
	};
});

app.controller('PostsCtrl', function($scope, PostsSvc){

	$scope.addPost = function(){

		if ($scope.postBody) {

			PostsSvc.create({
				username: 'dev',
				body: $scope.postBody
			}).success(function (post) {
				$scope.posts.unshift(post);
				$scope.postBody = null;
			}).error(function(err){
				console.log(err);
			});
		}
	};

	PostsSvc.fetch().success(function (posts){
		$scope.posts = posts;
	});

});
