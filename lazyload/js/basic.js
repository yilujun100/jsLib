function parseIntForce(e) {
    var t = parseInt(e);
    return isNaN(t) ? 0 : t
}
function parseFloatForce(e) {
    var t = parseFloat(e);
    return isNaN(t) ? parseFloat(0) : t
}
function isNumber(e) {
    return !isNaN(e)
}
function isString(e) {
    return "string" == typeof e
}
function getSelectedValue(e, t) {
    return getSelected(e, "value", t)
}
function getSelected(e, t, n) {
    var o = "";
    return $(e).each(function() {
        var e = $(this).attr(t);
        e && (o += e + n)
    }),
    o ? o.substring(0, o.length - 1) : o
}
function removeSelected(e) {
    $(e).each(function() {})
}
function changeChecked(e) {
    var t = $(e)
      , n = t.attr("data-checked");
    "true" == n ? (t.find("img").attr("src", rsRoot + "/images/choice01.png"),
    t.attr("data-checked", "false")) : (t.find("img").attr("src", rsRoot + "/images/choice02.png"),
    t.attr("data-checked", "true"))
}
function radioSelect(e) {
    o = $(e);
    var t = o.attr("data-checked");
    $("." + o.attr("class")).each(function() {
        $(this).find("img").attr("src", rsRoot + "/images/radio02.png"),
        $(this).attr("data-checked", "false")
    }),
    "true" == t ? (o.find("img").attr("src", rsRoot + "/images/radio02.png"),
    o.attr("data-checked", "false")) : (o.find("img").attr("src", rsRoot + "/images/radio01.png"),
    o.attr("data-checked", "true"))
}
function trim(e) {
    return e.replace(/(^\s*)|(\s*$)/g, "")
}
function ltrim(e) {
    return e.replace(/(^\s*)/g, "")
}
function rtrim(e) {
    return e.replace(/(\s*$)/g, "")
}
function getCookie(e, t) {
    for (var n = document.cookie.split("; "), o = 0; o < n.length; o++)
        if (n[o].split("=")[0] == e)
            return n[o].substring(n[o].indexOf("=") + 1).replace(/\"/g, "");
    return t || ""
}
function setCookie(e, t) {
    var n = 30
      , o = new Date;
    o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3),
    "backUrl" == e ? (deleteCookie("backUrl"),
    document.cookie = e + "=" + escape(t) + ";expires=" + o.toGMTString() + ";path=/;domain=.benlai.com") : document.cookie = e + "=" + escape(t) + ";expires=" + o.toGMTString() + ";path=/"
}
function setCookie(e, t, n) {
    var o = new Date;
    o.setTime(o.getTime() + n),
    "backUrl" == e ? (deleteCookie("backUrl"),
    document.cookie = e + "=" + escape(t) + ";expires=" + o.toGMTString() + ";path=/;domain=.benlai.com") : document.cookie = e + "=" + escape(t) + ";expires=" + o.toGMTString() + ";path=/"
}
function deleteCookie(e) {
    var t = new Date;
    t.setTime(t.getTime() - 1e4),
    document.cookie = e + "=v; expires=" + t.toGMTString() + ";path=/"
}
function gotoLogin(e) {
    var t = getCookie("version").replace(/\"/g, "");
    isApp() && ("" == t || compareVersion(t, "2.1.3")) ? 3 == getCookie("source") && compareVersion("2.2.0", t) ? window.androidjsobj.startLoginAction() : appObj.startLoginAction(e) : window.location.href = webRoot + "/showlogin?backType=100"
}
function setBackUrl() {
    var e = window.location.href;
    e.indexOf(webRoot + "/showlogin") < 0 && e.indexOf(webRoot + "/showPhBindPage") < 0 && e.indexOf(webRoot + "/showReg") < 0 && e.indexOf(webRoot + "/registerPhoneShow") < 0 && e.indexOf(webRoot + "/appdown") < 0 && setCookie("backUrl", encodeURIComponent(e))
}
function checkAlertAPP() {
    var e = window.location.href;
    return isApp() ? "0" : e.indexOf(webRoot + "/activity/moon") >= 0 || e.indexOf(webRoot + "/activity/receiveMoonFestival") >= 0 || e.indexOf(webRoot + "/activity/extShrGrp") >= 0 || e.indexOf(webRoot + "/activity/groupDetail?callback=") >= 0 ? "1" : e.indexOf(webRoot + "/home/homePreview") >= 0 || e.indexOf(webRoot + "/invoice/noticeApp") >= 0 || e.indexOf(webRoot + "/gpsLoading") >= 0 || e.indexOf(webRoot + "/userHome/invitation") >= 0 || e.indexOf(webRoot + "/tuan_product/") >= 0 || e.indexOf(webRoot + "/recRed/") >= 0 || e.indexOf(webRoot + "/return/") >= 0 || e.indexOf(webRoot + "/order/orderDetail") >= 0 || e.indexOf(webRoot + "/order/showGPInfo") >= 0 || e.indexOf(webRoot + "/showActivity?aid=game-nh2015-01") >= 0 || e.indexOf(webRoot + "/showActivity?aid=gb-2015-001") >= 0 || e.indexOf(webRoot + "/showSite") >= 0 || e.indexOf(webRoot + "/showlogin") >= 0 || e.indexOf(webRoot + "/showReg") >= 0 || e.indexOf(webRoot + "/order/alipayback") >= 0 || e.indexOf(webRoot + "/registerPhoneShow") >= 0 || e.indexOf(webRoot + "/appdown/") >= 0 || e.indexOf(webRoot + "/weixin/") >= 0 || e.indexOf(webRoot + "/gb/") >= 0 || e.indexOf(webRoot + "/activity/") >= 0 || e.indexOf(webRoot + "/zt/") >= 0 || e.indexOf(webRoot + "/huadong/zt/") >= 0 || e.indexOf(webRoot + "/huanan/zt/") >= 0 || e.indexOf(webRoot + "/ztAjax/") >= 0 || e.indexOf(webRoot + "/ztPreview/") >= 0 || e.indexOf(webRoot + "/showPhBindPage") >= 0 || e.indexOf(webRoot + "/showUserPdModPage") >= 0 || e.indexOf(webRoot + "/showSetUpPhPage") >= 0 || e.indexOf(webRoot + "/showVerPage") >= 0 || e.indexOf(webRoot + "/userHome/pInfoModPd") >= 0 || e.indexOf(webRoot + "/userHome/personalInfo") >= 0 || e.indexOf(webRoot + "/userHome/pInfoModPhone") >= 0 || e.indexOf(webRoot + "/userHome/pInfoShowNewPhone") >= 0 || e.indexOf(webRoot + "/userHome/showPhRetriPage") >= 0 || e.indexOf(webRoot + "/showMailSetPhPage") >= 0 || e.indexOf(webRoot + "/shake") >= 0 || e.indexOf(webRoot + "/?bd_source_light=3540938") >= 0 ? "0" : "1"
}
function showDLAPP() {
    isApp() || ("1" == checkAlertAPP() ? checkRecStatus() : $("#dlApp").html(""),
    $.post(webRoot + "/checkDLAppStatus", function() {}))
}
function showopenAPP() {
    "1" == checkAlertAPP() && document.write('<meta content="app-id=640076621" name="apple-itunes-app">')
}
function closeDLApp() {
    $("#dlApp").hide()
}
function goTop() {
    scrollTo(0, 0)
}
function closeShare() {
    $("#sharePop").animate({
        opacity: 0,
        top: "150%"
    }, 400, function() {
        hideBack(),
        $("#sharePop").css({
            top: "-150%"
        })
    })
}
function openShare(e, t, n, o) {
    var i;
    i = "string" == typeof o ? o : window.location.href;
    var a = ""
      , r = "http://v.t.sina.com.cn/share/share.php?appkey=000&title=" + encodeURIComponent(t) + "&pic=" + encodeURIComponent(n) + "&url=" + encodeURIComponent(i) + a
      , s = "http://v.t.qq.com/share/share.php?source=1000002&amp;site=&title=" + t + "&pic=" + n + "&url=" + encodeURIComponent(i) + a;
    $("#sLink_Sina").click(function() {
        shareAction("sina", r)
    }),
    $("#sLink_Qzone").click(function() {
        shareAction("qzone", s)
    }),
    $("#sharePop").animate({
        opacity: 1,
        top: "50%"
    }, 400),
    showBack()
}
function shareAction(e, t) {
    "sina" != e ? window.open(encodeURI(t), "", "height=500, width=200") : window.open(t, "", "height=500, width=200")
}
function checkRecStatus() {
    if (hasSite()) {
        var e = getCookie("CSESSIONID")
          , t = getCookie("RecommendCityStatus");
        if (isString(t) && "" != t) {
            var n = t.substring(0, 1)
              , o = t.substring(1);
            ("1" != n || "" != o && e != o) && startgps()
        } else
            startgps();
        setCookie("RecommendCityStatus", "1" + e)
    } else
        setCookie("RecommendCityStatus", "1"),
        showSite()
}
function hasSite() {
    var e = getCookie("WebSiteSysNo")
      , t = getCookie("DeliverySysNo");
    return "" != typeof e && "" != typeof t && Number(e) && Number(t) ? !0 : !1
}
function addProductToCart(e, t, n) {
    addProductToCartQty(e, 1, t, n)
}
function addProductToCartQty(o, p, q, r) {
    if (!Number(p))
        return alert("请输入数字"),
        _this.focus(),
        !1;
    message.btns = [],
    message.title = "提示",
    message.showHeight = 0,
    message.showWidth = 0;
    var s = o + "," + p;
    operateType = "add";
    var t = {
        productSysNo: s,
        operateType: operateType,
        cartIndex: q
    }
      , appversion = getCookie("version").replace(/\"/g, "");
    return isApp() && ("" == appversion || compareVersion(appversion, "2.1.91")) ? (appObj.addCart(s, q + 1),
    !1) : void $.BENLAI.ajax({
        url: webRoot + "/myCart/addCart",
        type: "post",
        data: t,
        async: !0,
        success: function(a) {
            var b = "success"
              , c = eval("(" + a + ")");
            try {
                var d = c.error;
                if (void 0 == typeof d || null  == d || "" == d || "0" == d)
                    b = "success";
                else {
                    if ("100" == d) {
                        if (message.info = "此商品需要登录后才能购买！",
                        message.showWidth = 500,
                        message.showHeight = 300,
                        isApp())
                            message.btns = [{
                                actionName: "确定",
                                actionValue: "javascript:closeMsg()"
                            }];
                        else {
                            var f, g = $("#wapTop").attr("data-pageName");
                            if ("productDetail" == g)
                                f = webRoot + "/showlogin?backType=3&sysNo=" + o;
                            else if ("secKill" == g) {
                                var h = $("#wapTop").attr("data-skNo");
                                f = webRoot + "/showlogin?backType=4&sysNo=" + h
                            } else
                                f = "newSecKill" == g ? webRoot + "/showlogin?backType=14" : webRoot + "/showlogin?backType=110";
                            message.btns = [{
                                actionName: "登录",
                                actionValue: f
                            }]
                        }
                        return showMsg(message),
                        !1
                    }
                    b = c.message
                }
            } catch (e) {
                b = c.message
            }
            if ("success" != b || isApp()) {
                if ("success" == b && isApp()) {
                    var j = eval("(" + c.data + ")");
                    return j.TotalCount && parseInt(j.TotalCount) > 0 && ($(".digital").html(j.TotalCount),
                    $(".digital").attr("data-val", j.TotalCount),
                    $(".digital").show()),
                    getAppObj().refreshCartCnt(),
                    !1
                }
                return message.info = b,
                showMsg(message),
                !1
            }
            for (var j = eval("(" + c.data + ")"), k = j.ProductList.length, i = 0; k > i; i++) {
                var l = j.ProductList[i]
                  , m = Number(l.Price)
                  , n = Number(l.Qty);
                _paq.push(["addEcommerceItem", l.ProductID, "", "", m, n]),
                _paq.push(["trackEcommerceCartUpdate", m * n]);
                var p = l.ProductID + ":" + l.Qty;
                _paq.push(["setCustomVariable", 1, "addToCart", p, "page"])
            }
            _paq.push(["trackPageView"]);
            try {
                window._rs = window._rs || {},
                window._rs.cart = window._rs.cart || [];
                for (var _rsgoods = [], i = 0; k > i; i++) {
                    var l = j.ProductList[i]
                      , m = Number(l.Price)
                      , n = Number(l.Qty);
                    _rsgoods.push(l.ProductID + ":" + n + ":" + m + ":" + m)
                }
                _rs.cart.carts = _rsgoods,
                _rs.cart.extend = "",
                _rs.cart.host = "wap";
                var cuserID = getCookie("userID")
                  , isLogin = 0;
                "" != cuserID && (isLogin = 1),
                _rs.cart.isLogin = isLogin,
                _rs.cart.userId = cuserID
            } catch (e) {}
            return j.TotalCount && parseInt(j.TotalCount) > 0 && ($(".digital").html(j.TotalCount),
            $(".digital").attr("data-val", j.TotalCount),
            $(".digital").show()),
            $("#pdList_product_" + o).length > 0 && $("#pdList_cart_" + o).length > 0 && ($("#pdList_product_" + o).hide(),
            $("#pdList_cart_" + o).show(),
            setTimeout(function() {
                $("#pdList_product_" + o).show(),
                $("#pdList_cart_" + o).hide()
            }, 2e3)),
            "2" == r ? (message.title = "",
            message.info = "加入购物车成功",
            message.btns = [{
                actionName: "继续逛逛",
                actionValue: "javascript:getBack()"
            }, {
                actionName: "去购物车",
                actionValue: webRoot + "/myCart/showCart"
            }],
            message.hide = "true",
            message.grade = "1",
            showMsg(message),
            !1) : "3" == r ? (message.title = "",
            message.info = "加入购物车成功",
            message.btns = [{
                actionName: "继续逛逛",
                actionValue: "javascript:closeMsg()"
            }, {
                actionName: "去购物车",
                actionValue: webRoot + "/myCart/showCart"
            }],
            message.hide = "true",
            showMsg(message),
            !1) : void 0
        }
    })
}
function updateQty(e, t) {
    var n = $(e)
      , o = parseInt(n.parent().find("input").val());
    if ("add" == t) {
        if (99 == o)
            return void alert("不能再增加了！");
        o += 1
    } else if ("dec" == t) {
        if (1 == o)
            return void alert("不能再减少了！");
        o -= 1
    }
    n.parent().find("input").val(o)
}
function inputChangeQty(e, t) {
    return _this = $(e),
    _this.val(_this.val().replace(/\D/g, "")),
    _this.val() <= 0 || !Number(_this.val()) ? (_this.val(t),
    _this.focus(),
    !1) : void 0
}
function updateCartCnt(e) {
    var t = 0;
    if (null  != e)
        for (var n = e.split("_"), o = 0; o < n.length; o++)
            t += n[o].split(",")[1];
    var i = parseInt($(".digital").attr("data-val"));
    if (i >= 0) {
        var a = i + t;
        $(".digital").html(a)
    }
}
function getCartProsCnt() {
    $(".digital").length > 0 && $.ajax({
        type: "POST",
        cache: !1,
        url: webRoot + "/myCart/cartProsCnt",
        data: {},
        success: function(e) {
            "fail" != e && (0 > e ? ($(".digital").hide(),
            $(".digital").attr("data-val", e)) : 0 == e ? $(".digital").hide() : ($(".digital").show(),
            $(".digital").html(e),
            $(".digital").attr("data-val", e)))
        }
    })
}
function subForm(e, t, n, o) {
    $("#" + e).val(t),
    $("#" + n).attr("action", o),
    document.getElementById(n).submit()
}
function subForm(e, t) {
    $("#" + e).attr("action", t),
    document.getElementById(e).submit()
}
function subForm(e) {
    document.forms[0].action = e,
    document.forms[0].submit()
}
function controllClick(e) {
    "undefined" == typeof e ? (disabledb = "disabled",
    setTimeout(function() {
        disabledb = ""
    }, 1e3 * initTimeb)) : (e.attr("data-disabled", "disabled"),
    setTimeout(function() {
        e.attr("data-disabled", "")
    }, 1e3 * initTimeb))
}
function getBack2() {
    var e = !0;
    (!document.referrer || document.referrer.indexOf(webRoot) < 0) && (e = !1),
    isApp() ? appObj.goback() : e ? window.history.back() : window.location.replace(webRoot)
}
function getBack(e) {
    if ("undefined" == typeof e)
        document.referrer.indexOf(webRoot) >= 0 ? window.history.back() : window.location.href = cityRoot;
    else {
        var t = e.attr("data-disabled");
        if ("disabled" == t)
            return;
        if (controllClick(e),
        isApp())
            return void window.history.back();
        if ("undefined" == typeof e || "undefined" == typeof e.attr("data-back"))
            document.referrer.indexOf(webRoot) >= 0 ? document.referrer.indexOf("cps/redirect") >= 0 ? window.location.href = cityRoot : window.history.back() : window.location.href = cityRoot;
        else {
            var n = e.attr("data-back");
            "home" == n ? window.location.href = cityRoot : document.referrer.indexOf(webRoot) >= 0 ? document.referrer.indexOf("cps/redirect") >= 0 ? window.location.href = cityRoot : window.history.back() : window.location.href = cityRoot
        }
    }
}
function checkResult(a) {
    var b = "success";
    try {
        var c = eval(a).error;
        b = void 0 == typeof c || null  == c || "" == c ? "success" : eval(a).message
    } catch (e) {
        b = "success"
    }
    return b
}
function msgPop(e, t, n) {
    $("#fullScreen").css({
        height: $(document).height()
    }),
    $("#msgArea").css({
        left: ($(window).width() - $("#msgArea").outerWidth()) / 2,
        top: ($(window).height() - $("#msgArea").outerHeight()) / 2 + $(document).scrollTop()
    }),
    $("#msgTitleArea").html(e),
    $("#msgContentArea").html(t),
    n && $("#msgBtnArea").show(),
    showBack(),
    $("#msgArea").show()
}
function showBack() {
    $("#fullScreen").show().css({
        opacity: .5
    })
}
function hideBack() {
    $("#fullScreen").hide()
}
function showMsg(e) {
    $("#msgArea").css(isNumber(e.showWidth) && 0 != e.showWidth ? {
        width: (e.showWidth / 200).toFixed(2) + "rem"
    } : {
        width: "2.5rem"
    }),
    $("#msgArea").css(isNumber(e.showHeight) && 0 != e.showHeight ? {
        height: (e.showHeight / 200).toFixed(2) + "rem"
    } : e.info.length > 60 ? {
        height: "1.5rem"
    } : {
        height: "1.15rem"
    }),
    $("#msgTitleArea").html("false" == e.error || "true" == e.error && "" != e.title ? e.title : "<span style='color:red;font-size:0.08rem'>错误提示</span>"),
    $("#msgContentArea").html(e.info),
    2 == e.btns.length ? ($("#msgBtn1").html(e.btns[0].actionName),
    $("#msgBtn1").attr("href", e.btns[0].actionValue),
    $("#msgBtn1").addClass("mr35"),
    $("#msgBtn2").html(e.btns[1].actionName),
    $("#msgBtn2").attr("href", e.btns[1].actionValue),
    $("#msgBtnArea").show()) : 1 == e.btns.length ? ($("#msgBtn1").html(e.btns[0].actionName),
    $("#msgBtn1").attr("href", e.btns[0].actionValue),
    $("#msgBtn2").hide(),
    $("#msgBtnArea").show()) : 2 == e.btnsClick.length ? ($("#msgBtn1").html(e.btnsClick[0].actionName),
    $("#msgBtn1").bind("click", e.btnsClick[0].actionValue),
    $("#msgBtn2").html(e.btnsClick[1].actionName),
    $("#msgBtn2").bind("click", e.btnsClick[1].actionValue),
    $("#msgBtnArea").show()) : 1 == e.btnsClick.length ? ($("#msgBtn1").html(e.btnsClick[0].actionName),
    $("#msgBtn1").bind("click", e.btnsClick[0].actionValue),
    $("#msgBtn2").hide(),
    $("#msgBtnArea").show()) : $("#msgBtnArea").hide(),
    "false" == e.showClose && $("#msgCloseBtn").hide(),
    $("#fullScreen").show().css({
        opacity: .5
    }),
    $("#msgArea").show(),
    "true" == e.hide && ("1" == e.grade ? setTimeout(function() {
        $("#fullScreen").hide(),
        $("#msgArea").hide()
    }, 8e3) : setTimeout(function() {
        $("#fullScreen").hide(),
        $("#msgArea").hide()
    }, 2e3))
}
function resetMsg() {
    message = {
        title: "提示",
        error: "false",
        info: "",
        btns: [],
        hide: "false",
        grade: "0",
        showWidth: 0,
        showHeight: 0,
        showClose: "true"
    }
}
function showcConfirm(e) {
    $("#msgTitleArea").html(e.title),
    $("#msgContentArea").html(e.info),
    2 == e.btns.length && ($("#msgBtn1").html(e.btns[0].actionName),
    $("#msgBtn1").attr("href", e.btns[0].actionValue),
    $("#msgBtn2").html(e.btns[1].actionName),
    $("#msgBtn2").attr("href", e.btns[1].actionValue),
    $("#msgBtnArea").show()),
    showBack(),
    $("#msgArea").show()
}
function closeMsg() {
    hideBack(),
    $("#msgArea").hide()
}
function showSite(e) {
    ("undefined" == typeof e || null  == e) && (e = window.location.href),
    setCookie("burl", e),
    e = e.substring(webRoot.length),
    window.location.href = webRoot + "/showSite?redirUrl=" + encodeURIComponent(e)
}
function startgps(e) {
    var t, n = navigator.geolocation;
    t = isNumber(e) ? 1e3 * e : 5e3;
    var o = {
        enableHighAccuracy: !1,
        timeout: t,
        maximumAge: 0
    };
    n ? n.getCurrentPosition(showgps, closegps, o) : closegps()
}
function closegps() {
    getRecommendCity()
}
function showgps(e) {
    var t = {};
    if (e) {
        var n = e.coords.latitude
          , o = e.coords.longitude;
        t = {
            latitude: n,
            longitude: o
        }
    }
    getRecommendCity(t)
}
function getRecommendCity(e) {
    $.post(webRoot + "/checkSite", e, function(a) {
        var b = eval("(" + a + ")");
        if ("1" == b.alertType)
            showSite();
        else if ("2" == b.alertType || "3" == b.alertType) {
            var c = b.newCity
              , d = b.city;
            message.title = "温馨提示",
            message.info = "<div class='wap_pop_city'><dt>建议您选择站点:<a href='javascript:reSetCity(" + c + ")'>" + d + "</a></dt></div>",
            showMsg(message)
        }
    })
}
function reSetCity(c) {
    $.post(webRoot + "/changeSite", {
        cityNo: c
    }, function(a) {
        var b = eval("(" + a + ")");
        "0" == b.proStatus ? window.location.reload(!0) : (message.info = b.proMsg,
        showMsg(message))
    })
}
function isWeiXin() {
    var e = window.navigator.userAgent.toLowerCase();
    return "micromessenger" == e.match(/MicroMessenger/i) ? !0 : !1
}
function setWxShare(shareData) {
    if (window.wx) {
        var regParm = {
            url: window.location.href.split("#")[0]
        };
        $.post(webRoot + "/demo/getWxConfig", regParm, function(datas) {
            if ("" != datas) {
                var data = eval("(" + datas + ")");
                wx.config({
                    debug: !1,
                    appId: data.appId,
                    timestamp: data.timestamp,
                    nonceStr: data.noncestr,
                    signature: data.paySign,
                    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ"],
                    success: function() {},
                    fail: function() {}
                }),
                wx.ready(function() {
                    wx.checkJsApi({
                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ"],
                        success: function() {
                            wx.onMenuShareAppMessage(shareData),
                            wx.onMenuShareTimeline(shareData),
                            wx.onMenuShareQQ(shareData)
                        },
                        fail: function() {
                            alert("您的微信当前版本不支持此分享功能!")
                        }
                    })
                })
            }
        })
    }
}
function getAppObj() {
    return "undefined" != typeof window.appjsobj ? window.appjsobj : "undefined" != typeof window.androidjsobj ? window.androidjsobj : void 0
}
function canApplePay() {
    if (!browser.versions.ios)
        return !1;
    var e = window.sessionStorage.getItem("canApplePay");
    return null  == e ? "undefined" != typeof appObj && "function" == typeof appObj.isApplePayAvailable ? (e = appObj.isApplePayAvailable(),
    window.sessionStorage.setItem("canApplePay", e),
    "1" === e) : !1 : "1" === e
}
function isApp() {
    var e = getCookie("source");
    return "1" == e || "3" == e || "undefined" != typeof window.appjsobj || "undefined" != typeof window.androidjsobj ? !0 : !1
}
function getFullUrl(e) {
    if ("http" == e.substr(0, 4))
        return e;
    var t = webRoot + "/" + e;
    return t
}
function addProductListToCart(j, k, l) {
    message.btns = [],
    message.title = "提示",
    message.showHeight = 0,
    message.showWidth = 0;
    var m = j;
    if ("" == m)
        return message.info = "请选择商品！",
        message.hide = "true",
        showMsg(message),
        !1;
    var n = {
        productSysNo: m,
        operateType: "add",
        cartIndex: k
    };
    $.post(webRoot + "/myCart/addCart", n, function(a) {
        var b = "success"
          , c = eval("(" + a + ")");
        try {
            var d = c.error;
            if (void 0 == typeof d || null  == d || "" == d || "0" == d)
                b = "success";
            else {
                if ("100" == d) {
                    if (message.info = "有商品需要登录后才能购买！",
                    message.showWidth = 500,
                    message.showHeight = 300,
                    isApp())
                        message.btns = [{
                            actionName: "确定",
                            actionValue: "javascript:closeMsg()"
                        }];
                    else {
                        var f, g = $("#wapTop").attr("data-pageName");
                        if ("productDetail" == g)
                            f = webRoot + "/showlogin?backType=3&sysNo=" + sysNo;
                        else if ("secKill" == g) {
                            var h = $("#wapTop").attr("data-skNo");
                            f = webRoot + "/showlogin?backType=4&sysNo=" + h
                        } else
                            f = "newSecKill" == g ? webRoot + "/showlogin?backType=14" : webRoot + "/showlogin?backType=110";
                        message.btns = [{
                            actionName: "登录",
                            actionValue: f
                        }]
                    }
                    return showMsg(message),
                    !1
                }
                b = c.message
            }
        } catch (e) {
            b = c.message
        }
        if ("success" != b || isApp()) {
            if ("success" == b && isApp()) {
                var i = eval("(" + c.data + ")");
                return i.TotalCount && parseInt(i.TotalCount) > 0 && ($(".digital").html(i.TotalCount),
                $(".digital").attr("data-val", i.TotalCount),
                $(".digital").show()),
                getAppObj().refreshCartCnt(),
                !1
            }
            return message.info = b,
            showMsg(message),
            !1
        }
        var i = eval("(" + c.data + ")");
        return i.TotalCount && parseInt(i.TotalCount) > 0 && ($(".digital").html(i.TotalCount),
        $(".digital").attr("data-val", i.TotalCount),
        $(".digital").show()),
        "2" == l ? (message.title = "",
        message.info = "加入购物车成功",
        message.btns = [{
            actionName: "继续逛逛",
            actionValue: "javascript:getBack()"
        }, {
            actionName: "去购物车",
            actionValue: webRoot + "/myCart/showCart"
        }],
        message.hide = "true",
        message.grade = "1",
        showMsg(message),
        !1) : "3" == l ? (message.title = "",
        message.info = "加入购物车成功",
        message.btns = [{
            actionName: "继续逛逛",
            actionValue: "javascript:closeMsg()"
        }, {
            actionName: "去购物车",
            actionValue: webRoot + "/myCart/showCart"
        }],
        message.hide = "true",
        showMsg(message),
        !1) : void 0
    })
}
function getUrlParam(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
      , n = window.location.search.substr(1).match(t);
    return null  != n ? unescape(n[2]) : null 
}
function openAppOrDownload() {
    var e = getCookie("otherApp")
      , f = "1";
    if (0 != $("#recRedPlatform").length && (f = $("#recRedPlatform").val()),
    "1" == e || "1" != f)
        $("#openAppArea").hide();
    else if (!isApp()) {
        var g;
        browser.versions.iPhone || browser.versions.iPad ? g = "benlai://m.benlai.com" : browser.versions.android && (g = "com.android.benlailife.activity://m.benlai.com"),
        g && ($("#openApp").attr("href", g),
        $("#openAppArea").show()),
        $("#openApp").click(function() {
            var d = +new Date;
            setTimeout(function() {
                !window.document.webkitHidden && setTimeout(function() {
                    if (!(+new Date - d < 3100))
                        return !1;
                    var a = getRequestURL("pk_kwd")
                      , b = $("#downloadList").val()
                      , c = eval("(" + b + ")");
                    window.location = null  != a && "undefined" != typeof c && 0 != $("#downloadList").length ? webRoot + "/appdown/" + c[a] : webRoot + "/appdown/61"
                }, 1500)
            }, 1500)
        }),
        $("#openAppClose").click(function() {
            $("#openAppArea").hide()
        })
    }
}
function getRequestURL(e) {
    {
        var t = window.location.hash;
        new Object
    }
    if ("" != t || -1 != t.indexOf("#"))
        for (var n = t.substr(1), o = n.split("&"), i = 0; i < o.length; i++)
            if (o[i].split("=")[0] === e)
                return o[i].split("=")[1];
    return null 
}
function iosInjection() {
    return window.appjsobj = {},
    window.appjsobj.refreshCartCnt = function() {
        window.location.href = "transscheme://refreshCartCnt"
    }
    ,
    window.appjsobj.syncWAPCookies = function() {
        window.location.href = "transscheme://syncWAPCookies"
    }
    ,
    window.appjsobj.goback = function() {
        window.location.href = "transscheme://goback"
    }
    ,
    window.appjsobj.CartAction = function() {
        window.location.href = "transscheme://CartAction"
    }
    ,
    window.appjsobj.isShowAppAction = function(e, t) {
        var n = "transscheme://isShowAppAction"
          , o = n + "???type=" + e + "&&&show=" + t;
        window.location.href = o
    }
    ,
    window.appjsobj.shareAppAction = function(e, t, n, o, i) {
        var a = "transscheme://shareAppAction";
        a = "undefined" != typeof o && "undefined" != typeof i ? a + "???Url=" + e + "&&&imgUrl=" + t + "&&&content=" + n + "&&&shareTitle=" + o + "&&&extraType=" + i : a + "???Url=" + e + "&&&imgUrl=" + t + "&&&content=" + n,
        window.location.href = a
    }
    ,
    window.appjsobj.stillUseWeibo = function() {
        var e = "transscheme://stillUseWeibo";
        window.location.href = e
    }
    ,
    window.appjsobj.goToAppRegister = function() {
        var e = "transscheme://goToAppRegister";
        window.location.href = e
    }
    ,
    window.appjsobj.AppLocationData = function() {
        window.location.href = "transscheme://AppLocationData"
    }
    ,
    window.appjsobj.startPayAction = function(e, t, n) {
        var o = "transscheme://startPayAction"
          , i = o + "???payType=" + e + "&&&sysNo=" + t + "&&&type=" + n;
        window.location.href = i
    }
    ,
    window.appjsobj.startLoginAction = function(e) {
        e || (e = "0"),
        window.location.href = "transscheme://startLoginAction???type=" + e
    }
    ,
    window.appjsobj.unionLoginAction = function(e) {
        window.location.href = "transscheme://unionLoginAction???type=" + e
    }
    ,
    window.appjsobj.loginSuccess = function() {
        window.location.href = "transscheme://loginSuccess"
    }
    ,
    window.appjsobj.showHome = function() {
        window.location.href = "transscheme://showHome"
    }
    ,
    window.appjsobj.showUserHome = function() {
        window.location.href = "transscheme://showUserHome"
    }
    ,
    window.appjsobj.showCoupon = function() {
        window.location.href = "transscheme://showCoupon"
    }
    ,
    window.appjsobj.showGiftCard = function() {
        window.location.href = "transscheme://showGiftCard"
    }
    ,
    window.appjsobj.showExchangeGift = function() {
        window.location.href = "transscheme://showExchangeGift"
    }
    ,
    window.appjsobj.showOrderList = function() {
        window.location.href = "transscheme://showOrderList"
    }
    ,
    window.appjsobj.showProductReviews = function() {
        window.location.href = "transscheme://showProductReviews"
    }
    ,
    window.appjsobj.addCart = function(e, t) {
        window.location.href = "transscheme://addCart???productSysNo=" + e + "&&&cartType=" + t
    }
    ,
    window.appjsobj
}
function isShowAppAction(e, t) {
    isApp() && appObj.isShowAppAction && appObj.isShowAppAction(e, t)
}
function appGoBack() {
    isApp() && appObj.goback && appObj.goback()
}
function openAppShare(e, t, n) {
    isApp() && appObj.shareAppAction && appObj.shareAppAction(e, t, n)
}
function CartAction() {
    isApp() && appObj.CartAction() && appObj.CartAction()
}
function showRegister() {
    isApp() && appObj.goToAppRegister ? appObj.goToAppRegister() : window.location.href = webRoot + "/showReg"
}
function showLogin(e) {
    isApp() && appObj.startLoginAction ? 3 == getCookie("source") ? window.androidjsobj.startLoginAction() : appObj.startLoginAction(e) : window.location.href = webRoot + "/showlogin?backType=9"
}
function showCart() {
    isApp() && appObj.CartAction ? appObj.CartAction() : window.location.href = webRoot + "/myCart/showCart"
}
function showProductReviews() {
    isApp() && appObj.showProductReviews ? appObj.showProductReviews() : window.location.href = webRoot + "/userHome/myReview"
}
function showOrderList() {
    isApp() && appObj.showOrderList ? appObj.showOrderList() : window.location.href = webRoot + "/order/list?isFromSource=1"
}
function showExchangeGift() {
    isApp() && appObj.showExchangeGift ? appObj.showExchangeGift() : window.location.href = webRoot + "/iScanQrCode/getCouponProducts"
}
function showGiftCard() {
    isApp() && appObj.showHome ? appObj.showGiftCard() : window.location.href = webRoot + "/userHome/giftCard"
}
function showHome() {
    isApp() && appObj.showHome ? appObj.showHome() : window.location.href = webRoot
}
function showUserHome() {
    isApp() && appObj.showUserHome ? appObj.showUserHome() : window.location.href = webRoot + "/userHome"
}
function showCoupon() {
    isApp() && appObj.showCoupon ? appObj.showCoupon() : window.location.href = webRoot + "/userHome/coupon"
}
function unionLoginAction(e) {
    isApp() && appObj.unionLoginAction && appObj.unionLoginAction(e)
}
function loginSuccess() {
    isApp() && appObj.loginSuccess && appObj.loginSuccess()
}
function webViewBack() {
    document.referrer.indexOf(webRoot) >= 0 ? window.history.back() : appObj.goback()
}
function setPiwikUserId() {
    try {
        var e = getCookie("userID");
        _paq.push("" == e ? ["setUserId", "0"] : ["setUserId", e])
    } catch (t) {}
}
function compareVersion(e, t) {
    if ("" == e || "" == t)
        return !1;
    for (var n = e.split("."), o = t.split("."), i = Math.min(n.length, o.length), a = 0; i > a; a++) {
        if (1 * n[a] > 1 * o[a])
            return !0;
        if (1 * n[a] < 1 * o[a])
            return !1
    }
    return void 0 == n[a] && void 0 == o[a] ? !1 : (void 0 == n[a] ? n[a] = 0 : o[a] = 0,
    1 * n[a] > 1 * o[a] ? !0 : !1)
}
function getCurrentUrlParam(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
      , n = window.location.search.substr(1).match(t);
    return null  != n ? unescape(n[2]) : ""
}
function getSubURL() {
    var e = window.location.href
      , t = window.location.href.split("#")[0];
    return -1 != t.indexOf("/zt/") ? /\?/g.test(t) ? t.substring(webRoot.length) + "&urlFull=" + encodeURIComponent(e) : t.substring(webRoot.length) + "?urlFull=" + encodeURIComponent(e) : e.substring(webRoot.length)
}
eval(function(e, t, n, o, i, a) {
    if (i = function(e) {
        return (t > e ? "" : i(parseInt(e / t))) + ((e %= t) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
    }
    ,
    !"".replace(/^/, String)) {
        for (; n--; )
            a[i(n)] = o[n] || i(n);
        o = [function(e) {
            return a[e]
        }
        ],
        i = function() {
            return "\\w+"
        }
        ,
        n = 1
    }
    for (; n--; )
        o[n] && (e = e.replace(new RegExp("\\b" + i(n) + "\\b","g"), o[n]));
    return e
}('8 1j=5(){5 t(t){7 14==t?2V(t):X[Y.13(t)]||"1X"}5 e(e){7"5"==t(e)}5 n(t){7 14!=t&&t==t.1c}5 i(t){7 14!=t&&t.1U==t.7z}5 r(e){7"1X"==t(e)}5 o(t){7 r(t)&&!n(t)&&3k.7D(t)==3k.1N}5 a(t){7"3Y"==1h t.17}5 s(t){7 N.13(t,5(t){7 14!=t})}5 u(t){7 t.17>0?S.16.2l.1m([],t):t}5 c(t){7 t.1e(/::/g,"/").1e(/([A-Z]+)([A-Z][a-z])/g,"$4Y$2").1e(/([a-z\\d])([A-Z])/g,"$4Y$2").1e(/21/g,"-").1V()}5 l(t){7 t 15 Z?Z[t]:Z[t]=1r 1W("(^|\\\\s)"+t+"(\\\\s|$)")}5 f(t,e){7"3Y"!=1h e||L[c(t)]?e:e+"7E"}5 h(t){8 e,n;7 D[t]||(e=k.1G(t),k.2f.4m(e),n=2v(e,"").3i("1M"),e.1q.32(e),"29"==n&&(n="7F"),D[t]=n),D[t]}5 p(t){7"2g"15 t?M.13(t.2g):S.1t(t.2J,5(t){7 1==t.1U?t:19 0})}5 d(t,e){8 n,i=t?t.17:0;1b(n=0;i>n;n++)6[n]=t[n];6.17=i,6.3y=e||""}5 m(t,e,n){1b(T 15 e)n&&(o(e[T])||Q(e[T]))?(o(e[T])&&!o(t[T])&&(t[T]={}),Q(e[T])&&!Q(t[T])&&(t[T]=[]),m(t[T],e[T],n)):e[T]!==E&&(t[T]=e[T])}5 g(t,e){7 14==e?S(t):S(t).1J(e)}5 v(t,n,i,r){7 e(n)?n.13(t,i,r):n}5 y(t,e,n){14==n?t.7Q(e):t.7P(e,n)}5 b(t,e){8 n=t.2O||"",i=n&&n.4H!==E;7 e===E?i?n.4H:n:19(i?n.4H=e:t.2O=e)}5 w(t){2S{7 t?"7K"==t||("7W"==t?!1:"14"==t?14:+t+""==t?+t:/^[\\[\\{]/.1i(t)?S.4l(t):t):t}2U(e){7 t}}5 x(t,e){e(t);1b(8 n=0,i=t.2J.17;i>n;n++)x(t.2J[n],e)}8 E,T,S,j,C,O,P=[],A=P.2l,N=P.1J,M=P.1F,k=1c.1A,D={},Z={},L={"73-6P":1,6O:1,"6U-74":1,"7i-2w":1,2t:1,"z-5i":1,76:1},$=/^\\s*<(\\w+|!)[^>]*>/,F=/^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,R=/<(?!79|br|7f|7G|8M|8P|8Q|8R|8E|4A)(([\\w:]+)[^>]*)\\/>/5B,21=/^(?:2f|26)$/i,q=/([A-Z])/g,z=["41","1f","26","1D","1k","2c","2w","2j"],I=["90","8f","3N","3v"],W=k.1G("8e"),B=k.1G("5V"),V={5V:k.1G("5Y"),5Y:W,8O:W,8n:W,8o:B,8p:B,"*":k.1G("3u")},H=/3w|8m|8l/,U=/^[\\w-]*$/,X={},Y=X.5e,G={},J=k.1G("3u"),K={8i:"8j",8k:"8q","1b":"8r","8x":"2O",8y:"8z",8w:"8v",8s:"8t",8u:"8h",8g:"83",84:"85",82:"81",7Y:"7Z"},Q=1R.4D||5(t){7 t 4N 1R};7 G.2q=5(t,e){10(!e||!t||1!==t.1U)7!1;8 n=t.80||t.86||t.87||t.8d;10(n)7 n.13(t,e);8 i,r=t.1q,o=!r;7 o&&(r=J).4m(t),i=~G.1Y(r,e).1s(t),o&&J.32(t),i},C=5(t){7 t.1e(/-+(.)?/g,5(t,e){7 e?e.2I():""})},O=5(t){7 N.13(t,5(e,n){7 t.1s(e)==n})},G.3D=5(t,e,n){8 i,r,a;7 F.1i(t)&&(i=S(k.1G(1W.$1))),i||(t.1e&&(t=t.1e(R,"<$1></$2>")),e===E&&(e=$.1i(t)&&1W.$1),e 15 V||(e="*"),a=V[e],a.2D=""+t,i=S.12(M.13(a.2J),5(){a.32(6)})),o(n)&&(r=S(i),S.12(n,5(t,e){z.1s(t)>-1?r[t](e):r.38(t,e)})),i},G.Z=5(t,e){7 1r d(t,e)},G.3x=5(t){7 t 4N G.Z},G.5a=5(t,n){8 i;10(!t)7 G.Z();10("1P"==1h t)10(t=t.2p(),"<"==t[0]&&$.1i(t))i=G.3D(t,1W.$1,n),t=14;1o{10(n!==E)7 S(n).28(t);i=G.1Y(k,t)}1o{10(e(t))7 S(k).2Y(t);10(G.3x(t))7 t;10(Q(t))i=s(t);1o 10(r(t))i=[t],t=14;1o 10($.1i(t))i=G.3D(t.2p(),1W.$1,n),t=14;1o{10(n!==E)7 S(n).28(t);i=G.1Y(k,t)}}7 G.Z(i,t)},S=5(t,e){7 G.5a(t,e)},S.2H=5(t){8 e,n=M.13(18,1);7"6h"==1h t&&(e=t,t=n.5t()),n.1g(5(n){m(t,n,e)}),t},G.1Y=5(t,e){8 n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.1F(1):e,a=U.1i(o);7 t.51&&a&&i?(n=t.51(o))?[n]:[]:1!==t.1U&&9!==t.1U&&11!==t.1U?[]:M.13(a&&!i&&t.5r?r?t.5r(o):t.88(e):t.89(e))},S.1Z=k.2Z.1Z?5(t,e){7 t!==e&&t.1Z(e)}:5(t,e){1b(;e&&(e=e.1q);)10(e===t)7!0;7!1},S.1d=t,S.1y=e,S.8a=n,S.4D=Q,S.2E=o,S.8A=5(t){8 e;1b(e 15 t)7!1;7!0},S.4p=5(t,e,n){7 P.1s.13(e,t,n)},S.5u=C,S.2p=5(t){7 14==t?"":2V.1N.2p.13(t)},S.5w=0,S.8B={},S.6m={},S.91=5(){},S.1t=5(t,e){8 n,i,r,o=[];10(a(t))1b(i=0;i<t.17;i++)n=e(t[i],i),14!=n&&o.1n(n);1o 1b(r 15 t)n=e(t[r],r),14!=n&&o.1n(n);7 u(o)},S.12=5(t,e){8 n,i;10(a(t)){1b(n=0;n<t.17;n++)10(e.13(t[n],n,t[n])===!1)7 t}1o 1b(i 15 t)10(e.13(t[i],i,t[i])===!1)7 t;7 t},S.92=5(t,e){7 N.13(t,e)},1c.5x&&(S.4l=5x.8Z),S.12("8W 6k 2V 8X 1R 2C 1W 3k 8Y".1x(" "),5(t,e){X["[1X "+e+"]"]=e.1V()}),S.16={94:G.Z,17:0,1g:P.1g,3g:P.3g,1n:P.1n,45:P.45,4E:P.4E,1s:P.1s,2l:5(){8 t,e,n=[];1b(t=0;t<18.17;t++)e=18[t],n[t]=G.3x(e)?e.4I():e;7 A.1m(G.3x(6)?6.4I():6,n)},1t:5(t){7 S(S.1t(6,5(e,n){7 t.13(e,n,e)}))},1F:5(){7 S(M.1m(6,18))},2Y:5(t){7 H.1i(k.5C)&&k.2f?t(S):k.47("9b",5(){t(S)},!1),6},2n:5(t){7 t===E?M.13(6):6[t>=0?t:t+6.17]},4I:5(){7 6.2n()},3S:5(){7 6.17},1K:5(){7 6.12(5(){14!=6.1q&&6.1q.32(6)})},12:5(t){7 P.9c.13(6,5(e,n){7 t.13(e,n,e)!==!1}),6},1J:5(t){7 e(t)?6.3I(6.3I(t)):S(N.13(6,5(e){7 G.2q(e,t)}))},1I:5(t,e){7 S(O(6.2l(S(t,e))))},9d:5(t){7 6.17>0&&G.2q(6[0],t)},3I:5(t){8 n=[];10(e(t)&&t.13!==E)6.12(5(e){t.13(6,e)||n.1n(6)});1o{8 i="1P"==1h t?6.1J(t):a(t)&&e(t.9a)?M.13(t):S(t);6.1g(5(t){i.1s(t)<0&&n.1n(t)})}7 S(n)},3G:5(t){7 6.1J(5(){7 r(t)?S.1Z(6,t):S(6).28(t).3S()})},3B:5(t){7-1===t?6.1F(t):6.1F(t,+t+1)},3s:5(){8 t=6[0];7 t&&!r(t)?t:S(t)},1H:5(){8 t=6[6.17-1];7 t&&!r(t)?t:S(t)},28:5(t){8 e,n=6;7 e=t?"1X"==1h t?S(t).1J(5(){8 t=6;7 P.5q.13(n,5(e){7 S.1Z(e,t)})}):1==6.17?S(G.1Y(6[0],t)):6.1t(5(){7 G.1Y(6,t)}):S()},4q:5(t,e){8 n=6[0],r=!1;1b("1X"==1h t&&(r=S(t));n&&!(r?r.1s(n)>=0:G.2q(n,t));)n=n!==e&&!i(n)&&n.1q;7 S(n)},6p:5(t){1b(8 e=[],n=6;n.17>0;)n=S.1t(n,5(t){7(t=t.1q)&&!i(t)&&e.1s(t)<0?(e.1n(t),t):19 0});7 g(e,t)},34:5(t){7 g(O(6.2P("1q")),t)},2g:5(t){7 g(6.1t(5(){7 p(6)}),t)},4T:5(){7 6.1t(5(){7 6.99||M.13(6.2J)})},6q:5(t){7 g(6.1t(5(t,e){7 N.13(p(e.1q),5(t){7 t!==e})}),t)},39:5(){7 6.12(5(){6.2D=""})},2P:5(t){7 S.1t(6,5(e){7 e[t]})},37:5(){7 6.12(5(){"29"==6.1O.1M&&(6.1O.1M=""),"29"==2v(6,"").3i("1M")&&(6.1O.1M=h(6.2B))})},5M:5(t){7 6.3N(t).1K()},97:5(t){8 n=e(t);10(6[0]&&!n)8 i=S(t).2n(0),r=i.1q||6.17>1;7 6.12(5(e){S(6).3Q(n?t.13(6,e):r?i.4v(!0):i)})},3Q:5(t){10(6[0]){S(6[0]).3N(t=S(t));1b(8 e;(e=t.2g()).17;)t=e.3s();S(t).3v(6)}7 6},8U:5(t){8 n=e(t);7 6.12(5(e){8 i=S(6),r=i.4T(),o=n?t.13(6,e):t;r.17?r.3Q(o):i.3v(o)})},8I:5(){7 6.34().12(5(){S(6).5M(S(6).2g())}),6},8J:5(){7 6.1t(5(){7 6.4v(!0)})},33:5(){7 6.1f("1M","29")},4a:5(t){7 6.12(5(){8 e=S(6);(t===E?"29"==e.1f("1M"):t)?e.37():e.33()})},8G:5(t){7 S(6.2P("8F")).1J(t||"*")},8C:5(t){7 S(6.2P("8D")).1J(t||"*")},26:5(t){7 0 15 18?6.12(5(e){8 n=6.2D;S(6).39().3v(v(6,t,e,n))}):0 15 6?6[0].2D:14},1D:5(t){7 0 15 18?6.12(5(e){8 n=v(6,t,e,6.46);6.46=14==n?"":""+n}):0 15 6?6[0].46:14},38:5(t,e){8 n;7"1P"!=1h t||1 15 18?6.12(5(n){10(1===6.1U)10(r(t))1b(T 15 t)y(6,T,t[T]);1o y(6,t,v(6,e,n,6.5R(t)))}):6.17&&1===6[0].1U?!(n=6[0].5R(t))&&t 15 6[0]?6[0][t]:n:E},8K:5(t){7 6.12(5(){1===6.1U&&t.1x(" ").1g(5(t){y(6,t)},6)})},8L:5(t,e){7 t=K[t]||t,1 15 18?6.12(5(n){6[t]=v(6,e,n,6[t])}):6[0]&&6[0][t]},1k:5(t,e){8 n="1k-"+t.1e(q,"-$1").1V(),i=1 15 18?6.38(n,e):6.38(n);7 14!==i?w(i):E},41:5(t){7 0 15 18?6.12(5(e){6.23=v(6,t,e,6.23)}):6[0]&&(6[0].8S?S(6[0]).28("8T").1J(5(){7 6.4i}).2P("23"):6[0].23)},2j:5(t){10(t)7 6.12(5(e){8 n=S(6),i=v(6,t,e,n.2j()),r=n.31().2j(),o={1v:i.1v-r.1v,1u:i.1u-r.1u};"5H"==n.1f("3t")&&(o.3t="7X"),n.1f(o)});10(!6.17)7 14;10(!S.1Z(k.2Z,6[0]))7{1v:0,1u:0};8 e=6[0].9e();7{1u:e.1u+1c.5n,1v:e.1v+1c.5p,2c:22.5A(e.2c),2w:22.5A(e.2w)}},1f:5(e,n){10(18.17<2){8 i,r=6[0];10(!r)7;10(i=2v(r,""),"1P"==1h e)7 r.1O[C(e)]||i.3i(e);10(Q(e)){8 o={};7 S.12(e,5(t,e){o[e]=r.1O[C(e)]||i.3i(e)}),o}}8 a="";10("1P"==t(e))n||0===n?a=c(e)+":"+f(e,n):6.12(5(){6.1O.5j(c(e))});1o 1b(T 15 e)e[T]||0===e[T]?a+=c(T)+":"+f(T,e[T])+";":6.12(5(){6.1O.5j(c(T))});7 6.12(5(){6.1O.75+=";"+a})},5i:5(t){7 t?6.1s(S(t)[0]):6.34().2g().1s(6[0])},4y:5(t){7 t?P.5q.13(6,5(t){7 6.1i(b(t))},l(t)):!1},4h:5(t){7 t?6.12(5(e){10("2O"15 6){j=[];8 n=b(6),i=v(6,t,e,n);i.1x(/\\s+/g).1g(5(t){S(6).4y(t)||j.1n(t)},6),j.17&&b(6,n+(n?" ":"")+j.2Q(" "))}}):6},4o:5(t){7 6.12(5(e){10("2O"15 6){10(t===E)7 b(6,"");j=b(6),v(6,t,e,j).1x(/\\s+/g).1g(5(t){j=j.1e(l(t)," ")}),b(6,j.2p())}})},7l:5(t,e){7 t?6.12(5(n){8 i=S(6),r=v(6,t,n,b(6));r.1x(/\\s+/g).1g(5(t){(e===E?!i.4y(t):e)?i.4h(t):i.4o(t)})}):6},3J:5(t){10(6.17){8 e="3J"15 6[0];7 t===E?e?6[0].3J:6[0].5p:6.12(e?5(){6.3J=t}:5(){6.5D(6.7a,t)})}},3A:5(t){10(6.17){8 e="3A"15 6[0];7 t===E?e?6[0].3A:6[0].5n:6.12(e?5(){6.3A=t}:5(){6.5D(t,6.7b)})}},3t:5(){10(6.17){8 t=6[0],e=6.31(),n=6.2j(),i=21.1i(e[0].2B)?{1v:0,1u:0}:e.2j();7 n.1v-=2M(S(t).1f("5P-1v"))||0,n.1u-=2M(S(t).1f("5P-1u"))||0,i.1v+=2M(S(e[0]).1f("5N-1v-2c"))||0,i.1u+=2M(S(e[0]).1f("5N-1u-2c"))||0,{1v:n.1v-i.1v,1u:n.1u-i.1u}}},31:5(){7 6.1t(5(){1b(8 t=6.31||k.2f;t&&!21.1i(t.2B)&&"5H"==S(t).1f("3t");)t=t.31;7 t})}},S.16.7g=S.16.1K,["2c","2w"].1g(5(t){8 e=t.1e(/./,5(t){7 t[0].2I()});S.16[t]=5(r){8 o,a=6[0];7 r===E?n(a)?a["6S"+e]:i(a)?a.2Z["44"+e]:(o=6.2j())&&o[t]:6.12(5(e){a=S(6),a.1f(t,v(6,r,e,a[t]()))})}}),I.1g(5(e,n){8 i=n%2;S.16[e]=5(){8 e,r,o=S.1t(18,5(n){7 e=t(n),"1X"==e||"4F"==e||14==n?n:G.3D(n)}),a=6.17>1;7 o.17<1?6:6.12(5(t,e){r=i?e:e.1q,e=0==n?e.6Q:1==n?e.6N:2==n?e:14;8 s=S.1Z(k.2Z,r);o.1g(5(t){10(a)t=t.4v(!0);1o 10(!r)7 S(t).1K();r.6V(t,e),s&&x(t,5(t){14==t.2B||"6W"!==t.2B.2I()||t.1d&&"1D/2F"!==t.1d||t.4d||1c.5m.13(1c,t.2D)})})})},S.16[i?e+"72":"71"+(n?"70":"6X")]=5(t){7 S(t)[e](6),6}}),G.Z.1N=d.1N=S.16,G.6o=O,G.5v=w,S.4j=G,S}();1c.1j=1j,19 0===1c.$&&(1c.$=1j),5(t){5 e(e,n,i){8 r=t.2x(n);7 t(e).1w(r,i),!r.2X()}5 n(t,n,i,r){7 t.3p?e(n||y,i,r):19 0}5 i(e){e.3p&&0===t.4J++&&n(e,14,"6Y")}5 r(e){e.3p&&!--t.4J&&n(e,14,"6Z")}5 o(t,e){8 i=e.2G;7 e.5d.13(i,t,e)===!1||n(e,i,"7j",[t,e])===!1?!1:19 n(e,i,"7L",[t,e])}5 a(t,e,i,r){8 o=i.2G,a="2z";i.2z.13(o,t,a,e),r&&r.4b(o,[t,a,e]),n(i,o,"7M",[e,i,t]),u(a,e,i)}5 s(t,e,i,r,o){8 a=r.2G;r.1L.13(a,i,e,t),o&&o.7J(a,[i,e,t]),n(r,a,"7n",[i,r,t||e]),u(e,i,r)}5 u(t,e,i){8 o=i.2G;i.3w.13(o,e,t),n(i,o,"7H",[e,i]),r(i)}5 c(){}5 l(t){7 t&&(t=t.1x(";",2)[0]),t&&(t==T?"26":t==E?"35":w.1i(t)?"27":x.1i(t)&&"2u")||"1D"}5 f(t,e){7""==e?t:(t+"&"+e).1e(/[&?]{1,2}/,"?")}5 h(e){e.56&&e.1k&&"1P"!=t.1d(e.1k)&&(e.1k=t.4A(e.1k,e.7I)),!e.1k||e.1d&&"4r"!=e.1d.2I()||(e.1l=f(e.1l,e.1k),e.1k=19 0)}5 p(e,n,i,r){7 t.1y(n)&&(r=i,i=n,n=19 0),t.1y(i)||(r=i,i=19 0),{1l:e,1k:n,2z:i,4G:r}}5 d(e,n,i,r){8 o,a=t.4D(n),s=t.2E(n);t.12(n,5(n,u){o=t.1d(u),r&&(n=i?r:r+"["+(s||"1X"==o||"4F"==o?n:"")+"]"),!r&&a?e.1I(u.2h,u.23):"4F"==o||!i&&"1X"==o?d(e,u,i,n):e.1I(n,u)})}8 m,g,v=0,y=1c.1A,b=/<27\\b[^<]*(?:(?!<\\/27>)<[^<]*)*<\\/27>/5B,w=/^(?:1D|2e)\\/2F/i,x=/^(?:1D|2e)\\/2u/i,E="2e/35",T="1D/26",S=/^\\s*$/,j=y.1G("a");j.2T=1c.4t.2T,t.4J=0,t.50=5(e,n){10(!("1d"15 e))7 t.2r(e);8 i,r,u=e.7N,c=(t.1y(u)?u():u)||"2i"+ ++v,l=y.1G("27"),f=1c[c],h=5(e){t(l).3K("1L",e||"2d")},p={2d:h};7 n&&n.1z(p),t(l).1C("3P 1L",5(o,u){1Q(r),t(l).2a().1K(),"1L"!=o.1d&&i?a(i[0],p,e,n):s(14,u||"1L",p,e,n),1c[c]=f,i&&t.1y(f)&&f(i[0]),f=i=19 0}),o(p,e)===!1?(h("2d"),p):(1c[c]=5(){i=18},l.4d=e.1l.1e(/\\?(.+)=\\?/,"?$1="+c),y.7O.4m(l),e.2o>0&&(r=1T(5(){h("2o")},e.2o)),p)},t.4g={1d:"4r",5d:c,2z:c,1L:c,3w:c,2G:14,3p:!0,4X:5(){7 1r 1c.4W},5f:{27:"1D/2F, 2e/2F, 2e/x-2F",35:E,2u:"2e/2u, 1D/2u",26:T,1D:"1D/7R"},3C:!1,2o:0,56:!0,4u:!0},t.2r=5(e){8 n,r,u=t.2H({},e||{}),p=t.49&&t.49();1b(m 15 t.4g)19 0===u[m]&&(u[m]=t.4g[m]);i(u),u.3C||(n=y.1G("a"),n.2T=u.1l,n.2T=n.2T,u.3C=j.4s+"//"+j.58!=n.4s+"//"+n.58),u.1l||(u.1l=1c.4t.5e()),(r=u.1l.1s("#"))>-1&&(u.1l=u.1l.1F(0,r)),h(u);8 d=u.4G,v=/\\?.+=\\?/.1i(u.1l);10(v&&(d="2i"),u.4u!==!1&&(e&&e.4u===!0||"27"!=d&&"2i"!=d)||(u.1l=f(u.1l,"21="+2C.4z())),"2i"==d)7 v||(u.1l=f(u.1l,u.2i?u.2i+"=?":u.2i===!1?"":"7u=?")),t.50(u,p);8 b,w=u.5f[d],x={},E=5(t,e){x[t.1V()]=[t,e]},T=/^([\\w-]+:)\\/\\//.1i(u.1l)?1W.$1:1c.4t.4s,C=u.4X(),O=C.5S;10(p&&p.1z(C),u.3C||E("X-7v-3b","4W"),E("7C",w||"*/*"),(w=u.5o||w)&&(w.1s(",")>-1&&(w=w.1x(",",2)[0]),C.5F&&C.5F(w)),(u.4w||u.4w!==!1&&u.1k&&"4r"!=u.1d.2I())&&E("7A-7x",u.4w||"2e/x-8V-9h-aU"),u.4n)1b(g 15 u.4n)E(g,u.4n[g]);10(C.5S=E,C.4x=5(){10(4==C.5C){C.4x=c,1Q(b);8 e,n=!1;10(C.2N>=6B&&C.2N<aP||aQ==C.2N||0==C.2N&&"6A:"==T){d=d||l(u.5o||C.aX("aY-1d")),e=C.b4;2S{"27"==d?(1,5m)(e):"2u"==d?e=C.b2:"35"==d&&(e=S.1i(e)?14:t.4l(e))}2U(i){n=i}n?s(n,"b0",C,u,p):a(e,C,u,p)}1o s(C.b1||14,C.2N?"1L":"2d",C,u,p)}},o(C,u)===!1)7 C.2d(),s(14,"2d",C,u,p),C;10(u.4k)1b(g 15 u.4k)C[g]=u.4k[g];8 P="5h"15 u?u.5h:!0;C.aN(u.1d,u.1l,P,u.aB,u.aC);1b(g 15 x)O.1m(C,x[g]);7 u.2o>0&&(b=1T(5(){C.4x=c,C.2d(),s(14,"2o",C,u,p)},u.2o)),C.av(u.1k?u.1k:14),C},t.2n=5(){7 t.2r(p.1m(14,18))},t.aw=5(){8 e=p.1m(14,18);7 e.1d="ax",t.2r(e)},t.aD=5(){8 e=p.1m(14,18);7 e.4G="35",t.2r(e)},t.16.3P=5(e,n,i){10(!6.17)7 6;8 r,o=6,a=e.1x(/\\s/),s=p(e,n,i),u=s.2z;7 a.17>1&&(s.1l=a[0],r=a[1]),s.2z=5(e){o.26(r?t("<3u>").26(e.1e(b,"")).28(r):e),u&&u.1m(o,18)},t.2r(s),6};8 C=3O;t.4A=5(e,n){8 i=[];7 i.1I=5(e,n){t.1y(n)&&(n=n()),14==n&&(n=""),6.1n(C(e)+"="+C(n))},d(i,e,n),i.2Q("&").1e(/%20/g,"+")}}(1j),5(t){8 e,n=[];t.16.1K=5(){7 6.12(5(){6.1q&&("bd"===6.4C&&(n.1n(6),6.4d="1k:by/bz;bx,bw/bt=",e&&1Q(e),e=1T(5(){n=[]},bu)),6.1q.32(6))})}}(1j),5(t){t.3q=5(e){e=t.2H({},e);8 n,i,r,o,a,s,u=[],c=!e.3M&&[],l=5(t){1b(n=e.3n&&t,i=!0,s=o||0,o=0,a=u.17,r=!0;u&&a>s;++s)10(u[s].1m(t[0],t[1])===!1&&e.bB){n=!1;6x}r=!1,u&&(c?c.17&&l(c.5t()):n?u.17=0:f.3h())},f={1I:5(){10(u){8 i=u.17,s=5(n){t.12(n,5(t,n){"5"==1h n?e.bA&&f.3G(n)||u.1n(n):n&&n.17&&"1P"!=1h n&&s(n)})};s(18),r?a=u.17:n&&(o=i,l(n))}7 6},1K:5(){7 u&&t.12(18,5(e,n){1b(8 i;(i=t.4p(n,u,i))>-1;)u.4E(i,1),r&&(a>=i&&--a,s>=i&&--s)}),6},3G:5(e){7!(!u||!(e?t.4p(e,u)>-1:u.17))},39:5(){7 a=u.17=0,6},3h:5(){7 u=c=n=19 0,6},6J:5(){7!u},5k:5(){7 c=19 0,n||f.3h(),6},bD:5(){7!c},3V:5(t,e){7!u||i&&!c||(e=e||[],e=[t,e.1F?e.1F():e],r?c.1n(e):l(e)),6},bq:5(){7 f.3V(6,18)},bs:5(){7!!i}};7 f}}(1j),5(t){5 e(e,i){8 u=e[s],c=u&&r[u];10(19 0===i)7 c||n(e);10(c){10(i 15 c)7 c[i];8 l=a(i);10(l 15 c)7 c[l]}7 o.13(t(e),i)}5 n(e,n,o){8 u=e[s]||(e[s]=++t.5w),c=r[u]||(r[u]=i(e));7 19 0!==n&&(c[a(n)]=o),c}5 i(e){8 n={};7 t.12(e.bf||u,5(e,i){0==i.2h.1s("1k-")&&(n[a(i.2h.1e("1k-",""))]=t.4j.5v(i.23))}),n}8 r={},o=t.16.1k,a=t.5u,s=t.bb="1j"+ +1r 2C,u=[];t.16.1k=5(i,r){7 19 0===r?t.2E(i)?6.12(5(e,r){t.12(i,5(t,e){n(r,t,e)})}):0 15 6?e(6[0],i):19 0:6.12(5(){n(6,i,r)})},t.16.5y=5(e){7"1P"==1h e&&(e=e.1x(/\\s+/)),6.12(5(){8 n=6[s],i=n&&r[n];i&&t.12(e||i,5(t){57 i[e?a(6):t]})})},["1K","39"].1g(5(e){8 n=t.16[e];t.16[e]=5(){8 t=6.28("*");7"1K"===e&&(t=t.1I(6)),t.5y(),n.13(6)}})}(1j),5(t){5 e(n){8 i=[["5z","3a",t.3q({3M:1,3n:1}),"b9"],["42","3c",t.3q({3M:1,3n:1}),"bg"],["5s","3Z",t.3q({3n:1})]],r="bp",o={bm:5(){7 r},bl:5(){7 a.3a(18).3c(18),6},bi:5(){8 n=18;7 e(5(e){t.12(i,5(i,r){8 s=t.1y(n[i])&&n[i];a[r[1]](5(){8 n=s&&s.1m(6,18);10(n&&t.1y(n.1z))n.1z().3a(e.5z).3c(e.42).3Z(e.5s);1o{8 i=6===o?e.1z():6,a=s?[n]:18;e[r[0]+"3b"](i,a)}})}),n=14}).1z()},1z:5(e){7 14!=e?t.2H(e,o):o}},a={};7 t.12(i,5(t,e){8 n=e[2],s=e[3];o[e[1]]=n.1I,s&&n.1I(5(){r=s},i[1^t][2].3h,i[2][2].5k),a[e[0]]=5(){7 a[e[0]+"3b"](6===a?o:6,18),6},a[e[0]+"3b"]=n.3V}),o.1z(a),n&&n.13(a,a),a}8 n=1R.1N.1F;t.9C=5(i){8 r,o,a,s=n.13(18),u=s.17,c=0,l=1!==u||i&&t.1y(i.1z)?u:0,f=1===l?i:e(),h=5(t,e,i){7 5(o){e[t]=6,i[t]=18.17>1?n.13(18):o,i===r?f.9I(e,i):--l||f.4b(e,i)}};10(u>1)1b(r=1r 1R(u),o=1r 1R(u),a=1r 1R(u);u>c;++c)s[c]&&t.1y(s[c].1z)?s[c].1z().3a(h(c,a,s)).3c(f.42).3Z(h(c,o,r)):--l;7 l||f.4b(a,s),f.1z()},t.49=e}(1j),5(t){5 e(t,e){8 n=6.6t={},i=6.9L={},r=t.1a(/9z[9y]9m[\\/]{0,1}([\\d.]+)/),o=t.1a(/(4S);?[\\s\\/]+([\\d.]+)?/),a=!!t.1a(/\\(9n\\; 9k /),s=t.1a(/(5g).*5Q\\s([\\48]+)/),u=t.1a(/(5G)(.*5Q\\s([\\48]+))?/),c=!s&&t.1a(/(5O\\5U)\\s([\\48]+)/),l=t.1a(/(9i|9p)[\\s\\/]([\\d.]+)/),f=/9v\\d{2}|5T/.1i(e),h=t.1a(/5T 5K ([\\d.]+)/),p=l&&t.1a(/9w/),d=t.1a(/5I\\/([\\d.]+)/),m=t.1a(/9x\\/([\\d.21]+)/),g=t.1a(/(9u).*3T\\/([\\d.]+)/),v=t.1a(/(9t).*3T\\/([\\d.]+)/),y=t.1a(/(9q\\9r\\5U)\\s([\\d.]+)/),b=t.1a(/9S/),w=t.1a(/ai\\/([\\d.]+)/)||t.1a(/4V\\/([\\d.]+)/),x=t.1a(/5X\\/([\\d.]+)/),E=t.1a(/\\((?:3F|5L); 5W:([\\d.]+)\\).*5X\\/[\\d.]+/),T=t.1a(/ag\\s([\\d.]+)/)||t.1a(/af\\/[\\d](?=[^\\?]+).*5W:([0-9.].)/),S=!w&&t.1a(/(5O|5G|5g).*al(?!.*3R)/),j=S||t.1a(/3T\\/([\\d.]+)([^S](3R)|[^M]*(3F)[^S]*(3R))/);(i.6b=!!r)&&(i.1p=r[1]),o&&(n.5E=!0,n.1p=o[2]),c&&!u&&(n.2s=n.as=!0,n.1p=c[2].1e(/21/g,".")),s&&(n.2s=n.aq=!0,n.1p=s[2].1e(/21/g,".")),u&&(n.2s=n.5Z=!0,n.1p=u[3]?u[3].1e(/21/g,"."):14),h&&(n.an=!0,n.1p=h[1]),l&&(n.ab=!0,n.1p=l[2]),p&&(n.aa=!0),g&&(n.9X=!0,n.1p=g[2]),v&&(n.9W=!0,n.1p=v[2]),y&&(n.9T=!0,n.1p=y[2]),b&&(i.9U=!0),d&&(n.9V=!0,n.1p=d[1]),m&&(i.5J=!0,i.1p=m[1]),!m&&n.5E&&t.1a(/5I a8/)&&(i.5J=!0),w&&(i.a7=!0,i.1p=w[1]),x&&(i.a6=!0,i.1p=x[1]),E&&(n.a3=!0,n.1p=E[1]),T&&(i.a4=!0,i.1p=T[1]),j&&(a||n.2s||f)&&(i.a5=!0,n.2s||(i.1p=j[1])),S&&(i.a2=!0),n.4U=!!(s||b||o&&!t.1a(/3F/)||x&&t.1a(/5L/)||T&&!t.1a(/5K/)&&t.1a(/4O/)),n.9Y=!(n.4U||n.5Z||!(o||c||l||g||v||w&&t.1a(/4S/)||w&&t.1a(/4V\\/([\\d.]+)/)||x&&t.1a(/3F/)||T&&t.1a(/4O/)))}e.13(t,4Z.ar,4Z.ah),t.9R=e}(1j),5(t){5 e(t){7 t.3U||(t.3U=h++)}5 n(t,n,o,a){10(n=i(n),n.36)8 s=r(n.36);7(g[e(t)]||[]).1J(5(t){7!(!t||n.e&&t.e!=n.e||n.36&&!s.1i(t.36)||o&&e(t.16)!==e(o)||a&&t.59!=a)})}5 i(t){8 e=(""+t).1x(".");7{e:e[0],36:e.1F(1).45().2Q(" ")}}5 r(t){7 1r 1W("(?:^| )"+t.1e(" "," .* ?")+"(?: |$)")}5 o(t,e){7 t.5b&&!y&&t.e 15 b||!!e}5 a(t){7 w[t]||y&&b[t]||t}5 s(n,r,s,u,l,h,p){8 d=e(n),m=g[d]||(g[d]=[]);r.1x(/\\s/).1g(5(e){10("2Y"==e)7 t(1A).2Y(s);8 r=i(e);r.16=s,r.59=l,r.e 15 w&&(s=5(e){8 n=e.9M;7!n||n!==6&&!t.1Z(6,n)?r.16.1m(6,18):19 0}),r.5b=h;8 d=h||s;r.2m=5(t){10(t=c(t),!t.3L()){t.1k=u;8 e=d.1m(n,t.3o==f?[t]:[t].2l(t.3o));7 e===!1&&(t.4R(),t.5c()),e}},r.i=m.17,m.1n(r),"47"15 n&&n.47(a(r.e),r.2m,o(r,p))})}5 u(t,i,r,s,u){8 c=e(t);(i||"").1x(/\\s/).1g(5(e){n(t,e,r,s).1g(5(e){57 g[c][e.i],"52"15 t&&t.52(a(e.e),e.2m,o(e,u))})})}5 c(e,n){7(n||!e.2X)&&(n||(n=e),t.12(S,5(t,i){8 r=n[t];e[t]=5(){7 6[i]=x,r&&r.1m(n,18)},e[i]=E}),(n.53!==f?n.53:"4c"15 n?n.4c===!1:n.54&&n.54())&&(e.2X=x)),e}5 l(t){8 e,n={9E:t};1b(e 15 t)T.1i(e)||t[e]===f||(n[e]=t[e]);7 c(n,t)}8 f,h=1,p=1R.1N.1F,d=t.1y,m=5(t){7"1P"==1h t},g={},v={},y="au"15 1c,b={4L:"4M",5l:"4K"},w={6I:"6K",6H:"6G"};v.6L=v.6D=v.6C=v.6F="9F",t.at={1I:s,1K:u},t.2m=5(n,i){8 r=2 15 18&&p.13(18,2);10(d(n)){8 o=5(){7 n.1m(i,r?r.2l(p.13(18)):18)};7 o.3U=e(n),o}10(m(i))7 r?(r.bj(n[i],n),t.2m.1m(14,r)):t.2m(n[i],n);2A 1r 2K("bn 5")},t.16.1S=5(t,e,n){7 6.1C(t,e,n)},t.16.3X=5(t,e){7 6.2a(t,e)},t.16.bh=5(t,e,n,i){7 6.1C(t,e,n,i,1)};8 x=5(){7!0},E=5(){7!1},T=/^([A-Z]|4c$|b8[be]$)/,S={4R:"2X",bC:"3L",5c:"aJ"};t.16.4Q=5(t,e,n){7 6.1C(e,t,n)},t.16.4P=5(t,e,n){7 6.2a(e,t,n)},t.16.aM=5(e,n){7 t(1A.2f).4Q(6.3y,e,n),6},t.16.aA=5(e,n){7 t(1A.2f).4P(6.3y,e,n),6},t.16.1C=5(e,n,i,r,o){8 a,c,h=6;7 e&&!m(e)?(t.12(e,5(t,e){h.1C(t,n,i,e,o)}),h):(m(n)||d(r)||r===!1||(r=i,i=n,n=f),(r===f||i===!1)&&(r=i,i=f),r===!1&&(r=E),h.12(5(f,h){o&&(a=5(t){7 u(h,t.1d,r),r.1m(6,18)}),n&&(c=5(e){8 i,o=t(e.1B).4q(n,h).2n(0);7 o&&o!==h?(i=t.2H(l(e),{60:o,aO:h}),(a||r).1m(o,[i].2l(p.13(18,1)))):19 0}),s(h,e,r,i,n,c||a)}))},t.16.2a=5(e,n,i){8 r=6;7 e&&!m(e)?(t.12(e,5(t,e){r.2a(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=E),r.12(5(){u(6,e,i,n)}))},t.16.1w=5(e,n){7 e=m(e)||t.2E(e)?t.2x(e):c(e),e.3o=n,6.12(5(){e.1d 15 b&&"5"==1h 6[e.1d]?6[e.1d]():"55"15 6?6.55(e):t(6).3K(e,n)})},t.16.3K=5(e,i){8 r,o;7 6.12(5(a,s){r=l(m(e)?t.2x(e):e),r.3o=i,r.1B=s,t.12(n(s,e.1d||e),5(t,e){7 o=e.2m(r),r.3L()?!1:19 0})}),o},"4M 4K 4L 5l 3P 7B 44 aT 6L aR 6D 6C 6F 6K 6G 6I 6H aL b6 bE ba bk 1L".1x(" ").1g(5(e){t.16[e]=5(t){7 0 15 18?6.1S(e,t):6.1w(e)}}),t.2x=5(t,e){m(t)||(e=t,t=e.1d);8 n=1A.aH(v[t]||"9G"),i=!0;10(e)1b(8 r 15 e)"9D"==r?i=!!e[r]:n[r]=e[r];7 n.9A(t,i,!0),c(n)}}(1j),5(t){t.16.6c=5(){8 e,n,i=[],r=5(t){7 t.1g?t.1g(r):19 i.1n({2h:e,23:t})};7 6[0]&&t.12(6[0].9B,5(i,o){n=o.1d,e=o.2h,e&&"9J"!=o.2B.1V()&&!o.6J&&"2W"!=n&&"9N"!=n&&"9K"!=n&&"6A"!=n&&("9l"!=n&&"9o"!=n||o.4e)&&r(t(o).41())}),i},t.16.ad=5(){8 t=[];7 6.6c().1g(5(e){t.1n(3O(e.2h)+"="+3O(e.23))}),t.2Q("&")},t.16.2W=5(e){10(0 15 18)6.1S("2W",e);1o 10(6.17){8 n=t.2x("2W");6.3B(0).1w(n),n.2X()||6.2n(0).2W()}7 6}}(1j),5(t,e){5 n(t){7 t.1e(/([a-z])([A-Z])/,"$1-$2").1V()}5 i(t){7 r?r+t:t.1V()}8 r,o,a,s,u,c,l,f,h,p,d="",m={am:"6b",ao:"",O:"o"},g=1A.1G("3u"),v=/^((9Z|a0|3f)(X|Y|Z|3d)?|a9(3d)?|a1|ap(X|Y)?)$/i,y={};t.12(m,5(t,n){7 g.1O[t+"ak"]!==e?(d="-"+t.1V()+"-",r=n,!1):19 0}),o=d+"66",y[a=d+"3z-ae"]=y[s=d+"3z-3W"]=y[c=d+"3z-43"]=y[u=d+"3z-6e-5"]=y[l=d+"3H-2h"]=y[f=d+"3H-3W"]=y[p=d+"3H-43"]=y[h=d+"3H-6e-5"]="",t.24={2a:r===e&&g.1O.ac===e,3r:{40:aj,9s:6B,9g:9j},67:d,68:i("9O"),62:i("9Q")},t.16.65=5(n,i,r,o,a){7 t.1y(i)&&(o=i,r=e,i=e),t.1y(r)&&(o=r,r=e),t.2E(i)&&(r=i.9P,o=i.3w,a=i.43,i=i.3W),i&&(i=("3Y"==1h i?i:t.24.3r[i]||t.24.3r.40)/3m),a&&(a=2M(a)/3m),6.69(n,i,r,o,a)},t.16.69=5(i,r,d,m,g){8 b,w,x,E={},T="",S=6,j=t.24.68,C=!1;10(r===e&&(r=t.24.3r.40/3m),g===e&&(g=0),t.24.2a&&(r=0),"1P"==1h i)E[l]=i,E[f]=r+"s",E[p]=g+"s",E[h]=d||"61",j=t.24.62;1o{w=[];1b(b 15 i)v.1i(b)?T+=b+"("+i[b]+") ":(E[b]=i[b],w.1n(n(b)));T&&(E[o]=T,w.1n(o)),r>0&&"1X"==1h i&&(E[a]=w.2Q(", "),E[s]=r+"s",E[c]=g+"s",E[u]=d||"61")}7 x=5(e){10("9H"!=1h e){10(e.1B!==e.60)7;t(e.1B).3X(j,x)}1o t(6).3X(j,x);C=!0,t(6).1f(y),m&&m.13(6)},r>0&&(6.1S(j,x),1T(5(){C||x.13(S)},3m*(r+g)+25)),6.3S()&&6.2n(0).bo,6.1f(E),0>=r&&1T(5(){S.12(5(){x.13(6)})},0),6},g=14}(1j),5(t,e){5 n(n,i,r,o,a){"5"!=1h i||a||(a=i,i=e);8 s={2t:r};7 o&&(s.3f=o,n.1f(t.24.67+"66-bc","0 0")),n.65(s,i,14,a)}5 i(e,i,r,o){7 n(e,i,0,r,5(){a.13(t(6)),o&&o.13(6)})}8 r=1c.1A,o=(r.2Z,t.16.37),a=t.16.33,s=t.16.4a;t.16.37=5(t,i){7 o.13(6),t===e?t=0:6.1f("2t",0),n(6,t,1,14,i)},t.16.33=5(t,n){7 t===e?a.13(6):i(6,t,14,n)},t.16.4a=5(n,i){7 n===e||"6h"==1h n?s.13(6,n):6.12(5(){8 e=t(6);e["29"==e.1f("1M")?"37":"33"](n,i)})},t.16.6i=5(t,e,i){7 n(6,t,e,14,i)},t.16.6v=5(t,e){8 n=6.1f("2t");7 n>0?6.1f("2t",0):n=1,o.13(6).6i(t,n,e)},t.16.6u=5(t,e){7 i(6,t,14,e)},t.16.bv=5(e,n){7 6.12(5(){8 i=t(6);i[0==i.1f("2t")||"29"==i.1f("1M")?"6v":"6u"](e,n)})}}(1j),5(t){5 e(t){7"4C"15 t?t:t.1q}10(t.6t.2s){8 n,i={};t(1A).1S("b7",5(t){{8 r=2C.4z();r-(i.1H||r)}i.1B=e(t.1B),n&&1Q(n),i.3j=t.3f,i.1H=r}).1S("aG",5(t){i.2R=t.3f}).1S("aF",5(){i.2R>0?(0!=22.2b(i.3j-i.2R)&&t(i.1B).1w("4B")&&t(i.1B).1w("4B"+(i.3j-i.2R>0?"aI":"aK")),i.3j=i.2R=i.1H=0):"1H"15 i&&(i={})}),["4B","aE","ay"].1g(5(e){t.16[e]=5(t){7 6.1S(e,t)}})}}(1j),5(){2S{2v(19 0)}2U(t){8 e=2v;1c.2v=5(t){2S{7 e(t)}2U(n){7 14}}}}(),5(t){2V.1N.2p===t&&(2V.1N.2p=5(){7 6.1e(/^\\s+|\\s+$/g,"")}),1R.1N.3g===t&&(1R.1N.3g=5(e){10(19 0===6||14===6)2A 1r 2K;8 n,i=3k(6),r=i.17>>>0,o=0;10("5"!=1h e)2A 1r 2K;10(0==r&&1==18.17)2A 1r 2K;10(18.17>=2)n=18[1];1o 1b(;;){10(o 15 i){n=i[o++];6x}10(++o>=r)2A 1r 2K}1b(;r>o;)o 15 i&&(n=e.13(t,n,i[o],o,i)),o++;7 n})}(),5(t){5 e(e){7 e=t(e),!(!e.2c()&&!e.2w())&&"29"!==e.1f("1M")}5 n(t,e){t=t.1e(/=#\\]/g,\'="#"]\');8 n,i,r=s.az(t);10(r&&r[2]15 a&&(n=a[r[2]],i=r[3],t=r[1],i)){8 o=6k(i);i=aZ(o)?i.1e(/^["\']|["\']$/g,""):o}7 e(t,n,i)}8 i=t.4j,r=i.1Y,o=i.2q,a=t.6m[":"]={b3:5(){7 e(6)?6:19 0},b5:5(){7 e(6)?19 0:6},4i:5(){7 6.4i?6:19 0},4e:5(){7 6.4e?6:19 0},34:5(){7 6.1q},3s:5(t){7 0===t?6:19 0},1H:5(t,e){7 t===e.17-1?6:19 0},3B:5(t,e,n){7 t===n?6:19 0},1Z:5(e,n,i){7 t(6).1D().1s(i)>-1?6:19 0},3G:5(t,e,n){7 i.1Y(6,n).17?6:19 0}},s=1r 1W("(.*):(\\\\w+)(?:\\\\(([^)]+)\\\\))?$\\\\s*"),u=/^\\s*>/,c="1j"+ +1r 2C;i.1Y=5(e,o){7 n(o,5(n,a,s){2S{8 l;!n&&a?n="*":u.1i(n)&&(l=t(e).4h(c),n="."+c+" "+n);8 f=r(e,n)}2U(h){2A aS.1L("1L aW 3y: %o",o),h}aV{l&&l.4o(c)}7 a?i.6o(t.1t(f,5(t,e){7 a.13(t,e,f,s)})):f})},i.2q=5(t,e){7 n(e,5(e,n,i){7!(e&&!o(t,e)||n&&n.13(t,14,i)!==t)})}}(1j),5(t){t.16.7y=5(){7 6.4f||t()},t.16.9f=5(){7 6.1I(6.4f||t())},"1J,1I,3I,3B,3s,1H,28,4q,6p,34,2g,6q".1x(",").1g(5(e){8 n=t.16[e];t.16[e]=5(){8 t=n.1m(6,18);7 t.4f=6,t}})}(1j),5(t){5 e(t,e,n,i){7 22.2b(t-e)>=22.2b(n-i)?t-e>0?"6s":"6l":n-i>0?"6w":"6y"}5 n(){l=14,h.1H&&(h.1E.1w("6E"),h={})}5 i(){l&&1Q(l),l=14}5 r(){s&&1Q(s),u&&1Q(u),c&&1Q(c),l&&1Q(l),s=u=c=l=14,h={}}5 o(t){7("7w"==t.6n||t.6n==t.7q)&&t.7p}5 a(t,e){7 t.1d=="7o"+e||t.1d.1V()=="7r"+e}8 s,u,c,l,f,h={},p=7s;t(1A).2Y(5(){8 d,m,g,v,y=0,b=0;"6j"15 1c&&(f=1r 6j,f.1B=1A.2f),t(1A).1S("7t",5(t){8 e=t.6r>1?"6l":t.6r<-1?"6s":t.6z>1?"6y":t.6z<-1?"6w":14;e&&(h.1E.1w("2L"),h.1E.1w("2L"+e))}).1C("7S 7T 7V",5(e){(!(v=a(e,"7U"))||o(e))&&(g=v?e:e.3E[0],e.3E&&1===e.3E.17&&h.2k&&(h.2k=19 0,h.2y=19 0),d=2C.4z(),m=d-(h.1H||d),h.1E=t("4C"15 g.1B?g.1B:g.1B.1q),s&&1Q(s),h.3e=g.64,h.3l=g.63,m>0&&6g>=m&&(h.6f=!0),h.1H=d,l=1T(n,p),f&&v&&f.6R(e.6T))}).1C("7k 7e 7d",5(t){(!(v=a(t,"77"))||o(t))&&(g=v?t:t.3E[0],i(),h.2k=g.64,h.2y=g.63,y+=22.2b(h.3e-h.2k),b+=22.2b(h.3l-h.2y))}).1C("7m 7c 7h",5(n){(!(v=a(n,"78"))||o(n))&&(i(),h.2k&&22.2b(h.3e-h.2k)>30||h.2y&&22.2b(h.3l-h.2y)>30?c=1T(5(){h.1E.1w("2L"),h.1E.1w("2L"+e(h.3e,h.2k,h.3l,h.2y)),h={}},0):"1H"15 h&&(30>y&&30>b?u=1T(5(){8 e=t.2x("6a");e.8N=r,h.1E.1w(e),h.6f?(h.1E&&h.1E.1w("6d"),h={}):s=1T(5(){s=14,h.1E&&h.1E.1w("6M"),h={}},6g)},0):h={}),y=b=0)}).1C("8H 98 96",r),t(1c).1C("44",r)}),["2L","95","93","8b","8c","6d","6a","6M","6E"].1g(5(e){t.16[e]=5(t){7 6.1C(e,t)}})}(1j);', 62, 723, "|||||function|this|return|var||||||||||||||||||||||||||||||||||||||||||||||||||||||if||each|call|null|in|fn|length|arguments|void|match|for|window|type|replace|css|forEach|typeof|test|Zepto|data|url|apply|push|else|version|parentNode|new|indexOf|map|left|top|trigger|split|isFunction|promise|document|target|on|text|el|slice|createElement|last|add|filter|remove|error|display|prototype|style|string|clearTimeout|Array|bind|setTimeout|nodeType|toLowerCase|RegExp|object|qsa|contains||_|Math|value|fx||html|script|find|none|off|abs|width|abort|application|body|children|name|jsonp|offset|x2|concat|proxy|get|timeout|trim|matches|ajax|ios|opacity|xml|getComputedStyle|height|Event|y2|success|throw|nodeName|Date|innerHTML|isPlainObject|javascript|context|extend|toUpperCase|childNodes|TypeError|swipe|parseFloat|status|className|pluck|join|e2|try|href|catch|String|submit|isDefaultPrevented|ready|documentElement||offsetParent|removeChild|hide|parent|json|ns|show|attr|empty|done|With|fail||x1|scale|reduce|disable|getPropertyValue|e1|Object|y1|1e3|memory|_args|global|Callbacks|speeds|first|position|div|append|complete|isZ|selector|transition|scrollLeft|eq|crossDomain|fragment|touches|Mobile|has|animation|not|scrollTop|triggerHandler|isImmediatePropagationStopped|once|before|encodeURIComponent|load|wrapAll|Safari|size|Version|_zid|fireWith|duration|unbind|number|progress|_default|val|reject|delay|scroll|sort|textContent|addEventListener|d_|Deferred|toggle|resolveWith|returnValue|src|checked|prevObject|ajaxSettings|addClass|selected|zepto|xhrFields|parseJSON|appendChild|headers|removeClass|inArray|closest|GET|protocol|location|cache|cloneNode|contentType|onreadystatechange|hasClass|now|param|pinch|tagName|isArray|splice|array|dataType|baseVal|toArray|active|focusout|focus|focusin|instanceof|Touch|undelegate|delegate|preventDefault|Android|contents|tablet|CriOS|XMLHttpRequest|xhr|1_|navigator|ajaxJSONP|getElementById|removeEventListener|defaultPrevented|getPreventDefault|dispatchEvent|processData|delete|host|sel|init|del|stopPropagation|beforeSend|toString|accepts|iPad|async|index|removeProperty|lock|blur|eval|pageXOffset|mimeType|pageYOffset|some|getElementsByClassName|notify|shift|camelCase|deserializeValue|uuid|JSON|removeData|resolve|round|gi|readyState|scrollTo|android|overrideMimeType|iPod|static|Kindle|silk|Phone|Tablet|replaceWith|border|iPhone|margin|OS|getAttribute|setRequestHeader|Windows|sOS|tr|rv|Firefox|tbody|ipod|currentTarget|linear|animationEnd|pageY|pageX|animate|transform|cssPrefix|transitionEnd|anim|tap|webkit|serializeArray|doubleTap|timing|isDoubleTap|250|boolean|fadeTo|MSGesture|Number|Right|expr|pointerType|uniq|parents|siblings|velocityX|Left|os|fadeOut|fadeIn|Up|break|Down|velocityY|file|200|mouseup|mousedown|longTap|mousemove|mouseout|mouseleave|mouseenter|disabled|mouseover|click|singleTap|firstChild|columns|count|nextSibling|addPointer|inner|pointerId|font|insertBefore|SCRIPT|After|ajaxStart|ajaxStop|Before|insert|To|column|weight|cssText|zoom|move|up|area|scrollX|scrollY|MSPointerUp|pointermove|MSPointerMove|col|detach|pointerup|line|ajaxBeforeSend|touchmove|toggleClass|touchend|ajaxError|pointer|isPrimary|MSPOINTER_TYPE_TOUCH|mspointer|750|MSGestureEnd|callback|Requested|touch|Type|end|DOCUMENT_NODE|Content|resize|Accept|getPrototypeOf|px|block|embed|ajaxComplete|traditional|rejectWith|true|ajaxSend|ajaxSuccess|jsonpCallback|head|setAttribute|removeAttribute|plain|touchstart|MSPointerDown|down|pointerdown|false|relative|contenteditable|contentEditable|webkitMatchesSelector|frameBorder|frameborder|colSpan|usemap|useMap|mozMatchesSelector|oMatchesSelector|getElementsByTagName|querySelectorAll|isWindow|swipeUp|swipeDown|matchesSelector|table|prepend|colspan|rowSpan|tabindex|tabIndex|readonly|interactive|loaded|tfoot|td|th|readOnly|htmlFor|cellpadding|cellPadding|rowspan|cellSpacing|cellspacing|class|maxlength|maxLength|isEmptyObject|support|next|nextElementSibling|meta|previousElementSibling|prev|touchcancel|unwrap|clone|removeAttr|prop|hr|cancelTouch|thead|img|input|link|multiple|option|wrapInner|www|Boolean|Function|Error|parse|after|noop|grep|swipeRight|constructor|swipeLeft|pointercancel|wrap|MSPointerCancel|contentDocument|item|DOMContentLoaded|every|is|getBoundingClientRect|andSelf|slow|form|webOS|600|Intel|radio|it|Macintosh|checkbox|hpwOS|RIM|sTablet|fast|BB10|BlackBerry|Win|TouchPad|Silk|kK|Web|initEvent|elements|when|bubbles|originalEvent|MouseEvents|Events|undefined|notifyWith|fieldset|button|browser|relatedTarget|reset|TransitionEnd|easing|AnimationEnd|__detect|PlayBook|rimtabletos|playbook|kindle|bb10|blackberry|phone|translate|rotate|perspective|webview|firefoxos|ie|safari|firefox|chrome|Fire|matrix|touchpad|webos|transitionProperty|serialize|property|Trident|MSIE|platform|Chrome|400|TransitionProperty|AppleWebKit|Webkit|wp|Moz|skew|ipad|userAgent|iphone|event|onfocusin|send|post|POST|pinchOut|exec|die|username|password|getJSON|pinchIn|gestureend|gesturechange|createEvent|In|isPropagationStopped|Out|change|live|open|liveFired|300|304|dblclick|console|unload|urlencoded|finally|performing|getResponseHeader|content|isNaN|parsererror|statusText|responseXML|visible|responseText|hidden|select|gesturestart|layer|resolved|keypress|expando|origin|IMG|XY|attributes|rejected|one|then|unshift|keyup|always|state|expected|clientLeft|pending|fire||fired|ACwAAAAAAQABAAACADs|6e4|fadeToggle|R0lGODlhAQABAAD|base64|image|gif|unique|stopOnFalse|stopImmediatePropagation|locked|keydown".split("|"), 0, {})),
"function" != typeof Function.prototype.method && (Function.prototype.method = function(e, t) {
    return this[e] = t,
    this
}
),
"function" != typeof String.isBlank && (String.isBlank = function(e) {
    return e ? "string" == typeof e && 0 == e.trim().length ? !0 : !1 : !0
}
),
"function" != typeof Array.isEmpty && (Array.isEmpty = function(e) {
    return $.isArray(e) ? e.length <= 0 : !0
}
),
"function" != typeof Array.prototype.pushAll && (Array.prototype.pushAll = function(e) {
    if (!$.isArray(e))
        return this.push(e);
    for (var t = 0; t < e.length; t++)
        this.push(e[t]);
    return this.length
}
),
"function" != typeof Object.create && (Object.create = function(e) {
    function t() {}
    return t.prototype = e,
    new t
}
),
"function" != typeof Date.prototype.format && (Date.prototype.format = function(e) {
    var t = {
        "M+": this.getMonth() + 1,
        "D+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(Y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var n in t)
        new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
    return e
}
),
$.extend($, {
    App: {
        bind: function(e, t) {
            this._callbacks || (this._callbacks = {});
            return (this._callbacks[e] || (this._callbacks[e] = [])).push(t),
            this
        },
        trigger: function() {
            var e, t, n = Array.prototype.slice.call(arguments, 0), o = n.shift(), i = this;
            return (e = this._callbacks) && (t = this._callbacks[o]) ? ($.each(t, function(e, t) {
                t.apply(i, n)
            }),
            this) : this
        }
    },
    BENLAI: {
        CSSLink: function(e) {
            return BENLAI.Path.CSSPath + e + "?v=" + BENLAI.Path.Version
        },
        ScriptLink: function(e) {
            return BENLAI.Path.ScriptPath + e + "?v=" + BENLAI.Path.Version
        },
        ImageUrlLink: function(e) {
            return BENLAI.Path.ImagePath + e + "?v=" + BENLAI.Path.Version
        },
        toPrice: function(e, t) {
            var n = e;
            return n >= 0 ? (n = parseFloat(n),
            "¥" + n.toFixed(t || 2)) : "¥" + e
        },
        regExp: {
            isNumber: /^(([1-9])(\d+)?)$/,
            chinese: /[\u4E00-\u9FA5]/g,
            numbers: /^[0-9]+$/,
            email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
            isNumberOrLetter: /^(?![a-z]+$)(?![A-Z]+$)(?![0-9]+$)[a-zA-Z0-9]+$/,
            tirmAll: /\s/g,
            tirmStart: /^\s*/,
            trimEnd: /\s*$/,
            trim: /(^\s*)|(\s*$)/g,
            zipCode: /^[1-9]{1}\d{5}$/,
            cellPhone: /^1[34578][0-9]{9}$/,
            phone: /^0\d{2,3}-[2-9]\d{6,7}(-\d{0,4})?$/,
            phonereg: /^0?\d{3,4}$/,
            phone1reg: /^\d{7,8}$/,
            phone2reg: /^\d{1,4}$/,
            nickName: /^[0-9A-Za-z_]{4,20}$/,
            time: /^\d{4}-\d{2}-\d{2}$/
        },
        serialize: function(e) {
            var t = [];
            if (e)
                for (var n in e)
                    t.push(n + ":" + e[n]);
            return t.join(",")
        },
        requestQueue: [],
        ajax: function(e) {
            !function(e, t) {
                function n() {
                    new o
                }
                function o() {
                    this.init()
                }
                o.prototype = {
                    init: function() {
                        this.url = t.url + e.serialize(t.data || {}),
                        this.validateRequest() && this.beginRequest()
                    },
                    validateRequest: function() {
                        for (var t in e.requestQueue)
                            if (e.requestQueue[t] == this.url)
                                return !1;
                        return e.requestQueue.push(this.url),
                        !0
                    },
                    beginRequest: function() {
                        var e = this;
                        $.ajax({
                            type: t.type || "post",
                            url: t.url,
                            data: t.data,
                            async: "async" in t ? t.async : !0,
                            beforeSend: function() {
                                t.beforeSend && t.beforeSend()
                            },
                            cache: t.cache || !1,
                            success: function(n) {
                                t.success && t.success(n),
                                setTimeout(function() {
                                    e.requestDispose()
                                }, 500)
                            },
                            error: function() {
                                e.requestDispose()
                            }
                        })
                    },
                    requestDispose: function() {
                        for (var t = 0, n = e.requestQueue.length; n > t; t++)
                            if (e.requestQueue[t] == this.url)
                                return void e.requestQueue.splice(t, 1)
                    }
                },
                n()
            }(this, e)
        },
        format: function(e) {
            return $.BENLAI.replace(e, [].slice.call(arguments, 1))
        },
        enter: function(e) {
            return 13 == (window.event && window.event.keyCode || e.which)
        },
        replace: function(e, t) {
            return e.replace(/{([^{]*?)}/g, function(e, n) {
                return null  == t[n] ? e : t[n]
            })
        },
        countDown: function(e) {
            e.end || (e.end = new Date);
            var t = {
                g: e.end.getTime(),
                e: e.date.getTime(),
                d: 864e5,
                h: 36e5,
                m: 6e4,
                s: 1e3,
                ms: 100
            };
            t.n = t.e - t.g;
            var n = {
                day: "0",
                hour: "0",
                minute: "00",
                second: "00",
                millisecond: "0",
                timeend: !0
            };
            if (t.n > 0) {
                n.day = Math.floor(t.n / t.d),
                t.d -= n.day * t.d,
                n.hour = Math.floor(t.n / t.h),
                t.n -= n.hour * t.h,
                n.minute = Math.floor(t.n / t.m),
                t.n -= n.minute * t.m,
                n.second = Math.floor(t.n / t.s),
                t.n -= n.second * t.s,
                n.millisecond = Math.floor(t.n / t.ms);
                for (var o in n)
                    "timeend" != o && (n[o] > 0 && (n.timeend = !1),
                    n[o] = n[o] < 10 && "millisecond" != o ? "0" + n[o] : "" + n[o])
            }
            return e.data = n,
            e.dom.html($.BENLAI.replace(e.temp, e.data)),
            Math.floor((t.e - t.g) / 1e3 <= 0) && e.callback ? void e.callback() : (e.end.setTime(e.end.getTime() + (e.time || 1e3)),
            void ($.BENLAI.countDown.Timer = setTimeout(function() {
                $.BENLAI.countDown(e)
            }, e.time || 1e3)))
        },
        changeUrlSearch: function(url, arg, arg_val) {
            var pattern = arg + "=([^&]*)"
              , replaceText = arg + "=" + arg_val;
            if (url.match(pattern)) {
                var tmp = "/(" + arg + "=)([^&]*)/gi";
                return tmp = url.replace(eval(tmp), replaceText)
            }
            return url.match("[?]") ? url + "&" + replaceText : url + "?" + replaceText
        },
        getQueryValue: function(e) {
            var t = location.search
              , n = new Array;
            if (t.length > 1) {
                var o = t.indexOf("?");
                t = t.substring(o + 1, t.length)
            } else
                t = null ;
            if (t)
                for (var i = 0; i < t.split("&").length; i++)
                    n[i] = t.split("&")[i];
            for (var a = 0; a < n.length; a++)
                if (n[a].split("=")[0] == e)
                    return decodeURI(n[a].split("=")[1]);
            return ""
        },
        parseParam: function(e, t) {
            var n = "";
            return e instanceof String || e instanceof Number || e instanceof Boolean ? n += "&" + t + "=" + encodeURIComponent(e) : $.each(e, function(o) {
                var i = null  == t ? o : t + (e instanceof Array ? "[" + o + "]" : "." + o);
                n += "&" + $.BENLAI.parseParam(this, i)
            }),
            n.substr(1)
        },
        storage: {
            get: function(e, t) {
                if (this.isLocalStorage()) {
                    var n = this.getStorage(t).getItem(e);
                    return n && "undefined" != n ? JSON.parse(n) : void 0
                }
            },
            set: function(e, t, n) {
                this.isLocalStorage() && (t = JSON.stringify(t),
                this.getStorage(n).setItem(e, t))
            },
            remove: function(e, t) {
                this.isLocalStorage() && this.getStorage(t).removeItem(e)
            },
            getStorage: function(e) {
                return e ? localStorage : sessionStorage
            },
            isLocalStorage: function() {
                try {
                    return window.localStorage ? (localStorage.setItem("FORTEST", 1),
                    !0) : (log("不支持本地存储"),
                    !1)
                } catch (e) {
                    return log("本地存储已关闭"),
                    !1
                }
            }
        },
        tmpl: function(e) {
            if (0 == e.v.indexOf("url:")) {
                var t = $.trim(e.v.substring(4));
                t && 0 == t.indexOf("/") && (t = t.substring(1)),
                e.v = $.BENLAI.ScriptLink("template/" + t);
                var n = $.BENLAI.tmpl.getCache(e.v);
                n ? (e.v = n,
                $.BENLAI.tmpl.render(e)) : $.BENLAI.tmpl.loadTmpl(e)
            } else
                $.BENLAI.tmpl.render(e)
        }
        .method("loadTmpl", function(e) {
            var t = $.ajaxSettings.xhr();
            t.open("GET", e.v, !0),
            t.send(),
            t.onreadystatechange = function() {
                4 == t.readyState && ($.BENLAI.tmpl.setCache(e.v, t.responseText),
                e.v = t.responseText,
                $.BENLAI.tmpl.render(e))
            }
        }).method("getCache", function(e) {
            return $.BENLAI.tmpl.cache = $.BENLAI.tmpl.cache || {},
            $.BENLAI.tmpl.cache[e]
        }).method("setCache", function(e, t) {
            $.BENLAI.tmpl.cache = $.BENLAI.tmpl.cache || {},
            $.BENLAI.tmpl.cache[e] = t
        }).method("render", function(e) {
            for (var t = /<%([\w\W]*?)%>/g, n = /\bbreak\b|\bcase\b|\bcatch\b|\bcontinue\b|\bdefault\b|\bdelete\b|\bdo\b|\belse\b|\bfinally\b|\bfor\b|\bfunction\b|\bif\b|\breturn\b|\bswitch\b|\bthrow\b|\btry\b|\bvar\b|\bwhile\b|\bwith\b|{|}/g, o = " var r=[];\n", i = 0, a = function(e, t) {
                return o += t ? e.match(n) ? e + "\n" : "r.push(" + e + ");\n" : "" != e ? 'r.push("' + e.replace(/"/g, '\\"') + '");\n' : "",
                a
            }
            ; match = t.exec(e.v); )
                a(e.v.slice(i, match.index))(match[1], !0),
                i = match.index + match[0].length;
            switch (a(e.v.slice(i)),
            o += ' return r.join("");',
            e.type) {
            case "append":
                e.dom.append(new Function(o.replace(/[\n\r\t]/g, "")).apply(e.datas));
                break;
            case "before":
                e.dom.before(new Function(o.replace(/[\n\r\t]/g, "")).apply(e.datas));
                break;
            default:
                e.dom.html(new Function(o.replace(/[\n\r\t]/g, "")).apply(e.datas))
            }
            e.callback && e.callback()
        })
    }
}),
function(e, t) {
    var n = (window.cdnPath || "").split(",")
      , o = function(e) {
        for (var t = 0, o = e.length; o--; )
            t += e.charCodeAt(o);
        return n[t % n.length]
    }
      , i = function(e, t) {
        var n = e.split("#")
          , o = n[0].split("?");
        return 1 == o.length ? o[0] += "?" + t : o[1] += "&" + t,
        n[0] = o.join("?"),
        n.join("#")
    }
    ;
    t.BENLAI.ImageUtil = {},
    t.BENLAI.ImageUtil.properWidth = function() {
        var n = t(e).width()
          , o = e.devicePixelRatio;
        return o ? Math.floor(o * n) : 0
    }(),
    t.BENLAI.ImageUtil.optimizeURL = function(e) {
        var n = /^(http[s]?:)?\/\/image\d?\.benlailife\.com/i;
        if (!n.test(e) || !window.cdnPath)
            return e;
        e = e.replace(n, "");
        var a = "";
        return t.BENLAI.ImageUtil.properWidth && (a += "imageView2/2/w/" + t.BENLAI.ImageUtil.properWidth),
        t.BENLAI.ImageUtil.webpCapability && (a = a ? a + "/format/webp" : "imageView2/2/format/webp"),
        o(e) + (a ? i(e, a) : e)
    }
    ;
    var a = new Image;
    a.onload = function() {
        t.BENLAI.ImageUtil.webpCapability = a.width > 0 && a.height > 0
    }
    ,
    a.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"
}(window, $);
var lazyLoad = {
    IsShow: function(e) {
        return $(window).height() + $(window).scrollTop() > e.offset().top
    },
    LoadImage: function() {
        var e = this
          , t = $("img[lazyload]");
        t.each(function() {
            var t = $(this);
            if (e.IsShow(t)) {
                var n = t.attr("lazyload");
                t.removeAttr("lazyload"),
                t.attr("src", $.BENLAI.ImageUtil.optimizeURL(n)),
                t.show()
            }
        })
    },
    Run: function() {
        var e = this;
        e.LoadImage(),
        e.bind || ($(window).bind("touchmove touchend scroll", function() {
            e.LoadImage()
        }),
        e.bind = !0)
    }
};
$(function() {
    $("body").delegate("textarea", "keyup", function() {
        var e = $(this).val()
          , t = e.replace(new RegExp(/<|>|&gt|&lt/g), "");
        t != e && $(this).val(t)
    }),
    $("body").delegate("input[type=text]", "keyup", function() {
        var e = $(this).val()
          , t = e.replace(new RegExp(/(\$|<|>|&|\*|%|\?)/g), "");
        t != e && $(this).val(t)
    }).delegate("input[type=text]", "blur", function() {
        var e = $(this).val();
        return e.indexOf("'") >= 0 && (e = e.replace(new RegExp(/(')/g), '"')),
        $(this).val(e),
        !0
    }).delegate("input[type=tel]", "keyup", function() {
        var e = $(this).val()
          , t = e.replace(/[^0-9]+/g, "");
        t != e && $(this).val(t)
    })
}),
function(e) {
    var t = {}
      , n = "$"
      , o = "benlai-id";
    t.create = function(t) {
        var i = function() {
            var t = this;
            e.App.bind("CustomError", function(e) {
                e && e.code && e.message && t.errorHandler.apply(t, arguments)
            }),
            this.initializer.apply(this, arguments),
            this.inits.apply(this, arguments)
        }
        ;
        return i.proxy = function(t) {
            return e.proxy(t, this)
        }
        ,
        i.fn = i.prototype,
        i.fn.inits = function() {}
        ,
        i.fn.errorHandler = function() {}
        ,
        i.fn.proxy = i.proxy,
        i.include = function(t) {
            e.extend(this.fn, t)
        }
        ,
        i.extend = function(t) {
            e.extend(this, t)
        }
        ,
        i.updateView = function(e, t) {
            if (e) {
                e();
                var n = this;
                setTimeout(function() {
                    n.refreshElements(),
                    n.refreshEles(),
                    t && t.apply(n, arguments)
                }, 100)
            }
        }
        ,
        i.fn.updateView = i.updateView,
        i.include(e.BENLAI),
        i.include({
            initializer: function(e) {
                this.options = e;
                for (var t in this.options)
                    this[t] = this.options[t];
                this.refreshEles(),
                this.elements && this.refreshElements(),
                this.events && this.delegateEvents(),
                this.appEvents && this.bindAppEvents(),
                this.mouseHandler && this.bindMouseEvents(),
                this.back || this.init && this.init()
            },
            $: function(t) {
                return t ? e(t, this.el) : null 
            },
            refreshEles: function() {
                var t = this;
                this.el.find("[" + o + "]").each(function() {
                    var i = e(this).attr(o);
                    t[i] = e(this),
                    t[n + i] = "[" + o + "]"
                })
            },
            refreshElements: function() {
                var e = this.elements;
                for (var t in e) {
                    var o = e[t];
                    if (o)
                        if ("object" != typeof o)
                            this[o] = this.$(t),
                            this[n + o] = t;
                        else
                            for (var i in o)
                                this[o[i]] = this.$(i),
                                this[n + o[i]] = i
                }
            },
            delegateEvents: function() {
                for (var e in this.events)
                    !function(t) {
                        try {
                            var n = t.events[e]
                              , o = t.proxy(t[n])
                              , i = e.split(/\s+/g);
                            i.length > 2 && i.unshift(i.shift() + " " + i.shift()),
                            i.push(function(e) {
                                !function(e, n) {
                                    o.call(t, e, n || window.event)
                                }(this, e)
                            }),
                            t.el.delegate.apply(t.el, i)
                        } catch (a) {
                            console.log(a.message)
                        }
                    }(this)
            },
            bindAppEvents: function() {
                for (var t in this.appEvents) {
                    var n = this.appEvents[t]
                      , o = this.proxy(this[n]);
                    e.App.bind(t, o)
                }
            }
        }),
        t && i.include(t),
        i
    }
    ,
    e.fn.CreateController = function(e) {
        var n = t.create(e);
        return new n({
            el: this
        })
    }
}($),
function(e) {
    var t = function() {}
    ;
    t.fn = t.prototype,
    t.fn.add = function(t) {
        e(this).bind("change", function(e, n) {
            t == n ? t.activate() : t.deactivate()
        }),
        t.active = e.proxy(function() {
            e(this).trigger("change", t)
        }, this)
    }
    ,
    e.extend(e, {
        CreateStateMachine: function() {
            return new t
        }
    })
}($),
function(e) {
    var t = function() {}
    ;
    t.fn = t.prototype,
    t.fn.bind = function(e, t) {
        this._callbacks || (this._callbacks = {});
        (this._callbacks[e] || (this._callbacks[e] = [])).push(t)
    }
    ,
    t.fn.trigger = function(t, n) {
        var o, i;
        return (i = this._callbacks) && (o = this._callbacks[t]) ? void e.each(o, function() {
            this(n)
        }) : this
    }
    ,
    e.extend(e, {
        CreateModel: function() {
            var e = function() {}
            ;
            return e.parent = t,
            e.prototype = e.fn = Object.create(t.prototype),
            e
        }
    })
}($),
function(e, t) {
    "undefined" == typeof CustomError && (t.CustomError = function(e, t) {
        if (!e || !e.code || !e.message)
            throw new Error("errorEnum not be none!");
        t && (e.message = t),
        this.code = e.code,
        this.message = e.message
    }
    ,
    CustomError.prototype.constructor = CustomError,
    CustomError.prototype.toString = function() {
        return this.name + ": " + this.message
    }
    ),
    e.extend(e, {
        throwError: function() {
            var t = null ;
            if (0 == arguments.length)
                throw new Error("customError not be no");
            if (arguments[0].code && arguments[0].message ? (t = arguments[0],
            arguments.length > 1 && (t.message = arguments[1])) : t = arguments[0] && arguments[1] ? {
                code: arguments[0],
                message: arguments[1]
            } : getErrorEnum(arguments[0]),
            !t)
                throw new Error("customError not be no");
            e.App.trigger("CustomError", new CustomError(t))
        }
    })
}($, window),
$(document).ready(function() {
    $footList = $("#wap_menu_main"),
    $ben = $("#wap_menu_show_btn");
    var e = $ben.width();
    $ben.click(function() {
        $ben.css({
            left: -e
        }),
        setTimeout(function() {
            $footList.css({
                left: 0
            })
        }, 200)
    }),
    $("#wap_menu_hide_btn").click(function() {
        $footList.css({
            left: "-100%"
        }),
        setTimeout(function() {
            $ben.css({
                left: "0"
            })
        }, 200)
    })
});
var cityRoot = webRoot + "/" + getCookie("CityPY", "bj"), intervalTimeb = 5, initTimeb = 5, intervaltb, disabledb = "", browser = {
    versions: function() {
        var e = navigator.userAgent;
        return {
            trident: e.indexOf("Trident") > -1,
            presto: e.indexOf("Presto") > -1,
            webKit: e.indexOf("AppleWebKit") > -1,
            gecko: e.indexOf("Gecko") > -1 && -1 == e.indexOf("KHTML"),
            mobile: !!e.match(/AppleWebKit.*Mobile.*/) || !!e.match(/AppleWebKit/),
            ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
            iPhone: e.indexOf("iPhone") > -1 || e.indexOf("Mac") > -1,
            iPad: e.indexOf("iPad") > -1,
            webApp: -1 == e.indexOf("Safari")
        }
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};
$(function() {
    getCartProsCnt(),
    $("[name=topback]").click(function() {
        getBack($(this))
    }),
    $("#divBody").on("click", "[name=topback2]", function() {
        getBack2()
    }),
    setBackUrl(),
    lazyLoad.Run(),
    isApp() && ($("#wap_top").hide(),
    $("#myPage").hide()),
    openAppOrDownload(),
    setPiwikUserId()
});
var _paq = _paq || []
  , message = {
    title: "提示",
    error: "false",
    info: "",
    btns: [],
    btnsClick: [],
    keyValues: {},
    hide: "false",
    grade: "0",
    showWidth: 0,
    showHeight: 0,
    showClose: "true"
}
  , appObj = getAppObj();
"1" === getCookie("source") && "undefined" == typeof appObj ? appObj = iosInjection() : "undefined" != typeof appObj && "function" == typeof appObj.isApplePayAvailable && window.sessionStorage.setItem("canApplePay", appObj.isApplePayAvailable() || 0),
"true" == $.BENLAI.getQueryValue("debug") && (window.onerror = function(e, t, n, o, i) {
    alert("errorMessage: " + e),
    alert("scriptURI: " + t),
    alert("lineNumber: " + n),
    alert("columnNumber: " + o),
    alert("errorObj: " + JSON.stringify(i))
}
),
function(e) {
    e.ajaxApi = function(t) {
        var n = t.url;
        t.data.proxyUrl = n,
        t.url = webRoot + "/proxy/api",
        t.headers = {
            "Cache-Control": "no-cache",
            Expires: 0,
            Pragma: "no-cache"
        },
        e.ajax(t)
    }
    ,
    e.each(["getApi", "postApi"], function(t, n) {
        e[n] = function(t, o, i, a) {
            return e.isFunction(o) && (a = a || i,
            i = o,
            o = b),
            e.ajaxApi({
                type: n.substring(0, n.search("Api")),
                url: t,
                data: o,
                success: i,
                dataType: a
            })
        }
    })
}($),
window.top !== window.self && (deleteCookie("MP_BENLAI"),
deleteCookie("CPS_YQF"),
deleteCookie("LinkTech"));
