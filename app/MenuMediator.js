define(function(require){
	var Mediator = require("app/Mediator");
	//var ButtonColleague	=	require("DOM/Button/ButtonColleague");
	var MenuFactory = require("app/Factory/MenuFactory");
	var UserMenu = require("DOM/Menu/UserMenu");
	
	var MenuMediator	=	function(){
		Mediator.call( this );
	};
	inherits( MenuMediator, Mediator );
	
	MenuMediator.prototype.createColleagues	=	function(){
		this.colleagues	=	[];
		var factory	=	new MenuFactory();
		var menu = factory.createProduct("User");
		console.log( menu );
		menu.display();
		//this.colleagues.push( new ButtonColleague("ユーザー", "User") );
		//this.colleagues.push( new ButtonColleague("ソース", "Book") );

	};

	
	return MenuMediator;
});