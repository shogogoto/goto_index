define(function (require) {
	let out = Backbone.Marionette.View.extend({
		template: false,
		triggers: {
			"click .close": "close"
		},
		
		onClose: function(){
			this.remove();
		},
		
		appendCloseButton(){
			this.$el.append($("<button class='close'>").text("×"));
		},
		setAttr(model){
			throw new Error('Not Implemented');
		},
		key(){
			throw new Error('Not Implemented');
		}
	});

	return out;
});