define(function(require){
	var	iDocument	=	function(){
		this.isDisplay	=	false;
		this.parent = null;
		this.owner  = null;
		this.own    = [];
		this.self  = null;
	};
	
	iDocument.prototype.append = function(){
		this.parent.appendChild(this.self);
	};
	
	
	
	iDocument.prototype.display	=	function(parent	=	document.body ){
		if( this.parent ){
			this.parent.appendChild(this.self);
		} else {	
			parent.appendChild(this.self);
		}
	};

	iDocument.prototype.remove	=	function(){
		this.self.parentNode.removeChild(this.self);
	};
	
	iDocument.prototype.move	=	function(toNode){
		this.remove();
		this.display(toNode);
	};

	iDocument.prototype.showSwitch	=	function(){
		if(	this.isDisplay ){
			this.hide();
		} else {
			this.show();
		}
	};
	
	iDocument.prototype.show	=	function(){
		this.self.style.display	=	"block";
		this.isDisplay	=	true;
	};
	
	iDocument.prototype.hide	=	function(){
		this.self.style.display	=	"none";
		this.isDisplay	=	false;
	};
	// Variable
	iDocument.prototype.setMember	=	function( member ){
		this.member	=	member;
	};
	
	// Array
	iDocument.prototype.addMember	=	function( member ){
		this.member.push( member );
	};
	
	// DOM
	iDocument.prototype.appendMember	=	function( member ){
		this.addMember( member );
		this.self.appendChild( member.self );

	};
	
	iDocument.prototype.accept	=	function( visitor ){
		visitor.visit( this );
	};
	
	return iDocument;
});