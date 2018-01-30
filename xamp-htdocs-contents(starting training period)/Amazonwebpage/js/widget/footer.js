Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.footer = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/footer.tmp",
	defaultContainer : "widget\\:footer",
	projectName : null,
	projectId : null,
    initialize: function(){

	this.onClickHeader = new signals.Signal();
    },
    changeColor : function(color){
		alert("hai");
	},
	preRender : function(whereToRender, renderFunction){
		var self = this;
		var api = new Clazz.com.test.widget.API();
		api.request(function(response){
			self.projectName = response.projectName;
			self.projectId = response.projectId;
			self.data = {"surplusMembers":response.surplusMembers, "projectName":self.projectName, "projectId":self.projectId}
			renderFunction(self.data, whereToRender);
		});
	
		
	},

	bindUI : function(){
		var self = this;
		$('#g').click(function(){
			self.onClickHeader.dispatch();
		});
	},

	postRender : function(){
		
	}


});