define(function (require) {
	let out = {};

	let Knowledge = Backbone.Model.extend({
	});

	let Concept = Backbone.Model.extend({
		urlRoot: "cake/concepts",
		defaults: {
			name:"",
			explain:""
		}
		
	});
	_.extend(Concept, Knowledge);
	out.Concept = Concept;

	let Concepts = Backbone.Collection.extend({
		model: Concept,
		url: "cake/concepts"
	});
	out.Concepts = Concepts;
	
	out.init = function(){
		return $.ajax( "cake/concepts/init" );
	};

	return out;
});