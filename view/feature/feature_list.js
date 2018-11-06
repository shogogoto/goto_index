define(function (require) {
	
	
	let out = Backbone.Marionette.View.extend({
		tagName: "div",
		template: false,
		views: [],
		append(featureView){
			this.count(featureView);
			this.$el.append(featureView.el);
			featureView.render();
			this.views.push(featureView);
			this.listenTo(featureView, "close", this.close);
		},
		
		close(featureView){
			this.views = _.without(this.views, featureView);
		},
		
		count(view){
			let size = _.size(_.filter(this.views, function(v){
				return v.constructor === view.constructor;
			}));
			console.log(size);
			
		}
		
	});
	return out;
});