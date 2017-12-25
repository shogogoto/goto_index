require( [ "DOM/Button", "app/FormFactory" ],	function( Button, FormFactory ){
	
	var bLogin	=	new Button( "ログイン" );
	bLogin.display();
	var btn	=	new Button(	"本の登録"	);
	btn.display();
	
	var bCategory	=	new Button( "カテゴリーの登録");
	bCategory.display();
	
	var	bConcept	=	new Button(	"概念の登録");
	bConcept.display();
	
	var factory	=	new FormFactory();
	
	var uf = factory.createUser("server/User.php", "post");
	uf.display();
	uf.showSwitch();
	uf.setSubmit();
	
	var f = factory.createBook("server/Book.php", "post");
	f.display();
	f.showSwitch();
	f.setSubmit();
	
	var cf = factory.createCategory("server/Book.php", "post");
	cf.display();
	cf.showSwitch();
	
	bLogin.setFunc(function(){
		uf.showSwitch();
	});
	
	uf.self.disabled	=	false;
	
	
	btn.setFunc(function(){
		f.showSwitch();
	});
	
	bCategory.setFunc(function(){
		cf.showSwitch();
	});
	
});