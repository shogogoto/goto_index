define(function (require) {
	let feature = require("view/feature/package");
	let out = {};
	
	let Menu= Backbone.Marionette.View.extend({
		tagName: "div",
		template: false,
		addButton: function(text){
			this.$el.append($("<button class=" + text + ">").text(text));
		},
		onRender(){
			this.addButton("create");
			this.addButton("createHierarchy");
			this.addButton("read");
			this.addButton("update");
			this.addButton("delete");			
		}
	});
	
	out.Menu = Menu;
	return out;
});