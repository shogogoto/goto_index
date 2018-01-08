define(function(require){
	var RootMenu = require("DOM/Menu/RootMenu");
	var UserMenu = require("DOM/Menu/UserMenu");
	
	//var Factory = require("app/Factory/Factory");
	var MenuFactory	=	function(){
		//Factory.call( this, "Menu" );
		this.product	=	"Menu";
		this.member		=	[];
	};
	//inherits( MenuFactory, Factory );
	//リフレクション
	MenuFactory.prototype.createProduct	=	function( className ){
		var script	=	"new " + className + this.product + "()";
		try {
			var p	=	eval( script );
			this.register( p );
			return p;
		} catch( e )	{
			console.log( e.name );
			console.log( "script:", e.message );
			console.log( script );
		}
	};


	MenuFactory.prototype.register	=	function( product ){
		this.member.push( product );
	};
	
	MenuFactory.prototype.getMember	=	function(){
		return	this.member;
	};
	return MenuFactory;
});