define(['jquery','slidePlug'], function($) {
	var slide = {
		init: function() {
			$(".fullSlide").slide({
				titCell:".hd ul",
				mainCell:".bd ul",
				effect:"fold",
				autoPlay:true,
				autoPage:true, 
				trigger:"click" 
			});	
		},
	}
	return {
		init: function() {
			slide.init()
		}
	}	
})