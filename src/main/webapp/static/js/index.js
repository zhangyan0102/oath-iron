/**
 * 生成页面html代码
 */
$(function () {
	var type_p = "白钢门,百叶窗,大门,扶手,围栏";
	var strs= new Array();
	strs = type_p.split(",");
	var insertText = "";
	var menuHtml = "";
	for (var i = 0; i < strs.length; i++) {
		insertText += "<li><a href=\"/product?cid=" + i + "\">" + strs[i] + "</a></li>";
		menuHtml += "<li><a href=\"/product?cid=" + i + "\"><i class=\"fi fi-Right\"></i>" + strs[i] + "</a></li>";
	}
	
	document.getElementById("type_project").innerHTML = insertText;
	document.getElementById("menu_project").innerHTML = menuHtml;
});