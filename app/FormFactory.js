define(function(require){
	var UserForm	=	require("DOM/Form/UserForm");
	var BookForm	=	require("DOM/Form/BookForm");
	var CategoryForm	=	require("DOM/Form/CategoryForm");
	var ConceptForm	=	require("DOM/Form/ConceptForm");
	var Button = require("DOM/Button");
	
	var FormFactory	=	function(){
		this.forms	=	[];
	};
	
	//リフレクション
	FormFactory.prototype.createForm	=	function( className ){
		var text	=	"new " + className + "Form()";
		var f	=	eval( text );
		this.register( f );
		return f;
	};
	
	FormFactory.prototype.register	=	function( form ){
		this.forms.push( form );
	};
	
	FormFactory.prototype.getForms	=	function(){
		return	this.forms;
	};
 
 
	return FormFactory;
});
