define(function(require){
	var UserLoginForm = require("DOM/Form/UserLoginForm");
	var UserCreateForm = require("DOM/Form/UserCreateForm");
	var UserReadForm	 = require("DOM/Form/UserReadForm");
	var UserUpdateForm = require("DOM/Form/UserUpdateForm");
	var UserDeleteForm = require("DOM/Form/UserDeleteForm");

	
	var BookForm	=	require("DOM/Form/BookForm");
	var CategoryForm	=	require("DOM/Form/CategoryForm");
	var ConceptForm	=	require("DOM/Form/ConceptForm");	
 
 
	var Factory = require("app/Factory/Factory");
	var FormFactory	=	function(){
		Factory.call( this, "Form" );
	};
	inherits( FormFactory, Factory);
	
	FormFactory.prototype.createProduct	=	function( className ){
		var script	=	"new " + className + this.product + "()";
		try {
			var p	=	eval( script );
			this.register( p );
			return p;
		} catch( e )	{
			console.log( this );
			console.log( e.name );
			console.log( "script:", e.message );
			console.log( script );
		}
	};
 
	return FormFactory;
});