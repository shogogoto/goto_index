define(function(require){
	var	isJSON	=	require("lib/isJSON");
	var Form = require("DOM/Form/Form");
	var Table = require("DOM/Table");
	
	var UserUpdtateForm	=	function(){
		this.action	=	"server/app/updateUser.php";
		this.method	=	"post";
		Form.call( this, this.action, this.method );
		this.addEntry("ユーザー名");
		this.addPassword("パスワード");
		this.addEntry("変更後のユーザー名");
		this.addPassword("変更後のパスワード");
		this.addPassword("変更後のパスワードの確認");
	};
	inherits(UserUpdtateForm,	Form);

	return	UserUpdtateForm;
});