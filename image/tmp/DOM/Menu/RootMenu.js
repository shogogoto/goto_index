define(function(require){
	var ColleagueButton	=	require("DOM/Button/ColleagueButton");
	var AdministratorMenu	=	require("DOM/Menu/AdministratorMenu");
	var UserMenu	=	require("DOM/Menu/UserMenu");

	
	var Menu = require("DOM/Menu/Menu");	
	var	RootMenu	=	function(){

		Menu.call( this );
		this.self	=	document.createElement("div");

		this.display();
		this.createColleagues();
	};
	inherits( RootMenu, Menu );
	
	RootMenu.prototype.createColleagues	=	function(){
	this.appendMember( new ColleagueButton("管理人", new AdministratorMenu) );
	this.appendMember( new ColleagueButton("ユーザー", new UserMenu) );
	
		this.member.forEach( (function( btn ){
			btn.display( this.self );
			btn.setMediator( this );
			btn.setClick(function(){
				btn.controlColleague();
			});
		}).bind(this) );

		this.member.forEach( function( btn ){
			var menu	=	btn.member;
			menu.display();
			menu.colleagueDisplay();
		} );
	};
	
	
	return RootMenu;
});