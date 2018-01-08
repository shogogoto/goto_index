define(function(require){

	var UserForm	=	require("DOM/Form/UserForm");
	var UserCreateForm = require("DOM/Form/UserCreateForm");
	var BookForm	=	require("DOM/Form/BookForm");
	var CategoryForm	=	require("DOM/Form/CategoryForm");
	var ConceptForm	=	require("DOM/Form/ConceptForm");	
	
	//var RootMenu = require("DOM/Menu/RootMenu");
	//var UserMenu = require("DOM/Menu/UserMenu");
	
	
	var Factory	=	function( product ){
		this.product	=	product;
		this.member	=	[];
	};

	//evalのスコープはそのevalによって評価された関数と同じ
	//prototypeチェーンを遡った場合、
	//
	Factory.prototype.createProduct	=	function( className ){
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

	Factory.prototype.register	=	function( product ){
		this.member.push( product );
	};
	
	Factory.prototype.getMember	=	function(){
		return	this.member;
	};
 
 
	return Factory;
});