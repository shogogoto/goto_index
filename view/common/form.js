define(function (require) {
	let out = Backbone.Marionette.View.extend({
		model: new concept.Concept({}),
		tagName: "form",
		template: _.template(`
			<div class='feature_list'></div>
			<div class='add_selector'></div>
			<div class='controller'></div>
		`),		
		regions: {
			feature_list: ".feature_list",
			add_selector: ".add_selector",
		},
		initialize(){
			console.log(this.model);
			this.$el.submit(function(){ 
				return false;
			});
		},
		onRender(){
			const fl = this.getRegion("feature_list");
			const list = new feature.FeatureList();
			list.append(new feature.Name());
			list.append(new feature.Expression());
			fl.show(list);
			
			const sel = this.getRegion("add_selector");
			const s = new Select();
			sel.show(s);
			this.listenTo(s, "added", this.onAdded);
			let ctl = this.$(".controller");
			ctl.append($("<button class='submit'>").text("submit"));
			ctl.append($("<input type='reset' value='reset'>"));

		},
//		events: {
//			"click .submit": "submit"
//		},
		triggers:{
			"click .submit": "submit"
		},
		modelEvents:{
			"sync": "onSync",
			"error": "onError",
			"invalid": "onInvalid"
		},
		onAdded(featureView){
			const list = this.getChildView("feature_list");
			list.append(featureView);
		},
		
		onSubmit: function(){
			let self = this;
			let fl = this.getChildView("feature_list");
			console.log(fl.views.length);
			_.each(fl.views, function(view){
				view.setAttr(self.model);
			});
			self.model.save();
		},
		onSync(){
			alert("登録しますた");
			this.el.reset();			
		},
		onError(){
			alert("通信に失敗しますた");
		},
		
		onInvalid: function(msg){
			alert("未入力の項目があります");
		}
		
	});

	return out;
});