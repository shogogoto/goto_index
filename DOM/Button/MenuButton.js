//Menuを表示するボタン
define(function(require){
	var Button = require("DOM/Button/Button");
	var MenuFactory	=	require("app/MenuFactory");
	
	var	MenuButton	=	function( text, className ){
		Button.call(this, text);
		
		var factory	=	new MenuFactory();
		this.form	=	factory.createMenu( className );
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