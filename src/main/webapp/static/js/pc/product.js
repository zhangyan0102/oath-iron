/**
 * product 页面数据
 */
var cId = GetQueryString(cId);
alert("cId:" + cId);
var json_1 = 
	{
		"cId":"1",
		"type_name":"白钢门",
		"data": [
			 {
				"proId":"1",
				"proName":"白钢门",
				"imgUrl":"http://jchulan.bbctop3.bdy.smp02.cn/Public/uploads/2019-06-10/1560135905589040399.jpg"
			 },
			 {
				"proId":"2",
				"proName":"白钢门",
				"imgUrl":"http://jchulan.bbctop3.bdy.smp02.cn/Public/uploads/2019-06-10/1560135905589040399.jpg"
			 },
			 {
				"proId":"3",
				"proName":"白钢门",
				"imgUrl":"http://jchulan.bbctop3.bdy.smp02.cn/Public/uploads/2019-06-10/1560135905589040399.jpg"
			 },
			 {
				"proId":"4",
				"proName":"白钢门",
				"imgUrl":"http://jchulan.bbctop3.bdy.smp02.cn/Public/uploads/2019-06-10/1560135905589040399.jpg"
			 },
			 {
				"proId":"5",
				"proName":"白钢门",
				"imgUrl":"http://jchulan.bbctop3.bdy.smp02.cn/Public/uploads/2019-06-10/1560135905589040399.jpg"
			 },
			 {
				"proId":"6",
				"proName":"白钢门",
				"imgUrl":"http://jchulan.bbctop3.bdy.smp02.cn/Public/uploads/2019-06-10/1560135905589040399.jpg"
			 }
		]
	}
	
// 生成导航栏以及产品展示的分类项
$(function () {
	var proHtml = "";
	proHtml += "<div class=\"b-heading-top\">";
	proHtml += "<h5>" + json_1.type_name + "</h5>";
	proHtml += "<ul class=\"breadcrumb\">";
	proHtml += "<li>您所在的位置：</li>";
	proHtml += "<li><a href="/">网站首页</a></li>";
	proHtml += "<li><a href=\"javascript:;\" class=\"active\">" + json_1.type_name + "</a></li>";
	proHtml += "</ul>";
	proHtml += "</div>";
	proHtml += "<div class=\"container b-cont-1\">";
	proHtml += "<div class=\"row b-row-1\">";
	for (var key in json_1.data) {
		proHtml += "<div class=\"col-6 col-md-6 col-lg-4 b-col-1\">";
		proHtml += "<div class=\"b-group-item-1-box\">";
		proHtml += "<a href=\"/product/info?id=" + json_1.data[key].proId + "\">";
		proHtml += "<div class=\"b-group-item-1\">";
		proHtml += "<div class=\"img\">";
		proHtml += "<img src=\"" + json_1.data[key].imgUrl + "\">";
		proHtml += "<h5>" + json_1.data[key].proName + "</h5>";
		proHtml += "</div>";
		proHtml += "</a>";
		proHtml += "</div>";
		proHtml += "</div>";
	}
	proHtml += "</div>";
	proHtml += "</div>";
	
	document.getElementById("pro_html").innerHTML = proHtml;
});
	
function GetQueryString(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}