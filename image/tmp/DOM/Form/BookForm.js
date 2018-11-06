define(function(require){
	var	isJSON	=	require("lib/isJSON");
	var Form = require("DOM/Form/Form");
	var Table = require("DOM/Table");
	
	var BookForm	=	function(){
		this.action	=	"server/Book.php";
		this.method	=	"post";
		Form.call( this, this.action, this.method );
		this.addEntry("題名", "プリンキピア");
		this.addEntry("著者名", "アイザック　ニュートン");
		this.addEntry("初版出版日",	"YYYY-MM-DD");
	};
	inherits(BookForm,	Form);
	
	BookForm.prototype.setSubmit = function(){
		this.self.addEventListener( "submit", (function(ev){
			var f	=	ev.currentTarget;
			this.getAjax( f ).done(function(data){
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
			
		}).bind(this), false);
	};

	return	BookForm;
});