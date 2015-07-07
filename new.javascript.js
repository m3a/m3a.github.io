$(document).ready(function(){
	$(".search-box-text").click(function(){
		$(this).hide();
		$(".search-box-input").show(100);
	});
	$(".search-box-input-close>i").click(function(){
		$(".search-box-input").hide();
		$(".search-box-text").show(100);
	});
	$(".menu>li>button").focus(function(){
		$(this).children(".menu-dropdown").slideDown();
	});
	$(".menu>li>button").blur(function(){
		$(this).children(".menu-dropdown").slideUp();
	});
	$(".menu-mobile-view-text").click(function(){
		$(".menu-mobile-view-list").slideToggle();
	});
});