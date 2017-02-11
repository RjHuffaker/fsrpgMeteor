deckMovePanel = function (doc) {
	_.extend(this, doc);
};

_.extend(deckMovePanel.prototype, {
	
	movePanel: function(slot, panel){
		
		if(this.cardMoving) return;
		
		if(slot._id === panel._id) return;
		
		var slotStart = this.getStackStart(slot._id),
			slotEnd = this.getStackEnd(slot._id),
			slotStartPrev = this.getPrev(slotStart._id),
			slotEndNext = this.getNext(slotEnd._id),
			panelStart = this.getStackStart(panel._id),
			panelEnd = this.getStackEnd(panel._id),
			panelStartPrev = this.getPrev(panelStart._id),
			panelEndNext = this.getNext(panelEnd._id);
		
		var panelStartOrder = this.getPanelOrder(panelStart._id),
			slotStartOrder = this.getPanelOrder(slotStart._id);
		
		if(panelStartOrder < slotStartOrder){
			// console.log('Panel moving right ---->');
			if(this.cardMoved.indexOf('above') > -1) return;
			if(this.cardMoved.indexOf('below') > -1) return;
			
			this.setCardMoving('right');
			
			this.setAdjacent(slotEnd, panelStart);
			this.setAdjacent(panelEnd, slotEndNext);
			this.setAdjacent(panelStartPrev, panelEndNext);
			
		} else if(slotStartOrder < panelStartOrder){
			// console.log('Panel moving left <----');
			if(this.cardMoved.indexOf('above') > -1) return;
			if(this.cardMoved.indexOf('below') > -1) return;
			
			this.setCardMoving('left');
			
			this.setAdjacent(slotStartPrev, panelStart);
			this.setAdjacent(panelEnd, slotStart);
			this.setAdjacent(panelStartPrev, panelEndNext);
			
		}
		
		this.setPanelPosition();
		
	}
	
	
});