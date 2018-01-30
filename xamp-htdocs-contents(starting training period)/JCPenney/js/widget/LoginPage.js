Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.LoginPage = Clazz.extend(Clazz.WidgetWithTemplate, {
	templateUrl : "../template/login-page.tmp",
	name: 'login',
	initialize : function(){
		this.header = new Clazz.com.test.widget.Header("Login Page");
		this.loginForm = new Clazz.com.test.widget.LoginForm();
	},
	
	/**
	 * This method is used to do some works before rendering the UI, e.g. call web service to make a request.
	 */
	preRender : function(whereToRender, renderFunction){
		renderFunction(this.data, whereToRender);
	},

	bindUI : function(){
		var self = this;
	},

	postRender : function(element){
		this.header.render();
		this.loginForm.render();
	},
	
});
