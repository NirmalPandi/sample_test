$(document).ready(function(){
	/*var headerSample = new Clazz.com.test.widget.Header();
	headerSample.render();
	var headerListener = new Clazz.com.test.HeaderListener({'header':headerSample});
	headerSample.headerClickEvent.add(headerListener.changeColor, headerListener);*/
	

	Clazz.navigationController = new Clazz.NavigationController({
	    mainContainer : "widget\\:page"
	});
	
	var parameter = getParamater();
	console.log("parameter=", parameter);
	var pageName = parameter.pageName;
	var projectCode = parameter.projectCode;

	var page;
	if(pageName === 'login'){
		page = new Clazz.com.test.widget.LoginPage();
	}else{
		page = new Clazz.com.test.widget.HomePage();
	}

	Clazz.navigationController.push(page);
	
});


function getParamater(){
	var url = window.location.href;
	var parameter = url.substring(url.indexOf("#") + 1);
	var parameterSplit = parameter.split("=");
	var pageName = parameterSplit[0];
	var projectCode = parameterSplit[1];
	return {'pageName': pageName, 'projectCode': projectCode};
}



