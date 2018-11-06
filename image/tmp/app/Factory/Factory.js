define(function(require){
	var Factory	=	function( product ){
		this.product	=	product;
		this.member	=	[];
	};

	//リフレクション
	//evalによって評価された関数が定義されている場所の
	//外部モジュールのみ有効
	Factory.prototype.createProduct	=	function( className ){
		throw new Error("Not Implemented");
	};
	
	Factory.prototype.register	=	function( product ){
		this.member.push( product );
	};
	
	Factory.prototype.getMember	=	function(){
		return	this.member;
	};
 
 
	return Factory;
});