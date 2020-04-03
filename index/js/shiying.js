

$(window).resize(function(){

if($(window).width()>1700) //获取浏览器的的宽度
{	

		$(".sidebar").css('width','10%');
		$(".head").css({'width':'90%','left':'10%'});
		$(".content_big").css({'width':'90%','left':'10%'});
		$(".bottom").css({'width':'90%','left':'10%','margin-top':'750px'});
		$("#f_top").css('width','90%');
		$("#body_2").css({'width':'1280px','height':'720px','margin-left':'-640px','margin-top':'-360px'});
		$(".s_menu").css('left','10%');
		$(".second_index").css({'width':'90%','left':'10%'});
		$(".third_index").css({'width':'90%','left':'10%'});
		
		
}
else if($(window).width()>1550)
{
		$(".sidebar").css('width','12%');
		$(".head").css({'width':'88%','left':'12%'});
		$(".content_big").css({'width':'88%','left':'12%'});
		$(".bottom").css({'width':'88%','left':'12%','margin-top':'750px'});
		$("#f_top").css('width','88%');
		$("#body_2").css({'width':'1280px','height':'720px','margin-left':'-640px','margin-top':'-360px'});
		$(".s_menu").css('left','12%');
		$(".second_index").css({'width':'88%','left':'12%'});
		$(".third_index").css({'width':'88%','left':'12%'});
}
else
{
	
		$(".sidebar").css('width','15%');
		$(".head").css({'width':'85%','left':'15%'});
		$(".content_big").css({'width':'85%','left':'15%'});
		$(".bottom").css({'width':'85%','left':'15%','margin-top':'450px'});
		$("#f_top").css('width','85%');
		$("#body_2").css({'width':'720px','height':'480px','margin-left':'-360px','margin-top':'-240px'});
		$(".s_menu").css('left','15%');
		$(".second_index").css({'width':'85%','left':'15%'});
		$(".third_index").css({'width':'85%','left':'15%'});
		
		
}

if($(window).width()<800)
{
		$("#menu_head_left").hide();	
	
}
else
{
		$("#menu_head_left").show();
}

})
