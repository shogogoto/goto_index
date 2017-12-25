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
		var f = new UserForm( action, method );
		this.register( f );
		return f;
	};
 
 	FormFactory.prototype.createCategory	=	function(	action, method ){
		var f	= new CategoryForm( action, method );
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
