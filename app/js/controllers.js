'use strict';

/* Controllers */

angular.module('guamApp.controllers', [])
  .controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(path) {
      return $location.path() === path;
    };
  }])
  .controller('UserCtrl', ['$scope', function($scope) {
    $scope.users = [
      {firstName: 'David', lastName: 'Gilbertson'},
      {firstName: 'Kelly', lastName: 'Gaudry'}
    ];
    $scope.userGroups = [
      {name: 'Administrators'},
      {name: 'Finance Persons'}
    ];
  }])
  .controller('SettingsCtrl', [function() {

  }]);
