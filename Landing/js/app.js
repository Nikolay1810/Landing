$(".header").height($(window).height());
$(".header").width($(window).width());

$(window).resize(function(){
    $(".header").height($(window).height());
    $(".header").width($(window).width());
});

var test = true;
$(".circle").click(function(){
   if(test == true){
       $(".section1").slideDown(500);
       test = false;
       $(this).find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
       //var a = $('.parallax-window').parallax;
   } 
    else{
        $(".section1").slideUp(500);
        test = true;
        $(this).find("i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
       // var a = $('.parallax-window').parallax;
        //console.log(a);
    }
});
$(document).ready(function() {
		$(".fancybox").fancybox();
	});
