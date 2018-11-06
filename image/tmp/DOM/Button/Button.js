define(function(require){
	var iDocument = require("DOM/iDocument");
	var	Button	=	function( text){
		this.self	=	construct( text );
	};
	inherits( Button, iDocument );
	
	Button.prototype.setType	=	function( type ){
		this.self.type	=	type;
	};

	Button.prototype.setClick	=	function(func){
		this.self.addEventListener("click", func, false);
	};
	//----------------------------------------------------------------------------
	var construct	=	function( text ){
		var btn = document.createElement("button");
		var	tNode	=	document.createTextNode(text);
		btn.appendChild(tNode);
		return btn;
	};


	
	return	Button;
});