require.config({
        baseUrl : '../',  //相对于定义了data-main的HTML
        paths: {
            'jquery' : 'js/lib/jquery-1.11.1.min.js',
            'slidePlug': 'js/lib/jquery.SuperSlide.2.1.1.min.js',
            'slide': 'js/base/slide.js'
        },
        shim: {
        	'slidePlug': {
        		deps: ['jquery'],
        		exports: 'slidePlug'
        	}
        }
})
require(['jquery', 'slide'], function($,s) {
	s.init();
})