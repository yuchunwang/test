$(window).scroll(function(evt){
  if ($(window).scrollTop()<500)
     $("body").css("background-image","url('http://i.imgur.com/7BNsH15.jpg')");
  else if($(window).scrollTop()<1000)
    $("body").css("background-image","url('http://i.imgur.com/wWtQAVZ.jpg')");
  else if($(window).scrollTop()<1600)
     $("body").css("background-image","url('http://i.imgur.com/SmkrFBl.jpg')");
  else if($(window).scrollTop()<2200)
    $("body").css("background-image","url('http://i.imgur.com/xi4I0J5.jpg')");
  else
    $("body").css("background-image","url('http://i.imgur.com/7BNsH15.jpg')");
});


var s = skrollr.init();


$(".begin").click(function(){
		$("body").animate({
			scrollTop: $('#section_sec').offset().top
		}, 800);
	});
$(".more").click(function(){
		$("body").animate({
			scrollTop: $('#section_thr').offset().top
		}, 800);
	});
$(".thrmore").click(function(){
		$("body").animate({
			scrollTop: $('#section_for').offset().top
		}, 800);
	});

$(".formore").click(function(){
		$("body").animate({
			scrollTop: $('#section_end').offset().top
		}, 900);
	});
$(".send").click(function(){
		$("body").animate({
			scrollTop: $('#section_top').offset().top
		}, 900);
	});