$(window).scroll(function () {
	$("#menu").css("opacity", 1 - $(window).scrollTop() / 65);
});

$("body").overlayScrollbars({}); 