//loginと同じ
define(function(require){
	var	isJSON	=	require("lib/isJSON");
	var Form = require("DOM/Form/Form");
	var Table = require("DOM/Table");
	
	var UserReadForm	=	function(){
		this.action	=	"server/app/read/readUserId.php";
		this.method	=	"post";
		Form.call( this, this.action, this.method );
	};
	inherits(UserReadForm,	Form);

	return	UserReadForm;
});