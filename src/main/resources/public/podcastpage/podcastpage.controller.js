(function() {
  'use strict';

    angular.module('app')
      .controller('podcastpageController', podcastpageController);

    podcastpageController.$inject = [];
    function podcastpageController() {
      var vm = this;
      vm.message = 'Individual podcastpage page';
    }
})();
