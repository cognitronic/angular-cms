// Generated by CoffeeScript 1.6.3
(function() {
  'use strict';
  angular.module('angularCmsApp').service('cmsSessionService', [
    '$q', '$rootScope', function($q, $rootScope) {
      var userIsAuthenticated;
      userIsAuthenticated = false;
      this.setUserAuthenticated = function(value) {
        return userIsAuthenticated = value;
      };
      return this.getUserAuthenticated = function() {
        return userIsAuthenticated;
        return this;
      };
    }
  ]);

}).call(this);

/*
//@ sourceMappingURL=cmsSessionService.map
*/
