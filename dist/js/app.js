!function(e){var t=function(e){return e.split("").reverse().join("")},o={numberStep:function(t,o){var a=Math.floor(t);e(o.elem).text(a)}},a=function(e){var t=e.elem;t.nodeType&&t.parentNode&&(t=t._animateNumberSetter,t||(t=o.numberStep),t(e.now,e))};e.Tween&&e.Tween.propHooks?e.Tween.propHooks.number={set:a}:e.fx.step.number=a,e.animateNumber={numberStepFactories:{append:function(t){return function(o,a){var n=Math.floor(o);e(a.elem).prop("number",o).text(n+t)}},separator:function(o,a,n){return o=o||" ",a=a||3,n=n||"",function(i,r){var l=0>i,s=Math.floor((l?-1:1)*i).toString(),c=e(r.elem);if(s.length>a){for(var d,m,f,p=s,u=a,h=p.split("").reverse(),s=[],v=0,b=Math.ceil(p.length/u);v<b;v++){for(d="",f=0;f<u&&(m=v*u+f,m!==p.length);f++)d+=h[m];s.push(d)}p=s.length-1,u=t(s[p]),s[p]=t(parseInt(u,10).toString()),s=s.join(o),s=t(s)}c.prop("number",i).text((l?"-":"")+s+n)}}}},e.fn.animateNumber=function(){for(var t=arguments[0],a=e.extend({},o,t),n=e(this),i=[a],r=1,l=arguments.length;r<l;r++)i.push(arguments[r]);if(t.numberStep){var s=this.each(function(){this._animateNumberSetter=t.numberStep}),c=a.complete;a.complete=function(){s.each(function(){delete this._animateNumberSetter}),c&&c.apply(this,arguments)}}return n.animate.apply(n,i)}}(jQuery),!function(e){e.fn.viewportChecker=function(t){var o={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(e,t){},scrollHorizontal:!1,scrollBox:window};e.extend(o,t);var a=this,n={height:e(o.scrollBox).height(),width:e(o.scrollBox).width()};return this.checkElements=function(){var t,i;o.scrollHorizontal?(t=Math.max(e("html").scrollLeft(),e("body").scrollLeft(),e(window).scrollLeft()),i=t+n.width):(t=Math.max(e("html").scrollTop(),e("body").scrollTop(),e(window).scrollTop()),i=t+n.height),a.each(function(){var a=e(this),r={},l={};if(a.data("vp-add-class")&&(l.classToAdd=a.data("vp-add-class")),a.data("vp-remove-class")&&(l.classToRemove=a.data("vp-remove-class")),a.data("vp-add-class-full-view")&&(l.classToAddForFullView=a.data("vp-add-class-full-view")),a.data("vp-keep-add-class")&&(l.removeClassAfterAnimation=a.data("vp-remove-after-animation")),a.data("vp-offset")&&(l.offset=a.data("vp-offset")),a.data("vp-repeat")&&(l.repeat=a.data("vp-repeat")),a.data("vp-scrollHorizontal")&&(l.scrollHorizontal=a.data("vp-scrollHorizontal")),a.data("vp-invertBottomOffset")&&(l.scrollHorizontal=a.data("vp-invertBottomOffset")),e.extend(r,o),e.extend(r,l),!a.data("vp-animated")||r.repeat){String(r.offset).indexOf("%")>0&&(r.offset=parseInt(r.offset)/100*n.height);var s=r.scrollHorizontal?a.offset().left:a.offset().top,c=r.scrollHorizontal?s+a.width():s+a.height(),d=Math.round(s)+r.offset,m=r.scrollHorizontal?d+a.width():d+a.height();r.invertBottomOffset&&(m-=2*r.offset),d<i&&m>t?(a.removeClass(r.classToRemove),a.addClass(r.classToAdd),r.callbackFunction(a,"add"),c<=i&&s>=t?a.addClass(r.classToAddForFullView):a.removeClass(r.classToAddForFullView),a.data("vp-animated",!0),r.removeClassAfterAnimation&&a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){a.removeClass(r.classToAdd)})):a.hasClass(r.classToAdd)&&r.repeat&&(a.removeClass(r.classToAdd+" "+r.classToAddForFullView),r.callbackFunction(a,"remove"),a.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&e(document).bind("touchmove MSPointerMove pointermove",this.checkElements),e(o.scrollBox).bind("load scroll",this.checkElements),e(window).resize(function(t){n={height:e(o.scrollBox).height(),width:e(o.scrollBox).width()},a.checkElements()}),this.checkElements(),this}}(jQuery),$(document).ready(function(){$(".video-btn").click(function(){$(this).hide(),$(this).parent().find("img").hide(),$(this).parent().append('<iframe src="//www.youtube.com/embed/'+$(this).parent().data("id")+'?autoplay=1" frameborder="0" allowfullscreen></iframe>')}),$(".video-link").fancybox(),$(".video-carousel").fancybox(),$(".form-btn").fancybox(),$(".reviews-carousel").owlCarousel({loop:!0,margin:20,nav:!0,navText:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:5}}});var e=$.animateNumber.numberStepFactories.append("%");$(".appraisal").viewportChecker({callbackFunction:function(t,o){$(".appraisal-list li span").each(function(){$(this).animateNumber({number:$(this).attr("id"),numberStep:e},2e3)})},scrollHorizontal:!1}),$(".animate").viewportChecker({callbackFunction:function(e,t){$(".header-item h6").each(function(){$(this).animateNumber({number:$(this).attr("id")},800)})},scrollHorizontal:!1})});