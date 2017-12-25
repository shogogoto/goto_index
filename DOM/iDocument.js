define(function(require){
	var	iDocument	=	function(){
		this.isDisplay	=	true;
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
			this.self.style.display	=	"none";
			this.isDisplay	=	false;
		} else {
			this.self.style.display	=	"block";
			this.isDisplay	=	true;
		}
	};
	
	return iDocument;
});