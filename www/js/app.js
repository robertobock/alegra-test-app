// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
    'ionic',
    'ngEnvVars',
    'pascalprecht.translate',
    'starter.controller-dashboard',
    'starter.controller-app',
    'starter.controller-addContact',
    'starter.service-contacts',
    'starter.service-constants',
    'starter.service-popups',
    'starter.directive-item'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function(
    $stateProvider,
    $urlRouterProvider,
    $translateProvider) {

    $translateProvider
    .useStaticFilesLoader({
      prefix: 'locales/',
      suffix: '.json'
    })
    .registerAvailableLanguageKeys(['en', 'es'], {
      'en' : 'en', 'en_GB': 'en', 'en_US': 'en',
      'es' : 'es'
    })
    .preferredLanguage('en')
    .fallbackLanguage('en');
    $translateProvider.determinePreferredLanguage();
    $translateProvider.useSanitizeValueStrategy('escapeParameters');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the sidebar directive
  .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

  .state('app.dashboard', {
    url: '/all',
    views: {
      'menuContent': {
        templateUrl: './templates/all-contacts.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('app.clients', {
    url: '/clients',
    views: {
      'menuContent': {
        templateUrl: './templates/clients-contact.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('app.providers', {
    url: '/providers',
    views: {
      'menuContent': {
        templateUrl: './templates/providers-contact.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('app.addContact', {
    url: '/add-contact',
    views: {
      'menuContent': {
        templateUrl: './templates/add-contacts.html',
        controller: 'AddContactCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/all');

});
