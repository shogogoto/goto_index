define(function (require) {
	let out = {};
	out.menu = require("view/menu");
	out.concept = require("view/concept/package");
	out.feature = require("view/feature/package");
	out.hierarchy = require("view/hierarchy/package");
	return out;
});