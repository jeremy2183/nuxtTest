(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{227:function(e,t,o){var content=o(230);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(56).default)("199aeda4",content,!0,{sourceMap:!1})},228:function(e,t,o){"use strict";o.r(t);o(229);var n=o(15),component=Object(n.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"VueToNuxtLogo"},[t("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),t("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),t("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),t("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);t.default=component.exports},229:function(e,t,o){"use strict";o(227)},230:function(e,t,o){(t=o(55)(!1)).push([e.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}.VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),e.exports=t},231:function(e,t,o){"use strict";o.r(t);o(105),o(158),o(159),o(58),o(160);var n=o(37),r=(o(4),o(5),o(6),o(7),{mounted:function(){this.showJotForm()},methods:{showJotForm:function(){var e=document.getElementById("JotFormIFrame-210101301464434");if(e){var t=e.src,o=[];window.location.href&&window.location.href.indexOf("?")>-1&&(o=o.concat(window.location.href.substr(window.location.href.indexOf("?")+1).split("&"))),t&&t.indexOf("?")>-1&&(o=o.concat(t.substr(t.indexOf("?")+1).split("&")),t=t.substr(0,t.indexOf("?"))),o.push("isIframeEmbed=1"),e.src=t+"?"+o.join("&")}window.handleIFrameMessage=function(e){if("object"!==Object(n.a)(e.data)){var t=e.data.split(":");if(t.length>2?iframe=document.getElementById("JotFormIFrame-"+t[t.length-1]):iframe=document.getElementById("JotFormIFrame"),iframe){switch(t[0]){case"scrollIntoView":iframe.scrollIntoView();break;case"setHeight":iframe.style.height=t[1]+"px";break;case"collapseErrorPage":iframe.clientHeight>window.innerHeight&&(iframe.style.height=window.innerHeight+"px");break;case"reloadPage":window.location.reload();break;case"loadScript":var o=t[1];t.length>3&&(o=t[1]+":"+t[2]);var script=document.createElement("script");script.src=o,script.type="text/javascript",document.body.appendChild(script);break;case"exitFullscreen":window.document.exitFullscreen?window.document.exitFullscreen():window.document.mozCancelFullScreen||window.document.mozCancelFullscreen?window.document.mozCancelFullScreen():window.document.webkitExitFullscreen?window.document.webkitExitFullscreen():window.document.msExitFullscreen&&window.document.msExitFullscreen()}if(e.origin.indexOf("jotform")>-1&&"contentWindow"in iframe&&"postMessage"in iframe.contentWindow){var r={docurl:encodeURIComponent(document.URL),referrer:encodeURIComponent(document.referrer)};iframe.contentWindow.postMessage(JSON.stringify({type:"urls",value:r}),"*")}}}},window.addEventListener?window.addEventListener("message",handleIFrameMessage,!1):window.attachEvent&&window.attachEvent("onmessage",handleIFrameMessage)}}}),l=o(15),component=Object(l.a)(r,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("iframe",{staticStyle:{"min-width":"100%",height:"539px",border:"none"},attrs:{id:"JotFormIFrame-210101301464434",title:"Lime Theme Contact Us Form",onload:"window.parent.scrollTo(0,0)",allowtransparency:"true",allowfullscreen:"true",allow:"geolocation; microphone; camera",src:"https://form.jotform.com/210101301464434",frameborder:"0",scrolling:"no"}})])}],!1,null,null,null);t.default=component.exports},242:function(e,t,o){var content=o(266);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(56).default)("373d6f25",content,!0,{sourceMap:!1})},265:function(e,t,o){"use strict";o(242)},266:function(e,t,o){(t=o(55)(!1)).push([e.i,'.container[data-v-5f850d8a]{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title[data-v-5f850d8a]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}',""]),e.exports=t},284:function(e,t,o){"use strict";o.r(t);o(4),o(5),o(6),o(7);var n={middleware:"stats",created:function(){console.log("server: ",!1),console.log("client: ",!0)},methods:{renderSide:function(){return"Client 端"}},computed:{renSide:function(){return"Client 端"}},components:{JotForm:o(231).default}},r=(o(265),o(15)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",[o("div",[e._v("A 區塊是由 "+e._s(e.renSide)+" 渲染")]),e._v(" "),o("no-ssr",[e._v("B 區塊是由 "+e._s(e.renSide)+" 渲染")]),e._v(" "),o("h1",{staticClass:"title"},[e._v("secret")]),e._v(" "),o("logo"),e._v(" "),o("no-ssr",[o("jot-form")],1)],1)])}),[],!1,null,"5f850d8a",null);t.default=component.exports;installComponents(component,{Logo:o(228).default,JotForm:o(231).default})}}]);