define(function(require){
	var iDocument = require("DOM/iDocument");
	
	var MenuVisitor	=	function(){	
	};
	
	MenuVisitor.prototype.visit	=	function( menu ){
		if( Array.isArray(menu.member) ){
			menu.member.forEach( (function(m){
				m.accept(this);
			}).bind(this) );
		} else {
			//console.log(menu);
		}

	};
	
	MenuVisitor.prototype.isDocument = function( elm ){
		return elm instanceof iDocument;
	};
	
	return MenuVisitor;
});