define(function (require) {
	let out = {};
	let Hierarchy = Backbone.Model.extend({
		urlRoot: "cake/hierarchies",
		default(){
			this.parent_id = "";
			this.name = "";
		},
		validate: function(attrs){
			console.log(attrs);
			if(_.contains(_.values(attrs), "")){
				return true;
			};
		}
	});
	
	let Hierarchies = Backbone.Collection.extend({
		model: Hierarchy,
		url: "cake/hierarchies"
	});

	out.Hierarchy = Hierarchy;
	out.Hierarchies = Hierarchies;
	return out;
});