(function() {
  'use strict';

    angular.module('app')
      .controller('myprofileController', myprofileController);

    myprofileController.$inject = [];
    function myprofileController() {
      var vm = this;
      vm.message = 'myprofile';
    }
})();
