define(function (require) {
	let concept = require("model/concept");
	let ChildView = Backbone.Marionette.View.extend({
		template:_.template(`
			<td class='name'><%= name %></td>
			<td><%= expression %></td>
		`),
		tagName: "tr",
		events: {
			"click .name": "onClickName"
		},
		onClickName(ev){
			console.log(ev);
		}
		
		
	});
	
	let EmptyView = Backbone.Marionette.View.extend({
		template: _.template("Empty")
	});
	
	let out = Backbone.Marionette.CollectionView.extend({
		collection: new concept.Concepts(),
		childView: ChildView,
		tagName: "table",
		initialize(){
			this.collection.fetch();
		},
		emptyView: EmptyView,
		onRender(){
			alert("loaded!");
		}
		
	});

	return out;
});