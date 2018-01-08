define(function(require){
	var iDocument	=	require("DOM/iDocument");
	var	Menu	=	function(){
		this.member	=	[];	
		this.self	=	document.createElement("div");		//menu or div 
	};
	inherits( Menu, iDocument );
	
	
	Menu.prototype.addMember	=	function( mbr ){
		mbr.display( this.self );
		this.member.push( mbr );
	};
	
	
	return Menu;
});