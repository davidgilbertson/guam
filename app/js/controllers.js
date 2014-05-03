'use strict';

/* Controllers */

angular.module('guamApp.controllers', [])
  .controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.navItems = [
      {name: 'Home', path: '/'},
      {name: 'Settings', path: '/settings'},
      {name: 'Help', path: '/help'}
    ];
    $scope.isActive = function(path) {
      return $location.path() === path;
    };
  }])
  .controller('UserCtrl', ['$scope',
                           '$resource',
                           'UserResource',
                           'UserGroupResource', 
                           function($scope, $resource, UserResource, UserGroupResource) {
    UserResource.query(function(data) {
      $scope.users = data;
    });
    
    UserGroupResource.query(function(data) {
      $scope.userGroups = data;
    });
  }])
  .controller('SettingsCtrl', [function() {

  }]);
