'use strict';

angular
  .module('githubReposList')
  .component('githubReposList', {
    templateUrl:'github-repos-list/github-repos-list.template.html',
    controller: ['$http',
      function GithubReposListController($http) {
        var self = this;
        self.reposList = [];

        $http.get('https://api.github.com/users/wwcao/repos')
          .then(function(response) {
            self.reposList = self.reposList .concat(response.data);
          }, function(response) {
            self.reposList = self.reposList .concat(response.data);
          });

          $http.get('https://api.github.com/users/weipengcao/repos')
            .then(function(response) {
              self.reposList = self.reposList .concat(response.data);
            }, function(response) {
              self.reposList = self.reposList .concat(response.data);
            });
      }
    ]
  });
