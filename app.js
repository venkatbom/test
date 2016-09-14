"use strict";

angular.module('main',[])
    .controller('MainController', function($scope,$http) {
        var gitHubUrl;
        var onLoadComplete = function(response) {
            $scope.repos = response.data;
        };
        var onError = function(response) {
            $scope.repos = response.data;
        };
        $scope.getGithubRepos = function(userName) {
            gitHubUrl = "https://api.github.com/users/" + userName  +"/repos";
            $http.get(gitHubUrl)
             .then(onLoadComplete,onError);
        };
        
});