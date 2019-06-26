/**
 * 页面数据
 */
var json = 
	[
		 {
			"cId":"1",
			"productName":"白钢门",
			"imgUrl":"http://jchulan.bbctop3.bdy.smp02.cn/Public/uploads/2019-06-10/1560135905589040399.jpg"
		 },
		 {
			"cId":"2",
			"productName":"百叶窗",
			"imgUrl":"http://jchulan.bbctop3.bdy.smp02.cn/Public/uploads/2019-06-10/1560135905589040399.jpg"
		 },
		 {
			"cId":"3",
			"productName":"围栏",
			"imgUrl":"http://jchulan.bbctop3.bdy.smp02.cn/Public/uploads/2019-06-10/1560135905589040399.jpg"
		 },
		 {
			"cId":"4",
			"productName":"大门",
			"imgUrl":"http://jchulan.bbctop3.bdy.smp02.cn/Public/uploads/2019-06-10/1560135905589040399.jpg"
		 },
		 {
			"cId":"5",
			"productName":"室内扶手",
			"imgUrl":"http://jchulan.bbctop3.bdy.smp02.cn/Public/uploads/2019-06-10/1560135905589040399.jpg"
		 },
		 {
			"cId":"6",
			"productName":"室外扶手",
			"imgUrl":"http://jchulan.bbctop3.bdy.smp02.cn/Public/uploads/2019-06-10/1560135905589040399.jpg"
		 }
	]
// 生成导航栏以及产品展示的分类项
$(function () {
	var barHtml = "";
	var menuHtml = "";
	for (var key in json) {
		barHtml += "<li><a href=\"/product?cid=" + json[key].cId + "\">" + json[key].productName + "</a></li>";
		menuHtml += "<li><a href=\"/product?cid=" + json[key].cId + "\"><i class=\"fi fi-Right\"></i>" + json[key].productName + "</a></li>";
	}
	
	document.getElementById("type_product").innerHTML = barHtml;
	document.getElementById("menu_product").innerHTML = menuHtml;
});

// 生成产品图形列表
$(function () {
	var typeHtml = "";
	for (var key in json) {
		typeHtml += "<div class=\"col-6 col-md-6 col-lg-4 b-col-1\">";
		typeHtml += "<div class=\"b-group-item-1-box\">";
		typeHtml += "<a href=\"/product?cid=" + json[key].cId + "\">";
		typeHtml += "<div class=\"b-group-item-1\">";
		typeHtml += "<div class=\"img\">";
		typeHtml += "<img src=\"" + json[key].imgUrl + "\">";
		typeHtml += "</div>";
		typeHtml += "<h5>" + json[key].productName + "</h5>";
		typeHtml += "</div>";
		typeHtml += "</a>";
		typeHtml += "</div>";
		typeHtml += "</div>";
		
	}
	
	document.getElementById("type_img_product").innerHTML = typeHtml;
});

jQuery(function($) {
	$(".b-owl").owlCarousel(
			{
				autoplay : true,
				mouseDrag : false,
				loop : true,
				nav : true,
				navText : [ '<span class="fi fi-Left"></span>',
						'<span class="fi fi-Right"></span>' ],
				items : 1,
			})
})