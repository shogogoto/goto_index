define(function(require){
	var Form = require("DOM/Form/Form");
	var	isJSON	=	require("lib/isJSON");
	var Login = require('app/login');
	
	var UserLoginForm	=	function(){
		this.action	=	"server/app/login.php";
		this.method	=	"post";
		Form.call( this, this.action, this.method );
		this.addEntry("ユーザー名");
		this.addPassword("パスワード");
	};
	inherits(UserLoginForm,	Form);

	// override
	UserLoginForm.prototype.setSubmit = function(){
		this.self.addEventListener( "submit", (function(ev){
			var f	=	ev.currentTarget;
			this.getAjax( f ).done(function(data){
				console.log(JSON.parse(data));
				var login = Login();
				console.log(Login);
				console.log(login);
			}).fail(function(xhr, textStatus, error){
				alert("通信失敗");
			});
			
		}).bind(this), false);
	};

	return	UserLoginForm;
});