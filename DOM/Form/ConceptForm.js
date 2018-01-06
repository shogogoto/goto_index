define(function(require){
	var Form = require("DOM/Form/Form");
	
	var ConceptForm	=	function(action, method){
		Form.call( this, action, method );
		this.addEntry("名前");
		this.addEntry("内容");
	};
	inherits(ConceptForm,	Form);
	
	
	return ConceptForm;
});