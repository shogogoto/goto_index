define(function (require) {
	var Knowledge = require("../model/Knowledge");
	let out = {};

	out.Link = Backbone.Model.extend({
		urlRoot: "cake/links",

		defaults: {
			to:   new Knowledge.Concepts(),
			from: new Knowledge.Concepts()
		},
		setTo: function (cpt) {
			this.attributes.to.add(cpt);
		},
		setFrom: function (cpt) {
			this.attributes.from.add(cpt);
		}
	});

	return out;
});