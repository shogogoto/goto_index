define(function(require){
	var iDocument	=	require("DOM/iDocument");
	
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
	
//----------------------------------------------------------------------------	
	Form.prototype.addMember_	=	function( label, input ){
		var li = document.createElement( "li" );
		li.appendChild( label );
		li.appendChild( input );
		this.member.appendChild( li );
		
		return li;
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