(function() {
  'use strict';

    angular.module('app')
      .config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider.state('myprofile', {
          url: '/myprofile',
          templateUrl: 'myprofile/myprofile.html',
          controller: 'myprofileController',
          controllerAs: 'myprofile'
        });
        
      $stateProvider.state('podcastpage', {
          url: '/podcastpage',
          templateUrl: 'podcastpage/podcastpage.html',
          controller: 'podcastpageController',
          controllerAs: 'podcastpage'
        });
        
        $stateProvider.state('login', {
          url: '/login',
          templateUrl: 'login/login.html',
          controller: 'loginController',
          controllerAs: 'login'
        });
        
       $stateProvider.state('home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'homeController',
          controllerAs: 'home'
        });
        
        $stateProvider.state('about', {
          url: '/about',
          views: {
            '': {
              templateUrl: 'about/about.html',
              controller: 'aboutController',
              controllerAs: 'about'
            },
            'view1@about': {
              templateUrl: 'about/views/about-view1.html',
            },
            'view2@about': {
              templateUrl: 'about/views/about-view2.html',
            },
            'view3@about': {
              templateUrl: 'about/views/about-view3.html',
            },
          }
        });
        $stateProvider.state('contact', {
          url: '/contact',
          templateUrl: 'contact/contact.html',
          controller: 'contactController',
          controllerAs: 'contact'

        });
    };

})();
