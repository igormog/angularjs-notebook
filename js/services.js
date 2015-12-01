var profileServices = angular.module('profileServices', ['ngResource']);


profileServices.factory('Post', function($http) {

	var post = null;
	$http.get('data.json')
		.success(function(response) {
			post = response;
		})
		.error(function (result) {
			console.log('Error http.get');
	});

	function getPost() {
		return post;
	}

	function getOne(id) {
		var one = {};
		angular.forEach(post, function(event) {
			if (event.id == id) one = event;
		});
		return one;
	}

	function setPost(article) {
		post.push(article)
	}

	function destroy(destroyable) {
		var oldPost = post;
		post = [];
		angular.forEach(oldPost, function(event) {
			if (event.id != destroyable) post.push(event);
		});
	}

	function updatePost(article) {
		angular.forEach(post, function(event) {
			if (event.id == article.id) {
				event.header = article.header;
				event.content = article.content;
			};
		});
	}

	return {
		getPost : getPost,
		setPost : setPost,
		destroy : destroy,
		getOne : getOne,
		updatePost : updatePost
	}

});


profileServices.factory('Profile', function(){
	var author = "Anonymous";

	function getName()  {
		return author;
	}

	function setName(name){
		author = name;
	}

	return {
		getName : getName,
		setName : setName
	}
});