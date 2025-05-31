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

//视频 开始 
var pshow = {
    style:function(ele){
        $(ele).css({
            left:($(window).width()-$(ele).width())/2,
            top:$(document).scrollTop()+($(window).height()-$(ele).height())/2
            });
        if($(ele).height() > $(window).height()) {
            $(ele).css({
                top:parseInt($(window).scrollTop()) + 5
                });
            }
        $('#VideoMask').css({
            width:$(window).width(),
            height:$(document).height(),
            opacity:.6
            });
    },
    show:function(ele,callback){
        if(callback)
            callback();
		this.style(ele);
        $(ele).fadeIn(300,function(){
			pshow.style(ele);
		});
        $('#VideoMask').fadeIn(300);
     }
  };
  function videoshow(vid) {
        var _width = '750';
        var _height = '480';
        var video_html = '<object id="video_player" type="application/x-shockwave-flash" data="' + vid + '&adss=0&bv=0&pv=0&auto=1&rate=799&fu=1" width="' + _width + '" height="' + _height + '">';
        if (isThisOs('ie6,ie7,ie8')) {
            video_html += '<param name="movie" value="' + vid + '&adss=0&bv=0&pv=0&auto=1&rate=799&fu=1">';
        }
        video_html += '<param name="quality" value="high">';
        video_html += '<param name="allowScriptAccess" value="always">';
        video_html += '<param name="allowFullScreen" value="true">';
        video_html += '<param name="wMode" value="opaque">';
        video_html += '<param name="swLiveConnect" value="true">';
        video_html += '</object>';
		pshow.show('#VideoConBox',function(){
			$('#VideoContent').html(video_html);
		});
}
//get brower
function getOs() {
        var OsObject = "";
        if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
            OsObject = "ie6";
        } else if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
            OsObject = "ie7";
        } else if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
            OsObject = "ie8";
        } else if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
            OsObject = "Firefox";
        } else if (isChrome = navigator.userAgent.indexOf("Chrome") > 0) {
            OsObject = "Chrome";
        }
        else if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
            OsObject = "Safari";
        } else if (isCamino = navigator.userAgent.indexOf("Camino") > 0) {
            OsObject = "Camino";
        } else if (isMozilla = navigator.userAgent.indexOf("Gecko/") > 0) {
            OsObject = "Gecko";
        }
        return OsObject;
    }

// brower ver
function isThisOs(os) {
        var thisOs = getOs();
        var hasThisOs = os.indexOf(thisOs);
        return hasThisOs != -1;
    }

$(function(){
	$('#btnCloseVideo').click(function(event) {
		$('#VideoMask,#VideoConBox').fadeOut(300,function(){
			$('#VideoContent').html('');
		});
	});		
})
//视频结束

}
/*
     FILE ARCHIVED ON 03:57:06 Oct 20, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:14:58 May 31, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.352
  exclusion.robots: 0.014
  exclusion.robots.policy: 0.009
  esindex: 0.006
  cdx.remote: 5.211
  LoadShardBlock: 116.781 (3)
  PetaboxLoader3.datanode: 97.491 (5)
  PetaboxLoader3.resolve: 247.49 (3)
  load_resource: 290.258 (2)
*/