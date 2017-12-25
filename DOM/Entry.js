//labelやbuttonによる複合input要素
define(function(require){
	var iDocument	=	require("DOM/iDocument");
	
	var Entry		=	function( form ){
		iDocument.call(this);
		this.form	=	form;
		this.self	=	document.createElement( "li" );
	};
	inherits(Entry, iDocument);
	
	Entry.prototype.addLabel	=	function( txt ){
		var label	=	document.createElement( "label" );
		var tNode	=	document.createTextNode( txt );
		label.appendChild( tNode );
		
		this.label_	=	label;
		return	label;
	};
	
	Entry.prototype.addInput	=	function( type, placeholder="入力してね♥" ){
		console.log(this.form);
		console.log(this.form.member);
		var name	=	"val";	//+	this.form.member.length;

		var input		= document.createElement( "input" );
		input.type	=	type;
		input.name	= name;
		input.placeholder	=	placeholder;
		this.input_	=	input;
		return	input;
	};
	
	Entry.prototype.set	=	function(){
		this.label_.appendChild( this.input_);
		this.self.appendChild( this.label_);
		//this.self.appendChild( this.button_ );
	};
	
	//Entry.prototype.addButton	=	function( txt ){
	//};

	return Entry;
});