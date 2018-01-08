define(function(require){
	var	iDocument	=	function(){
		this.isDisplay	=	false;
	};
	
	iDocument.prototype.display	=	function(parent	=	document.body ){
		parent.appendChild(this.self);
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
	
	return iDocument;
});