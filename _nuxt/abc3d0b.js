(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{223:function(t,e,r){var content=r(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("1930a9a0",content,!0,{sourceMap:!1})},224:function(t,e,r){"use strict";r(223)},225:function(t,e,r){(e=r(51)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}.VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},226:function(t,e,r){"use strict";r.r(e);r(224);var o=r(11),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);e.default=component.exports},230:function(t,e,r){var content=r(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("aa182c32",content,!0,{sourceMap:!1})},239:function(t,e,r){"use strict";r(230)},240:function(t,e,r){(e=r(51)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.slide-enter-active,.slide-leave-active{transition:transform .3s ease-out;transition-timing-function:linear}.slide-enter,.slide-leave-to{transform:translateX(-100%)}',""]),t.exports=e},246:function(t,e,r){"use strict";r.r(e);r(53);var o={data:function(){return{title:"user",description:"My classy Nuxt.js project",show:!1}},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},mounted:function(){var t=this;setTimeout((function(){t.show=!0}),0)}},n=(r(239),r(11)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",[r("transition",{attrs:{name:"slide"}},[r("h1",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("This is "+t._s(t.title+t.$route.params.id))])]),t._v(" "),r("Logo"),t._v(" "),r("h1",{staticClass:"title"},[t._v(t._s(t.title+"id"))]),t._v(" "),r("div",{staticClass:"links"},[r("a",{staticClass:"button--green",attrs:{href:"#"}},[t._v(t._s(t.title))]),t._v(" "),r("a",{staticClass:"button--green",attrs:{href:"#"}},[t._v(t._s(t.description))])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(226).default})}}]);