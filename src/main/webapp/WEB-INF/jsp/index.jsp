<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
	<%@ include file="head.jsp"%>
	<body class="none-reponsive">
		<%@ include file="pc/header.jsp"%>
		<div id="main">
			<%@ include file="pc/banner.jsp"%>
			<section class="b-support b-pdtb-30">
				<div class="container">
					<div class="row">
						<div class="col-12 col-md-4 col-lg-3">
							<div class="b-side">
								<div class="b-title-1">
									<div class="text1">P</div>
									<div class="text2">产品展示</div>
									<div class="text3"></div>
								</div>
								<ul id="menu_product" class="b-menu-side">
								</ul>
							</div>
						</div>
						<div class="col-12 col-md-8 col-lg-9">
							<div class="container b-cont-1">
								<div id="type_img_product" class="row b-row-1">
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<%@ include file="pc/section.jsp"%>
		</div>
		<%@ include file="footer.jsp"%>
	</body>
</html>