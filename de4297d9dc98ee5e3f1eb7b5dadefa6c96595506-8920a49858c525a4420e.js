/*! For license information please see de4297d9dc98ee5e3f1eb7b5dadefa6c96595506-8920a49858c525a4420e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/eHF":function(e,t,i){"use strict";function n(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}function o(e,t){var i=t.distance,n=t.left,o=t.right,r=t.up,s=t.down,a=t.top,u=t.bottom,d=t.big,c=t.mirror,p=t.opposite,f=(i?i.toString():0)+((n?1:0)|(o?2:0)|(a||s?4:0)|(u||r?8:0)|(c?16:0)|(p?32:0)|(e?64:0)|(d?128:0));if(h.hasOwnProperty(f))return h[f];var v=n||o||r||s||a||u,m=void 0,g=void 0;if(v){if(!c!=!(e&&p)){var w=[o,n,u,a,s,r];n=w[0],o=w[1],a=w[2],u=w[3],r=w[4],s=w[5]}var y=i||(d?"2000px":"100%");m=n?"-"+y:o?y:"0",g=s||a?"-"+y:r||u?y:"0"}return h[f]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+g+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),h[f]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,r=(e.out,e.forever),s=e.timeout,a=e.duration,u=void 0===a?l.defaults.duration:a,c=e.delay,h=void 0===c?l.defaults.delay:c,p=e.count,f=void 0===p?l.defaults.count:p,v=n(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===s?u:s,delay:h,forever:r,count:f,style:{animationFillMode:"both"},reverse:v.left};return t?(0,d.default)(v,m,m,i):m}Object.defineProperty(t,"__esModule",{value:!0});var s,a=i("17x9"),l=i("ar19"),u=i("eH+L"),d=(s=u)&&s.__esModule?s:{default:s},c={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},h={};r.propTypes=c,t.default=r,e.exports=t.default},"28nh":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw r}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i("q1tI"),u=(n=l)&&n.__esModule?n:{default:n},d=i("17x9"),c=i("ar19"),h=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),p={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:h.isRequired,outEffect:(0,d.oneOfType)([h,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},f={transitionGroup:d.object},v=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,c.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?s({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!c.observerMode&&this.props.collapse&&window.document.dispatchEvent(c.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,o=i.forever,r=i.count,s=i.delay,a=i.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),s+(a+(t?a:0)*r))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,r=void 0,s=void 0;if(t.collapseOnly)r=i.duration/3,s=i.delay;else{var a=n>>2,l=a>>1;r=a,s=i.delay+(this.isOn?0:n-a-l),e.style.animationDuration=n-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+r+"ms ease "+s+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:s({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=u.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),c.ssr&&(0,c.disableSsr)()}},{key:"handleObserve",value:function(e,t){r(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&c.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c.globalHide||(0,c.hideAll)(),this&&this.el&&(e||(e=this.props),c.ssr&&(0,c.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):c.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||c.ssr&&!c.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):c.ssr&&(c.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return u.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):u.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],r=n.duration,a=n.reverse,l=i.length,d=2*r;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),r=d/2);var h=a?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?u.default.cloneElement(e,{style:s({},e.props.style,t.state.style,{animationDuration:Math.round((0,c.cascade)(a?h--:h++,0,l,r,d))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=u.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:u.default.createElement("div",null,e)}return u.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,o=n.style,r=n.className,a=n.children,l=this.props.disabled?r:(this.props.outEffect?c.namespace:"")+(this.state.className?" "+this.state.className:"")+(r?" "+r:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&a&&this.state.style.animationName?(i=this.cascade(a),d=s({},o,{opacity:1})):d=this.props.disabled?o:s({},o,this.state.style);var h=s({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:d},this.props.refProp,this.saveRef)),p=u.default.cloneElement(t,h,e?i||a:void 0);return void 0!==this.props.collapse?this.props.collapseEl?u.default.cloneElement(this.props.collapseEl,{style:s({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):u.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,c.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(c.globalHide?e.fraction:0);return n>o-window.innerHeight&&n<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){c.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!c.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(u.default.Component);v.propTypes=p,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default},"7vrA":function(e,t,i){"use strict";var n=i("wx14"),o=i("zLVn"),r=i("TSYQ"),s=i.n(r),a=i("q1tI"),l=i.n(a),u=i("vUet"),d=l.a.forwardRef((function(e,t){var i=e.bsPrefix,r=e.fluid,a=e.as,d=void 0===a?"div":a,c=e.className,h=Object(o.a)(e,["bsPrefix","fluid","as","className"]),p=Object(u.a)(i,"container"),f="string"==typeof r?"-"+r:"-fluid";return l.a.createElement(d,Object(n.a)({ref:t},h,{className:s()(c,r?""+p+f:p)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.a=d},J9yo:function(e,t,i){e.exports={heroBackground:"none"}},TSYQ:function(e,t,i){var n;!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var s=o.apply(null,n);s&&e.push(s)}else if("object"===r)for(var a in n)i.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},ar19:function(e,t,i){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",o,!0),n("."+r+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,o){var r=Math.log(n),s=(Math.log(o)-r)/(i-t);return Math.exp(r+s*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(v+h)+"{"+e+"}",i=p[e];return i?""+v+i:(f.insertRule(t,f.cssRules.length),p[e]=h,""+v+h++)},t.hideAll=o,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var r=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},u=t.disableSsr=function(){return t.ssr=s=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),c=(t.ie10=!1,t.collapseend=void 0),h=1,p={},f=!1,v=r+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(u,1500),a||(t.collapseend=c=document.createEvent("Event"),c.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(f=m.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},bmMU:function(e,t){var i="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,s){if(t===s)return!0;if(t&&s&&"object"==typeof t&&"object"==typeof s){if(t.constructor!==s.constructor)return!1;var a,l,u,d;if(Array.isArray(t)){if((a=t.length)!=s.length)return!1;for(l=a;0!=l--;)if(!e(t[l],s[l]))return!1;return!0}if(n&&t instanceof Map&&s instanceof Map){if(t.size!==s.size)return!1;for(d=t.entries();!(l=d.next()).done;)if(!s.has(l.value[0]))return!1;for(d=t.entries();!(l=d.next()).done;)if(!e(l.value[1],s.get(l.value[0])))return!1;return!0}if(o&&t instanceof Set&&s instanceof Set){if(t.size!==s.size)return!1;for(d=t.entries();!(l=d.next()).done;)if(!s.has(l.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(s)){if((a=t.length)!=s.length)return!1;for(l=a;0!=l--;)if(t[l]!==s[l])return!1;return!0}if(t.constructor===RegExp)return t.source===s.source&&t.flags===s.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===s.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===s.toString();if((a=(u=Object.keys(t)).length)!==Object.keys(s).length)return!1;for(l=a;0!=l--;)if(!Object.prototype.hasOwnProperty.call(s,u[l]))return!1;if(i&&t instanceof Element)return!1;for(l=a;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],s[u[l]]))return!1;return!0}return t!=t&&s!=s}(e,t)}catch(s){if((s.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw s}}},"eH+L":function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),r.default.Children.count(n)<2?r.default.createElement(s.default,o({},e,{inEffect:t,outEffect:i,children:n})):(n=r.default.Children.map(n,(function(n){return r.default.createElement(s.default,o({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in r.default?r.default.createElement(r.default.Fragment,null,n):r.default.createElement("span",null,n))};var r=n(i("q1tI")),s=n(i("28nh"));e.exports=t.default},jooN:function(e,t,i){"use strict";i.d(t,"e",(function(){return o})),i.d(t,"f",(function(){return r})),i.d(t,"a",(function(){return s})),i.d(t,"g",(function(){return a})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return u})),i.d(t,"d",(function(){return d}));var n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",i=crypto.getRandomValues(new Uint8Array(e));e--;){var n=63&i[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t},o={title:"Saara Rautiainen // Digital Designer",lang:"fin, eng",description:""},r={title:"Hello! My name is",name:"Saara Rautiainen",subtitle:"A digital designer and front-end developer",cta:"Find out more"},s={img:"profile.jpeg",paragraphOne:"Currently studying Human-Technology Interaction (MSc) at Tampere University, minoring in media studies",paragraphTwo:"I completed my BSc on Digital Media at the University of the West of England, spending a year abroad at ITU Copenhagen studying Digital Media and Design. Previous professional role SAP Fiori/UI5 consultant and front-end developer at CGI.",paragraphThree:"An advocate of delightful technology. Interested in interaction design, front-end development, games and assistive technologies.",webskills:"HTML5, CSS3, SASS, Javascript, React, Node.js, Python, MongoDB/Mongoose, Jenkins, Git/Gitlab.",uxskills:"UX research, User-Centered Design, Co-Design, Design Thinking, Workshop Facilitation, Wireframing and Prototyping.",tools:"Illustrator, Photoshop, Adobe XD, Figma, Sketch, Heroku, Wordpress.",resume:"SaaraCV.pdf"},a=[{id:n(),path:"bristolsound",img:"saving_bristol_sound.png",solutionimgs:["bristolsound-concept-1.png"],processimgs:["bristolsound-explore.png","bristolsound-ideation-1.png","bristolsound-prototyping-1.png"],imgs:"",title:"Saving Bristol Sound",info:"Interaction design research and design project showcasing the musical history of Bristol. The primary focus was on conducting extensive research on locations, topics and interactions which could be applied to the design of a prototype. The project concentrates on the coming together of these aspects in order to use interactivity as a tool to express emotion and create meaningful experiences.",info2:"We designed an open space which the user could freely explore to interact with the space with their movement. The user would be required to wear headphones that will guide them through a journey, using a location based application downloaded prior to entering. This application will provide audio, varying from chanting crowds to musical performances. The sound level is dictated by the users position in the installation. ",technologies:["Sketchup"],problem:"During the last few years Bristol has seen demonstrations against housing developers jeopardizing the operating of grassroots music venues, making it clear that it is a political issue with an emotional charge. The aim of ‘Saving Bristol Sound ‘ was to convey these feelings to a larger audience through an interactive installation. For this we had to consider ways of capturing such an abstract concept as emotion, which can be reflected in various forms that can be open for interpretation. ",process:"Our research started at an exhibition called Seven Decades of Sound, hosted by the M-Shed in Bristol. It focused on the evolution of the city’s music scene over the last seventy years, and along with providing us inspiration for our topic, it featured a variety of interactive experiences. These included a booth equipped with headphones that users could use to listen to the ambience at various venues. This was of interest to us as it engaged with an audience that may not frequently visit these locales, and succeeded in telling a story of what the Bristolian music scene sounds and feels like. To carry out our future research , we mapped out integral topics, research questions and methods. The focus was on reaching out to Bristolians associated with iconic venues that have either been closed, or under the threat of closure, to gain firsthand information on why these venues are so beloved by Bristolians. Desk research was done to gain deeper understanding on why gentrification has led to this development, after which some on-site observation was conducted at yet another legendary Bristol venue, The Exchange. The field research provided proof of these venues cultivating discussion, social movement and networking opportunities as individuals from all over the South West would gather together mostly for the music, but also the community.",solution:"To pay homage to the Bristol music scene and the lasting impact it has had on the community and individuals, our installation would have to reflect the sentiment these locations hold. The solution was to capture individuals’ specific moments related to venues, something even a newcomer would comprehend as a meaningful occasion.  This would render the installation from being solely informative to it being a purposeful piece, inviting the user to take a journey to the mind of a collective with a strong connection to the music scene in Bristol. By introducing this new perspective, even someone with no insights on the subject would become more acquainted with the topic and evoke an emotional response",url:"",keywords:"Interaction Design, Prototyping, Experience Design",videourl:"https://player.vimeo.com/video/304749700",contributors:"Alan Long, Ryan Avery, Saara Rautiainen",repo:""},{id:n(),path:"givr",img:"givr_poster.png",solutionimgs:["givr-chat.webp","givr-map.webp","givr-result.webp","givr-search.webp"],processimgs:["givr-thematic1.png","givr-thematic2.png","givr-wireframing.png"],imgs:"",title:"Givr",info:"Givr explores how technological solutions can help improve current societal issues. The platform functions as a communication platform for Bristolians and Bristolian charities, creating a more equal distribution of resource donations in the city.",info2:"The final prototype was designed after extensive interviews with non-profit organisations in Bristol.",problem:"Our project is addressing the homeless situation in Bristol and the lack of communication between the hubs. During our interview phase with different people from homeless organisations in Bristol, we have realised that the charities from the north of Bristol are dealing with an overflow of resources donated while the ones from the south are dealing with the opposite situation. Therefore, we chose to focus on creating a communication platform which would enable the general public to donate to charities/organisations in Bristol based upon their requests.",process:"Interviews were conducted to gain expert knowledge of the subject and as interviewing homeless people directly was not an option due to their vulnerable status, we decided to go to the organisations dealing with homelessness in Bristol. Themes that multiple interviewees mentioned were the collaboration between the general public and homeless charities, and the uneven distribution of resources between the north and south of Bristol. During our interview phase, we realised that the charities from the north of Bristol are dealing with an overflow of resources donated while the ones from the south are dealing with the opposite situation. Therefore, we chose to focus on creating a communication platform which would enable the general public to donate to charities/organisations in Bristol based upon their requests.",solution:"Research findings led to the idea of a platform which enables communication between the general public, charities and organisations with the aim of bridging the current communication gap and better distributing resources. The prototype was initially planned to allow users to make both requests and offers, similar to Tinder’s matching system . The user would input an item they would like to donate and be matched with the nearest three charities that had previously requested the item. After thorough discussion regarding endless possibilities of items and situations, we chose to add a login screen for charities/organisations only, allowing them to make both requests and offers, while presenting the general public with the nearest locations for donating what local charities/organisations are in need of.  A spokesperson from Caring in Bristol noted during user testing, that the application would be more suitable for smaller, street-based volunteer teams than big organisations. The changes were implemented and the second iteration of the concept was then tested with a representative of Julian Trust, who found the concept feasible and of interest also for his own organisation.",url:"",keywords:"UX/UI design, UX research, Graphic Design, Mobile App Design",videourl:"https://vimeo.com/341074275",contributors:"Alan Long, Ryan Avery, Saara Rautiainen, Teodora Muresan, Nikki Pantony, Rajon Rahman",repo:""}],l={cta:"I am always open for a chat!",btn:"Email me",email:"saara.a.rautiainen@gmail.com"},u={networks:[{id:n(),name:"behance",url:"https://www.behance.net/saaraaraut1577"},{id:n(),name:"linkedin",url:"https://www.linkedin.com/in/saara-rautiainen/"},{id:n(),name:"github",url:"https://github.com/saararautiainen"}]},d={isEnabled:!1}},q4sD:function(e,t,i){},vUet:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i("wx14");var n=i("q1tI"),o=i.n(n),r=o.a.createContext({});r.Consumer,r.Provider;function s(e,t){var i=Object(n.useContext)(r);return e||i[t]||t}},wx14:function(e,t,i){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}i.d(t,"a",(function(){return n}))},yLpj:function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(n){"object"==typeof window&&(i=window)}e.exports=i},zLVn:function(e,t,i){"use strict";function n(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}i.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=de4297d9dc98ee5e3f1eb7b5dadefa6c96595506-8920a49858c525a4420e.js.map