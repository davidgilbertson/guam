'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('guamApp.services', ['ngResource']).
  value('version', '0.1')
  .factory('UserResource', ['$resource', function($resource) {
    return $resource('/app/api/users.json', {}, {
      query: {method: 'GET', isArray: true}
    });
  }])
  .factory('UserGroupResource', ['$resource', function($resource) {
    return $resource('/app/api/userGroups.json', {}, {
      query: {method: 'GET', isArray: true}
    });
  }]);
