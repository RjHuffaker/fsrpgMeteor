angular.module('freedomsworn')
	.component('fsTableRow', {
		templateUrl: '/client/fsTable/components/fs-table-row.html',
		controllerAs: 'vm',
		bindings: {
			card: '=',
			deckType: '=',
			shownColumns: '='
		},
		controller($scope, $reactive, dataSrvc, deckDependencies) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.dataSrvc = dataSrvc;
			this.deckDependencies = deckDependencies;
			
			this.totalWidth = function(shownColumns){
				var _total = 54;
				
				var recursiveCheck = function(obj){
					for(var key in obj.nodes){
						if(obj.nodes.hasOwnProperty(key)){
							var node = obj.nodes[key];
							if(node.shown){
								if(node.width){
									_total += node.width;
								}
								recursiveCheck(node);
							}
						}
					}
				};
				
				if(this.shownColumns) recursiveCheck(this.shownColumns);
				
				return _total;
			};
			
		}
	});