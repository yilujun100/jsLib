
(function(w, $, g) {
    if (!$) {
        return
    }
    var h = function() {
        var o = {},
            output;
        var a = ["-webkit-", "-moz-", "-ms-", "-o-"];
        if (typeof arguments[0] == "string") {
            o[arguments[0]] = arguments[1]
        } else {
            o = arguments[0]
        }
        for (var k in o) {
            for (var i = 0, len = a.length; i < len; i++) {
                o[a[i] + k] = o[k]
            }
        }
        return o
    };
    var j = function(o) {
        o = o || {};
        this.o = $.extend({
            init: function() {},
            before: function() {},
            moving: function() {},
            after: function() {}
        }, o);
        this.init()
    };
    j.prototype = {
        initData: function() {
            var a = this;
            a.touchLock = false;
            a.interval = null;
            a.$el = a.o.$el;
            a.content = a.$el.find("[data-module=content]");
            a.item = a.content.children();
            var b = a.item.first().clone();
            var c = a.item.last().clone();
            a.content.append(b);
            a.content.prepend(c);
            a.item = a.content.children();
            a.length = a.item.length;
            a.index = 1;
            a.nav = a.$el.find("[data-module=nav]")
        },
        initPage: function() {
            var a = this;
            a.item.each(function(k, v) {
                $(this).css(h({
                    "transform": "translate3d(" + 100 * k + "%, 0, 0)"
                }))
            });
            a.setPos(-100 * a.index + "%", false)
        },
        setPos: function(a, b) {
            var c = this;
            c.loadImage(c.item.eq(c.index).prev().find("img[data-src]"));
            c.loadImage(c.item.eq(c.index).next().find("img[data-src]"));
            var d = {};
            d.transition = b ? "all 0.4s ease" : "all 0s ease";
            d.transform = "translate3d(" + a + ", 0, 0)";
            c.content.css(h(d));
            c.nav.children().removeClass("on").eq(c.index - 1).addClass("on");
            setTimeout(function() {
                if (c.index <= 0) {
                    c.index = c.length - 2;
                    c.setPos(-100 * c.index + "%", false);
                    return false
                }
                if (c.index >= c.length - 1) {
                    c.index = 1;
                    c.setPos(-100 * c.index + "%", false);
                    return false
                }
            }, 400)
        },
        bindEvent: function() {
            var c = this;
            var d = c.$el;
            var e = {};
            var f = "";
            d[0].addEventListener("touchstart", function(a) {
                f = "";
                c.stop();
                e.x1 = a.touches[0].pageX;
                e.y1 = a.touches[0].pageY;
                return
            }, false);
            d[0].addEventListener("touchmove", function(a) {
                e.x2 = a.touches[0].pageX;
                e.y2 = a.touches[0].pageY;
                var x = e.x2 - e.x1;
                var y = e.y2 - e.y1;
                !f && (f = Math.abs(y) > Math.abs(x) ? "vertical" : "horizontal");
                if (f == "vertical") {
                    return
                }
                var b = d.width();
                c.setPos(x - c.index * b + "px", false);
                a.preventDefault();
                return false
            }, false);
            d[0].addEventListener("touchend", function(a) {
                e.x2 = a.changedTouches[0].pageX;
                e.y2 = a.changedTouches[0].pageY;
                var x = e.x2 - e.x1;
                var y = e.y2 - e.y1;
                var b = d.width();
                if (f == "vertical" || Math.abs(x) < 30) {
                    return
                }
                if (x > 0) {
                    c.index--
                } else {
                    c.index++
                }
                c.setPos(-100 * c.index + "%", true);
                c.play();
                a.preventDefault();
                return false
            }, false)
        },
        play: function() {
            var a = this;
            a.stop();
            a.interval = w.setInterval(function() {
                a.index++;
                a.setPos(-100 * a.index + "%", true)
            }, 4000)
        },
        stop: function() {
            var a = this;
            w.clearInterval(a.interval)
        },
        loadImage: function(a, b) {
            if (!(a && a.length)) return;
            var c = a.attr("data-src");
            a.attr("src", $.BENLAI.ImageUtil.optimizeURL(c)).removeAttr("data-src");
            b && (a[0].onload = function() {
                b();
                a[0].onload = null
            })
        },
        init: function() {
            var a = this;
            a.touchLock = false;
            a.interval = null;
            a.$el = a.o.$el;
            a.content = a.$el.find("[data-module=content]");
            a.item = a.content.children();
            a.length = a.item.length;
            if (a.length <= 1) return;
            a.loadImage(a.item.last().find("img[data-src]"), function() {
                a.initData();
                a.initPage();
                a.bindEvent();
                a.play();
                a.o.init(a)
            })
        }
    };
    $.fn.Banner = function() {
        return this.each(function() {
            new j({
                $el: $(this)
            })
        })
    }
})(window, $);
$(function() {
	linkul();
    initCountdownClock();
	var csource = getCookie("source");
	var appObj=getAppObj();
	if(isApp()){
		appObj.goback();
		return;
	}
	
    var otherApp = getCookie("otherApp");
    var recRedPlatform = "1";
    if($("#recRedPlatform").length!=0){
    	recRedPlatform = $("#recRedPlatform").val()
    }
    if (otherApp == "1" || recRedPlatform != "1") {
         $("#openAppArea").hide();
    }else{
    	if (!isWeiXin()) {
        var openUrl;
        if (browser.versions.iPhone || browser.versions.iPad) {
            openUrl = "benlai://m.benlai.com"
        } else if (browser.versions.android) {
            openUrl = "com.android.benlailife.activity://m.benlai.com"
        } else {}
        if (openUrl) {
            $("#openApp").attr("href", openUrl);
            $("#openAppArea").show();
        }
        $("#openApp").click(function() {
            var clickedAt = +new Date;
            setTimeout(function() { ! window.document.webkitHidden && setTimeout(function() {
                    if ( + new Date - clickedAt < 3100) {
                        var downloadUrl;
                        if (browser.versions.iPhone || browser.versions.iPad) {
                            downloadUrl = '//itunes.apple.com/cn/app/id640076621?mt=8'
                        } else if (browser.versions.android) {
                            downloadUrl = webRoot + '/appdown/61'
                        }
                        window.location = downloadUrl
                    } else {
                        return false
                    }
                },
                1500)
            },
            1500)
        });
        $("#openAppClose").click(function() {
            $("#openAppArea").hide()
        })
    }
    if (browser.versions.iPhone || browser.versions.iPad || browser.versions.android) {
        var openUrl;
        if (browser.versions.iPhone || browser.versions.iPad) {
            openUrl = "benlai://m.benlai.com"
        } else if (browser.versions.android) {
            openUrl = "com.android.benlailife.activity://m.benlai.com"
        }
        $("#appDL").attr("href", openUrl);
        $("#appDL").click(function() {
            var clickedAt = +new Date;
            setTimeout(function() { ! window.document.webkitHidden && setTimeout(function() {
                    if ( + new Date - clickedAt < 2000) {
                        var downloadUrl;
                        if (browser.versions.iPhone || browser.versions.iPad) {
                            downloadUrl = '//itunes.apple.com/cn/app/id640076621?mt=8'
                        } else if (browser.versions.android) {
                            downloadUrl = webRoot + '/appdown/wap'
                        }
                        window.location = downloadUrl
                    } else {
                        return false
                    }
                },
                500)
            },
            500)
        })
    } else {                                   
        $("#appDL").attr("href", "javascript:window.open('"+webRoot+"/appdown/wap', '本来生活 - App下载');")
    }
    }
    
     if($("#goBackTop").length!=0){
			var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
	        if(scrollTop >= 250){
	            $("#goBackTop").show(); 
	        }else{    
	            $("#goBackTop").hide();    
	        }
			$(window).scroll(function() {
				var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
		        if(scrollTop >= 250){
		            $("#goBackTop").show(); 
		        }else{    
		            $("#goBackTop").hide();    
		        }  
		    });
	}
		
    $("#showSiteBtn").click(function() {
        deleteCookie("burl");
        window.location.href = webRoot + "/showSite"
    });
    $("#benlai_banner").Banner()
});
function goBackTop(){
    var timer=setInterval(function(){
	    var currentPosition=window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop; 
		currentPosition-=60;  
		if(currentPosition>0)  {  
			window.scrollTo(0,currentPosition);  
		}else {  
			window.scrollTo(0,0);  
			clearInterval(timer); 
		} 
    },1);  
}
function initCountdownClock(){
	var curTime = new Date().getTime()/1000;
	$("div[id^=countdown]").each(function(index){
		var startTime = $(this).attr("data-startTime");
		var endTime = $(this).attr("data-endTime");		
		var timeDif=0;
		if(startTime< endTime && curTime>=startTime  &&  curTime<=endTime  ){
			$(this).show();
			timeDif=Math.floor(endTime-curTime);
		}
		var  countdownId=$(this).attr("id").split("_")[1];
		var timer = setInterval(function() {
			if (timeDif >= 1) {
				var hour = Math.floor((timeDif / 60)/60);
				var min = Math.floor((timeDif / 60) % 60);
				var second = Math.floor(timeDif % 60);		
				var strHour = "00",strMin = "00",strSec="00";
				strHour=checkTime(hour);
				strMin=checkTime(min);
				strSec=checkTime(second);
				$("#hourSpan"+countdownId).html(strHour);
				$("#minusSpan"+countdownId).html(strMin);
				$("#secondSpan"+countdownId).html(strSec);
				timeDif--;
			} else {
				clearInterval(timer);
			}
		}, 1000);
	});
}
function checkTime(i){    
	if (i < 10) {    
       i = "0" + i;    
    }    
   return i;    
}
function linkul(){
		var WebSite=getCookie("WebSiteSysNo")
		if(WebSite=="3"){
			$("#wb").attr("href","https://www.benlai.com/huadong");
		}
	  else	if(WebSite=="2"){
			$("#wb").attr("href","https://www.benlai.com/huanan");
		}else if(WebSite=="1"){
			$("#wb").attr("href","https://www.benlai.com");
	}
	
	
}
