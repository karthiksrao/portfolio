$(function(){
	
	// Global
	var selectedPlayer = -1;
	
	// Players
	var goalKeeper = new Player("David de Gea",1,"gk",{"top":"360","left":"60"});
	var leftBack = new Player("Marcos Rojo",5,"lb",{"top":"75","left":"100"});
	var centerLeftBack = new Player("Daley Blind",17,"lcb",{"top":"260","left":"100"});
	var centerRightBack = new Player("Michael Carrick",16,"rcb",{"top":"455","left":"100"});
	var rightBack = new Player("Guillermo Varela",30,"rb",{"top":"645","left":"100"});
	var leftCDM = new Player("M Schneiderlin",28,"lcdm",{"top":"220","left":"400"});
	var rightCDM = new Player("Ander Herrera",21,"rcdm",{"top":"495","left":"400"});
	var leftMidfield = new Player("Memphis Depay",7,"lm",{"top":"75","left":"600"});
	var centerMidfield = new Player("Juan Mata",8,"cm",{"top":"360","left":"600"});
	var rightMidfield = new Player("Jesse Lingard",35,"rm",{"top":"645","left":"600"});
	var centerForward = new Player("Marcus Rashford",39,"cf",{"top":"360","left":"895"});
	
	var players = [leftBack,centerLeftBack,centerRightBack,rightBack,leftCDM,rightCDM,leftMidfield,centerMidfield,rightMidfield,centerForward];
	
	$(players).each(function(index){
		var playerNumber = this.number;
		$("body").append(this.view());
		$("#player"+this.number).click(function(){
			selectedPlayer = players[index];
		})
	});
	
	
	var overlay_triggers = ['.player-card','#passTrigger','#shotTrigger','#goalTrigger','#crossTrigger','#tackleTrigger','#foulTrigger','#cautionTrigger','#substitutionTrigger'];
	var overlays = ['#master-event-overlay','#pass-event-overlay','#shot-event-overlay','#goal-event-overlay','#cross-event-overlay','#tackle-event-overlay','#foul-event-overlay','#caution-event-overlay','#substitution-event-overlay'];
	
	$(overlay_triggers).each(function(index){
		// register overlays
		$(overlay_triggers[index]).magnificPopup({
			items: {
				src: overlays[index],
				type: 'inline'
			},
			callbacks:{
				beforeOpen: function(){ $('#master-event-overlay .overlay-title').html('#'+selectedPlayer.number+' - '+selectedPlayer.name); $.magnificPopup.close(); }	
			}
		});
	});
	
	
	
	window.tempEvent = -1;
	
	$('.option-button').click(function(){
		var trigger = $(this);
		var trigger_id = trigger.attr('id');
		
		
		if(selectedPlayer != -1){
			
			// Passes
			if(trigger_id == 'captureShortPass' || trigger_id == 'captureLongPass'){
				$('#captureShortPass,#captureLongPass').removeClass('selected');
				window.tempEvent = 'short pass';
				if(trigger_id == 'captureLongPass') window.tempEvent = 'long pass';
				trigger.addClass('selected');
			}
			if(trigger_id == 'passSuccessful'){
				$(".player"+selectedPlayer.number+"completedPassCount").html(selectedPlayer.increaseCompletedPassCount());
				$(".player"+selectedPlayer.number+"totalPassCount").html(selectedPlayer.increasePassCount());
				$('#captureShortPass,#captureLongPass').removeClass('selected');
				$.magnificPopup.close();
				console.log('#'+selectedPlayer.number+' '+window.tempEvent+' successful');
			}
			else if(trigger_id == 'passUnsuccessful'){
				$(".player"+selectedPlayer.number+"totalPassCount").html(selectedPlayer.increasePassCount());
				$('#captureShortPass,#captureLongPass').removeClass('selected');
				$.magnificPopup.close();
				console.log('#'+selectedPlayer.number+' '+window.tempEvent+' unsuccessful');
			}
			
			
			// Shots
			if(trigger_id == 'captureShortRangeShot' || trigger_id == 'captureLongRangeShot'){
				$('#captureShortRangeShot,#captureLongRangeShot').removeClass('selected');
				window.tempEvent = 'short-range shot';
				if(trigger_id == 'captureLongRangeShot') window.tempEvent = 'long-range shot';
				trigger.addClass('selected');
			}
			if(trigger_id == 'captureLeftAngleShot' || trigger_id == 'captureStraightAngleShot' || trigger_id == 'captureRightAngleShot'){
				$('#captureLeftAngleShot,#captureStraightAngleShot,#captureRightAngleShot').removeClass('selected');
				if(trigger_id == 'captureLeftAngleShot') window.tempEvent += ' from left';
				if(trigger_id == 'captureStraightAngleShot') window.tempEvent += ' straight';
				if(trigger_id == 'captureRightAngleShot') window.tempEvent += ' from right';
				trigger.addClass('selected');
			}
			if(trigger_id == 'rightLegShot' ||trigger_id == 'leftLegShot' || trigger_id == 'headShot' || trigger_id == 'otherShot' ){
				$(".player"+selectedPlayer.number+"shotCount").html(selectedPlayer.increaseShotCount());
				$('#captureShortRangeShot,#captureLongRangeShot,#captureLeftAngleShot,#captureStraightAngleShot,#captureRightAngleShot').removeClass('selected');
				$.magnificPopup.close();
				var bodyPart = 'right leg';
				if(trigger_id == 'leftLegShot') { bodyPart = 'left leg';}
				if(trigger_id == 'headShot') { bodyPart = 'head';}
				if(trigger_id == 'otherShot') { bodyPart = 'other';}
				console.log('#'+selectedPlayer.number+' '+window.tempEvent+' with '+bodyPart);
			}
			
			
			// Goals
			if(trigger_id == 'captureShortRangeGoal' || trigger_id == 'captureLongRangeGoal'){
				$('#captureShortRangeGoal,#captureLongRangeGoal').removeClass('selected');
				window.tempEvent = 'short-range goal';
				if(trigger_id == 'captureLongRangeGoal') window.tempEvent = 'long-range goal';
				trigger.addClass('selected');
			}
			if(trigger_id == 'captureLeftAngleGoal' || trigger_id == 'captureStraightAngleGoal' || trigger_id == 'captureRightAngleGoal'){
				$('#captureLeftAngleGoal,#captureStraightAngleGoal,#captureRightAngleGoal').removeClass('selected');
				if(trigger_id == 'captureLeftAngleGoal') window.tempEvent += ' from left';
				if(trigger_id == 'captureStraightAngleGoal') window.tempEvent += ' straight';
				if(trigger_id == 'captureRightAngleGoal') window.tempEvent += ' from right';
				trigger.addClass('selected');
			}
			if(trigger_id == 'rightLegGoal' ||trigger_id == 'leftLegGoal' || trigger_id == 'headGoal' || trigger_id == 'otherGoal' ){
				$(".player"+selectedPlayer.number+"goalCount").html(selectedPlayer.increaseGoalCount());
				$('#captureShortRangeGoal,#captureLongRangeGoal,#captureLeftAngleGoal,#captureStraightAngleGoal,#captureRightAngleGoal').removeClass('selected');
				$.magnificPopup.close();
				var bodyPart = 'right leg';
				if(trigger_id == 'leftLegGoal') { bodyPart = 'left leg';}
				if(trigger_id == 'headGoal') { bodyPart = 'head';}
				if(trigger_id == 'otherGoal') { bodyPart = 'other';}
				console.log('#'+selectedPlayer.number+' '+window.tempEvent+' with '+bodyPart);
			}
			
			
			// Crosses
			if(trigger_id == 'captureShortCross' || trigger_id == 'captureLongCross'){
				$('#captureShortCross,#captureLongCross').removeClass('selected');
				window.tempEvent = 'short cross';
				if(trigger_id == 'captureLongCross') window.tempEvent = 'long cross';
				trigger.addClass('selected');
			}
			if(trigger_id == 'crossSuccessful'){
				$(".player"+selectedPlayer.number+"completedCrossCount").html(selectedPlayer.increaseCompletedCrossCount());
				$(".player"+selectedPlayer.number+"totalCrossCount").html(selectedPlayer.increaseCrossCount());
				$('#captureShortCross,#captureLongCross').removeClass('selected');
				$.magnificPopup.close();
				console.log('#'+selectedPlayer.number+' '+window.tempEvent+' successful');
			}
			else if(trigger_id == 'crossUnsuccessful'){
				$(".player"+selectedPlayer.number+"totalCrossCount").html(selectedPlayer.increaseCrossCount());
				$('#captureShortCross,#captureLongCross').removeClass('selected');
				$.magnificPopup.close();
				console.log('#'+selectedPlayer.number+' '+window.tempEvent+' unsuccessful');
			}
			
			
			// Tackles
			if(trigger_id == 'captureStandingTackle' || trigger_id == 'captureSlidingTackle' || trigger_id == 'captureLastManTackle'){
				$('#captureStandingTackle,#captureSlidingTackle,#captureLastManTackle').removeClass('selected');
				if(trigger_id == 'captureStandingTackle') window.tempEvent = 'standing tackle';
				if(trigger_id == 'captureSlidingTackle') window.tempEvent = 'sliding tackle';
				if(trigger_id == 'captureLastManTackle') window.tempEvent = 'last-man tackle';
				trigger.addClass('selected');
			}
			if(trigger_id == 'tackleSuccessful'){
				$(".player"+selectedPlayer.number+"completedTackleCount").html(selectedPlayer.increaseCompletedTackleCount());
				$(".player"+selectedPlayer.number+"totalTackleCount").html(selectedPlayer.increaseTackleCount());
				$('#captureStandingTackle,#captureSlidingTackle,#captureLastManTackle').removeClass('selected');
				$.magnificPopup.close();
				console.log('#'+selectedPlayer.number+' '+window.tempEvent+' successful');
			}
			else if(trigger_id == 'tackleUnsuccessful'){
				$(".player"+selectedPlayer.number+"totalTackleCount").html(selectedPlayer.increaseTackleCount());
				$('#captureStandingTackle,#captureSlidingTackle,#captureLastManTackle').removeClass('selected');
				$.magnificPopup.close();
				console.log('#'+selectedPlayer.number+' '+window.tempEvent+' unsuccessful');
			}
			
			
			
			// Fouls
			if(trigger_id == 'captureTackleFoul' || trigger_id == 'captureKickFoul' || trigger_id == 'captureTripFoul' || trigger_id == 'captureJumpFoul' || trigger_id == 'captureChargeFoul' || trigger_id == 'capturePushFoul' || trigger_id == 'captureHoldFoul' || trigger_id == 'captureSpitFoul' || trigger_id == 'captureHandleFoul'){
				$('.option-type-capture').removeClass('selected');
				window.tempEvent = 'foul (tackle)';
				if(trigger_id == 'captureKickFoul') window.tempEvent = 'foul (kick)';
				if(trigger_id == 'captureTripFoul') window.tempEvent = 'foul (trip)';
				if(trigger_id == 'captureJumpFoul') window.tempEvent = 'foul (jump)';
				if(trigger_id == 'captureChargeFoul') window.tempEvent = 'foul (charge)';
				if(trigger_id == 'capturePushFoul') window.tempEvent = 'foul (push)';
				if(trigger_id == 'captureHoldFoul') window.tempEvent = 'foul (hold)';
				if(trigger_id == 'captureSpitFoul') window.tempEvent = 'foul (spit)';
				if(trigger_id == 'captureHandleFoul') window.tempEvent = 'foul (handle)';
				trigger.addClass('selected');
			}
			if(trigger_id == 'directFreeKick' || trigger_id == 'indirectFreeKick' || trigger_id == 'penaltyKick'){
				var foul_result = 'direct free kick';
				if(trigger_id == 'indirectFreeKick') foul_result = 'indirect free kick';
				if(trigger_id == 'penaltyKick') foul_result = 'penalty kick';
				$(".player"+selectedPlayer.number+"foulCount").html(selectedPlayer.increaseFoulCount());
				$('.option-type-capture').removeClass('selected');
				$.magnificPopup.close();
				console.log('#'+selectedPlayer.number+' committed a '+window.tempEvent+' resulting in a '+foul_result);
			}
			
			
			// Interceptions
			if(trigger_id == 'interceptionTrigger'){
				window.tempEvent = 'intercepted the ball';
				$(".player"+selectedPlayer.number+"interceptionCount").html(selectedPlayer.increaseInterceptionCount());
				$.magnificPopup.close();
				console.log('#'+selectedPlayer.number+' '+window.tempEvent);
			}
			
			
			// Headers
			if(trigger_id == 'headerTrigger'){
				window.tempEvent = 'headed the ball';
				$(".player"+selectedPlayer.number+"headerCount").html(selectedPlayer.increaseHeaderCount());
				$.magnificPopup.close();
				console.log('#'+selectedPlayer.number+' '+window.tempEvent);
			}
			
			
			// Caution
			if(trigger_id == 'verbalCaution' || trigger_id == 'yellowCard' || trigger_id == 'redCard'){
				window.tempEvent = 'given a verbal caution';
				if(trigger_id == 'yellowCard') window.tempEvent = 'shown a yellow card';
				if(trigger_id == 'redCard') window.tempEvent = 'shown a red card';
				$.magnificPopup.close();
				console.log('#'+selectedPlayer.number+' '+window.tempEvent);
			}
			
			
			// Substitution
			if(trigger_id == 'tacticalSubstitution' || trigger_id == 'tiredSubstitution' || trigger_id == 'injurySubstitution'){
				window.tempEvent = 'substituted for tactical reasons';
				if(trigger_id == 'tiredSubstitution') window.tempEvent = 'substituted because he was tired';
				if(trigger_id == 'injurySubstitution') window.tempEvent = 'substituted because of injury';
				$.magnificPopup.close();
				console.log('#'+selectedPlayer.number+' '+window.tempEvent);
			}
			
			console.log('#player'+trigger_id);
			$('#player'+trigger_id).toggleClass('pulse animated');
			
		} // selectedPlayer != -1
			
	});
	
	
	
	
	$('.quick-action-button').click(function(){
		var trigger = $(this);
		var player_number = $(this).parents('.player-card').attr('data-player-number');
		
		$(players).each(function(index){
			if(this.number == player_number){
				selectedPlayer = players[index];
				return;
			}
		});
		
		if(trigger.hasClass('short-pass-yes')){
			window.tempEvent = 'short pass';
			$(".player"+selectedPlayer.number+"completedPassCount").html(selectedPlayer.increaseCompletedPassCount());
			$(".player"+selectedPlayer.number+"totalPassCount").html(selectedPlayer.increasePassCount()).parents('.stat').addClass('pulse animated');
			console.log('#'+selectedPlayer.number+' '+window.tempEvent+' successful');
		}
		else if(trigger.hasClass('short-pass-no')){
			window.tempEvent = 'short pass';
			$(".player"+selectedPlayer.number+"totalPassCount").html(selectedPlayer.increasePassCount()).parents('.stat').addClass('pulse animated');
			console.log('#'+selectedPlayer.number+' '+window.tempEvent+' unsuccessful');
		}
		else if(trigger.hasClass('qa-header')){
			window.tempEvent = 'headed the ball';
			$(".player"+selectedPlayer.number+"headerCount").html(selectedPlayer.increaseHeaderCount()).parents('.stat').addClass('pulse animated');
			console.log('#'+selectedPlayer.number+' '+window.tempEvent);
		}
		else if(trigger.hasClass('tackle-yes')){
			window.tempEvent = 'tackle';
			$(".player"+selectedPlayer.number+"completedTackleCount").html(selectedPlayer.increaseCompletedTackleCount());
			$(".player"+selectedPlayer.number+"totalTackleCount").html(selectedPlayer.increaseTackleCount()).parents('.stat').addClass('pulse animated');
			console.log('#'+selectedPlayer.number+' '+window.tempEvent+' successful');
		}
		else if(trigger.hasClass('tackle-no')){
			window.tempEvent = 'tackle';
			$(".player"+selectedPlayer.number+"totalTackleCount").html(selectedPlayer.increaseTackleCount()).parents('.stat').addClass('pulse animated');
			console.log('#'+selectedPlayer.number+' '+window.tempEvent+' unsuccessful');
		}
		else if(trigger.hasClass('interception')){
			window.tempEvent = 'intercepted the ball';
			$(".player"+selectedPlayer.number+"interceptionCount").html(selectedPlayer.increaseInterceptionCount()).parents('.stat').addClass('pulse animated');
			console.log('#'+selectedPlayer.number+' '+window.tempEvent);
		}
		else if(trigger.hasClass('cross-yes')){
			window.tempEvent = 'cross';
			$(".player"+selectedPlayer.number+"completedCrossCount").html(selectedPlayer.increaseCompletedCrossCount()).parents('.stat').addClass('pulse animated');
			$(".player"+selectedPlayer.number+"totalCrossCount").html(selectedPlayer.increaseCrossCount());
			console.log('#'+selectedPlayer.number+' '+window.tempEvent+' successful');
		}
		else if(trigger.hasClass('cross-no')){
			window.tempEvent = 'cross';
			$(".player"+selectedPlayer.number+"totalCrossCount").html(selectedPlayer.increaseCrossCount()).parents('.stat').addClass('pulse animated');
			console.log('#'+selectedPlayer.number+' '+window.tempEvent+' unsuccessful');
		}
		else if(trigger.hasClass('qa-shot')){
			$(".player"+selectedPlayer.number+"shotCount").html(selectedPlayer.increaseShotCount()).parents('.stat').addClass('pulse animated');
			console.log('#'+selectedPlayer.number+' took a shot');
		}
		
		window.setTimeout(function(){$('.stat').removeClass('pulse animated')},1000);
		
		return false;	
	});
	
	
	/* Close overlays */
	$('.close-overlay').click(function(){ $.magnificPopup.close(); });
	
	
	
});