
$(document).ready(function(){

	$(".lunbo ol li").click(function(){
		var i=$(this).index(); //获取索引
		$(".lunbo ul li").eq(i).fadeIn(200).siblings().fadeOut(200);
		$(this).addClass('bg').siblings().removeClass('bg');
	});
	
	$(".third_index .lunbo ol li").click(function(){
		var j=$(this).index(); //获取索引
		$(".third_index .lunbo ul li").eq(j).fadeIn(200).siblings().fadeOut(200);
		$(this).addClass('bg').siblings().removeClass('bg');
	});
	
	var i=0;
	var j=0;
	function sw1(){
		
		i=++i%4;
		$(".lunbo ul li").eq(i).fadeIn(200).siblings().fadeOut(200);
		$(".lunbo ol li").eq(i).addClass('bg').siblings().removeClass('bg');
		
	}
	
	function sw2(){
		
		j=++j%4;
		$(".third_index .lunbo ul li").eq(j).fadeIn(200).siblings().fadeOut(200);
		$(".third_index .lunbo ol li").eq(j).addClass('bg').siblings().removeClass('bg');
		
	}
	
	var timer1=setInterval(sw1,2000);
	
	$(".lunbo").hover(function(){clearInterval(timer1)},function(){timer1=setInterval(sw1,2000)});
	
	var timer2=setInterval(sw2,2000);
	
	$(".third_index .lunbo").hover(function(){clearInterval(timer2)},function(){timer2=setInterval(sw2,2000)});
	/*轮播效果*/
	
		
	$("#show_i").click(function(){
		$("#first_index").show();
		$(".second_index").hide();
		$(".third_index").hide();
		$(".bottom").css('top','0');
		$("body").css('height','5000px');
		$('html,body').animate({scrollTop: '0px'}, 0);
		
		
	});
	
	$(".headlines_r").click(function(){
		$("#first_index").hide();
		$(".second_index").show();
		$(".third_index").hide();
		$(".bottom").css('top','2400px');
		$("body").css('height','2400px');
		$('html,body').animate({scrollTop: '0px'}, 0);
		
		
	});
	
	$("#show_s").click(function(){
		$("#first_index").hide();
		$(".second_index").show();
		$(".third_index").hide();
		$(".bottom").css('top','2400px');
		$("body").css('height','2400px');
		$('html,body').animate({scrollTop: '0px'}, 0);
		
		
	});
	
	$(".headlines_l").click(function(){
		$("#first_index").hide();
		$(".third_index").show();
		$(".second_index").hide();
		$(".bottom").css('top','2400px');
		$("body").css('height','2400px');
		$('html,body').animate({scrollTop: '0px'},0);
		
		
	});
	
	$("#show_t").click(function(){
		$("#first_index").hide();
		$(".third_index").show();
		$(".second_index").hide();
		$(".bottom").css('top','2400px');
		$("body").css('height','2400px');
		$('html,body').animate({scrollTop: '0px'},0);
		
		
	});
	
});

