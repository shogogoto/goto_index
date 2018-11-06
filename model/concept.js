define(function (require) {
	let out = {};
	let  Concept = Backbone.Model.extend({
		urlRoot: "cake/concepts",
		validate: function(attrs){
			console.log(attrs);
			if(_.contains(_.values(attrs), "")){
				return true;
			};
		}
	});
	
	let Concepts = Backbone.Collection.extend({
		model: Concept,
		url: "cake/concepts"
	});

	out.Concept = Concept;
	out.Concepts = Concepts;
	
	return out;
});