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
//点击执行：<a href="javascript:;" id="blol_btn_applyCode">按钮</a>
//关闭弹层的按钮：bl_btnClose
//预约页面：applycode.html
//预约成功页面：applysucceed.html

var _content = '<style type="text/css">';
    _content += '#blol_bg{width:100%;height:100%;position:fixed;top:0;left:0;background:#000;z-index:9999;display:none;}';
    _content += '#blol_mask{width:750px;height:600px;position:absolute;z-index:10000;top:0;left:0;font-size:16px;display:none;}';
    _content +='#blol_mask .peo{position:absolute;top:0;left:0;width:329px;height:536px;background:url(http://static.sdg-china.com/blol/pic/bl_act/blolapplycode/peo.png) no-repeat;z-index:10001;}'
    _content += '#blol_mask #bl_btnClose{display:block;width:24px;height:24px;background:url(http://static.sdg-china.com/blol/pic/bl_act/blolapplycode/btnclose.jpg?) no-repeat;';
    _content += 'position:absolute;top:135px;right:-19px;z-index:13;cursor:pointer;z-index:10001;}';
    _content += '#blol_mask .blOutBox{width:470px;height:333px;position:absolute;top:135px;left:275px;z-index:10000;}';
    _content += '</style>';

    _content += '<div id="blol_bg"></div>';
    _content += '<div id="blol_mask">';
    _content += '<div class="peo"></div>';
    _content += '<span id="bl_btnClose"></span>';
    _content += '<div class="blOutBox">';
    _content += '<iframe width="470" height="333" frameborder="0" scrolling="no" name="blolApplyiframe" allowtransparency="true"';
    _content += ' id="blolApplyiframe" vspace="0" hspace="0" marginheight="0" marginwidth="0" src="https://web.archive.org/web/20161020053424/http://act.blol.sdo.com/project/Reserve/applycode.aspx"></iframe>';
    _content += '</div>';

var commonp = {
    style: function (ele) {
        var _box = $(ele)
        _box.css({
            left: ($(window).width() - _box.width()) / 2,
            top: $(document).scrollTop() + ($(window).height() - _box.height()) / 2
        });
        if (_box.height() > ($(window).height() - 20)) {
            _box.css({
                top: $(document).scrollTop()
            });
        }

        $('#blol_bg').css({
            width: $(window).width(),
            height: $(document).height(),
            opacity: 0.6
        });
    },
    show: function (ele) {
        commonp.style(ele);
        $('#blol_bg').fadeIn(300);
        $(ele).fadeIn(300);
        return;
    }
};
$(function(){
    $('body').append(_content);
    //点击关闭按钮
    $("#bl_btnClose").click(function(){
        $("#blol_mask,#blol_bg").fadeOut(300);
        window.location.href=location.href;
    })
    //点击一个id为blol_btn_applyCode的按钮 显示applycode.html 进行预约
    $("#blol_btn_applyCode").click(function(){
        commonp.show("#blol_mask");
    })
})


}
/*
     FILE ARCHIVED ON 05:34:24 Oct 20, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:14:58 May 31, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.474
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.007
  esindex: 0.01
  cdx.remote: 29.04
  LoadShardBlock: 242.244 (3)
  PetaboxLoader3.datanode: 144.994 (5)
  PetaboxLoader3.resolve: 378.23 (3)
  load_resource: 340.818 (2)
*/