'use strict';


// Declare app level module which depends on filters, and services
angular.module('guamApp', [
  'ngRoute',
  'guamApp.filters',
  'guamApp.services',
  'guamApp.directives',
  'guamApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/main.html', controller: 'UserCtrl'});
  $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'SettingsCtrl'});
  $routeProvider.when('/help', {templateUrl: 'partials/help.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
