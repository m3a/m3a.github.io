$(document).ready(function(){
	$(".dropdown-menu-btn").click(function(){
		$(".dropdown-menu").slideToggle();
	});
	$(".sign-in").click(function(){
		$(".opaque-layer").fadeIn(400);
		$(".sign-in-modal").fadeIn(800);
	});
	$(".close").click(function(){
		$(".sign-in-modal").fadeOut(400);
		$(".opaque-layer").fadeOut(800);
	});
	$(".search-txt-box").click(function(){
		$(this).hide(200);
		$(".search-input-box").show(200);
	});
	$(".search-input-close>div:nth-child(2)").click(function(){
		$(".search-input-box").hide(200);
		$(".search-txt-box").show(200);
	});
	$(".likes-box").click(function(){
		if($(".likes-quantity").hasClass("red"))
			x = -1;
		else
			x = 1;
		$(".likes-quantity").toggleClass("red");
		$(".likes-quantity").text(parseInt($(".likes-quantity").text()) + x);
		$(".like-sign").toggleClass("heart-active");
	});
});
