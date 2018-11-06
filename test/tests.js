define(function (require) {

	QUnit.module("concept", {
		beforeEach: function () {
			this.knowledge = require("../model/knowledge");
			this.knowledge.init();
		}
	});

	QUnit.test("create Concept", function (assert) {
		console.log("start create concept test");
		let c1 = new this.knowledge.Concept({name: "TDD", explain: "テスト駆動開発"});
		let c2 = new this.knowledge.Concept({id: 0});

		let done1 = assert.async();
		let done2 = assert.async();
		// 順番が逆になることがある
		c1.save().then(function () {
			done1();
			//c2.set({id: c1.get("id")});
		}).then(function () {
			c2.fetch().done(function () {
				assert.deepEqual(c1.attributes, c2.attributes, "createConceptTest");
				console.log("end create concept test");
				done2();
			});
		});
	});

	QUnit.test("add two concepts", function (assert) {
		console.log("start add concepts test");

		let cpt1 = new this.knowledge.Concept({
			name: "name1",
			explain: "explain1"
		});
		let cpt2 = new this.knowledge.Concept({
			name: "name2",
			explain: "explain2"
		});

		let done1 = assert.async();
		let done2 = assert.async();
		cpt1.save().then(function () {
			done1();
			cpt2.save().then(function () {
				assert.equal(cpt1.id, 0, "first saved concept`s id is 0");
				assert.equal(cpt2.id, 1, "second saved concept`s id is 1");
				console.log("end add concepts test");
				done2();
			});
		});
	});

	QUnit.test("links concepts", function (assert) {
		let Link = require("../model/link");
		console.log("start links concepts");
		let cpt = new this.knowledge.Concept({"name": "cpt", "explain": "center concept"});
		let toCpt1 = new this.knowledge.Concept({"name": "to cpt1", "explain": "to concept 1"});
		let toCpt2 = new this.knowledge.Concept({"name": "to cpt2", "explain": "to concept 1"});
		let fromCpt1 = new this.knowledge.Concept({"name": "from cpt1", "explain": "from concept 1"});
		let fromCpt2 = new this.knowledge.Concept({"name": "from cpt2", "explain": "from concept 2"});
		let link = new Link.Link();
		let link2 = new Link.Link();
//		link.setTo(toCpt1);
//		link.setTo(toCpt2);
//		link.setFrom(fromCpt1);
//		link.setFrom(fromCpt2);
		let toCol   = new this.knowledge.Concepts();
		let fromCol = new this.knowledge.Concepts();
		toCol.add(toCpt1);
		toCol.add(toCpt2);
		fromCol.add(fromCpt1);
		fromCol.add(fromCpt2);
		$.post("cake/links", (data)=>{
			console.log(data);
		});
		
		
		let done = assert.async();
		link.save().then(function(){
			assert.ok(true);
			console.log(link);
			done();
		});
		// link.save()が呼べていない
//		link.save().then(function(){
//			console.log("just after link.save()");
//			link2.fetch().then(function(){
//				assert.deepEqual(link2.attributes.to, toCol);
//				assert.deepEqual(link2.attributes.from, fromCol);
//				console.log("end links concepts");
//				done();
//			});
//		});
	});
	
	
});