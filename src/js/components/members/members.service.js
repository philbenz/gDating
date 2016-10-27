(function() {

  'use strict';

  angular
    .module('datingApp.components.members')
    .service('membersService', membersService);

  membersService.$inject = ['$http'];

  function membersService($http) {
    /*jshint validthis: true */
    const baseURL = 'http://galvanize-student-apis.herokuapp.com/gdating/members';

    this.getAllMembers = function() {
      return $http.get(baseURL);
    };
  }
})();
