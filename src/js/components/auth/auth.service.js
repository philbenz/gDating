(function() {

  'use strict';

  angular
    .module('datingApp.components.auth')
    .service('userService', userService);

  userService.$inject = ['$http'];

  function userService($http) {
    /*jshint validthis: true */
    const vm = this;
    const baseURL = 'http://galvanize-student-apis.herokuapp.com/gdating/';

    vm.login = function(user) {
      return $http({
        method: 'POST',
        url: baseURL + '/auth/login',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };

    vm.register = function(user) {
      return $http({
        method: 'POST',
        url: baseURL + '/auth/register',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }
})();
