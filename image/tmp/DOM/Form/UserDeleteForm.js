define(function(require){
	var	isJSON	=	require("lib/isJSON");
	var Form = require("DOM/Form/Form");
	var Table = require("DOM/Table");
	
	var UserDeleteForm	=	function(){
		this.action	=	"server/app/deleteUser.php";
		this.method	=	"post";
		Form.call( this, this.action, this.method );
		this.addEntry("ユーザー名");
		this.addPassword("パスワード");
	};
	inherits(UserDeleteForm,	Form);

	return	UserDeleteForm;
});