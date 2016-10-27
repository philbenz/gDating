(function() {

  'use strict';

  angular
    .module('datingApp.components.auth', [])
    .controller('authController', authController);

  authController.$inject = ['userService'];

  function authController(userService) {
    /*jshint validthis: true */
    const vm = this;
    vm.user = {};
    vm.newUser = {};

    vm.register = function() {
      userService.register(vm.newUser)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      });
      vm.newUser = {};
    };
  }
})();
