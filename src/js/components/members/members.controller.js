(function() {

  'use strict';

  angular
    .module('datingApp.components.members', [])
    .controller('membersController', membersController);

  membersController.$inject = ['$scope'];

  function membersController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
  }

})();
