var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// JavaScript Document


$(function () {
    //鼠标移到主导航上，展开子导航
    $("#nav .navout").mouseenter(function () {
        $(".navbottom").stop().slideDown(300);
    })
    $("#nav").mouseleave(function () {
        $(".navbottom").stop().slideUp(300);
    })
    //鼠标移到子导航上
    $(".subnav dl").hover(function () {
        var indcur = parseInt($(this).index() + 1);
        $(".mainnav li:eq(" + indcur + ")").find("a").addClass("cur");
    }, function () {
        var indcur = parseInt($(this).index() + 1);
        $(".mainnav li:eq(" + indcur + ")").find("a").removeClass("cur");
    })
    //新闻
    $(".newsbottom .con:gt(0)").hide();
    $(".newspart h1 span").hover(function () {
        var ind = $(this).index();
        $(this).addClass("on").siblings("span").removeClass("on");
        var leftval = ind * 60 + 18;
        $(".newspart h1 i").stop().animate({ "left": leftval }, 300);
        $(".newsbottom .con:eq(" + ind + ")").show().siblings(".con").hide();
    })
    //视频 图片
    $(".pic_vid_bottom .con:gt(0)").hide();
    $(".pic_vid h1 span").hover(function () {
        var ind = $(this).index();
        $(this).addClass("on").siblings("span").removeClass("on");
        var leftval = ind * 60 + 18;
        $(".pic_vid h1 i").stop().animate({ "left": leftval }, 300);
        $(".pic_vid_bottom .con:eq(" + ind + ")").show().siblings(".con").hide();
    })
    //style风格 
    $(".stylebox li").hover(function () {
        $(this).children(".img_b").stop().animate({ "bottom": 0 }, 300);
        $(this).children(".img_t").stop().animate({ "top": 0 }, 300);
    }, function () {
        $(this).children(".img_b").stop().animate({ "bottom": "-266px" }, 300);
        $(this).children(".img_t").stop().animate({ "top": "-266px" }, 300);
    })
    //显示二维码
    $(".contactbtnbox .btn_wechat").hover(function () {
        $(this).find("img").show();
        $(this).find("span").stop().animate({ "height": 120 }, 300);
    }, function () {
        $(this).find("span").stop().animate({ "height": 0 }, 300, function () {
            $(this).find("img").hide();
        });
    })
    $(".contactbtnbox .btn_qq").hover(function () {
        $(this).find("b").stop().animate({ "bottom": 1 }, 300);
    }, function () {
        $(this).find("b").stop().animate({ "bottom": -38 }, 300);
    })
    //合作媒体
    $(".media p").mouseenter(function () {
        $(".media ul").slideDown();
    })
    $(".media").mouseleave(function () {
        $(".media ul").slideUp();
    })
    //职业 
    $(".olzhiye li").hover(function () {
        $(this).find(".kuangbefore").hide().siblings(".kuang").show();
        $(this).children(".main_onimg").stop().animate({ "bottom": 0 }, 300);
        $(this).children(".b_bg,.zy_detail").stop().animate({ "bottom": 0 }, 300);
    }, function () {
        $(this).find(".kuangbefore").show().siblings(".kuang").hide();
        $(this).children(".main_onimg").stop().animate({ "bottom": "346px" }, 300);
        $(this).children(".b_bg,.zy_detail").stop().animate({ "bottom": "-162px" }, 300);
    })
    //第一屏轮播
    var t = setInterval(autoplay, 3000);
    var num = 0;
    var leng = $(".lb_banners li").length;
    function autoplay() {
        $(".lb_banners").stop().animate({ "margin-left": -num * 550 }, 500);
        $(".point a:eq(" + num + ")").addClass("on").siblings("a").removeClass("on");
        num++;
        if (num > leng - 1) {
            num = 0;
        }
    }
    $(".point a").click(function () {
        var ind = $(this).index();
        $(this).addClass("on").siblings("a").removeClass("on");
        $(".lb_banners").stop().animate({ "margin-left": -ind * 550 }, 500);
        num = ind;
    })
    $(".lb_banners,.point").hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(autoplay, 3000);
    })
    //gun轮播
    var timeplay = 500;
    //$('.gunpart ul li:gt(0)').hide();
    $('.gunpart ul li:eq(0)').find("img").fadeIn().animate({ "left": 0 }, timeplay);
    $('.gunpart ul li:eq(0)').find(".detail").fadeIn().animate({ "top": 10 }, timeplay);
    $('.gunpart ul li:eq(0)').find(".property").fadeIn().animate({ "bottom": 0 }, timeplay, function () {
        $(this).stop().animate({ "width": 200 }, 1000);
    });



    function gunplay(num2) {
        $('.gunpart ul li:eq(' + num2 + ')').find("img").show().animate({ "left": 0 }, timeplay);
        $('.gunpart ul li:eq(' + num2 + ')').find(".detail").show().animate({ "top": 10 }, timeplay);
        $('.gunpart ul li:eq(' + num2 + ')').find(".property").show().animate({ "bottom": 0 }, timeplay, function () {
            $(this).stop().animate({ "width": 200 }, 1000);
        });
    }
    function gunplaygo(num2) {
        $('.gunpart ul li').find("img").css({ "left": 941 }).hide();
        $('.gunpart ul li').find(".detail").css({ "top": -130 }).hide();
        $('.gunpart ul li').find(".property").css({ "bottom": -130, "width": 0 }).hide();
    }
    var num2 = 0;
    var gun_leng = $(".gunpart li").length;
    $(".arrowr").click(function () {
        gunplaygo(num2);
        num2++;
        if (num2 > 5) {
            num2 = 1;
            $('.gunpart ul').css({ "margin-left": 0 });
            $(".gunpart ul").stop().css({ "margin-left": -num2 * 941 });
            gunplay(num2);
        } else {
            $(".gunpart ul").stop().css({ "margin-left": -num2 * 941 });
            gunplay(num2);
        }
    })
    $(".arrowl").click(function () {
        gunplaygo(num2);
        num2--;
        if (num2 < 0) {
            num2 = 4;
            $('.gunpart ul').css({ "margin-left": -4705 });
            $(".gunpart ul").stop().css({ "margin-left": -num2 * 941 });
            gunplay(num2);
        } else {
            $(".gunpart ul").stop().css({ "margin-left": -num2 * 941 });
            gunplay(num2);
        }
    })
    $(".hotgame").slideDown();
    $(".hotgame_close").click(function () {
        $(".hotgame").slideUp();
    })
});


}
/*
     FILE ARCHIVED ON 05:40:46 Oct 20, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:14:58 May 31, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.533
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.009
  esindex: 0.009
  cdx.remote: 7.012
  LoadShardBlock: 108.076 (3)
  PetaboxLoader3.datanode: 84.294 (5)
  PetaboxLoader3.resolve: 144.916 (3)
  load_resource: 229.416 (2)
*/