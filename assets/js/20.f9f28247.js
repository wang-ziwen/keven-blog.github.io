(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{540:function(t,e,n){},723:function(t,e,n){"use strict";var r=n(540);n.n(r).a},980:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{resources:[{addr:"参考视频/中国风电.mp4",desc:"中国风电",link:""},{addr:"参考视频/智能楼宇可视化展示效果.mp4",desc:"智能楼宇可视化展示效果",link:""},{addr:"参考视频/厂商可视化参考.mp4",desc:"厂商可视化参考",link:""},{addr:"参考视频/智慧城市.mp4",desc:"智慧城市",link:""}]}},mounted:function(){document.getElementsByClassName("content")[0].className="content_custom"},methods:{GetAddr:function(t){return"http://10.1.99.103:6412/vedio/bank_xc/"+t},CheckShow:function(t,e){return t==e||t==e+1||t==e+2||t==e+3}}},c=(n(723),n(13)),s=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"50px"}},[n("h1",[t._v("参考视频")]),t._v(" "),t._l(t.resources,function(e,r){return r%4==0?n("table",[n("thead"),t._v(" "),n("tbody",[n("tr",t._l(t.resources,function(e,c){return t.CheckShow(c,r)?n("td",{staticClass:"video-item"},[n("video",{attrs:{preload:"meta",controls:"",src:t.GetAddr(e.addr)}})]):t._e()}),0),t._v(" "),n("tr",t._l(t.resources,function(e,c){return c==r||c==r+1||c==r+2||c==r+3?n("td",[n("label",[t._v(t._s(e.desc))])]):t._e()}),0)])]):t._e()}),t._v(" "),n("span",[t._v("优诺DCV相关 (http://10.1.99.103:6412/vedio/bank_xc/参考视频/优诺DCV相关/) ")])],2)},[],!1,null,"5ae62f9a",null);e.default=s.exports}}]);