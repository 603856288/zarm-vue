(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(t,e,a){"use strict";a.r(e);var n=a(6),i=a(7),l=a(8),s=[{url:"#",img:1},{url:"#",img:2},{url:"#",img:3}],o={data:function(){return{ITEMS:s}},methods:{handleChangeStart:function(t){console.log(t)},handleChangeEnd:function(t){console.log(t)},onJumpTo:function(){this.$refs.swipe.onJumpTo(0)},onSlideTo:function(){this.$refs.swipe.onSlideTo(2)}}},r=a(0),p=Object(r.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("za-panel",[a("za-panel-header",{attrs:{title:"基本"}}),t._v(" "),a("za-panel-body",[a("za-swipe",{attrs:{direction:"left"},on:{changeStart:t.handleChangeStart,changeEnd:t.handleChangeEnd}},t._l(t.ITEMS,function(e,n){return a("za-swipe-item",{key:n},[a("div",{staticClass:"swipe-item-pic"},[a("span",{staticStyle:{display:"block",width:"100%",height:"100px","text-align":"center","line-height":"100px"}},[t._v(t._s(e.img))])])])}))],1)],1),t._v(" "),a("za-panel",[a("za-panel-header",{attrs:{title:"纵向"}}),t._v(" "),a("za-panel-body",[a("za-swipe",{attrs:{direction:"bottom"},on:{changeStart:t.handleChangeStart,changeEnd:t.handleChangeEnd}},t._l(t.ITEMS,function(e,n){return a("za-swipe-item",{key:n},[a("div",{staticClass:"swipe-item-pic"},[a("span",{staticStyle:{display:"block",width:"100%",height:"100px","text-align":"center","line-height":"100px"}},[t._v(t._s(e.img))])])])}))],1)],1),t._v(" "),a("za-panel",[a("za-panel-header",{attrs:{title:"循环轮播"}}),t._v(" "),a("za-panel-body",[a("za-swipe",{ref:"swipe",attrs:{direction:"left",loop:""},on:{changeStart:t.handleChangeStart,changeEnd:t.handleChangeEnd}},t._l(t.ITEMS,function(e,n){return a("za-swipe-item",{key:n},[a("div",{staticClass:"swipe-item-pic"},[a("span",{staticStyle:{display:"block",width:"100%",height:"100px","text-align":"center","line-height":"100px"}},[t._v(t._s(e.img))])])])})),t._v(" "),a("div",{staticClass:"controls",staticStyle:{"text-align":"center","padding-bottom":"20px"}},[a("za-button",{attrs:{size:"sm"},on:{click:t.onJumpTo}},[t._v("无动画切换指定页")]),t._v(" "),a("za-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"sm"},on:{click:t.onSlideTo}},[t._v("滑动到指定页")])],1)],1)],1),t._v(" "),a("za-panel",[a("za-panel-header",{attrs:{title:"自动循环轮播"}}),t._v(" "),a("za-panel-body",[a("za-swipe",{attrs:{direction:"left",loop:"","auto-play":""}},t._l(t.ITEMS,function(e,n){return a("za-swipe-item",{key:n},[a("div",{staticClass:"swipe-item-pic"},[a("span",{staticStyle:{display:"block",width:"100%",height:"100px","text-align":"center","line-height":"100px"}},[t._v(t._s(e.img))])])])}))],1)],1)],1)},[],!1,null,null,null).exports,c=(a(49),{components:{Container:n.a,PageHeader:i.a,PageFooter:l.a,Demo:p}}),h=Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("Container",{staticClass:"swipe-page"},[e("PageHeader",{attrs:{title:"图片轮播 swipe"}}),this._v(" "),e("Demo"),this._v(" "),e("PageFooter")],1)},[],!1,null,null,null);e.default=h.exports}}]);
//# sourceMappingURL=10.6de938df0151d541d79c.js.map