define(function(require){
	var iDocument	=	require("DOM/iDocument");
	var Entry	=	require( "DOM/Entry" );
	
	var Form = function(action, method){
		iDocument.call(this);
		var f = document.createElement("form");
		f.action	= action;
		f.method	= method;	
		toUnusable(f);
		var mbr = document.createElement("ul");
		var p = document.createElement("p");
		addSubmit(p);
		addReset(p);
		f.appendChild(mbr);
		f.appendChild(p);
		this.self	= f;
		this.member	=	mbr;
	};
	inherits(Form, iDocument);
	
	Form.prototype.addEntry	= function(label, placeholder	="入力してね♥"){
		var entry	=	new Entry( this.self );
		entry.addLabel( label );
		entry.addInput( "text" );
		entry.set();
		this.addMember_( entry.self );
	};
	
	Form.prototype.addPassword	=	function( label ){
		var entry	=	new Entry( this.self);
		entry.addLabel( label );
		entry.addInput( "password" );
		entry.set();
		this.addMember_( entry.self );
	};
	
	
//----------------------------------------------------------------------------	
	Form.prototype.addMember_	=	function( li ){
		this.member.appendChild( li );
	};

	var	addSubmit	=	function(form, value	=	"送信"){
		var	sub		=	document.createElement("input");
		sub.type	=	"submit";
		//sub.value	=	value;
		form.appendChild(sub);
		return	sub;
	};
	
	var addReset	=	function(form){
		var	reset		=	document.createElement("input");
		reset.type	=	"reset";
		form.appendChild(reset);
		return	reset;	
	};
	
	var toUnusable	= function(form){
		var $f		=	$( form );
		$f.submit(function(ev){
			ev.preventDefault();
		});
	};

	
	return Form;
});