
$(document).ready(function() {
	
	
	
	setTimeout(function(){window.scrollTo(0,1);　
	　	},1);
	
	
	
	//ガチャだいボタンの色チェンジ
	$(".gachaBtn01").each(function() {
			var ttl = $(this);
			
			ttl.click(function(){
				ttl.parent().parent().parent().next().slideToggle();
				ttl.children().toggle();
				ttl.toggleClass("gachaBtn01On");
				
				//var Hash = $(this);
				//var HashOffset = $(Hash).offset().top-90;
				//$("html,body").animate({
				//scrollTop: HashOffset
			//}, 100);
					
			return false;
			});
		});
		
		
		//ガチャだいボタンの色チェンジ
		$(".gachaBtn02").each(function() {
			var ttl = $(this);
			
			ttl.click(function(){
			
				ttl.toggleClass("gachaBtn02On");
				
				
					
			return false;
			});
		});
	
});







