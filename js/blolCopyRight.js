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

document.write('<link rel="stylesheet" type="text/css" href="'+CopyRightcss+'">');

var logoPath = 'https://web.archive.org/web/20161020041430/http://static.sdg-china.com/copyright/';
//var logoPath = '';
var sdgLogo  = 'https://web.archive.org/web/20161020041430/http://pic.static.sdo.com/SDGCOPYRIGHT/white/SDG_logo_w.jpg';
var subLogo1 = logoPath+'pic/blol/2K_China_logo.png';
var subLogo2 = logoPath+'pic/blol/2K_ONLY_logo.png';
var subLogo3 = logoPath+'pic/blol/GEARBOX_LOGO-ICON_BLACK.png';
var CopyRightColor = 'https://web.archive.org/web/20161020041430/http://static.sdg-china.com/copyright/js/base/add_config2.html';

if(CopyRightcss.indexOf('black') != -1){
    sdgLogo  = 'https://web.archive.org/web/20161020041430/http://pic.static.sdo.com/SDGCOPYRIGHT/black/SDG_logo_b.jpg';
	subLogo3 = logoPath+'pic/blol/gearbox_logo-icon-white.png';
	CopyRightColor = 'https://web.archive.org/web/20161020041430/http://static.sdg-china.com/copyright/js/base/add_config.html';
}

var _sdgCopyrightLink = 'https://web.archive.org/web/20161020041430/http://www.shandagames.com/web/company/shulongzs.html';
var _sdgCopyrightHtml = '';
_sdgCopyrightHtml +=''

+'<div class="SDGCOPYRIGHT-wrap20130425">' 
+'	<div id="SDGCOPYRIGHT_1">'
//盛大游戏LOGO和合作媒体LOGO
+'		<div class="SDGCOPYRIGHT-logo-1">'
+'			<a>'
+'				<img src="'+sdgLogo+'">'
+'			</a>'
+'			<a>'
+'				<img src="'+subLogo2+'" style="width: 100px;">'
+'			</a>'
+'			<a>'
+'				<img src="'+subLogo1+'" style="width: 78px;">'
+'			</a>'
+'			<a>'
+'				<img src="'+subLogo3+'" style="width: 78px;">'
+'			</a>'
+'		</div>'
//版权主体信息
+'		<div class="SDGCOPYRIGHT-con">'
+'	    <div style="height:24px; width:460px;" id ="containerDiv"></div>'

//每个项目组自己的版权号
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">文网游进字〔2015〕0045号</span>'
+'				'
+'			</p>'

//公司统一的版权号
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3"><a href="'+_sdgCopyrightLink+'" target="_blank">沪网文（2014）0749-179号</a></span>'
+'				<span class="SDGCOPYRIGHT-pr3"><a href="'+_sdgCopyrightLink+'" target="_blank">ICP：沪B2-20100008</a></span>'
+'				<a href="'+_sdgCopyrightLink+'" target="_blank">新出网证（沪）字026号</a>'
+'			</p>'
+'			<p class="SDGCOPYRIGHT-sdlogo">'
+'				<span class="SDGCOPYRIGHT-pr3">上海数龙科技有限公司</span>'
+'				版权所有'
+'			</p>'
+'		</div>'
//右侧网络警察3个图标
+'		<div class="SDGCOPYRIGHT-priv">'
+'			<a href="https://web.archive.org/web/20161020041430/http://sh.cyberpolice.cn/infoCategoryListAction.do?act=initjpg" class="SDGCOPYRIGHT-priv1" target="_blank">网络警察</a>'
+'			<span>'
+'				<a href="https://web.archive.org/web/20161020041430/http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=20111011140737765" target="_blank"><img src="https://web.archive.org/web/20161020041430/http://static.sdg-china.com/db/pic/bao/other/shgs2.gif" border=0></a>'
+'			</span>'
+'			<a class="SDGCOPYRIGHT-priv3" href="https://web.archive.org/web/20161020041430/http://www.shjbzx.cn/" target="_blank">举报</a>'
+'			<a href="https://web.archive.org/web/20161020041430/http://i.sdo.com/report" target="_blank"><img src="https://web.archive.org/web/20161020041430/http://static.sdg-china.com/copyright/pic/SDG/report.png" border=0></a>'
//+'			<span class="SDGCOPYRIGHT-priv3">举报</span>'
+'		</div>'

+'	</div>'
+'</div>'

document.write(_sdgCopyrightHtml);

//统一官网标签
(function(d, s) {
   var js = d.createElement(s);
   var sc = d.getElementsByTagName(s)[0];
   js.src="https://web.archive.org/web/20161020041430/http://static.sdg-china.com/copyright/js/copyrightcommon.js";
   sc.parentNode.appendChild(js);
}(document, "script"));

//监控代码
(function(d, s) {
  window.config ={
  bw_enabled:false,
  bw_base:"https://web.archive.org/web/20161020041430/http://static.sdg-china.com/yxzm/pic/",
  siteid:"SDG-08206-01"
};
   var js = d.createElement(s);
   var sc = d.getElementsByTagName(s)[0];
   js.src="https://web.archive.org/web/20161020041430/http://static.sdg-china.com/yxzm/js/ac.js";
   sc.parentNode.insertBefore(js, sc);
}(document, "script"));

}
/*
     FILE ARCHIVED ON 04:14:30 Oct 20, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:14:58 May 31, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.71
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.012
  esindex: 0.013
  cdx.remote: 9.348
  LoadShardBlock: 109.624 (3)
  PetaboxLoader3.datanode: 125.331 (5)
  PetaboxLoader3.resolve: 242.668 (3)
  load_resource: 313.453 (2)
*/