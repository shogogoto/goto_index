define(function (require) {
	let hierarchy = require("model/hierarchy") ;
	let out = Backbone.Marionette.View.extend({
		model: new hierarchy.Hierarchy(),
		tagName: "form",
		template: false
	});

	return out;
});