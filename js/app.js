var postApp = angular.module('postApp', [
	'ngRoute',
	'postControllers',
	'profileServices'
]);

postApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'templates/front-page.html',
				controller: 'PostListCtrl'
			})
			.when('/author', {
				templateUrl:'templates/user.html',
				controller:'AuthorCtrl'
			})
			.when('/post/:newId', {
				templateUrl: 'templates/post.html',
				controller: 'PostDetailCtrl',
				controllerAs: 'PostDetailCtrl'
			})
			.when('/edit/:newId', {
				templateUrl: 'templates/edit-post.html',
				controller: 'EditDetailCtrl'
			})
			.when('/new', {
				templateUrl: 'templates/edit-post.html',
				controller: 'NewCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);