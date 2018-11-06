define(function (require) {
	let feature = require("view/feature/package");
	let out = Backbone.Marionette.View.extend({
		tagname: "div",
		template:false,
		onRender(){
			var $g_opt = $("<optgroup>");
			$g_opt.attr("label", "フィーチャー");
			$g_opt.attr("label", "親");
			$g_opt.append($("<option value='Name'>").text("名前"));
			$g_opt.append($("<option value='Expression'>").text("説明"));
			$g_opt.append($("<option value='Parent'>").text("親"));
			var $sel = $("<select>");
			$sel.append($g_opt);
			this.$sel = $sel;
			this.$el.append($sel);
			this.$el.append($("<button class='add'>").text("追加"));			
		},
		
		triggers: {
			"click .add": "add"
		},
		
		onAdd(){
			let type = this.$sel.val();
			let view = eval("new feature." + type + "()");
			this.trigger("added", view);
		}
	});

	return out;
});