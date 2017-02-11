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
				template: '<pc-deck-list class="inline-flex fill-parent"></pc-deck-list>'
			})
			.state('pcDeckDetails', {
				url: '/pcDecks/:deckId',
				template: '<pc-deck-details></pc-deck-details>'
			})
			
			.state('featureDeckList', {
				url: '/featureDeckList',
				template: '<feature-deck-list class="inline-flex fill-parent"></feature-deck-list>'
			})
			.state('featureDeckView', {
				url: '/featureDeckView/:deckId',
				template: '<feature-deck-view></feature-deck-view>'
			})
			.state('featureDeckEdit', {
				url: '/featureDeckEdit/:deckId',
				template: '<feature-deck-edit></feature-deck-edit>'
			})
			.state('featureDeckGrid', {
				url: '/featureDeckGrid/:deckId',
				template: '<feature-deck-grid></feature-deck-grid>'
			})
			
			.state('chronicleList', {
				url: '/chronicles',
				template: '<chronicle-list class="inline-flex fill-parent"></chronicle-list>'
			})
			.state('chronicleDetails', {
				url: '/chronicles/:chronicleId',
				template: '<chronicle-details></chronicle-details>'
			})
			
			.state('articleView', {
				url: '/articleView/:articleId',
				template: '<article-view></article-view>'
			})
			.state('articleEdit', {
				url: '/articleEdit/:articleId',
				template: '<article-edit></article-edit>'
			})
			.state('articleList', {
				url: '/articleList',
				template: '<article-list class="inline-flex fill-parent"></article-list>'
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
			
			.state('ruleSetList', {
				url: '/ruleSets',
				template: '<rule-set-list class="inline-flex fill-parent"></rule-set-list>'
			})
			.state('ruleSetEdit', {
				url: '/ruleSetEdit/:ruleSetId',
				template: '<rule-set-edit></rule-set-edit>'
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