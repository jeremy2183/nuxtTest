(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{227:function(t,e,r){var content=r(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("199aeda4",content,!0,{sourceMap:!1})},228:function(t,e,r){"use strict";r.r(e);r(229);var o=r(15),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);e.default=component.exports},229:function(t,e,r){"use strict";r(227)},230:function(t,e,r){(e=r(55)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}.VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},232:function(t,e,r){t.exports=r.p+"img/1606.8c2c91f.png"},239:function(t,e,r){var content=r(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("042b0dee",content,!0,{sourceMap:!1})},259:function(t,e,r){"use strict";r(239)},260:function(t,e,r){(e=r(55)(!1)).push([t.i,'.container[data-v-9ced0d76]{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title[data-v-9ced0d76]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-9ced0d76]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-9ced0d76]{padding-top:15px}.my-style[data-v-9ced0d76]{margin:10px auto;font-size:12px;color:#fff;background:#68cd86;border-left-color:#42a85f}.my-style .notification-title[data-v-9ced0d76]{color:#187fe7!important}.my-style .notification-content[data-v-9ced0d76]{color:#42a85f!important}.slide-enter-active[data-v-9ced0d76],.slide-leave-active[data-v-9ced0d76]{transition:transform .3s ease-out;transition-timing-function:linear}.slide-enter[data-v-9ced0d76],.slide-leave-to[data-v-9ced0d76]{transform:translateX(-100%)}',""]),t.exports=e},281:function(t,e,r){"use strict";r.r(e);r(41),r(42);var o=r(12),n=(r(4),r(5),r(6),r(7),{data:function(){return{title:"About",description:"My classy Nuxt.js project",show:!1,snotify:!1}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,r=t.$axios,"https://randomuser.me/api",e.next=4,r.get("https://randomuser.me/api");case 4:return o=e.sent,data=o.data,e.abrupt("return",{title:data.results[0].name.first});case 7:case"end":return e.stop()}}),e)})))()},header:function(){return{title:this.title}},mounted:function(){this.show=!0,this.$myInjectedFunction("test")},methods:{shownotify:function(){this.snotify=!0,this.$notify({group:"all",title:"Important message",text:"Hello user! This is a notification!"})},refresh:function(){this.$nuxt.refresh()}}}),l=(r(259),r(15)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",[o("notifications",{directives:[{name:"show",rawName:"v-show",value:1==t.snotify,expression:"snotify == true"}],staticClass:"my-style",attrs:{group:"all"}}),t._v(" "),o("h2",[t._v("注入实例 Vue Inject: "+t._s(this.$myInjectedFunction("test")))]),t._v(" "),o("img",{attrs:{src:r(232)}}),t._v(" "),o("transition",{attrs:{name:"slide"}},[o("h1",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("This is "+t._s(t.title))])]),t._v(" "),o("Logo"),t._v(" "),o("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"links"},[o("a",{staticClass:"button--green",attrs:{href:"javascript:;"},on:{click:t.refresh}},[t._v("Refresh")]),t._v(" "),o("a",{staticClass:"button--green",attrs:{href:"javascript:;"},on:{click:t.shownotify}},[t._v("Show notifications")]),t._v(" "),o("a",{staticClass:"button--green",attrs:{href:"#"}},[t._v(t._s(t.title))]),t._v(" "),o("a",{staticClass:"button--green",attrs:{href:"#"}},[t._v(t._s(t.description))])])],1)])}),[],!1,null,"9ced0d76",null);e.default=component.exports;installComponents(component,{Logo:r(228).default})}}]);