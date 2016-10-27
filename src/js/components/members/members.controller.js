(function() {

  'use strict';

  angular
    .module('datingApp.components.members', [])
    .controller('membersController', membersController);

  membersController.$inject = ['membersService'];

  function membersController(membersService) {
    /*jshint validthis: true */
    this.greeting = 'Hello in the members arena!';
    membersService.getAllMembers()
    .then((members) => {
      console.log('here are the members: ', members);
    });
  }
})();
