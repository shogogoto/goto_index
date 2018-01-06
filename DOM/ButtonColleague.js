define(function(require){
	var Button = require("DOM/Button");
	var FormFactory	=	require("app/FormFactory");
	
	var	ButtonColleague	=	function( text, className ){
		Button.call(this, text);
		
		var factory	=	new FormFactory();
		this.form	=	factory.createForm( className );
	};
	inherits( ButtonColleague, Button );
	
	ButtonColleague.prototype.update	=	function(){
		this.mediator.colleagueChanged( this );
	};
	
	ButtonColleague.prototype.setMediator	=	function( mediator ){
		this.mediator	=	mediator;
	};
	
	return	ButtonColleague;
});