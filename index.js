var app = angular.module('CommentApp', []);

app.controller('PostController', function($scope) {

				// tie the view to ngModule which saves the JSON to localStorage
    		$scope.comments = localStorage.getItem("comments");
				$scope.comments = (localStorage.getItem('comments')!==null) ? JSON.parse($scope.comments) : [{name: "asdf",commentTxt: "hello world"},{name: "xyz",commentTxt: "lorem ipsum"}];
				localStorage.setItem('comments', JSON.stringify($scope.comments));
				console.log("Before submit : "+$scope.comments);

				$scope.submit = function() {
					$scope.comments.push({
						name: "Piyali",
						commentTxt: $scope.commentTxt
					});
					localStorage.setItem("comments", JSON.stringify($scope.comments));
					console.log("After submit : "+$scope.comments);
				};

});
