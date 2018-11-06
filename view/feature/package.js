define(function (require) {
	let out = {};
	out.Name = require("view/feature/name");
	out.Expression = require("view/feature/expression");
	out.Parent = require("view/feature/parent");
	out.FeatureList = require("view/feature/feature_list");
	return out;
});