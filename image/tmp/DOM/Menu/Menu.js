// buttonのコレクション
define(function(require){
	var iDocument	=	require("DOM/iDocument");
	var	Menu	=	function(parent = document.body){
		iDocument.call(this);
		this.member	=	[];	
	};
	inherits( Menu, iDocument );

	Menu.prototype.colleagueChanged	=	function( colleague ){
		this.member.forEach(function( col ){
			col.member.hide();
		});
		colleague.member.show();
		//colleague.member.self.elements[0].focus();
	};
	

	
	return Menu;
});