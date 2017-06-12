function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').show();
	}else{
		$('#gotop').hide();
	}
}
$(document).ready(function(e) {
	b();
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
	})
	$('#weibo').hover(function(){
			$(this).attr('id','weibo_hover');
			$('#weibo_img').show();
		},function(){
			$(this).attr('id','weibo');
			$('#weibo_img').hide();
	})
	
	$('#weixin').hover(function(){
			$(this).attr('id','weixin_hover');
			$('#weixin_img').show();
		},function(){
			$(this).attr('id','weixin');
			$('#weixin_img').hide();
	})
	
});

$(window).scroll(function(e){
	b();		
})
