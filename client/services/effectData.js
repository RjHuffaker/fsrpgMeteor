// Factory-service for providing generic game data
angular.module('freedomsworn')
	.factory('effectData', function(){
		var service = {};
		
		service.moveEffect = [
			'',
			'You may walk 1 square before the attack.',
			'You may run 1 square before the attack.',
			'You may sidestep 1 square before the attack.'
		];
		
		service.enableMove = [
			'',
			' and you may walk 1 square',
			' and you may run 1 square',
			' and you may sidestep 1 square'
		];
		
		service.forceMove = [
			'',
			' and the target is dragged 1 square',
			' and the target is shoved 1 square',
			' and if this attack deals 4 or more injury, the target is also knocked prone'
		];
		
		service.enableAction = [
			'',
			' and you or an ally within 4 squares of you may use 1 action point',
			' and you or an ally within 6 squares of you may use 2 action points',
			' and you or an ally within 8 squares of you may use 3 action points',
			' and you or an ally within 10 squares of you may use 4 action points',
			' and you or an ally within 12 squares of you may use 5 action points'
		];
		
		service.negateInjury = [
			'',
			' and you or an ally within 4 squares of you may negate 1d4 injury',
			' and you or an ally within 6 squares of you may negate 1d6 injury',
			' and you or an ally within 8 squares of you may negate 1d8 injury',
			' and you or an ally within 10 squares of you may negate 1d10 injury',
			' and you or an ally within 12 squares of you may negate 1d12 injury'
		];
		
		service.forceAction = [
			'',
			' and the target must use 1 action point in a manner of your choosing',
			' and the target must use 2 action points in a manner of your choosing',
			' and the target must use 3 action points in a manner of your choosing',
			' and the target must use 4 action points in a manner of your choosing',
			' and the target must use 5 action points in a manner of your choosing'
		];
		
		service.attackCurse = [
			'',
			' and the target suffers 1d4 injury the first '+
			'time it attacks you within the next 4 seconds',
			' and the target suffers 1d6 injury the first '+
			'time it attacks you within the next 5 seconds',
			' and the target suffers 1d8 injury the first '+
			'time it attacks you within the next 6 seconds',
			' and the target suffers 1d10 injury the first '+
			'time it attacks you within the next 7 seconds',
			' and the target suffers 1d12 injury the first '+
			'time it attacks you within the next 8 seconds'
		];
		
		service.expelCurse = [
			'',
			' and the target suffers 1d4 injury if it still occupies '+
			'the area of this attack after exactly 8 seconds',
			' and the target suffers 1d6 injury if it still occupies '+
			'the area of this attack after exactly 7 seconds',
			' and the target suffers 1d8 injury if it still occupies '+
			'the area of this attack after exactly 6 seconds',
			' and the target suffers 1d10 injury if it still occupies '+
			'the area of this attack after exactly 5 seconds',
			' and the target suffers 1d12 injury if it still occupies '+
			'the area of this attack after exactly 4 seconds'
		];
		
		service.trapCurse = [
			'',
			' and the target suffers 1d4 injury the first time that it '+
			'leaves the area of this attack within the next 4 seconds',
			' and the target suffers 1d6 injury the first time that it '+
			'leaves the area of this attack within the next 5 seconds',
			' and the target suffers 1d8 injury the first time that it '+
			'leaves the area of this attack within the next 6 seconds',
			' and the target suffers 1d10 injury the first time that it '+
			'leaves the area of this attack within the next 7 seconds',
			' and the target suffers 1d12 injury the first time that it '+
			'leaves the area of this attack within the next 8 seconds'
		];
		
		return service;
	});