define(function(require){
	var UserForm	=	require("DOM/UserForm");
	var BookForm	=	require("DOM/BookForm");
	var CategoryForm	=	require("DOM/CategoryForm");
	
	var FormFactory	=	function(){
		this.forms	=	[];
	};
	
	FormFactory.prototype.createBook	=	function( action, method ){
		var f	= new BookForm( action, method );
		this.register( f );
		return f;
	};
	
	FormFactory.prototype.createUser	=	function(	action, method ){
		return new UserForm( action, method );
	};
 
 	FormFactory.prototype.createCategory	=	function(	action, method ){
		return new CategoryForm( action, method );
	};
 
	FormFactory.prototype.register	=	function( form ){
		this.forms.push( form );
	};
 
 
 
	return FormFactory;
});
