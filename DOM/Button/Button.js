define(function(require){
	var iDocument = require("DOM/iDocument");
	var	Button	=	function( text){
		this.self	=	construct( text );
		
	};
	inherits( Button, iDocument );
	
	Button.prototype.setType	=	function( type ){
		this.self.type	=	type;
		console.log( this.self );
	};
	
	//----------------------------------------------------------------------------
	var construct	=	function( text ){
		var btn = document.createElement("button");
		var	tNode	=	document.createTextNode(text);
		btn.appendChild(tNode);
		return btn;
	};

	Button.prototype.setClick	=	function(func){
		this.self.addEventListener("click", func, false);
	};
	
	return	Button;
});