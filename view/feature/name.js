define(function (require) {
	let Feature = require("view/feature/feature");
	let out = Feature.extend({
		onRender(){
			this.$el.append($("<label>").text("名前"));
			this.$el.append($("<input [type=text, placeholder='名前'>"));
			this.appendCloseButton();			
		},
		
		setAttr: function(model){
			let value = this.$el.find("input").val();
			model.set(this.key(), value);
			//return {"name: ": this.$el.find("input").val()};
		},
		
		key(){
			return "name";
		}
	});
	
	return out;
});