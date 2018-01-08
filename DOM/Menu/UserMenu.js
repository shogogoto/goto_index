define(function(require){
	var Menu = require("DOM/Menu/Menu");
	var ButtonColleague = require("DOM/Button/ButtonColleague");
	
	var	UserMenu	=	function(){
		Menu.call( this );
		this.addMember( new ButtonColleague("Create", "User") );
		this.addMember( new ButtonColleague("Read", "User") );
		this.addMember( new ButtonColleague("Update", "User") );
		this.addMember( new ButtonColleague("Delete", "User") );

	};
	inherits( UserMenu, Menu );
	
	return UserMenu;
});