define(function(require){
	var Menu = require("DOM/Menu/Menu");	
	var	RootMenu	=	function(){
		Menu.call( this );
	};
	inherits( RootMenu, Menu );
	
	return RootMenu;
});