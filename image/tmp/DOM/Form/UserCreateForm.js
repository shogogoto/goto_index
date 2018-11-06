define(function(require){
	var	isJSON	=	require("lib/isJSON");
	var Form = require("DOM/Form/Form");
	var Table = require("DOM/Table");
	
	var UserCreateForm	=	function(){
		this.action	=	"server/app/create/registerUser.php";
		this.method	=	"post";
		Form.call( this, this.action, this.method );
		this.addEntry("ユーザー名");
		this.addPassword("パスワード");
		this.addPassword("パスワードの確認");
		
		this.self.elements[1].id	=	"user_create_pwd_id";
		
		var $f	=	$( this.self ).validate({
			rules: {
				"val0" : {
					required: true,
					minlength: 3,
					maxlength: 32
				},
				"val1" : {
					required: true,
					minlength: 5
				},
				"val2" : {
					equalTo: "#user_create_pwd_id",
					required: true,
					minlength: 5
				}
			}
		});
	};
	inherits(UserCreateForm,	Form);
	
	UserCreateForm.prototype.setSubmit = function(){
		this.self.addEventListener( "submit", (function(ev){
			var flag = $( this.self ).valid();
			
			if( flag ){
				this.queryUserId().done( (function(){
					this.resId.forEach( function(id){
						if( id == inpId ){
							alert("登録済みのidです");
							throw new Error("登録済みのidです");
						}
					});
					this.getAjax( form ).done( (function(data){
						alert( data );
						console.log( this );
						this.self.reset();
					}).bind(this) ).fail(function(){
						alert("通信失敗");
					});
				}).bind(this) );			
			} else {
				alert("入力が正しくありません。");
			}
			
			
			var form	=	ev.currentTarget;
			var inpId = form.elements[0].value;
			var inpPwd = form.elements[1].value;
			//this.checkPassword( form );
		}).bind(this), false);
	};

	UserCreateForm.prototype.queryUserId	=	function(){
		this.resId	=	[];
		t	=	this.idarr;
		return $.post("server/app/read/readUserId.php" ).done( (function(data){
			var json	=	JSON.parse(data);
			json.forEach( (function( obj ){
				this.resId.push( obj["id"] );
			}).bind(this) );
		}).bind(this) );
	};

	UserCreateForm.prototype.checkPassword	=	function( form ){
		var msg	= "確認パスワードが一致しません";
		var inpPwd = form.elements[1].value;
		var reInpPwd	=	form.elements[2].value;
		
		if( inpPwd != reInpPwd ){
			alert( msg );
			throw new Error( msg );
		};
	};

	return	UserCreateForm;
});