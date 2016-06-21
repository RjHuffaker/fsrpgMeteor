// Service to set the position of each card in a deck
angular.module('freedomsworn').factory('setPanelPosition',
	function($rootScope, CoreVars, PanelUtils){
		'ngInject';

		return function(cardList){
			
			if(cardList.length === 0) return;
			
			var _curr = PanelUtils.getFirst(cardList);
			var _next;
			var _last = PanelUtils.getLast(cardList);
			
			var _continue = true;
			var _count = 0;
			var _length = cardList.length;
			
			var _x_next = 0;
			var _y_next = 0;
			var _z_next = _length * 100;
			
			while( _continue ){
				if( PanelUtils.hasNext(_curr) && _count < _length ){
					
					_curr.x_coord = _x_next;
					_curr.y_coord = _y_next;
					_curr.z_coord = _z_next;
					
					if(_curr.below){
						_next = PanelUtils.getPanel(cardList, _curr.below);
						_y_next += 3;
						_x_next += _curr.x_dim;
						_x_next -= _next.x_dim;
						_z_next++;
					} else if(_curr.right){
						_next = PanelUtils.getPanel(cardList, _curr.right);
						_x_next += _curr.x_dim;
						_y_next = 0;
						_z_next++;
					}
					
					_curr = _next;
					_count++;
					
				} else if( !PanelUtils.hasNext(_curr) && _count === _length-1 ){
					_continue = false;
					_last.x_coord = _x_next;
					_last.y_coord = _y_next;
					_last.z_coord = _z_next;
				} else {
					_continue = false;
					// _last.x_coord = -_last.x_dim;
					// _last.y_coord = -_last.y_dim;
					
					console.log('Error: setPanelPosition');
					console.log('current: ', _curr);
					console.log('last: ', _last);
					
				}
			}
			
			//$rootScope.$digest();
		};
	});