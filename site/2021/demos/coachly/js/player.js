Player = function(playerName,playerNumber,playerPosition,frame){
	
	this.name = playerName;
	this.number = playerNumber;
	this.position = playerPosition;
	this.photo = "player"+playerNumber+".jpg";
	this.frame = frame;
	
	this.tackles = 0;
	this.tacklesCompleted = 0;
	this.fouls = 0;
	this.interceptions = 0;
	
	this.passes = 0;
	this.passesCompleted = 0;
	this.crosses = 0;
	this.crossesCompleted = 0;
	this.headers = 0;
	
	this.shots = 0;
	this.goals = 0;
	this.setPieces = 0;
	
}

Player.prototype.increasePassCount = function(){
	this.passes += 1;
	return this.passes;
}

Player.prototype.increaseCompletedPassCount = function(){
	this.passesCompleted += 1;
	return this.passesCompleted;
}

Player.prototype.increaseShotCount = function(){
	this.shots += 1;
	return this.shots;
}

Player.prototype.increaseGoalCount = function(){
	this.goals += 1;
	return this.goals;
}

Player.prototype.increaseCrossCount = function(){
	this.crosses += 1;
	return this.crosses;
}

Player.prototype.increaseCompletedCrossCount = function(){
	this.crossesCompleted += 1;
	return this.crossesCompleted;
}

Player.prototype.increaseTackleCount = function(){
	this.tackles += 1;
	return this.tackles;
}

Player.prototype.increaseCompletedTackleCount = function(){
	this.tacklesCompleted += 1;
	return this.tacklesCompleted;
}

Player.prototype.increaseFoulCount = function(){
	this.fouls += 1;
	return this.fouls;
}

Player.prototype.increaseInterceptionCount = function(){
	this.interceptions += 1;
	return this.interceptions;
}

Player.prototype.increaseHeaderCount = function(){
	this.headers += 1;
	return this.headers;
}


Player.prototype.view = function(){
		/*this.template = '<div style="margin-top:'+this.frame.top+'px; margin-left:'+this.frame.left+'px;" class="player-card" id="player'+this.number+'">'+this.name+' (Passes: <span class="player'+this.number+'completedPassCount">0</span>/<span class="player'+this.number+'totalPassCount">0</span>)<br />(Shots: <span class="player'+this.number+'shotCount">0</span>)<br />(Goals: <span class="player'+this.number+'goalCount">0</span>)<br />(Crosses: <span class="player'+this.number+'completedCrossCount">0</span>/<span class="player'+this.number+'totalCrossCount">0</span>)<br />(Tackles: <span class="player'+this.number+'completedTackleCount">0</span>/<span class="player'+this.number+'totalTackleCount">0</span>)<br />(Fouls: <span class="player'+this.number+'foulCount">0</span>)<br />(Interceptions: <span class="player'+this.number+'interceptionCount">0</span>)<br />(Headers: <span class="player'+this.number+'headerCount">0</span>)</div>';*/
		
		
		this.template = '<div style="margin-top:'+this.frame.top+'px; margin-left:'+this.frame.left+'px;" class="player-card '+this.position+'" id="player'+this.number+'"  data-player-number="'+this.number+'"><div class="quick-action-container"><input type="button" class="quick-action-button short-pass-yes" value="Pass Yes" /><input type="button" class="quick-action-button short-pass-no" value="Pass No" /><input type="button" class="quick-action-button qa-header" value="Head" /></div><div class="quick-action-container qac-left"><input type="button" class="quick-action-button tackle-yes" value="Tackle Y" /><input type="button" class="quick-action-button tackle-no" value="Tackle N" /><input type="button" class="quick-action-button interception" value="Intrcptn" /></div><div class="player-profile"><img src="images/players/'+this.number+'.png" /><span class="player-number">'+this.number+'</span></div><div class="player-info"><span class="player-name">'+this.name+' ('+this.position.toUpperCase()+')</span><div class="player-stats"><span class="stat"><span class="player'+this.number+'completedTackleCount">0</span>/<span class="player'+this.number+'totalTackleCount">0</span> <span class="stat-label">Tackles</span></span><span class="stat"><span class="player'+this.number+'foulCount">0</span> <span class="stat-label">Fouls</span></span><span class="stat"><span class="player'+this.number+'interceptionCount">0</span> <span class="stat-label">Intrcptns</span></span><span class="stat"><span class="player'+this.number+'completedPassCount">0</span>/<span class="player'+this.number+'totalPassCount">0</span> <span class="stat-label">Passes</span></span><span class="stat"><span class="player'+this.number+'completedCrossCount">0</span>/<span class="player'+this.number+'totalCrossCount">0</span> <span class="stat-label">Crosses</span></span><span class="stat"><span class="player'+this.number+'headerCount">0</span> <span class="stat-label">Headers</span></span><span class="stat"><span class="player'+this.number+'shotCount">0</span> <span class="stat-label">Shots</span></span><span class="stat"><span class="player'+this.number+'goalCount">0</span> <span class="stat-label">Goals</span></span></div></div><div class="quick-action-container qac-bottom"><input type="button" class="quick-action-button cross-yes" value="Cross Yes" /><input type="button" class="quick-action-button cross-no" value="Cross No" /><input type="button" class="quick-action-button qa-shot" value="Shot" /></div></div>';
		return this.template;
}