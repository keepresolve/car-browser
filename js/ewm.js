/*二维码*/
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

/*返回顶部*/
$(window).scroll(function(e){
	b();		
})


  $(window).scroll(function(){
		   var sc=$(window).scrollTop();
		   var rwidth=$(window).width()
      	  if(sc>0){
				$("#gotop").css("display","block");
				}else{
			$("#gotop").css("display","none");
				}
		  })
		  	
	  $("#gotop").click(function(){
		  var sc=$(window).scrollTop();
		 $('body,html').animate({scrollTop:0},800);
		  })
		 
// 重定位页脚函数
function repositionFooter(){
	var h = $(window).height();
	$(".box").css('min-height',h - 147)
};

// 用户调整窗口大小时重定位页脚
var resizeTimer = null;
$(window).bind('resize', function(){
	if(resizeTimer) clearTimeout(resizeTimer);
	resizeTimer = setTimeout(repositionFooter,100);
	
});

// 页面加载的时候重定位页脚
$(document).ready(repositionFooter);

// 百度统计

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?bab55b0de3c495cc0f4a5e63fce1219f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();