require.config({baseUrl:"../",paths:{jquery:"js/lib/jquery-1.11.1.min.js",slidePlug:"js/lib/jquery.SuperSlide.2.1.1.min.js",slide:"js/base/slide-e8829ec0c7.js"},shim:{slidePlug:{deps:["jquery"],exports:"slidePlug"}}}),require(["jquery","slide"],function(e,i){i.init()});