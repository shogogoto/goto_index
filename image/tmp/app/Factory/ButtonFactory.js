define(function(require){
	// ColleagueButtonは除外 i.e. requireの無限ループ
	//var ColleagueButtton = require("DOM/Button/ColleagueButton");
	var Button	=	require("DOM/Button/Button");
	
	var Factory = require("app/Factory/Factory");
	var ButtonFactory	=	function(){
		Factory.call( this, "Button" );
	};
	inherits( ButtonFactory, Factory );
	
	//リフレクション
	ButtonFactory.prototype.createProduct	=	function(text, className = "" ){
		var script	=	"new " + className + this.product + "("+ text + ")";
		try {
			var p	=	eval( script );
			this.register( p );
			return p;
		} catch( e )	{
			console.log( this );
			console.log( e.name );
			console.log( "script:", e.message );
			console.log( script );
		}
	};

	return ButtonFactory;
});