define(function (require) {
	let view = require("view/package");
	let out = Backbone.Marionette.View.extend({
		tagName: "div",
		template: _.template(`
			<div id="menu"></div>
			<div id="content"></div>
		`),
		regions: {
			"menu": "#menu",
			"content": "#content"
		},
		initialize: function(){
//			this.$el.append();
		},
		triggers: {
			"click .read": "click:read",
			"click .create": "click:create",
			"click .createHierarchy": "click:create:hierarchy"
		},
		
		onClickCreateHierarchy(){
			this.showChildView("content", new view.hierarchy.Form());
		},
		
		onRender(){
			this.showChildView("menu", new view.menu.Menu());
//			console.log(new view.concept());?
			this.showChildView("content", new view.concept.form());
		},
		onClickRead(){
			this.showChildView("content", new view.concept.select());
//			this.showChildView("content", new view.menu.Menu());
		},
		onClickCreate(){
			this.showChildView("content", new view.concept.form());

		}
		
	});

	return out;
});