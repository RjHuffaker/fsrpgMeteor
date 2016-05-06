'use strict';

// Factory-service for managing card-deck, card-slot and card-panel directives.
angular.module('freedomsworn').factory('toggleOverlap', ['$rootScope', 'CoreVars', 'PanelUtils', 'setPanelPosition',
    function($rootScope, CoreVars, PanelUtils, setPanelPosition){
        
        return function(cardList, panelId, nearest){
            
            if(CoreVars.dropdownOpen) return;
            
            if(nearest === 'higher' || nearest === 'lower') return;
            if(CoreVars.cardMoving || CoreVars.cardMoved.length) return;
            
            // console.log('toggleOverlap: '+nearest);
            
            var _curr = PanelUtils.getPanel(cardList, panelId);
            var _prev = PanelUtils.getPrev(cardList, panelId);
            var _next = PanelUtils.getNext(cardList, panelId);
            var _start = PanelUtils.getStackStart(cardList, panelId);
            var _startPrev = PanelUtils.getPrev(cardList, _start._id);
            
            CoreVars.setCardMoving('overlap');
            
            if(_curr.below.overlap && (nearest === 'above' || nearest === 'right')){
                PanelUtils.setAdjacentVertical(_curr, _next);
            } else if(_curr.below.adjacent && !_start.left.overlap){
                PanelUtils.setOverlapVertical(_curr, _next);
            }
            
            if(_start.left.overlap){
                PanelUtils.setAdjacentHorizontal(_startPrev, _start);
            } else if(_start.left.adjacent){
                if(!PanelUtils.hasBelow(_curr) || (nearest === 'below' || nearest === 'left')){
                    PanelUtils.setOverlapHorizontal(_startPrev, _start);
                }
            }
            
            setPanelPosition(cardList);
            $rootScope.$digest();
            CoreVars.cardMoved.length = 0;
        };
        
    }]);