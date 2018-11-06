define(function (require) {
	let Feature = require("view/feature/feature");
	let out = Feature.extend({
		onRender(){
			//this.model = new feature.Name();
			this.$el.append($("<label>").text("説明"));
			this.$el.append($("<textarea>").prop("placeholder", "説明"));
			this.appendCloseButton();
		},
		setAttr: function(model){
			let value = this.$el.find("textarea").val();
			model.set("expression", value);
//			return { "expression": this.$content.val() };
		}
		
	});
	return out;
});