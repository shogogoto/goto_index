define(function(require){
	var ButtonColleague	=	require("DOM/ButtonColleague");
	
	var FormMediator	=	function(){
		this.createColleagues();
	};
	
	FormMediator.prototype.createColleagues	=	function(){
		this.colleagues	=	[];
		this.colleagues.push( new ButtonColleague("ユーザー", "User") );
		this.colleagues.push( new ButtonColleague("ソース", "Book") );
		this.colleagues.push( new ButtonColleague("カテゴリー", "Category") );
		//arr.push( new ButtonColleague("概念", "Concept") );
		

		
		this.colleagues.forEach( (function( btn ){
			btn.display();
			btn.setMediator( this );
			btn.setClick( (function(){
				this.colleagueChanged( btn );
			}).bind(this) );
		}).bind(this) );

		this.colleagues.forEach( function( btn ){
			btn.form.display();
		});
	};
	
	FormMediator.prototype.colleagueChanged	=	function( colleague ){
		this.colleagues.forEach(function( col ){
			col.form.hide();
		});
		colleague.form.show();
	};
	
	return FormMediator;
});