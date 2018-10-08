//导航栏高亮
if($("body").attr("data") == "home") {
	$(".first-nav li a").eq(0).parent("li").addClass('li-active');
	$(".first-nav li a").eq(0).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");

} else if($("body").attr("data") == "brand") {
	$(".first-nav li a").eq(1).parent("li").addClass('li-active');
	$(".first-nav li a").eq(1).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");

} else if($("body").attr("data") == "products") {
	$(".first-nav li a").eq(2).parent("li").addClass('li-active');
	$(".first-nav li a").eq(2).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");

} else if($("body").attr("data") == "video") {
	$(".first-nav li a").eq(3).parent("li").addClass('li-active');
	$(".first-nav li a").eq(3).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");
} else if($("body").attr("data") == "about") {
	$(".first-nav li a").eq(4).parent("li").addClass('li-active');
	$(".first-nav li a").eq(4).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");
} else if($("body").attr("data") == "join") {
	$(".first-nav li a").eq(5).parent("li").addClass('li-active');
	$(".first-nav li a").eq(5).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");
} else if($("body").attr("data") == "question") {
	$(".first-nav li a").eq(6).parent("li").addClass('li-active');
	$(".first-nav li a").eq(6).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");
}

//导航栏控制
$(".nav").click(function() {
	$(this).addClass("nav-none")
	$(".wrapper").addClass("wrapper-move")
	$(".navigation").addClass("navigation-active")
})
$(".nav-fork").click(function() {
	$(".nav").removeClass("nav-none")
	$(".wrapper").removeClass("wrapper-move")
	$(".navigation").removeClass("navigation-active")
})
$(".navigation .first-nav>li").mouseenter(function() {
	$(this).siblings().removeClass("li-active")
	$(this).addClass("li-active")
	$(".li-active").mouseleave(function() {
		$(this).removeClass("li-active")
		$(this).siblings().removeClass("li-active")
		if($("body").attr("data") == "home") {
			$(".first-nav li a").eq(0).parent("li").addClass('li-active');
			$(".first-nav li a").eq(0).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");

		} else if($("body").attr("data") == "brand") {
			$(".first-nav li a").eq(1).parent("li").addClass('li-active');
			$(".first-nav li a").eq(1).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");

		} else if($("body").attr("data") == "products") {
			$(".first-nav li a").eq(2).parent("li").addClass('li-active');
			$(".first-nav li a").eq(2).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");

		} else if($("body").attr("data") == "video") {
			$(".first-nav li a").eq(3).parent("li").addClass('li-active');
			$(".first-nav li a").eq(3).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");
		} else if($("body").attr("data") == "about") {
			$(".first-nav li a").eq(4).parent("li").addClass('li-active');
			$(".first-nav li a").eq(4).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");
		} else if($("body").attr("data") == "join") {
			$(".first-nav li a").eq(5).parent("li").addClass('li-active');
			$(".first-nav li a").eq(5).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");
		} else if($("body").attr("data") == "question") {
			$(".first-nav li a").eq(6).parent("li").addClass('li-active');
			$(".first-nav li a").eq(6).append("<style>.li-active a::before{display:block;content: '';position: absolute;left: 0;top: 0;width: 10px;height: 100%;background: #d23d4c;}</style>");
		}
	})

})
//$(".click-nav").on('tap', function() {
//	$(".second-nav").addClass("second-nav-move")
//})
//$(".one").on('tap', function() {
//	$(".second-nav").removeClass("second-nav-move")
//})