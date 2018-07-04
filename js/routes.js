angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.ranking', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/ranking.html',
        controller: 'rankingCtrl'
      }
    }
  })

  .state('tabsController.trails', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/trails.html',
        controller: 'trailsCtrl'
      }
    }
  })

  .state('tabsController.contacts', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/contacts.html',
        controller: 'contactsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')


});