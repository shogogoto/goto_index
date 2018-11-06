//labelやbuttonによる複合input要素
//Controlという名前のがよかったか
define(function(require){
	var iDocument	=	require("DOM/iDocument");
	
	var Entry		=	function( ul ){
		iDocument.call(this);
		this.parent	=	ul;	//Formインスタンス
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
	
	Entry.prototype.addInput	=	function( type, placeholder="入力してね♂" ){
		var name	=	"val"	+	this.parent.childElementCount;

		var input		= document.createElement( "input" );
		input.type	=	type;
		input.name	= name;
		input.placeholder	=	placeholder;
		this.input_	=	input;
		return	input;
	};
	
	Entry.prototype.addSelect	=	function(){
		var slct	=	document.createElement("select");
	};
	
	Entry.prototype.set	=	function(){
		this.label_.appendChild( this.input_);
		this.self.appendChild( this.label_);
		//this.self.appendChild( this.button_ );
	};

	Entry.prototype.setId	=	function( id ){
		this.input_.id	=	id;
	};

	//Entry.prototype.addButton	=	function( txt ){
	//};

	return Entry;
});