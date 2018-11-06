define(function(require){
	var Button = require("DOM/Button/Button");
	var	ColleagueButton	=	function( text, iDoc ){
		Button.call(this, text);
		this.setMember( iDoc );
	};
	inherits( ColleagueButton, Button );
	
	//set 変数
	//add　配列
	//append　DOM
	
	ColleagueButton.prototype.controlColleague	=	function(){
		this.mediator.colleagueChanged( this );
	};
	
	ColleagueButton.prototype.setMediator	=	function( mediator ){
		this.mediator	=	mediator;
	};
	
	return	ColleagueButton;
});