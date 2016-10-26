// sample angular code

(function() {

  'use strict';

  angular
    .module('datingApp', [
      'datingApp.config',
      'datingApp.components.auth',
      'datingApp.components.members',
      'datingApp.components.profile',
      'datingApp.components.search',
      'ui.router'
    ]);
})();
