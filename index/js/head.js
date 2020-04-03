jQuery(document).ready(function($){ 
	$('.anc_headline').click(function()
	{$('html,body').animate({scrollTop:$('.fenge').offset().top}, 800);}); 
	
	$('.anc_topics').click(function()
	{$('html,body').animate({scrollTop:$('.topics').offset().top}, 800);});
	
	$('.anc_video').click(function()
	{$('html,body').animate({scrollTop:$('#video').offset().top}, 800);});
	
	$('.to_top').click(function()
	{$('html,body').animate({scrollTop: '0px'}, 800);}); 
	//回到顶栏
	
	$('.sidebar lic').hover(function(){
			$('i',this).css('color','#555');
		});
	$('.sidebar lic').mouseleave(function(){
			$('i ',this).css('color','#000');
			$('i:eq(1)',this).css('color','#fff');
		});

	$('#c').click(function(){
			$(this).css('background-color','#3c3c3c');
			$('#e').css('background-color','#000');
		});
	$('#e').click(function(){
			$(this).css('background-color','#3c3c3c');
			$('#c').css('background-color','#000');
		});

	
	
	//sidebar
	$('.jixu').hover(function(){
		$('.jixu_1').fadeIn();

		});
	$('.jixu').mouseleave(function(){
		$('.jixu_1').fadeOut();

		});
		
	//继续了解
	
	$('.close').click(function(){
		
			$('#body_2').fadeOut(300);
			$('#body_1').removeClass('mohu');
			$('.close').hide();
			$('#ifm').remove();
		});
	
	$('.show_body_2').click(function(){
			$('#body_1').addClass('mohu');
			$('#body_2').fadeIn(500);
			$('.close').fadeIn(200);
			$('#body_2').append('<iframe  id="ifm" src="http://720yun.com/t/84128wa5j4w?pano_id=27171" frameBorder="0" width="100%" scrolling="no" height="100%;"></iframe>');
			
		});
			
		//全景观看
		
		$("#s_m_4").on("click", function(e){
    		$(".s_menu").fadeIn(100);

    		$(document).one("click", function(){
       		 $(".s_menu").fadeOut(100);
   			 });

   			 e.stopPropagation();
			});
		$("#s_m_4").on("click", function(e){
    		e.stopPropagation();
		});
		$(".s_menu").on("click", function(e){
    		e.stopPropagation();
		});
	//绑定事件 阻止冒泡事件 侧边栏

		
		
});


$(window).scroll(function () {

       if ($(window).scrollTop()>56)
	   {
			$('.Title').fadeOut(200);
			$('#f_top').fadeIn(200);
			
		   
	   }
	   else
	   {
			$('.Title').fadeIn(200); 
			$('#f_top').fadeOut(200);    
	   }
	   
	   if ($(window).scrollTop()>200)
	   {
			$('.to_top').fadeIn(200);		   
	   }
	   else
	   {
			$('.to_top').fadeOut(200);   
	   }
	   
	   if ($(window).scrollTop() == $(document).height() - $(window).height()) {

           
			$('.to_top').fadeOut(200);


       }

   });
   
   
   $(document).ready(function() {

		$('.xiala_1').mouseenter(function(){
			$('#xiala_1_1').slideDown(150);
		});
		$('.xiala_1').mouseleave(function(){
			$('#xiala_1_1').fadeOut(200);
		});
		$('.xiala_2').mouseenter(function(){
			$('#xiala_2_1').slideDown(150);
		});
		$('.xiala_2').mouseleave(function(){
			$('#xiala_2_1').fadeOut(200);
		});
		
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

}); 