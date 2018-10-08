$(function() {
	var clicks = 0;
	$('body').on('click', '.click-nav', function() {
		var i = $(this).index()-1
		$(".second-nav").eq(i).addClass("second-nav-move")
	});

	new FastClick(document.body);
});
$(function() {
	var clicks = 0;
	$('body').on('click', '.one', function() {
		$(".second-nav").removeClass("second-nav-move")
	});

	new FastClick(document.body);
});

$(function() {
	var clicks = 0;
	$('body').on('click', '.click-nav-two', function() {
		var i = $(this).index()-1
		console.log(i)
		$(".third-nav").eq(i).addClass("third-nav-move")
	});

	new FastClick(document.body);
});
$(function() {
	var clicks = 0;
	$('body').on('click', '.two', function() {
		$(".third-nav").removeClass("third-nav-move")
	});

	new FastClick(document.body);
});


$(function() {
	var clicks = 0;
	$('body').on('click', '.click-nav-three', function() {
		var i = $(this).index()-1
		console.log(i)
		$(".fouth-nav").eq(i).addClass("fouth-nav-move")
	});

	new FastClick(document.body);
});
$(function() {
	var clicks = 0;
	$('body').on('click', '.three', function() {
		$(".fouth-nav").removeClass("fouth-nav-move")
	});

	new FastClick(document.body);
});