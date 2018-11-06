define(function(require){
	var Menubar = require("DOM/Component/Menubar");
	var ColleagueButton	=	require("DOM/Button/ColleagueButton");
	var FormFactry			=	require("app/Factory/FormFactory");
	
	var Menu = require("DOM/Menu/Menu");	
	var	AdministratorMenu	=	function(){
		Menu.call( this );
		this.parent = Menubar;
		this._setOwn();
		this.self = document.createElement("section");
		this.self.textContent = "test";
		this.display();
		console.log(this);
	};
	inherits( AdministratorMenu, Menu );
	
	AdministratorMenu.prototype._setOwn = function(){
		var factory = new FormFactry();
		this.own.push( new ColleagueButton( "initialize", factory.createProduct("UserLogin") ) );
		this.own.push( new ColleagueButton( "clear", factory.createProduct("UserLogin") ) );
	};
	
	AdministratorMenu.prototype.createColleagues	=	function(){
		var factory = new FormFactry();
		this.addMember( new ColleagueButton( "initialize", factory.createProduct("UserLogin") ) );
		this.addMember( new ColleagueButton( "clear", factory.createProduct("UserLogin") ) );
		
		this.member.forEach( (function(btn){
			btn.display( this.self );
			btn.setMediator( this );
			btn.setClick(function(){
				btn.controlColleague();
			});
		}).bind(this) );
	};
	
	
	
	AdministratorMenu.prototype.colleagueDisplay	=	function(){
		this.member.forEach( function( mbr ){
			mbr.member.display();
			mbr.member.hide();
		} );
	};
	
	AdministratorMenu.prototype.colleagueChanged	=	function( colleague ){
		this.member.forEach(function( col ){
			col.member.hide();
		});
		colleague.member.show();
		colleague.member.self.elements[0].focus();
	};

	
	return AdministratorMenu;
});