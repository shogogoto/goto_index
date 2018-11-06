define(function(require){
	var instance;
	
	var Login = function(){
		this.aaa = "aaa";
	};
	

	Login.prototype.init = function(){
		return {
			aaa: "aaa",
			bbb: "bbb"
		};
	};
	
	Login.prototype.getInstance = function(){
		if(!instance){
			instance = this.init();
		}
		
		return instance;
	};
	
	
	return Login;
});