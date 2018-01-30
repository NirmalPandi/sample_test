$(document).ready(function(){

		var header = new Clazz.com.test.widget.footer();
	var headerListener = new Clazz.com.test.HeaderListener({
		"header": header
	});
	header.onClickHeader.add(headerListener.changeColor, headerListener);
	header.render();
});






