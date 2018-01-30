Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.LoginForm = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/login-form.tmp",
	defaultContainer : "widget\\:login-form",

	initialize : function(){
	
	},


	preRender : function(whereToRender, renderFunction){
		renderFunction(this.data, whereToRender);
	},

	bindUI : function(){$('#submit').click(function(){
			var home = new Clazz.com.test.widget.home();
			Clazz.navigationController.push(Homepage);
		}
	}, 

	postRender : function(){
		


	
});
