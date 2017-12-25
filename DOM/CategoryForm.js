define(function(require){
	var Form = require("DOM/Form");
	
	var CategoryForm	=	function(action, method){
		Form.call( this, action, method );
		this.addEntry("親");
		this.addEntry("名前");
	};
	inherits(CategoryForm,	Form);
	
	
	return CategoryForm;
});