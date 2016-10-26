(function() {

  'use strict';

  angular
    .module('datingApp.config', ['ui.router'])
    .config(appConfig);

  function appConfig($stateProvider) {
    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'js/components/auth/auth.login.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/components/auth/auth.register.html',
      controller: 'authController',
      controllerAs: 'authCtrl'
    })
    .state('home', {
      url: '/',
      templateUrl: 'js/components/main/main.view.html',
    });
  }
})();
