<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
		<meta name="divport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
		<meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<meta name="Keywords" content="景辉铁艺,铁艺,设计护栏,制作护栏,安装护栏" />
		<meta name="Description" content="景辉铁艺，公司专业设计、制作、销售、安装、一条龙服务，本公司主要经营：镀锌钢管烤漆护栏、pvc护栏、铁艺护栏、草坪护栏、花园护栏、绿地护栏、木塑护栏、丝网护栏、适用于小区院墙、学校院墙、医院院墙、别墅院墙、体育场、家庭、河道、道路、娱乐场所、草坪花园等。我们有专业的团队，十年的安装经验。《免费上门测量" />
		<title>景辉铁艺</title>
		<link rel="shortcut icon" href="/static/img/favicon2.ico" type="image/x-icon">
		<link rel="stylesheet" type="text/css" href="/static/style/css/att/common.css" />
		<link rel="stylesheet" type="text/css" href="/static/style/css/moble/index.css" />
		<script type="text/javascript" src="/static/js/jquery-1.12.3.min.js"></script>
		<script type="text/javascript" src="/static/js/swipeslider.js"></script>
		<script type="text/javascript" src="/static/js/swipeslider.min.js"></script>
	</head>
	<body>
		<%-- 轮播图 --%>
		<div>
			<div class="jq22-container">
				<article class="container">
					<section>
						<figure id="responsiveness" class="swipslider">
							<ul class="sw-slides">
								<%-- 图片大小  375*150 --%>
								<li class="sw-slide"><img src="/static/img/children_game_concept01.jpg"></li>
								<li class="sw-slide"><img src="/static/img/children_game_concept02.jpg"></li>
							</ul>
						</figure>
					</section>
				</article>
			</div>
			<div>
				<p class="phoneNumP">联系电话：<span class="phoneSpan">130-8888-8888</span></p>
				<p class="bigTitle">以高标准提供定制服务</p>
			</div>
			<div class="product-list">
				<p class="productTitle">产品分类</p>
				<div class="pro_left">
					<img src="/static/img/doors.png" class="pro-image"/>
					<p class="pro_title">白钢门</p>
				</div>
				<div class="pro_right">
					<img src="/static/img/shutters.png" class="pro-image"/>
					<p class="pro_title">百叶窗</p>
				</div>
				<div class="pro_left">
					<img src="/static/img/fences.png" class="pro-image"/>
					<p class="pro_title">围栏</p>
				</div>
				<div class="pro_right">
					<img src="/static/img/bigdoor.png" class="pro-image"/>
					<p class="pro_title">大门</p>
				</div>
				<div class="pro_left">
					<img src="/static/img/armrest.png" class="pro-image"/>
					<p class="pro_title">室内扶手</p>
				</div>
				<div class="pro_right">
					<img src="/static/img/armrest2.png" class="pro-image"/>
					<p class="pro_title">户外扶手</p>
				</div>
			</div>
			<div>
				<p class="title"><span class="verticalBar">|</span>推荐产品</p>
				<% for(int i = 0; i < 10; i++) { %>
				<div class="recommend">
					<div>
						<img src="/static/img/armrest.png" class="img_list_rem"/>
					</div>
					<div class="pro_rem">
						<p class="pro_rem_title">产品名称信息</p>
						<p>
							<span class="pro_rem_span_money">￥999.99</span>
							<span class="pro_rem_span_findNums">访问量：9999</span>
						</p>
					</div>
				</div>
				<%	} %>
			</div>
			<div class="telours">
				<p class="telours_p"><span class="telours_span">联系</span>我们</p>
				<p class="promise">真诚用心&nbsp;量身打造&nbsp;质量保证</p>
				<div>
					<img src="/static/img/bottom.jpg" class="bottom-image" />
				</div>
				<p class="promise-left">沈阳市铁艺门窗有限公司</p>
				<p class="promise-left">手机：130-8888-8888</p>
				<p class="promise-left">电话：024-8888-8888</p>
				<p class="promise-left">邮箱：tieyi_sy@163.com</p>
				<p class="promise-left">公司地址：辽宁省沈阳市皇姑区万山路10号</p>
				<div>
					 <button class="til-button">
					 	<p>订购热线</p>
					 	<p>024-8888-8888</p>
					 </button>
				</div>
			</div>
			<div class="tabBar">
				<div class="tab-left">
					<img src="/static/img/ico-home.png" class="tab-image" />
					<p class="tab_title">首页</p>
				</div>
				<div class="tab-left">
					<img src="/static/img/ico-type.png" class="tab-image" />
					<p class="tab_title">分类</p>
				</div>
				<div class="tab-left">
					<img src="/static/img/ico-notice.png" class="tab-image" />
					<p class="tab_title">公告</p>
				</div>
				<div class="tab-left">
					<img src="/static/img/ico-tellphone.png" class="tab-image" />
					<p class="tab_title">联系我们</p>
				</div>
				<div class="tab-left" bindtap="calling">
					<img src="/static/img/ico-members.png" class="tab-image" />
					<p class="tab_title">会员</p>
				</div>
			</div>
		</div>
	</body>
	<script type="text/javascript">
		$(window).load(function() {
			$('#full_feature').swipeslider();
			$('#content_slider').swipeslider({
				transitionDuration : 600,
				autoPlayTimeout : 10000,
				sliderHeight : '300px'
			});
			$('#responsiveness').swipeslider();
			$('#customizability').swipeslider({
				transitionDuration : 1500,
				autoPlayTimeout : 4000,
				timingFunction : 'cubic-bezier(0.38, 0.96, 0.7, 0.07)',
				sliderHeight : '30%'
			});
		});
	</script>
</html>