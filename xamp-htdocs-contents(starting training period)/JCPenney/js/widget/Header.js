Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.Header = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/header.tmp",
	defaultContainer : "widget\\:header",
	headerClickEvent : null,

	initialize : function(){
		this.headerClickEvent = new signals.Signal();
	},

	changeColor : function(color){
		$('#header').css('background-color',color);
	},
	

	preRender : function(whereToRender, renderFunction){
		renderFunction(this.data, whereToRender);
	},

	bindUI : function(){
		var self = this;
		$('#header').click(function(){
			self.headerClickEvent.dispatch();
		})
	}, 

	postRender : function(){

	}

});
