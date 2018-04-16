$(function(){
	var flag = false;
	
	if( !flag ){
		$("#scroll").click(function(){
		$("html,body")
			.animate( { "scrollTop":$(".second-content-box").offset().top 			},1000, 
			function(){ flag = true })
		})
	}
	
	$(window).scroll(function(){
		var stop = document.body.scrollTop || document.documentElement.scrollTop
		if( stop > 500 ){
			$("#scroll").hide()
		}else{
			$("#scroll").show()
		}
	})
	
})
