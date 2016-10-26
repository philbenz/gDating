(function() {

  'use strict';

  angular
    .module('datingApp.components.profile', [])
    .controller('profileController', profileController);

  profileController.$inject = [''];

  function profileController() {
    /*jshint validthis: true */
    const vm = this;
    vm.user = {};
    vm.newUser = {};
  }
})();
