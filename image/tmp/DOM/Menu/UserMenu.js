define(function(require){
	var ColleagueButton	=	require("DOM/Button/ColleagueButton");
	var FormFactry			=	require("app/Factory/FormFactory");
	
	var Menu = require("DOM/Menu/Menu");	
	var	UserMenu	=	function(){

		Menu.call( this );
		this.self	=	document.createElement("div");

		this.createColleagues();
	};
	inherits( UserMenu, Menu );
	
	UserMenu.prototype.createColleagues	=	function(){
		var factory = new FormFactry();
		this.addMember( new ColleagueButton( "login", factory.createProduct("UserLogin") ) );
		this.addMember( new ColleagueButton( "create", factory.createProduct("UserCreate") ) );
		this.addMember( new ColleagueButton( "read"  , factory.createProduct("UserRead") ) );
		this.addMember( new ColleagueButton( "update", factory.createProduct("UserUpdate") ) );
		this.addMember( new ColleagueButton( "delete", factory.createProduct("UserDelete") ) );
		
		this.member.forEach( (function(btn){
			btn.display( this.self );
			btn.setMediator( this );
			btn.setClick(function(){
				btn.controlColleague();
			});
		}).bind(this) );
	};
	
	
	
	UserMenu.prototype.colleagueDisplay	=	function(){
		this.member.forEach( function( mbr ){
			mbr.member.display();
			mbr.member.setSubmit();
			mbr.member.hide();
		} );
	};
	
	UserMenu.prototype.colleagueChanged	=	function( colleague ){
		this.member.forEach(function( col ){
			col.member.hide();
		});
		colleague.member.show();
		colleague.member.self.elements[0].focus();
	};

	
	return UserMenu;
});