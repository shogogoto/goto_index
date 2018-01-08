define(function(require){
	var Button = require("DOM/Button/Button");
	var FormFactory	=	require("app/Factory/Factory");
	
	var	ButtonColleague	=	function( text, className ){
		Button.call(this, text);
		
		var factory	=	new FormFactory("Form");
		this.form	=	factory.createProduct( className );
	};
	inherits( ButtonColleague, Button );
	
	ButtonColleague.prototype.controlColleague	=	function(){
		this.mediator.colleagueChanged( this );
	};
	
	ButtonColleague.prototype.setMediator	=	function( mediator ){
		this.mediator	=	mediator;
	};
	
	return	ButtonColleague;
});