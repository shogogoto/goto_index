define(function(require){
	var	isJSON	=	require("lib/isJSON");
	var Form = require("DOM/Form");
	var Table = require("DOM/Table");
	
	var UserForm	=	function(action, method){
		Form.call( this, action, method );
		this.addEntry("id");
		this.addPwdEntry("パスワード");
	};
	inherits(UserForm,	Form);
	
	UserForm.prototype.addPwdEntry	=	function(){
		
	}
	
	UserForm.prototype.setSubmit = function(){
		this.self.addEventListener( "submit", function(ev){
			var f	=	ev.currentTarget;
			getAjax( f ).done(function(data){
				alert(data + "\nを登録しました");
				f.reset();
				
				//引数が不適切なとき、netbeansが予期せず終了する汗
				if(isJSON(data)){
					var json	=	JSON.parse(data);
					var tbl		=	new Table(json);
					tbl.display(document.body);
					return json;
				} else {
					var div = document.createElement( "div" );
					$(div).html(data);
					document.body.appendChild(div);
				}
			}).fail(function(xhr, textStatus, error){
				alert("通信失敗");
			});
			
		},false);
	};

	// addEventListenerのfunction内でprototypeとして使えない
	var getAjax	 = function(form){
		var f	= $( form );
		var ajx	= $.ajax({
			url:	f.attr( 'action' ),
			type: f.attr( 'method' ),
			data: f.serializeArray()
			//timeout: 10000  // 単位はミリ秒
		});
		return ajx;
	};

	return	UserForm;
});