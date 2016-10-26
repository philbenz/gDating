(function() {

  'use strict';

  angular
    .module('datingApp.components.auth', [])
    .controller('authController', authController);

  authController.$inject = [''];

  function authController() {
    /*jshint validthis: true */
    const vm = this;
    vm.user = {};
    vm.newUser = {};

    // vm.onSubmit = function() {
    //   userService.login(vm.user)
    //   .then((user) => {
    //     localStorage.setItem('token', user.data.token);
    //   });
    //   vm.user = {};
    // };
    //
    // vm.register = function() {
    //   userService.register(vm.newUser)
    //   .then((user) => {
    //     localStorage.setItem('token', user.data.token);
    //   });
    //   vm.newUser = {};
    // };
  }
})();
