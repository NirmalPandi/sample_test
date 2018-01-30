Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.HomePage = Clazz.extend(Clazz.WidgetWithTemplate, {
	name : "home",
	templateUrl : "../template/home-page.tmp",
	
	initialize : function(config){
		/*this.headerBar = config.header;
		var productListListener = new Clazz.com.test.ProductListListener({"header" : this.headerBar});
		this.productList = new Clazz.com.test.widget.ProductList();
		this.productList.productListOnClickListener.add(productListListener.productListOnclick, productListListener);
		this.productList.productListOnLoadListener.add(productListListener.productListOnLoad, productListListener);*/
	},

	bindUI : function(){
		$('#submit').click(function(){
           var LoginForm = new Clazz.com.test.widget.LoginPage();
          Clazz.navigationController.push(LoginForm);
}
		
		
	},

	preRender : function(whereToRender, renderFunction){
		renderFunction(this.data, whereToRender);
	},
	
	postRender : function(element){
		
	},
});
