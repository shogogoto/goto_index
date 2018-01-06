define(function(require){
	var Button = require("DOM/Button");
	var	FormFactory = require("app/FormFactory");
	
	var	LoginButton	=	function( text ){
		Button.call( this );
		this.self	=	construct( text );
		this.form	=	FormFactory.createUser();
	};
	inherits( LoginButton, Button );
	
	
	return	LoginButton;
});