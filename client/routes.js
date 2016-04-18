angular.module('freedomsworn').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: paths.views+'home.ng.html',
        controller: 'HomeCtrl'
      })
      
      .state('pcDeckList', {
        url: '/pcDecks',
        templateUrl: paths.pcModule.views+'pc-deck.ng.html',
        controller: 'PcDeckListCtrl'
      })
      .state('pcDeckDetails', {
        url: '/pcDecks/:pcDeckId',
        templateUrl: paths.pcModule.views+'pc-deck.ng.html',
        controller: 'PcDeckDetailsCtrl'
      })
      
      .state('featureDeckList', {
        url: '/featureDecks',
        templateUrl: paths.featureModule.views+'feature-deck.ng.html',
        controller: 'FeatureDeckListCtrl'
      })
      .state('featureDeckDetails', {
        url: '/featureDecks/:featureDeckId',
        templateUrl: paths.featureModule.views+'feature-deck.ng.html',
        controller: 'FeatureDeckDetailsCtrl'
      })
      
      .state('npcDeck', {
        url: '/npcDeck',
        templateUrl: paths.npcModule.views+'npc-deck.ng.html',
        controller: 'NpcDeckCtrl'
      });

    $urlRouterProvider.otherwise('/');
    
  }]);