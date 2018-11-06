define(function (require) {
	let hierarchy = require("model/hierarchy");
	let ChildView = Backbone.Marionette.View.extend({
		template: false,
		tagName: "tr"
	});
	
	
	let out = Backbone.Marionette.CollectionView.extend({
		collection: new hierarchy.Hierarchies(),
		childView: ChildView
	});

	return out;
});