!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){/**
 * @license
 * Copyright (c) 2014, Amazon.com
 * APE SafeFrame v1.32 -- 2018-08-30T12:35:32-0700
*/
!function(b,c){function d(){function a(a,b,c,d){V[a]=V[a]||{},V[a][c]=k.safeFunctionWrapper(d,n,"Error within ad handler "+c+": "+b)}function d(a,b){X[a]={slotId:b,placementDivId:"ape_"+b+"_placement",iframeId:"ape_"+b+"_iframe"}}function e(a,b){var c=!0;for(var d in W){var e=W[d].iframe?W[d].iframe.contentWindow:null;if(e&&!W[d].alreadyRendered){c=!1;var f=W[d].slot;l.findPercentInView(f)>=a?W[d].timeout||(W[d].timeout=setTimeout(p(d),b)):W[d].timeout&&(clearTimeout(W[d].timeout),W[d].timeout=null)}}c&&(k.removeWindowListener("scroll",$),k.removeWindowListener("resize",$))}function f(){return e(l.PERCENT_VIEWABLE,l.DURATION_VIEWABLE)}function p(a){return function(){var b={key:"readyToRender",data:a};m.sendMessageToAd(a,"customMessage",b),W[a].timeout=null,W[a].alreadyRendered=!0}}function G(){var a={};try{for(var c=b.location.search.substring(1),d=c.split("&"),e=0;e<d.length;e++){var f=d[e].split("="),g=f[0];f.length>1&&0===g.indexOf("sf-")&&(a[g]=f[1])}}catch(h){n("Error parsing query parameters",h)}return a}function H(a){return function(){y(a.arid,a.size.width,a.size.height,a.maxAdWidth,m,X)}}function I(a){try{var b,d=JSON.stringify(a),e=c.getElementById(X[a.arid].placementDivId),f={};if(/MSIE (6|7|8)/.test(navigator.userAgent))try{b=c.createElement("<iframe name='"+d+"'>")}catch(g){b=v(d)}else b=v(d);b.id=X[a.arid].iframeId,b.src=a.safeFrameSrc,b.scrolling="no",b.height=a.size.height||"250px",b.width=a.size.width||"300px",b.className=a.iframeClass||"",b.setAttribute("frameborder","0"),b.setAttribute("marginheight","0"),b.setAttribute("marginwidth","0"),b.setAttribute("scrolling","no"),b.setAttribute("allowtransparency","true"),b.setAttribute("allowfullscreen",""),b.setAttribute("mozallowfullscreen",""),b.setAttribute("webkitallowfullscreen",""),b.setAttribute(R,a.arid),b.style.cssText=a.iframeExtraStyle||"",a.iframeSandbox&&(b.sandbox=a.iframeSandbox,f.sandbox=b.sandbox),b.onload=function(){h.checkCache(a.DAsfUrl,a.safeFrameSrc,a.slot,a.placementId,r)},e.appendChild(b),q("cf",a.slot,a.placementId),r(a.slot,a.placementId,U.IFRAME_CREATED,1),m.adMap[a.arid]={slot:e,iframe:b,options:a},F.adbMap[a.arid]={slot:a.slot,adBlockerIsDisabled:void 0,adImgLoaded:void 0,adImpressionsFired:void 0,adViewabilityFired:void 0,placementId:a.placementId},f.id=b.id,f.src=b.src,f.scrolling=b.scrolling,f.height=b.height,f.width=b.width,f.className=b.className,f.styleCssText=b.style.cssText,Y[a.arid].logTrace("createSafeFrame",f)}catch(i){n("Error creating safeFrame",i),Y[a.arid]&&Y[a.arid].logTrace("createSafeFrame",{error:{message:"errorCreatingSafeFrame",ex:i}})}}function J(a,b){if(!a)return!1;var d=c.getElementById(a);if(d&&!d.innerHTML){var e=d.getAttribute(R);if(e&&e===b.arid)return!0}return!1}function K(a){var b=function(){var b={};b.callbackOccurred=!0,b.loadAfter=a.loadAfter,Y[a.arid].logTrace("pageCallBack",b),r(a.slot,a.placementId,U.CALLBACK,1);var c=X[a.arid].placementDivId;J(c,a)&&I(a)};return k.safeFunctionWrapper(b,n,"Error in callback to create Safeframe.")}function L(a,d){var e={};if(e.isFeedbackLoaded=a.isFeedbackLoaded,a&&!a.isFeedbackLoaded&&d.adFeedbackInfo.boolFeedback){a.isFeedbackLoaded=!0;var f=a.parentNode,h=d.placementId,i=d.adFeedbackInfo.slugText,k=d.adFeedbackInfo.endPoint,l=d.advertisementStyle,m=d.feedbackDivStyle,n=g.FEEDBACK_COUNTERS,o={adPlacementMetaData:d.adPlacementMetaData,adCreativeMetaData:d.adCreativeMetaData};e.slot=f,e.placementId=h,e.slugText=i,e.endPoint=k,e.advertisementStyle=l,e.feedbackDivStyle=m,e.adFeedbackParams=o;var p=function(a,b){if(a&&b)for(var c in b)a.style[c]=b[c];return a},q=function(a,b,d,e){var f=c.createElement(a);for(var g in b)f.setAttribute(g,b[g]);return p(f,d),e&&e.insertBefore(f,null),f},s=f.getElementsByTagName("div")[0]||q("div",{id:f.id+"_Feedback"},m,f),t=s.getElementsByTagName("script")[0]||q("script",0,null,s),u=function(){Y[d.arid].logTrace("adFeedBack",{renderFallbackAdvertisement:!0}),r(d.slot,h,n.FALLBACK,1);var a=s.getElementsByTagName("div")[0]||q("div",0,l,s);a.innerHTML=i},v=function(a){return encodeURIComponent(JSON.stringify(a))},w=function(a){var b={};if(b.feedbackResponseStarted=!0,4===a.readyState){if(200===a.status)try{var c=a.responseText,e=JSON.parse(c);b.response=e,e&&"ok"===e.status?("html"in e&&e.html&&(s.innerHTML=e.html),"script"in e&&e.script&&(t.innerHTML=e.script),r(d.slot,h,n.SUCCESS,1),b.feedBackResponseReturned=!0):u()}catch(f){u()}else b.feedBackResponseReturned=!1,u();Y[d.arid].logTrace("adFeedBack",{adFeedBackResponse:b})}},x=k&&k.length?b.location.protocol+"//"+b.location.hostname+k+"?pl="+v(o):k;e.requestUrl=x,Y[d.arid].logTrace("adFeedBack",{adFeedbackRequest:e}),x?(r(d.slot,h,n.REQUEST,1),j.sendAjaxRequest(x,"GET",null,null,w,u)):u()}}if(b.DAsf)return void b.DAsf.loadAds();b.DAsf={version:"1.32"},r(null,null,g.SF_VERSION_COUNTERS.VERSION+":"+b.DAsf.version,1);var M="text/x-dacx-safeframe",N=A(),O=N+"/images/G/01/ape/sf/desktop/sf-1.32._V486150752_.html",P=N+"/images/G/01/ape/sf/whitelisted/desktop/sf-1.32._V486150755_.html",Q={1:"Enabled",0:"NotEnabled","-1":"Unknown"},R="data-arid",S={POST_MESSAGE_UNSUPPORTED:"d16g_postMessageUnsupported",POST_MESSAGE_SUPPORTED:"d16g_postMessageSupported"},T=g.ABP_STATUS_COUNTERS,U=g.AD_LOAD_COUNTERS,V={},W={},X={},Y={},Z=null,$=null;$=k.safeFunctionWrapper(k.debounce(f,100)),m.supportedCommands={sendAdBarTrace:function(a,b){a.options.arid in Y&&Y[a.options.arid].logTrace(b.field,b.traceInfo)},resizeSafeFrameAd:function(a,b){k.addWindowListener("resize",V[a.options.arid].defaultResizeSafeFrameHandler),y(a.options.arid,a.options.size.width,a.options.size.height,a.options.maxAdWidth,m,X)},changeSize:function(a,b){var c=a.options.allowedSizes;if(E(b,c,C))a.iframe.height=b.height,a.iframe.width=b.width;else{var d="Size is not whitelisted: "+b.width+" x "+b.height+o(a.options.arid);n(d)}},collapseSlot:function(a,b){x(X[a.options.arid].placementDivId),"nav-sitewide-msg"===a.options.slotName&&z("amznJQ.available:navbarJSLoaded",function(){"undefined"!=typeof parent.navbar&&"function"==typeof parent.navbar.unHideSWM&&parent.navbar.unHideSWM()})},embedScript:function(a,b){var d=a.options.allowedDomains;if(E(b.src,d,B))a.slot=c.getElementById(X[a.options.arid].placementDivId),"undefined"!=typeof a.slot&&D(b.src,a.slot,b.charset);else{var e="Domain is not whitelisted: "+b.src+o(a.options.arid);n(e)}},logError:function(a,b){n(b.message+o(a.options.arid)+": "+a.options.slot,b.error)},sendMetrics:function(a,b){q(b.metric,a.options.slot,a.options.placementId,b.metricMsg)},countMetric:function(a,b){r(a.options.slot,a.options.placementId,b.metricMsg,b.value)},addCsmTag:function(a,b){s(b.tag,a.options.slot,a.options.placementId,b.msg)},fireViewableLatencyMetrics:function(a,b){t(a.options.arid,a.options.slot,a.options.placementId)},customMessage:function(a,b){m.customMessage(b.key,b.body)},notifyWhenViewable:function(a,b){W[a.options.arid]||(a.rendered=!1,W[a.options.arid]=a),$(),k.addWindowListener("scroll",$),k.addWindowListener("resize",$)},enableViewabilityTracker:function(b){m.updateViewability(b.options.arid);var d=k.throttle(m.updateViewability,20);a(b.options.arid,b.options.slot,"viewabilityTracker",function(){d(b.options.arid)}),k.addWindowListener("scroll",V[b.options.arid].viewabilityTracker),k.addWindowListener("resize",V[b.options.arid].viewabilityTracker),k.addListener(c,"visibilitychange",V[b.options.arid].viewabilityTracker)},enableNoInventoryViewabilityTrackerAndInvokeFallback:function(b){m.takeSnapshotOfSlotPosition(b.options.arid),m.updateNoInventoryViewability(b.options.arid),m.sendMessageToAd(b.options.arid,"handleFallbackBehavior",{});var d=k.throttle(m.updateNoInventoryViewability,20);a(b.options.arid,b.options.slot,"noInventoryViewabilityTracker",function(){d(b.options.arid)}),k.addWindowListener("scroll",V[b.options.arid].noInventoryViewabilityTracker),k.addWindowListener("resize",V[b.options.arid].noInventoryViewabilityTracker),k.addListener(c,"visibilitychange",V[b.options.arid].noInventoryViewabilityTracker)},loadAdBlockerDetectorScript:function(a,b){var d=A()+"/images/G/01/ads/advertising/ads._TTH_.js?cachebust="+Math.ceil(99989999*Math.random()+1e4),e=k.safeFunctionWrapper(function(){F.updateAdBlockerIsDisabled(a.options.arid,!1),m.sendMessageToAd(a.options.arid,"forceFallback",{})}),f=function(){F.updateAdBlockerIsDisabled(a.options.arid,!0)},g=k.createScript(d,"text/javascript","APE_adblockerdetector",e,f),h=c.getElementById(X[a.options.arid].placementDivId);h?h.appendChild(g):c.body.appendChild(g)},updateAdImpressionsFired:function(a,b){F.updateAdImpressionsFired(a.options.arid,b.isImpFired)},updateAdViewabilityFired:function(a,b){F.updateAdViewabilityFired(a.options.arid,b.isViewed)},updateNoInventoryViewabilityFired:function(a,b){F.updateNoInventoryViewabilityFired(a.options.arid,b.isViewed)},updateAdImgLoaded:function(a,b){F.updateAdImgLoaded(a.options.arid,b.isLoaded)},loadAdFeedback:function(a,b){var c=m.adMap[a.options.arid].iframe;a.options.adCreativeMetaData=b,L(c,a.options)},updateNoInventoryImpressionFired:function(a,b){F.updateNoInventoryImpressionFired(a.options.arid,b.isNoInventoryImpFired)},safeFrameReady:function(a){},requestVideoAutoplay:function(a,b){if(Z===a.options.arid&&m.sendCustomMessageToAd(a.options.arid,"videoAutoplayResponse",!0),null===Z&&null!==a.options.arid){var d=c.getElementsByTagName("video"),e=d&&0===d.length;Z=e?a.options.arid:null,m.sendCustomMessageToAd(a.options.arid,"videoAutoplayResponse",e)}},releaseVideoAutoplay:function(a,b){Z=null,m.sendCustomMessageToAd(a.options.arid,"videoAutoplayReleased")}},k.addWindowListener("message",m.receiveMessage),b.DAsf.registerCustomMessageListener=m.registerCustomMessageListener,b.DAsf.sendCustomMessage=m.sendCustomMessage,b.DAsf.loadAds=function(){var e=0,f=null,g=[];if("function"!=typeof c.getElementsByClassName){var h=c.getElementsByTagName("div"),j=c.getElementsByTagName("script"),k=0;for(k=0;k<h.length;k++)g[k]=h[k];for(k=0;k<j.length;k++)g[k+h.length]=j[k]}else g=c.getElementsByClassName(M);for(0===g.length&&(g=c.getElementsByTagName("script"));f=g[e++];)if(("DIV"===f.tagName&&u(f,M)||f.getAttribute("type")===M)&&!f.getAttribute(R)){var l=f.getAttribute("data-ad-details")||f.text||f.innerHTML||f.innerText;try{l=JSON.parse(l),l.arid=l.arid||Math.random().toString(16).slice(2),Y[l.arid]=new i.Tracer(l.traceId,b[l.slotName]?b[l.slotName].adStartTime||0:0),Y[l.arid].logTrace("safeFrameInput",l);var m={};m.caches=b.caches?b.caches:null,m.plugins=c.plugins?c.plugins:null,m.cookies=c.cookie?c.cookie:null,m.userAgents=navigator.userAgent?navigator.userAgent:null,Y[l.arid].logTrace("browserData",m),f.setAttribute(R,l.arid),l.hostDomain=location.protocol+"//"+location.host,l.allowedSizes="object"==typeof l.allowedSizes&&l.allowedSizes.length>=0?l.allowedSizes.concat(l.size):[l.size];var o="d3l3lkinz3f56t.cloudfront.net,g-ecx.images-amazon.com,z-ecx.images-amazon.com,images-na.ssl-images-amazon.com,g-ec4.images-amazon.com,images-cn.ssl-images-amazon.com".split(",");if(l.allowedDomains="object"==typeof l.allowedDomains&&l.allowedDomains.length>=0?l.allowedDomains.concat(o):o,l.productAdsUrl=b.paSearchTowerAdsURL||b.paCusRevAllURL,l.parentLocation=location.origin||location.protocol+location.hostname,l.queryParams=G(),l.aPageStart=b.aPageStart,l.adStartTime=b[l.slotName]?b[l.slotName].adStartTime||0:0,a(l.arid,l.slot,"defaultResizeSafeFrameHandler",H(l)),d(l.arid,l.slot),l.forcePunt){s("forcePunt",l.slot,l.placementId),x(X[l.arid].placementDivId);continue}if(l.safeFrameSrc="true"===l.abpAcceptable?P:O,l.abpStatus){s("ABPStatus"+Q[l.abpStatus],l.slot);for(var p in Q)r(l.slot,l.placementId,T[p],l.abpStatus===p?1:0)}q("af",l.slot,l.placementId),r(l.slot,l.placementId,U.START,1);var t={};if(t.hostDomain=l.hostDomain,t.allowedSizes=l.allowedSizes,t.allowedDomains=l.allowedDomains,t.productAdsUrl=l.productAdsUrl,t.parentLocation=l.parentLocation,t.queryParams=l.queryParams,t.aPageStart=l.aPageStart,t.adStartTime=l.adStartTime,t.safeFrameSrc=l.safeFrameSrc,t.abpStatus=l.abpStatus,"function"!=typeof b.postMessage){w(S.POST_MESSAGE_UNSUPPORTED,1),x(X[l.arid].placementDivId),t.postMessage="postMessageNotSupported";continue}w(S.POST_MESSAGE_SUPPORTED,1),z(l.loadAfter,K(l),0,f),t.postMessage="postMessageSupported",t.loadAfter=l.loadAfter,Y[l.arid].logTrace("additionalInitilizationParams",t)}catch(v){l=null,n("Error parsing sf tag",v)}}},b.DAsf.loadAds()}var e=a("./components/msgHandler"),f=a("./components/adBlockerHandler"),g=a("./components/counters"),h=a("./components/cacheChecker"),i=a("./components/adBarTracer"),j=a("./components/ajaxRequest"),k=e.util,l=e.viewability,m=e.messenger,n=e.logError,o=m.appendErrorDetails,p=e.loadScript,q=e.sendCsmMetric,r=e.sendCsmCounter,s=e.addCsmTag,t=e.fireViewableLatencyMetrics,u=e.hasClass,v=e.createIframeWithName,w=e.logCounter,x=e.collapseSlot,y=e.resizeSafeFrameAd,z=e.delayLoad,A=e.getMediaCentralOrigin,B=e.scriptValidator,C=e.sizeValidator,D=e.appendJsScript,E=e.checkAgainstWhitelist,F=new f.AdBlockerCSMMediator(r),G=function(){"undefined"==typeof JSON?p("https://images-na.ssl-images-amazon.com/images/G/01/da/js/json3.min._V308851628_.js",d):d()};k.safeFunctionWrapper(G,n,"Error initializing safeFrame")()}(window,document)},{"./components/adBarTracer":2,"./components/adBlockerHandler":3,"./components/ajaxRequest":4,"./components/cacheChecker":5,"./components/counters":6,"./components/msgHandler":7}],2:[function(a,b,c){function d(a,b){this.traceId=a,this.adStartTime=b,this.storedTrace={};var c=3e3;return this.logTrace=function(a,b){if("undefined"!=typeof this.traceId){var c,d=(new Date).getTime();this.storedTrace.hasOwnProperty(a)||(this.storedTrace[a]=[]);var e=b===Object(b);e?c=Object.assign({},b):(c='{ "'+a+'":"'+b+'"}',c=JSON.parse(c)),c.timeStamp=d,c.timeSinceAdStart=d-this.adStartTime,this.storedTrace[a].push(c)}},this.sendTrace=function(){var a=function(){console.log("failed to send request to /gp/adbarplus")},b=function(b){4===b.readyState&&200!==b.status&&a()},c=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0};if(!c(this.storedTrace)){var d="/gp/adbarplus?traceId="+this.traceId+"&systemName=browser";e.sendAjaxRequest(d,"POST",JSON.stringify(this.storedTrace),{"Content-Type":"application/x-www-form-urlencoded"},b,a);for(var f in this.storedTrace)this.storedTrace.hasOwnProperty(f)&&delete this.storedTrace[f]}},this.bindSendTraceToPageOnLoad=function(){var a=function(a,b){return function(){return a.apply(b)}},b=function(){this.sendTrace()},d=function(){this.sendTrace(),window.setInterval(a(b,this),c)};"loading"!==document.readyState?a(d,this)():window.addEventListener?window.addEventListener("load",a(d,this)):document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&a(d,this)()})},"undefined"!=typeof a&&this.bindSendTraceToPageOnLoad(),{traceId:this.traceId,adStartTime:this.adStartTime,storedTrace:this.storedTrace,allData:this.allData,logTrace:this.logTrace,sendTrace:this.sendTrace}}var e=a("./ajaxRequest");b.exports.Tracer=d},{"./ajaxRequest":4}],3:[function(a,b,c){function d(a,b){var c=this;this.adbMap=b||{};var d=function(b,d,e){var f=c.adbMap;f[b].adBlockerIsDisabled!==!0&&void 0!==f[b].adBlockerIsDisabled&&f[b].adBlockerIsDisabled===!1&&(d===!1?a(f[b].slot,f[b].placementId,"adblocker:blocked:".concat(e),1):d===!0&&a(f[b].slot,f[b].placementId,"adblocker:notblocked:".concat(e),1))};this.updateAdBlockerIsDisabled=function(b,e){var f=c.adbMap;f[b]&&(f[b].adBlockerIsDisabled=e,f[b].adBlockerIsDisabled?a(f[b].slot,f[b].placementId,"adblockernotdetected",1):a(f[b].slot,f[b].placementId,"adblockerdetected",1),d(b,f[b].adImgLoaded,"adimg"),d(b,f[b].adImpressionsFired,"adimpressions"),d(b,f[b].adViewabilityFired,"adviewability"))},this.updateAdImgLoaded=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].adImgLoaded&&(e[a].adImgLoaded=b,d(a,e[a].adImgLoaded,"adimg"))},this.updateAdImpressionsFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].adImpressionsFired&&(e[a].adImpressionsFired=b,d(a,e[a].adImpressionsFired,"adimpressions"))},this.updateAdViewabilityFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].adViewabilityFired&&(e[a].adViewabilityFired=b,d(a,e[a].adViewabilityFired,"adviewability"))},this.updateNoInventoryViewabilityFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].noInventoryViewabilityFired&&(e[a].noInventoryViewabilityFired=b,d(a,e[a].noInventoryViewabilityFired,"noInventoryViewability"))},this.updateNoInventoryImpressionFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].noInventoryImpressionsFired&&(e[a].noInventoryImpressionsFired=b,d(a,e[a].noInventoryImpressionsFired,"noInventoryImpressions"))}}b.exports.AdBlockerCSMMediator=d},{}],4:[function(a,b,c){function d(a,b,c,d,e,f){try{var g=null;if(window.XMLHttpRequest?g=new XMLHttpRequest:f(),g){if(g.onreadystatechange=function(){e(g)},g.open(b,a,!0),null!==d)for(var h in d)g.setRequestHeader(h,d[h]);g.send(c)}else f()}catch(i){f()}}b.exports.sendAjaxRequest=d},{}],5:[function(a,b,c){function d(a,b,c,d,f){function g(a){f(c,d,a,1)}function h(a,b){if(a)for(var c=0;c<k.length;c++){var d=k[c],e=d.name&&-1!==d.name.indexOf(a);if(e)return void l(d,b)}}var i=e.CACHE_COUNTERS,j=20;if("undefined"!=typeof performance&&"undefined"!=typeof performance.getEntriesByType){var k=performance.getEntriesByType("resource");if("undefined"!=typeof k&&Array.isArray(k)&&!(k.length<1)&&"undefined"!=typeof k[0].duration){var l=function(){return"undefined"!=typeof k[0].transferSize?function(a,b){g(0===a.transferSize?b+"cached":b+"uncached")}:function(a,b){g(a.duration<j?b+"fastload":b+"slowload")}}();h(a,i.SF_LIBRARY),h(b,i.SF_HTML)}}}var e=a("./counters");b.exports.checkCache=d},{"./counters":6}],6:[function(a,b,c){var d={START:"adload:start",CALLBACK:"adload:delayloadcallback",IFRAME_CREATED:"adload:iframecreated"},e={SF_LIBRARY:"cache:sflibrary:",SF_HTML:"cache:sfhtml:"},f={REQUEST:"adfeedback:request",SUCCESS:"adfeedback:success",FALLBACK:"adfeedback:fallback"},g={API:"messenger:"},h={1:"abpstatus:enabled",0:"abpstatus:notenabled","-1":"abpstatus:unknown"},i={VERSION:"sfversion"};b.exports.AD_LOAD_COUNTERS=d,b.exports.CACHE_COUNTERS=e,b.exports.FEEDBACK_COUNTERS=f,b.exports.MESSENGER_COUNTERS=g,b.exports.ABP_STATUS_COUNTERS=h,b.exports.SF_VERSION_COUNTERS=i},{}],7:[function(a,b,c){function d(a,b){var c=b||new Error(a);o("",null,"safeFrameError",1),window.sfLogErrors&&(window.ueLogError?window.ueLogError(c,{logLevel:A.ERROR,attribution:"APE-safeframe",message:a+" "}):"undefined"!=typeof console&&console.error&&console.error(a,c))}function e(){var a=window.location.host.match(/^.*\.([^.:\/]*)/),b=null;if(a&&a.length>1&&(b=a[1]),!/s/.test(location.protocol))return"cn"===b?"http://g-ec4.images-amazon.com":"http://z-ecx.images-amazon.com";var c="na";return/^(com|ca|mx)$/.test(b)?c="na":/^(uk|de|fr|it|es|in)$/.test(b)?c="eu":/^(jp|au)$/.test(b)?c="fe":/^(cn)$/.test(b)&&(c="cn"),"https://images-"+c+".ssl-images-amazon.com"}function f(a){return a.replace(/^.{1,5}:\/\/|^\/\//,"")}function g(a,b){var c=document.createElement("script");c.src=a,c.setAttribute("crossorigin","anonymous"),c.onload=c.onreadystatechange=function(){c.readyState&&"loaded"!==c.readyState&&"complete"!==c.readyState||(c.onload=c.onreadystatechange=null,b&&"function"==typeof b&&b())},c.onerror=function(a){return d("Error loading script",a),!1},(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(c)}function h(a,b,c){var d=document.createElement("script");d.charset=c||"utf-8",d.src=a,b.appendChild(d)}function i(a,b){var c=/^((?:https?:)?\/\/)?([\w\-\.]+(?::[0-9]+)?)\/?(.*)$/,d=a.match(c)[2];return d===b}function j(a,b){return a.height===b.height&&a.width===b.width}function k(a,b,c){if(!b||"object"!=typeof b)return!1;for(var d=0,e=b.length;e>d;d++)if(c(a,b[d]))return!0;return!1}function l(a,b){return a&&a.options&&(a.options.msfInlined?!0:f(b.origin)===f(B))}function m(a,b,c){var e=this;this.adMap=a||{},this.supportedCommands=b||{},this.msgListeners=c||{},this.MESSENGER_COUNTERS=z.MESSENGER_COUNTERS;var f=function(a){var b=e.adMap,c=b[a].options;if(b==={}||c==={})return null;var d="ape_"+c.slot+"_iframe";return b[a].iframe&&(b[a].iframe=b[a].iframe&&b[a].iframe.innerHTML?b[a].iframe:document.getElementById(d)),b[a].iframe};this.sendMessageToAd=function(a,b,c){var d=f(a),e=d?d.contentWindow:null;if(e){var g={command:b,data:c};g=JSON.stringify(g),e.postMessage(g,"*")}},this.receiveMessage=function(a){var b=e.adMap,c=e.supportedCommands;if(b!=={}){var f,g,h;try{if(a.data&&a.data.message&&/.*Mash.*/i.test(a.data.message.id))throw"Received Mash message";f=JSON.parse(a.data),g=b[f.arid]}catch(i){return}try{var j=l(g,a);if(!j||"object"!=typeof f.data)throw"Invalid Message: "+JSON.stringify(a.data);var k=c[f.command];k&&(o(null,null,e.MESSENGER_COUNTERS.API+f.command,1),o(g.options.slot,g.options.placementId,e.MESSENGER_COUNTERS.API+f.command,1),c.sendAdBarTrace(g,{field:"apiCalls",traceInfo:{command:f.command,messageData:f.data}}),g.options.debug&&"undefined"!=typeof console&&console.log(a),k(g,f.data))}catch(i){h="Problem with message: "+a.data,"undefined"!=typeof f&&(h+=e.appendErrorDetails(f.arid)),d(h,i)}}},this.appendErrorDetails=function(a){var b=e.adMap;if(b==={})return"";var c="";if("undefined"!=typeof b[a]){var d=b[a].options;"undefined"!=typeof d.aanResponse&&(c=" Ad Details: "+JSON.stringify(d.aanResponse))}return c},this.customMessage=function(a,b){var c=e.msgListeners;if(c[a])try{c[a](b)}catch(f){d("Custom Message Error",f)}else d("Unrecognized custom message key: "+a)},this.registerCustomMessageListener=function(a,b,c){var f=!1,g=e.msgListeners;try{if(!g[a]||"function"!=typeof g[a]||c)g[a]=b,f=!0;else{var h=new Error("Custom message listener already exists for key: "+a);d("Duplicate Key",h)}}catch(i){d("Error registering custom message listener",i)}return f},this.sendCustomMessage=function(a,b){var c=e.adMap,d={key:a,data:b};for(var f in c)e.sendMessageToAd(f,"customMessage",d)},this.sendCustomMessageToAd=function(a,b,c){var d={key:b,data:c};e.sendMessageToAd(a,"customMessage",d)},this.takeSnapshotOfSlotPosition=function(a){var b=e.adMap,c=b&&b[a]&&b[a].options;if(b&&b!=={}&&c&&c!=={}){var d=f(a);e.adMap[a].options.slotSnapshot=x.takeSnapshotOfSlotPosition(d)}},this.updateViewability=function(a){var b=e.adMap,c=b&&b[a]&&b[a].options;if(b&&b!=={}&&c&&c!=={}){var d=f(a),g=b[a].options.viewabilityStandards,h=x.getViewableInfo(d);null!==h&&(h.viewabilityStandards=g,e.sendMessageToAd(a,"updateViewability",h))}},this.updateNoInventoryViewability=function(a){var b=e.adMap,c=b&&b[a]&&b[a].options,d=c&&c.slotSnapshot;if(b&&b!=={}&&c&&c!=={}&&d){var f=c.viewabilityStandards,g=x.getNoInventoryViewabilityData(d);null!==g&&(g.viewabilityStandards=f,e.sendMessageToAd(a,"updateNoInventoryViewability",g))}}}function n(a,b,c,d){var e=C[a],f=d?d+":":"";"function"==typeof window[e]&&(window[e](a,"adplacements:"+f+b.replace(/_/g,":"),{wb:1}),c&&window[e](a,"adplacements:"+f+c,{wb:1}))}function o(a,b,c,d){var e=window.ue&&"function"==typeof window.ue.count;if(e){var f="adplacements:"+c;if(a&&(f+=":"+a.replace(/_/g,":")),window.ue.count(f,d),b){var g=c&&b?c+":":c,h="adplacements:"+g+b;window.ue.count(h,d)}}}function p(a,b,c,d){if(window.ue&&window.ue.tag){var e=a+":"+b.replace(/_/g,":")+(d?":"+d:"");if(window.ue.tag(e),c){var f=a+":"+c+(d?":"+d:"");window.ue.tag(f)}}}function q(a,b,c){window.apeViewableLatencyTrackers&&window.apeViewableLatencyTrackers[a]&&window.apeViewableLatencyTrackers[a].valid&&(window.apeViewableLatencyTrackers[a].loaded=!0,window.apeViewableLatencyTrackers[a].viewed&&(n("ld",b,c,"viewablelatency"),o(b,c,"htmlviewed:loaded",1)))}function r(a,b){var c=new RegExp("(^|\\s)"+b+"(\\s|$)"),d=a.className;return d&&c.test(d)}function s(a){var b=document.createElement("iframe");return b.name=a,b}function t(a,b){var c=window.ue&&"function"==typeof window.ue.count;c&&window.ue.count(a,b)}function u(a){var b=document.getElementById(a);"undefined"!=typeof b&&b&&(b.style.display="none")}function v(a,b,c,e,f,g){try{var h=document.getElementById(g[a].placementDivId),i=document.getElementById(g[a].wrapperDivId)||h,j=document.getElementById(g[a].iframeId);if(null===i||null===h||null===j)return;var k=c,l=b,m=function(a){k=Math.round(a*c/b),l=Math.round(a)},n=0===i.offsetWidth?window.innerWidth:i.offsetWidth;m(e&&window.innerHeight<window.innerWidth?e:n),f&&f.adMap&&f.adMap[a]&&f.adMap[a].options&&f.adMap[a].options.slotSnapshot&&(f.adMap[a].options.slotSnapshot.adHeight=k,f.adMap[a].options.slotSnapshot.adWidth=l),k+="px",l+="px",j.style.height=k,j.style.width=l;var o={width:l,height:k};i!==h&&(h.style.height=k,f.sendMessageToAd(a,"resizeCreativeWrapper",o))}catch(p){d("Error resizing ad: "+g[a].slotId,p)}}function w(a,b,c,d){var e="undefined"!=typeof P,f="undefined"!=typeof amznJQ,g=0!==c?function(){setTimeout(b,c)}:b;if("windowOnLoad"===a)"complete"===document.readyState?g():y.addWindowListener("load",g);else if("spATFEvent"===a)e?P.when("search-page-utilities").execute(function(a){a.afterEvent("spATFEvent",g)}):f?amznJQ.available("search-js-general",function(){window.SPUtils.afterEvent("spATFEvent",g)}):g();else if("criticalFeature"===a)e?P.when("cf").execute(g):f?amznJQ.onCompletion("amznJQ.criticalFeature",g):g();else if("r2OnLoad"===a)e?P.when("r2Loaded").execute(g):f?amznJQ.onReady("r2Loaded",g):g();else if(a.match("[^:]+:.+")){var h=a.split(":");if(h.length>1){var i=h[0].split("."),j=h[1],k=h.length>2?h[2]:j;e?P.when(k,"A").execute(g):f&&i.length>1?amznJQ[i[1]](j,g):g()}else g()}else if(a.match(/^\d{1,4}px$/g)){var l=!1,m=function(a,b,c){c&&x.findDistanceInView(c)<=parseInt(a,10)&&(b(),l=!0)},n=y.safeFunctionWrapper(y.throttle(function(){m(a,g,d),l&&(y.removeWindowListener("scroll",n),y.removeWindowListener("resize",n))},20));y.addWindowListener("scroll",n),y.addWindowListener("resize",n)}else g()}var x=a("./viewability"),y=a("./util"),z=a("./counters"),A={ERROR:"ERROR",WARN:"WARN",FATAL:"FATAL"},B=e(),C={wb:"ues",bb:"uet",af:"uet",cf:"uet",be:"uet",ld:"uex"};b.exports.util=y,b.exports.viewability=x,b.exports.messenger=new m,b.exports.logError=d,b.exports.SF_DOMAIN=B,b.exports.loadScript=g,b.exports.sendCsmMetric=n,b.exports.sendCsmCounter=o,b.exports.addCsmTag=p,b.exports.fireViewableLatencyMetrics=q,b.exports.hasClass=r,b.exports.createIframeWithName=s,b.exports.logCounter=t,b.exports.collapseSlot=u,b.exports.resizeSafeFrameAd=v,b.exports.delayLoad=w,b.exports.getMediaCentralOrigin=e,b.exports.appendJsScript=h,b.exports.scriptValidator=i,b.exports.sizeValidator=j,b.exports.checkAgainstWhitelist=k},{"./counters":6,"./util":8,"./viewability":9}],8:[function(a,b,c){function d(a){for(var b="",c=0,d=0,e=0,f=0;c<a.length;)d=a.charCodeAt(c),128>d?(b+=String.fromCharCode(d),c++):d>191&&224>d?(e=a.charCodeAt(c+1),b+=String.fromCharCode((31&d)<<6|63&e),c+=2):(e=a.charCodeAt(c+1),f=a.charCodeAt(c+2),b+=String.fromCharCode((15&d)<<12|(63&e)<<6|63&f),c+=3);return b}function e(a){var b,c,e,f,g,h,i,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",k="",l=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<a.length;)f=j.indexOf(a.charAt(l++)),g=j.indexOf(a.charAt(l++)),h=j.indexOf(a.charAt(l++)),i=j.indexOf(a.charAt(l++)),b=f<<2|g>>4,c=(15&g)<<4|h>>2,e=(3&h)<<6|i,k+=String.fromCharCode(b),64!=h&&(k+=String.fromCharCode(c)),64!=i&&(k+=String.fromCharCode(e));return k=d(k)}function f(){return window.P&&window.P.AUI_BUILD_DATE}/*
    @license
    Underscore.js 1.8.3
    http://underscorejs.org
    (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    Underscore may be freely distributed under the MIT license.
*/
b.exports.debounce=function(a,b,c){var d,e,f,h,i,j=function(){var k=g()-h;b>k&&k>=0?d=setTimeout(j,b-k):(d=null,c||(i=a.apply(f,e),d||(f=e=null)))};return function(){f=this,e=arguments,h=g();var k=c&&!d;return d||(d=setTimeout(j,b)),k&&(i=a.apply(f,e),f=e=null),i}},b.exports.throttle=function(a,b,c){var d,e,f,h=null,i=0;c||(c={});var j=function(){i=c.leading===!1?0:g(),h=null,f=a.apply(d,e),h||(d=e=null)};return function(){var k=g();i||c.leading!==!1||(i=k);var l=b-(k-i);return d=this,e=arguments,0>=l||l>b?(h&&(clearTimeout(h),h=null),i=k,f=a.apply(d,e),h||(d=e=null)):h||c.trailing===!1||(h=setTimeout(j,l)),f}};var g=function(){return Date.now?Date.now():(new Date).getTime()};b.exports.addListener=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):window.attachEvent&&a.attachEvent("on"+b,c)},b.exports.addWindowListener=function(a,c){b.exports.addListener(window,a,c)},b.exports.removeWindowListener=function(a,b){window.removeEventListener?window.removeEventListener(a,b,!1):window.detachEvent&&window.detachEvent("on"+a,b)},b.exports.getQueryString=function(a,b){var c=[];for(var d in a)c.push(d+"="+a[d]);var e=c.join("&");return b?encodeURIComponent(e):e},b.exports.ensureMessageListener=function(a){b.exports.removeWindowListener("message",a),b.exports.addWindowListener("message",a)},b.exports.extend=function(a){for(var b,c,d=1,e=arguments.length;e>d;d++){b=arguments[d];for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&null!==b[c]&&(a[c]=b[c])}return a},b.exports.decodeBase64=e,b.exports.createScript=function(a,b,c,d,e){if(!document.getElementById(c)){var f=document.createElement("script");return f.async=!0,f.setAttribute("crossorigin","anonymous"),f.src=a,f.type=b,f.id=c,f.onerror=d,f.onload=e,f}},b.exports.isAUIAvailable=f,b.exports.safeFunctionWrapper=function(a,b,c){return f()&&"function"==typeof window.P.guardError?P.guardError("APE-SafeFrame",a):function(){try{a.apply(this,arguments)}catch(d){"function"==typeof b&&c&&b(c,d)}}}},{}],9:[function(a,b,c){function d(a){var b=a.initialBoundingRect,c=b.top-(window.scrollY-a.originalScrollY),d=c+a.adHeight,e=b.left-(window.scrollX-a.originalScrollX),f=e+a.adWidth;return{top:c,bottom:d,left:e,right:f,width:a.adWidth,height:a.adHeight}}function e(a,b,c){var d=0;return document.hidden?d:(d=a>0?c-a:b>0?Math.min(b,c):0,Math.min(d,b-a))}function f(){try{var a={};return a.t=window.screenY?window.screenY:window.screenTop,a.l=window.screenX?window.screenX:window.screenLeft,a.w=b.exports.windowWidth(),a.h=b.exports.windowHeight(),a.b=a.t+a.h,a.r=a.l+a.w,a}catch(c){return null}}function g(a,c){try{var d={},f=c||a.getBoundingClientRect();d.t=f.top,d.l=f.left,d.r=f.right,d.b=f.bottom,d.w=f.width||d.r-d.l,d.h=f.height||d.b-d.t,a&&(d.z=Number(window.getComputedStyle(a,null).zIndex));var g=b.exports.windowWidth(),h=b.exports.windowHeight(),i=Math.max(0,e(d.t,d.b,h)),j=Math.max(0,e(d.l,d.r,g)),k=i*j,l=d.h*Math.min(d.w,b.exports.windowWidth());return d.xiv=Number(Math.min(1,j/d.w).toFixed(2)),d.yiv=Number(Math.min(1,i/d.h).toFixed(2)),d.iv=Number(Math.min(1,Math.max(0,k/l)).toFixed(2)),d}catch(m){return null}}function h(a,c){try{var d={},e=c||a.getBoundingClientRect();return d.t=e.top,d.l=e.left,d.r=b.exports.windowWidth()-e.right,d.b=b.exports.windowHeight()-e.bottom,d.xs=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)>b.exports.windowWidth()?1:0,d.yx=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)>b.exports.windowHeight()?1:0,d}catch(f){return null}}b.exports.PERCENT_VIEWABLE=.5,b.exports.DURATION_VIEWABLE=500,b.exports.findPercentInView=function(a){try{var c=a.getBoundingClientRect(),d=e(c.top,c.bottom,b.exports.windowHeight()),f=e(c.left,c.right,b.exports.windowWidth()),g=d*f,h=(c.bottom-c.top)*Math.min(c.right-c.left,b.exports.windowWidth());return Math.min(1,Math.max(0,g/h))}catch(i){return null}},b.exports.findDistanceInView=function(a){try{var c=a.getBoundingClientRect();return c.top-b.exports.windowHeight()}catch(d){return null}},b.exports.getViewableInfo=function(a){if(!a)return null;var b={},c=f(),d=g(a),e=h(a);return c&&d&&e?(b.geom={},b.geom.win=c,b.geom.self=d,b.geom.exp=e,b.payload={},b.payload.wh=c.h,b.payload.ww=c.w,b.payload.sx=window.scrollX,b.payload.sy=window.scrollY,b.payload.ah=d.h,b.payload.aw=d.w,b.payload.top=d.t,b.payload.left=d.l,b):null},b.exports.takeSnapshotOfSlotPosition=function(a){try{var b=a.getBoundingClientRect();return{initialBoundingRect:b,adHeight:a.offsetHeight,adWidth:a.offsetWidth,originalScrollX:window.scrollX,originalScrollY:window.scrollY}}catch(c){return null}},b.exports.getNoInventoryViewabilityData=function(a){var b={},c=d(a),e=f(),i=g(null,c),j=h(null,c);return e&&i&&j?(b.geom={},b.geom.win=e,b.geom.self=i,b.geom.exp=j,b.payload={},b.payload.wh=e.h,b.payload.ww=e.w,b.payload.sx=window.scrollX,b.payload.sy=window.scrollY,b.payload.ah=i.h,b.payload.aw=i.w,b.payload.top=i.t,b.payload.left=i.l,b):null},b.exports.windowHeight=function(){return window.innerHeight||document.documentElement.clientHeight},b.exports.windowWidth=function(){return window.innerWidth||document.documentElement.clientWidth}},{}]},{},[1]);