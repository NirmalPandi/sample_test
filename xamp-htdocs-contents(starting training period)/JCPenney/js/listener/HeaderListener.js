Clazz.createPackage("com.test.widget");

Clazz.com.test.HeaderListener = Clazz.extend(Clazz.Base, {
	header : null,
	
	initialize : function(config){
		this.header = config.header;
	},

	changeColor : function(){
		this.header.changeColor('yellow');
	}
	
	
});