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
        templateUrl: paths.pcModule.views+'pc-deck-list.ng.html'
      })
      .state('pcDeckDetails', {
        url: '/pcDecks/:deckId',
        templateUrl: paths.pcModule.views+'pc-deck-details.ng.html'
      })
      
      .state('featureDeckList', {
        url: '/featureDeckList',
        templateUrl: paths.featureModule.views+'feature-deck-list.ng.html'
      })
      .state('featureDeckView', {
        url: '/featureDeckView/:deckId',
        templateUrl: paths.featureModule.views+'feature-deck-view.ng.html'
      })
      .state('featureDeckEdit', {
        url: '/featureDeckEdit/:deckId',
        templateUrl: paths.featureModule.views+'feature-deck-edit.ng.html'
      })
      .state('featureDeckNew', {
        url: '/featureDeckNew',
        templateUrl: paths.featureModule.views+'feature-deck-new.ng.html'
      })
      
      .state('chronicleList', {
        url: '/chronicles',
        templateUrl: paths.chronicleModule.views+'chronicle-list.ng.html'
      })
      .state('chronicleDetails', {
        url: '/chronicles/:chronicleId',
        templateUrl: paths.chronicleModule.views+'chronicle-details.ng.html'
      })
      
      .state('npcDeck', {
        url: '/npcDeck',
        templateUrl: paths.npcModule.views+'npc-deck.ng.html',
        controller: 'NpcDeckCtrl'
      });

    $urlRouterProvider.otherwise('/');
    
  }]);