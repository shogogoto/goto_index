//label付きinput要素
define(function(require){
	var iDocument	=	require("DOM/iDocument");
	
	var Entry	=	function(){
		iDocument.call(this);
	};
	inherits(Entry, iDocument);
	
	Entry.prototype.addLabel	=	function( txt ){
		var label	=	document.createElement( "label" );
		var tNode	=	document.createTextNode( "txt" );
		
		label.appendChild( tNode );

		
	};
	
	Form.prototype.addEntry	= function(label, placeholder	="入力してね♥"){
		var name	=	"val"	+	this.member.childElementCount;

		var lab			= document.createElement( "label" );
		var tNode	=	document.createTextNode(label);
		var input	= document.createElement( "input" );
		input.type	= "text";
		input.name	=	name;
		input.placeholder	=	placeholder;
		lab.appendChild( tNode );
		lab.appendChild( input );
		return this.addMember_( lab, input );
	};


	return Entry;
});