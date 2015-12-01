var postControllers = angular.module('postControllers', []);

postControllers.controller('PostListCtrl', function ($scope, Profile, Post, $routeParams,$location) {
	$scope.quantity = 0;
	$scope.post = Post.getPost();
	$scope.author = Profile.getName();
	$scope.destroy = function(n) {
		Post.destroy(n);
		$location.path('#/');
	}
});


postControllers.controller('PostDetailCtrl', ['$scope', '$routeParams', '$http', 'Post', '$location',
function ($scope, $routeParams, $http, Post,$location) {
	this.userStatus = 'Author';
	$scope.post = Post.getOne($routeParams.newId);
}]);


postControllers.controller('EditDetailCtrl', ['$scope', '$routeParams', '$http', 'Post', '$location',
function ($scope, $routeParams, $http, Post, $location) {
	var one = Post.getOne($routeParams.newId);
	$scope.headerArticle = one.header;
	$scope.contentArticle = one.content;
	$scope.author = one.author;
	$scope.save = function() {
		Post.updatePost({'header' : $scope.headerArticle, 'author' : one.author,'content' : $scope.contentArticle, 'id' : one.id});
		$location.path('/');
};
}]);


postControllers.controller('AuthorCtrl', ['$scope', '$location', 'Profile', function ($scope, $location, Profile) {
	$scope.nameAuthor = Profile.getName();
	$scope.save = function() {
		Profile.setName($scope.nameAuthor);
		$location.path('/');
	};
}]);


postControllers.controller('NewCtrl', ['$scope', 'Post','Profile','$location', function ($scope, Post, Profile, $location) {
	$scope.author = Profile.getName();
	$scope.save = function() {
		var id = Post.getPost().length == 0 ? 1 : Post.getPost()[Post.getPost().length - 1].id + 1;
		Post.setPost({'header' : $scope.headerArticle, 'author' : Profile.getName(),'content' : $scope.contentArticle, 'id': id});
		$location.path('/');
	};
}]);