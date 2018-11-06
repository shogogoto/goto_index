require(["view/app"], function(appli){
	
	var app = new appli();
	$("body").append(app.el);
	app.render();
	
	//form.render();
//	var mn = new view.menu.Menu();
//	$("body").append(mn.el);
});