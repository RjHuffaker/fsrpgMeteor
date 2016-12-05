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
				template: '<pc-deck-list></pc-deck-list>'
			})
			.state('pcDeckDetails', {
				url: '/pcDecks/:deckId',
				template: '<pc-deck-details></pc-deck-details>'
			})
			.state('featureDeckList', {
				url: '/featureDeckList',
				template: '<feature-deck-list></feature-deck-list>'
			})
			.state('featureDeckView', {
				url: '/featureDeckView/:deckId',
				template: '<feature-deck-view></feature-deck-view>'
			})
			.state('featureDeckEdit', {
				url: '/featureDeckEdit/:deckId',
				template: '<feature-deck-edit></feature-deck-edit>'
			})
			.state('featureDeckNew', {
				url: '/featureDeckNew',
				template: '<feature-deck-new></feature-deck-new>'
			})
			.state('chronicleList', {
				url: '/chronicles',
				template: '<chronicle-list></chronicle-list>'
			})
			.state('chronicleDetails', {
				url: '/chronicles/:chronicleId',
				template: '<chronicle-details></chronicle-details>'
			})
			.state('forum', {
				url: '/forum',
				template: '<forum></forum>'
			})
			.state('forumCategory', {
				url: '/forum/category/:categoryId',
				template: '<forum-category></forum-category>'
			})
			.state('forumTopic', {
				url: '/forum/category/topic/:topicId',
				template: '<forum-topic></forum-topic>'
			})
			.state('forumThread', {
				url: '/forum/category/topic/thread/:threadId',
				template: '<forum-thread></forum-thread>'
			})
			
			.state('npcDeck', {
				url: '/npcDeck',
				templateUrl: paths.npcModule.views+'npc-deck.ng.html',
				controller: 'NpcDeckCtrl'
			})
			
			.state('profileDetails', {
				url: '/profile',
				templateUrl: paths.profileModule.views+'profile-details.ng.html'
			});

		$urlRouterProvider.otherwise('/');
		
	}]);