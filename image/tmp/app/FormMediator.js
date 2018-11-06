define(function(require){
	var Mediator = require("app/Mediator");
	var ButtonColleague	=	require("DOM/Button/ColleagueButton");
	
	
	var FormMediator	=	function(){
		Mediator.call(this);
	};
	inherits( FormMediator, Mediator );
	
	FormMediator.prototype.createColleagues	=	function(){
		this.colleagues	=	[];
		this.colleagues.push( new ButtonColleague("ユーザー", "User") );
		this.colleagues.push( new ButtonColleague("ソース", "Book") );
		//this.colleagues.push( new ButtonColleague("カテゴリー", "Category") );
		//this.colleagues.push( new ButtonColleague("概念", "Concept") );
		
		this.colleagues.forEach( (function( btn ){
			btn.display();
			btn.setMediator( this );
			btn.setClick(function(){
				btn.controlColleague();
			});
		}).bind(this) );

		this.colleagues.forEach( function( btn ){
			btn.form.display();
			btn.form.setSubmit();
			btn.form.hide();
		});
	};

	Mediator.prototype.colleagueChanged	=	function( colleague ){
		this.colleagues.forEach(function( col ){
			col.form.hide();
		});
		colleague.form.show();
		colleague.form.self.elements[0].focus();
	};
	
	return FormMediator;
});