(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[782],{9756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:function(){return r}})},2993:function(t){"use strict";var e=Array.isArray,n=Object.keys,r=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){var c,u,s,l=e(t),f=e(a);if(l&&f){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(t[c],a[c]))return!1;return!0}if(l!=f)return!1;var T=t instanceof Date,p=a instanceof Date;if(T!=p)return!1;if(T&&p)return t.getTime()==a.getTime();var d=t instanceof RegExp,E=a instanceof RegExp;if(d!=E)return!1;if(d&&E)return t.toString()==a.toString();var A=n(t);if((u=A.length)!==n(a).length)return!1;for(c=u;0!=c--;)if(!r.call(a,A[c]))return!1;if(o&&t instanceof Element&&a instanceof Element)return t===a;for(c=u;0!=c--;)if(!("_owner"===(s=A[c])&&t.$$typeof||i(t[s],a[s])))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},7701:function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=f(n(7294)),a=f(n(5697)),c=f(n(4839)),u=f(n(2993)),s=n(1640),l=n(286);function f(t){return t&&t.__esModule?t:{default:t}}function T(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var E,A,h,y=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),m=(E=y,h=A=function(t){function e(){return p(this,e),d(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,u.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case l.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,i=t.newChildProps,a=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,i=t.newProps,a=t.newChildProps,c=t.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},i,((e={})[o.type]=c,e.titleAttributes=r({},a),e));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var o;n=r({},n,((o={})[e]=t[e],o))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return i.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=T(o,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(t,i),t.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=T(t,["children"]),o=r({},n);return e&&(o=this.mapChildrenToProps(e,o)),i.default.createElement(E,o)},o(e,null,[{key:"canUseDOM",set:function(t){E.canUseDOM=t}}]),e}(i.default.Component),A.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=E.peek,A.rewind=function(){var t=E.rewind();return t||(t=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},h);m.renderStatic=m.rewind,e.ZP=m},286:function(t,e){e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(e.VALID_TAG_NAMES=Object.keys(n).map((function(t){return n[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce((function(t,e){return t[r[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},1640:function(t,e,n){e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=u(n(7294)),a=u(n(6494)),c=n(286);function u(t){return t&&t.__esModule?t:{default:t}}var s,l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(t){var e=A(t,c.TAG_NAMES.TITLE),n=A(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=A(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},T=function(t){return A(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},d=function(t,e){return e.filter((function(t){return void 0!==t[c.TAG_NAMES.BASE]})).map((function(t){return t[c.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},E=function(t,e,n){var o={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&v("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],s=u.toLowerCase();-1===e.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===t[s].toLowerCase()||(n=s),-1===e.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(r),u=0;u<i.length;u++){var s=i[u],l=(0,a.default)({},o[s],r[s]);o[s]=l}return t}),[]).reverse()},A=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},h=(s=Date.now(),function(t){var e=Date.now();e-s>16?(s=e,t(e)):setTimeout((function(){h(t)}),0)}),y=function(t){return clearTimeout(t)},m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:n.g.requestAnimationFrame||h,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:n.g.cancelAnimationFrame||y,v=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},_=null,b=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,s=t.onChangeClientState,l=t.scriptTags,f=t.styleTags,T=t.title,p=t.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,o),R(T,p);var d={baseTag:O(c.TAG_NAMES.BASE,n),linkTags:O(c.TAG_NAMES.LINK,i),metaTags:O(c.TAG_NAMES.META,a),noscriptTags:O(c.TAG_NAMES.NOSCRIPT,u),scriptTags:O(c.TAG_NAMES.SCRIPT,l),styleTags:O(c.TAG_NAMES.STYLE,f)},E={},A={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(A[t]=d[t].oldTags)})),e&&e(),s(t,E,A)},g=function(t){return Array.isArray(t)?t.join(""):t},R=function(t,e){void 0!==t&&document.title!==t&&(document.title=g(t)),P(c.TAG_NAMES.TITLE,e)},P=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var s=a[u],l=e[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var f=i.indexOf(s);-1!==f&&i.splice(f,1)}for(var T=i.length-1;T>=0;T--)n.removeAttribute(i[T]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},O=function(t,e){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},C=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.REACT_TAG_MAP[n]||n]=t[n],e}),e)},N=function(t,e,n){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[c.HELMET_ATTRIBUTE]=!0,o=M(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=C(n),i=g(e);return o?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(e)},toString:function(){return C(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=c.REACT_TAG_MAP[t]||t;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),i.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+l(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){_&&S(_),t.defer?_=m((function(){b(t,(function(){_=null}))})):(b(t),_=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,s=t.scriptTags,l=t.styleTags,f=t.title,T=void 0===f?"":f,p=t.titleAttributes;return{base:N(c.TAG_NAMES.BASE,e,r),bodyAttributes:N(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:N(c.ATTRIBUTE_NAMES.HTML,o,r),link:N(c.TAG_NAMES.LINK,i,r),meta:N(c.TAG_NAMES.META,a,r),noscript:N(c.TAG_NAMES.NOSCRIPT,u,r),script:N(c.TAG_NAMES.SCRIPT,s,r),style:N(c.TAG_NAMES.STYLE,l,r),title:N(c.TAG_NAMES.TITLE,{title:T,titleAttributes:p},r)}},e.reducePropsToState=function(t){return{baseTag:d([c.TAG_PROPERTIES.HREF],t),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,t),defer:A(t,c.HELMET_PROPS.DEFER),encode:A(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,t),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:T(t),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:f(t),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=m,e.warn=v},4839:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var o=n(7294),i=r(o),a=r(n(6872));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function f(){s=t(l.map((function(t){return t.props}))),T.canUseDOM?e(s):n&&(s=n(s))}var T=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,l=[],t};var c=o.prototype;return c.shouldComponentUpdate=function(t){return!a(t,this.props)},c.componentWillMount=function(){l.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),f()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(T,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),c(T,"canUseDOM",u),T}}},6872:function(t){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),u=0;u<i.length;u++){var s=i[u];if(!c(s))return!1;var l=t[s],f=e[s];if(!1===(o=n?n.call(r,l,f,s):void 0)||void 0===o&&l!==f)return!1}return!0}},6174:function(t,e,n){var r={"./prism.css":9183};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=6174},4795:function(t,e,n){"use strict";n.d(e,{Z:function(){return E}});n(7294);var r=n(5444),o=n(4836),i=n(8415);(0,n(8173).importAll)(n(6174));var a=n(2623),c=n(3179),u=function(t){var e=t.title,n=t.links,r=t.themeConfig,o=r.themeSwitcher,u=r.showNavLinks;return(0,i.tZ)("nav",{className:"navbar"},(0,i.tZ)("div",{className:"logo"},(0,i.tZ)(a.Z,{to:"/"},(0,i.tZ)("div",{className:"logo-inner"},(0,i.tZ)(i.RQ.h1,null,e)))),u&&n&&(0,i.tZ)(i.RQ.ul,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",listStyle:"none",padding:0},className:"nav-links"},n.map((function(t,e){return(0,i.tZ)("li",{key:e.toString()},(0,i.tZ)(i.RQ.a,{sx:{variant:"links.gray"},as:a.Z,to:t.link},t.text))})),o&&(0,i.tZ)(c.Z,null)))};u.defaultProps={links:[],title:"Blog title"};var s=u,l=function(t){var e=t.siteTitle,n=t.navLinks,r=t.themeConfig;return(0,o.tZ)("header",null,(0,o.tZ)(i.W2,null,(0,o.tZ)(s,{themeConfig:r,title:e,links:n})))};l.defaultProps={siteTitle:"",navLinks:[]};var f=l,T=function(t){var e=t.socialLinks;return(0,i.tZ)("footer",{className:"footer"},(0,i.tZ)(i.W2,{className:"footer-inner"},(0,i.tZ)("div",{className:"copyright",sx:{color:"gray"}},"© 2019, Built with Gatsby"),(0,i.tZ)(i.RQ.ul,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",listStyle:"none"},className:"social-links"},e.map((function(t,e){return(0,i.tZ)("li",{key:e.toString()},(0,i.tZ)(i.RQ.a,{sx:{variant:"links.primary"},as:a.Z,to:t.link},t.text))})))))};T.defaultProps={socialLinks:[]};var p=T,d=function(t){var e,n=t.children,a=t.cssClass,c=(0,i.B7)().theme,u=(0,r.K2)("3754304596").site.siteMetadata;return(0,o.tZ)(i.Ar,{className:a},(0,o.tZ)(o.xB,{styles:(0,o.iv)((e=c,"\n    ::selection {\n        background: "+e.colors.primary+";\n        color: #ffffff;\n    }\n    .gatsby-highlight-code-line {\n        background-color: #3a3f46;\n        display: block;\n        margin-right: -1.4125em;\n        margin-left: -1.4125em;\n        padding-right: 1em;\n        padding-left: 0.75em;\n        border-left: 0.5em solid "+e.colors.primary+';\n    }\n    :not(pre) > code[class*="language-"] {\n        color: '+e.colors.primary+";\n    }\n    a.anchor-header{\n        color: "+e.colors.primary+";\n    }"),"")}),(0,o.tZ)(f,{siteTitle:u.title,navLinks:u.navLinks,themeConfig:u.themeConfig}),(0,o.tZ)(i.or,null,(0,o.tZ)(i.W2,null,n)),(0,o.tZ)(p,{socialLinks:u.socialLinks}))};d.defaultProps={cssClass:""};var E=d},2623:function(t,e,n){"use strict";var r=n(2122),o=n(9756),i=(n(7294),n(5444)),a=n(4836);e.Z=function(t){var e=t.children,n=t.to,c=t.activeClassName,u=t.partiallyActive,s=(0,o.Z)(t,["children","to","activeClassName","partiallyActive"]);return/^\/(?!\/)/.test(n)?(0,a.tZ)(i.rU,(0,r.Z)({to:n,activeClassName:c,partiallyActive:u},s),e):(0,a.tZ)("a",(0,r.Z)({href:n},s),e)}},4617:function(t,e,n){"use strict";n(7294);var r=n(7701),o=n(5444),i=n(4836);function a(t){var e=t.description,n=t.lang,a=t.meta,c=t.keywords,u=t.title,s=(0,o.K2)("63159454").site.siteMetadata,l=e||s.description;return(0,i.tZ)(r.ZP,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s - "+s.title,meta:[{name:"description",content:l},{property:"og:title",content:u},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.author},{name:"twitter:title",content:u},{name:"twitter:description",content:l}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(a)})}a.defaultProps={lang:"en",meta:[],keywords:[]},e.Z=a},3179:function(t,e,n){"use strict";n(7294);var r=n(8415),o=n(8173);n(4836);e.Z=function(){var t=(0,r.If)(),e=t[0],n=t[1],i="dark"===e?"active":"",a=(0,r.B7)().theme;return(0,r.tZ)("button",{sx:{background:(0,o.hexToRgba)(a.colors.primary,.2),"::after":{background:a.colors.primary}},"aria-label":"switch theme button",className:"button-switcher "+i,onClick:function(){n("light"===e?"dark":"light")}})}},9183:function(t,e,n){"use strict";n.r(e)}}]);
//# sourceMappingURL=cdaedb9a337a430c68a60a94f37ee3c8c6064155-354a5a817715363a1779.js.map