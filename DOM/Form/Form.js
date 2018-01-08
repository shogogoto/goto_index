define(function(require){
	var iDocument	=	require("DOM/iDocument");
	var Entry	=	require( "DOM/Entry" );
	
	var Form = function(action, method){
		iDocument.call(this);
		var f = document.createElement("form");
		f.action	= action;
		f.method	= method;	
		toUnusable(f);
		
		var ul = document.createElement("ul");
		var p = document.createElement("p");
		addSubmit( p );
		addReset( p );
		f.appendChild( ul );
		f.appendChild( p );
		this.self	= f;
		this.member	=	ul;
	};
	inherits(Form, iDocument);
	
	Form.prototype.addEntry	= function( label ){
		var entry	=	new Entry( this.member );
		entry.addLabel( label );
		entry.addInput( "text" );
		entry.set();
		this.addMember_( entry.self );
	};
	
	Form.prototype.addPassword	=	function( label ){
		var entry	=	new Entry( this.member );
		entry.addLabel( label );
		entry.addInput( "password" );
		entry.set();
		this.addMember_( entry.self );
	};

	Form.prototype.getAjax	 = function(){
		var f	= $( this.self );
		var ajx	= $.ajax({
			url:	f.attr( 'action' ),
			type: f.attr( 'method' ),
			data: f.serializeArray()
			//timeout: 10000  // 単位はミリ秒
		});
		return ajx;
	};
	
	Form.prototype.addMember_	=	function( li ){
		this.member.appendChild( li );
	};

//----------------------------------------------------------------------------	
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