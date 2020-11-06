
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"244",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(mw\u0026\u0026mw.config){var a=mw.config.get(\"wgUserGroups\");if(a\u0026\u0026a.includes(\"staff\"))return!0}return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1;if(mw\u0026\u0026mw.config){var b=window.wgCanonicalNamespace;b\u0026\u00260!==b.length||(a=!0)}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"sg-beacon\";a:{b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b)){b=cv=a.substring(b.length,a.length);break a}}b=null}return b})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sg-closed"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],";a=a\u0026\u0026void 0!==a\u0026\u0026\"\"!==a\u0026\u0026a!==location.hostname?\"false\":\"true\";var b=",["escape",["macro",3],8,16],";b\u0026\u0026void 0!==b\u0026\u0026\"\"!==b\u0026\u0026(a=\"false\");return a})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"#shoebox-applicationData",
      "vtp_selectorType":"CSS"
    },{
      "function":"__u",
      "convert_null_to":"false",
      "convert_undefined_to":"false",
      "vtp_component":"QUERY",
      "vtp_queryKey":"istestwiki",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",5],7],"\";if(a=JSON.parse(a))return a.wikiVariables.isTestWiki;a=\"",["escape",["macro",6],7],"\";return\"true\"===a})();"]
    },{
      "function":"__j",
      "convert_null_to":"0",
      "convert_undefined_to":"0",
      "vtp_name":"wgUserId"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"#hivi_leaderboard\";if(a=document.querySelector(a))if(hivi_classes=a.className.split(\" \")){if(hivi_classes.includes(\"hide\")||hivi_classes.includes(\"default-height\"))return!0;if(hivi_classes.includes(\"theme-hivi\")\u0026\u0026!hivi_classes.includes(\"theme-resolved\"))return!1}return!0})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"Geo"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",14],8,16],";return a?JSON.parse(a):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new URLSearchParams(window.location.search);if(a.get(\"forcecountry\"))return a.get(\"forcecountry\");a=",["escape",["macro",15],8,16],";return(window.geo=a)?a.country:null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-dimension-number"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-dimension-value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-referrer"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-32129070-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "convert_null_to":"unknown",
      "convert_undefined_to":"unknown",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"wgArticleType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"wgArticleId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"wgPageName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"wgDBname"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[wgDBname,wgPageName].filter(Boolean);return a=0\u003Ca.length?a.join(\" : \"):window.location.href})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Geo||{};(a=a.getCountryCode())||(a=\"US\");return a})();"]
    },{
      "function":"__jsm",
      "convert_undefined_to":"false",
      "vtp_javascript":["template","(function(){window.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;return\"indexedDB\"in window})();"]
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"classification-label"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=location.hostname,b=[\"starwars.fandom.com\",\"animalcrossing.fandom.com\",\"elderscrolls.fandom.com\",\"fallout.fandom.com\",\"naruto.fandom.com\"];return a in b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"div.aff-unit__wrapper\";return(a=document.querySelector(a))?a.attributes.getNamedItem(\"data-campaign\").nodeValue:\"unknown\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"div.aff-unit__wrapper\";return(a=document.querySelector(a))?a.attributes.getNamedItem(\"data-category\").nodeValue:\"unknown\"})();"]
    },{
      "function":"__vis",
      "vtp_elementSelector":".wds-banner-notification__container",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-174161125-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return mw\u0026\u0026mw.config?mw.config.get(\"fullVerticalName\"):\"none\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__j",
      "convert_null_to":"0",
      "convert_undefined_to":"0",
      "vtp_name":"wgUserId"
    },{
      "function":"__j",
      "convert_null_to":"1",
      "vtp_name":"pvNumberGlobal"
    },{
      "function":"__c",
      "vtp_value":"interstitial_impressions"
    },{
      "function":"__k",
      "convert_null_to":"0",
      "convert_undefined_to":"0",
      "vtp_decodeCookie":false,
      "vtp_name":["macro",41]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"force-interstitial",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",43],7],"\";return a\u0026\u0026\"true\"===a?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fandom-ads.excludeInterstials"
    },{
      "function":"__vis",
      "vtp_elementSelector":".featured-video__wrapper",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__c",
      "vtp_value":"bb_interstitial_random_bucket"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":["macro",47]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fandom-dimensions.wikiVertical"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__dbg"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":40
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":48
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":82
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":87
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":89
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":90
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":137
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_30832778_211",
      "tag_id":212
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-TSCX7VD","nickname","SWM Tags"]],
      "vtp_boundaries":["list"],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","ehl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","html"],["map","typeId","jsm"]],
      "tag_id":213
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-K3C2HJ2","nickname",""]],
      "vtp_boundaries":["list"],
      "vtp_enableTypeRestrictions":false,
      "tag_id":214
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-5HQXBHF","nickname",""]],
      "vtp_boundaries":["list"],
      "vtp_enableTypeRestrictions":false,
      "tag_id":215
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WK9HGJN","nickname",""]],
      "vtp_boundaries":["list",["zb","_cn",["macro",12],"Maul",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":216
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.aff-unit__wrapper",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"30832778_39",
      "tag_id":217
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div[data-campaign=\"disneyplus\"]",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"30832778_42",
      "tag_id":218
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".aff-unit__wrapper",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"30832778_43",
      "tag_id":219
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".sg-b-p.sg-b-p-s",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"30832778_81",
      "tag_id":220
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".sg-b-in",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"30832778_109",
      "tag_id":221
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=!0,k=!1,c={scroll_speed:k,\"community-page-entry-point\":b,affiliate_incontent_recommend:b,lightbox:b,\"right-rail\":b,\"media-gallery\":b,recirculation:b,\"ads-babdetector-detection\":b};window.ones_to_kill=c;og_guaTrackEvent=window.guaTrackEvent;guaTrackEvent=function(a,d,e,f,g){a\u0026\u0026Object.keys(c).includes(a)?console.log(\"guaTrackEvent killing tracker\",a,d,e,f,g):h.apply(null,[a,d,e,f,g])};var h=Wikia.Tracker.track;Wikia.Tracker.track=function(a,d,e){a\u0026\u0026a.category\u0026\u0026Object.keys(c).includes(a.category)\u0026\u0026\na.trackingMethod\u0026\u0026\"analytics\"===a.trackingMethod\u0026\u0026(send_it_to_dw=c[a.category])\u0026\u0026(a.trackingMethod=\"internal\");a\u0026\u0026\"internal\"!=a.trackingMethod\u0026\u0026console.log(\"tracker\",a.category,a);h.apply(null,[a,d,e])}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function build_swm_cookie_name(name){return\"swm-\"+name+\"-closed\"}function closeAndSetCookie(name){$.cookie(build_swm_cookie_name(name),location.href,{expires:30});$(\".wds-banner-notification__container\").slideUp()}require([\"wikia.trackingOptIn\",\"mw\"],function(trackingOptIn,mw){function loadSWM(name){var insertion_location=$(\".banner-notifications-placeholder\");if(insertion_location){var swm_bar=$('\\x3cdiv class\\x3d\"wds-banner-notification__container\" id\\x3d\"swm-'+name+'-container\" \\x3e'+\n'\\x3cdiv class\\x3d\"wds-banner-notification wds-warning warn\"\\x3e'+'\\x3cdiv class\\x3d\"wds-banner-notification__icon\"\\x3e'+'\\x3csvg class\\x3d\"wds-icon wds-icon-small\" xmlns\\x3d\"http:\/\/www.w3.org\/2000\/svg\" width\\x3d\"18\" height\\x3d\"18\" viewBox\\x3d\"0 0 18 18\"\\x3e'+'\\x3cpath d\\x3d\"M2.618 15.995L9 3.199l6.382 12.796H2.618zm15.276.554l-8-16.04C9.555-.17 8.445-.17 8.105.51l-8 16.04A1.003 1.003 0 0 0 1 18h16c.347 0 .668-.18.85-.476a.998.998 0 0 0 .044-.975zM8 7.975V9.98a1 1 0 1 0 2 0V7.975a1 1 0 1 0-2 0m1.71 4.3c-.05-.04-.1-.09-.16-.12a.567.567 0 0 0-.17-.09.61.61 0 0 0-.19-.06.999.999 0 0 0-.9.27c-.09.101-.16.201-.21.33a1.01 1.01 0 0 0-.08.383c0 .26.11.52.29.711.19.18.44.291.71.291.06 0 .13-.01.19-.02a.635.635 0 0 0 .19-.06.59.59 0 0 0 .17-.09c.06-.04.11-.08.16-.12.18-.192.29-.452.29-.712 0-.132-.03-.261-.08-.382a.94.94 0 0 0-.21-.33\" fill-rule\\x3d\"evenodd\"\\x3e\\x3c\/path\\x3e'+\n\"\\x3c\/svg\\x3e\"+\"\\x3c\/div\\x3e\"+'\\x3cspan class\\x3d\"wds-banner-notification__text\" id\\x3d\"swm_bar_'+name+'\"\\x3e\\x3c\/span\\x3e'+'\\x3csvg id\\x3d\"swm-'+name+'-close\" class\\x3d\"wds-icon wds-icon-tiny wds-banner-notification__close\" width\\x3d\"12\" height\\x3d\"12\" viewBox\\x3d\"0 0 12 12\" xmlns\\x3d\"http:\/\/www.w3.org\/2000\/svg\"\\x3e'+'\\x3cpath d\\x3d\"M7.426 6.001l4.278-4.279A1.008 1.008 0 1 0 10.278.296L6 4.574 1.723.296A1.008 1.008 0 1 0 .295 1.722l4.278 4.28-4.279 4.277a1.008 1.008 0 1 0 1.427 1.426L6 7.427l4.278 4.278a1.006 1.006 0 0 0 1.426 0 1.008 1.008 0 0 0 0-1.426L7.425 6.001z\" fill-rule\\x3d\"evenodd\"\\x3e\\x3c\/path\\x3e'+\n\"\\x3c\/svg\\x3e\"+\"\\x3c\/div\\x3e\"+\"\\x3c\/div\\x3e\");insertion_location.prepend(swm_bar);$(\".wds-banner-notification__container\").hide();console.info(\"SWM Installed: \",name);$(document).on(\"click\",\"#swm-\"+name+\"-close\",function(){closeAndSetCookie(name)})}}trackingOptIn.pushToUserConsentQueue(function(optIn){if(optIn){var banner=$(\".wds-banner-notification__container\");if(!banner||banner.length===0||$(banner).is(\":hidden\")){var isUapResolved=\"",["escape",["macro",13],7],"\";if(isUapResolved){var swms=window.site_wide_messages||\n[];if(swms\u0026\u0026swms.length\u003E0)for(var i=0;i\u003Cswms.length;i++){var name=swms[i][\"name\"];if(!$.cookie(build_swm_cookie_name(name))){loadSWM(name,$(banner).is(\":hidden\"));setTimeout(function(){$(\"#swm_bar_\"+name).html(swms[i][\"message\"]);$(\"#swm-\"+name+\"-container\").show();window.dataLayer.push({\"event\":\"SiteWideMessage\",\"action\":\"insert-gtm\",\"label\":$(\"#swm_bar_\"+name).text()})},1E3);break}}}else window.dataLayer.push({\"event\":\"SiteWideMessage\",\"action\":\"uap-blocked\",\"label\":\"none\"})}else window.dataLayer.push({\"event\":\"SiteWideMessage\",\n\"action\":\"exists\",\"label\":$(\".wds-banner-notification__text\").text()})}})})})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":122
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.dataLayer=window.dataLayer||[];window.dataLayer.push({fandom:{app:\"app\",\"country-code\":\"",["escape",["macro",16],7],"\",userId:",["escape",["macro",8],8,16],",isTestWiki:",["escape",["macro",7],8,16],",trackingQueueConsent:!1}});require([require.optional(\"wikia.trackingOptIn\")],function(d){d\u0026\u0026d.pushToUserConsentQueue(function(b){if(b){b={trackingQueueConsent:!0};for(var c=window.dataLayer,a=0;a\u003Cc.length;a++){var e=c[a].fandom;e\u0026\u0026(c[a]={fandom:Object.assign(e,b)})}}})})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":144
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",8],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"(^$|((^|,)30832778_39($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"SiteWideMessage"
    },{
      "function":"_sw",
      "arg0":["macro",11],
      "arg1":"\/wiki\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"staff-peek=true"
    }],
  "rules":[
    [["if",0,1,2,4,5],["unless",3],["add",0,3]],
    [["if",6],["add",1,2]],
    [["if",7,8],["add",4]],
    [["if",1,5],["add",5,6,18]],
    [["if",9],["add",7]],
    [["if",5,10],["add",8]],
    [["if",11],["add",9,10,11,12,20,13,14,15,16,17]],
    [["if",0,1,5],["add",19]],
    [["if",6,12],["add",19]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={pg:!0},ha={};try{ha.__proto__=fa;ea=ha.pg;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=da,la=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Vh=b.prototype},ma=this||self,ra=function(a){if(a&&a!=ma)return pa(a.document);null===qa&&(qa=pa(ma.document));return qa},sa=/^[\w+/_-]+[=]{0,2}$/,qa=null,pa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&sa.test(c))return c}return""},ta=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},ua=function(a,b){function c(){}c.prototype=b.prototype;a.Vh=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.li=function(d,e,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[e].apply(d,h)}},va=function(a){return a};var wa=function(){},xa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ya=function(a){return"number"==typeof a&&!isNaN(a)},za=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Aa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ba=function(a,b){if(a&&za(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ca=function(a,b){if(!ya(a)||
!ya(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ea=function(a,b){for(var c=new Da,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Fa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ga=function(a){return Math.round(Number(a))||0},Ha=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ia=function(a){var b=[];if(za(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ja=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},La=function(){return(new Date).getTime()},Da=function(){this.prefix="gtm.";this.values={}};Da.prototype.set=function(a,b){this.values[this.prefix+a]=b};Da.prototype.get=function(a){return this.values[this.prefix+a]};
var Ma=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Na=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Oa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Pa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Qa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Va=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Xa=function(a){var b=
[];Fa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Za=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,$a=function(a){if(null==a)return String(a);var b=Za.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ab=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},bb=function(a){if(!a||"object"!=$a(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ab(a,"constructor")&&!ab(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ab(a,b)},m=function(a,b){var c=b||("array"==$a(a)?[]:{}),d;for(d in a)if(ab(a,d)){var e=a[d];"array"==$a(e)?("array"!=$a(c[d])&&(c[d]=[]),c[d]=m(e,c[d])):bb(e)?(bb(c[d])||(c[d]={}),c[d]=m(e,c[d])):c[d]=e}return c};var cb=function(a){if(void 0===a||za(a)||bb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};
var db=[],eb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},fb=function(a){return eb[a]},gb=/[\x00\x22\x26\x27\x3c\x3e]/g;var kb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,lb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},mb=function(a){return lb[a]};db[7]=function(a){return String(a).replace(kb,mb)};
db[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(kb,mb)+"'"}};var wb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,xb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},yb=function(a){return xb[a]};db[16]=function(a){return a};var Ab;
var Bb=[],Cb=[],Db=[],Eb=[],Fb=[],Gb={},Hb,Ib,Jb,Mb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Gb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.Se&&b.Se(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):Ab(c,e,b)},Ob=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Nb(a[e],b,c));return d},Pb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";
var c=Gb[b];return c?c.priorityOverride||0:0},Nb=function(a,b,c){if(za(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Nb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Bb[f];if(!h||b.pd(h))return;c[f]=!0;try{var k=Ob(h,b,c);k.vtp_gtmEventId=b.id;d=Mb(k,b);Jb&&(d=Jb.Og(d,k))}catch(y){b.df&&b.df(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Nb(a[l],b,c)]=Nb(a[l+1],b,c);return d;case "template":d=
[];for(var n=!1,p=1;p<a.length;p++){var r=Nb(a[p],b,c);Ib&&(n=n||r===Ib.$b);d.push(r)}return Ib&&n?Ib.Rg(d):d.join("");case "escape":d=Nb(a[1],b,c);if(Ib&&za(a[1])&&"macro"===a[1][0]&&Ib.ph(a))return Ib.Hh(d);d=String(d);for(var t=2;t<a.length;t++)db[a[t]]&&(d=db[a[t]](d));return d;case "tag":var q=a[1];if(!Eb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Xe:a[2],index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Qb(u,b,c),x=!!a[4];return x||
2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Qb=function(a,b,c){try{return Hb(Ob(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Rb=function(){var a=function(b){return{toString:function(){return b}}};return{vf:a("consent"),Od:a("convert_case_to"),Pd:a("convert_false_to"),Qd:a("convert_null_to"),Rd:a("convert_true_to"),Sd:a("convert_undefined_to"),di:a("debug_mode_metadata"),Ha:a("function"),gg:a("instance_name"),hg:a("live_only"),ig:a("malware_disabled"),jg:a("metadata"),gi:a("original_vendor_template_id"),mg:a("once_per_event"),Ie:a("once_per_load"),Me:a("setup_tags"),Ne:a("tag_id"),Oe:a("teardown_tags")}}();var Sb=null,Vb=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Sb=Tb(a);for(var e=0;e<Cb.length;e++){var f=Cb[e],h=Ub(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var n=[],p=0;p<Eb.length;p++)c[p]&&!d[p]&&(n[p]=!0);return n},Ub=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Sb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Sb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Tb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Qb(Db[c],a));return b[c]}};var Wb={Og:function(a,b){b[Rb.Od]&&"string"===typeof a&&(a=1==b[Rb.Od]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Rb.Qd)&&null===a&&(a=b[Rb.Qd]);b.hasOwnProperty(Rb.Sd)&&void 0===a&&(a=b[Rb.Sd]);b.hasOwnProperty(Rb.Rd)&&!0===a&&(a=b[Rb.Rd]);b.hasOwnProperty(Rb.Pd)&&!1===a&&(a=b[Rb.Pd]);return a}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var C={wb:"_ee",bd:"_syn",ji:"_uei",hi:"_pci",Kc:"event_callback",Wb:"event_timeout",ia:"gtag.config"};C.Da="gtag.get";C.sa="purchase";C.ib="refund";C.Pa="begin_checkout";C.gb="add_to_cart";C.hb="remove_from_cart";C.Ef="view_cart";C.Xd="add_to_wishlist";C.Ca="view_item";C.Wd="view_promotion";C.Vd="select_promotion";C.Ud="select_item";C.Sb="view_item_list";C.Td="add_payment_info";C.Df="add_shipping_info";
C.xa="value_key",C.wa="value_callback";C.ba="allow_ad_personalization_signals";C.Tc="restricted_data_processing";C.jb="allow_google_signals";C.ca="cookie_expires";C.Vb="cookie_update";C.tb="session_duration";C.la="user_properties";C.Ga="transport_url";C.M="ads_data_redaction";C.s="ad_storage";C.J="analytics_storage";C.wf="region";C.xf="wait_for_update";C.Ae=[C.sa,C.ib,C.Pa,C.gb,C.hb,C.Ef,C.Xd,C.Ca,C.Wd,C.Vd,C.Sb,C.Ud,C.Td,C.Df];C.ze=[C.ba,C.jb,C.Vb];C.Be=[C.ca,C.Wb,C.tb];var uc={},vc=function(a,b){uc[a]=uc[a]||[];uc[a][b]=!0},wc=function(a){for(var b=[],c=uc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var D=function(a){vc("GTM",a)};function xc(a){if(Error.captureStackTrace)Error.captureStackTrace(this,xc);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ua(xc,Error);xc.prototype.name="CustomError";var yc=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");xc.call(this,d+c[e])};ua(yc,xc);yc.prototype.name="AssertionError";var zc=function(a,b){throw new yc("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Ac=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Bc=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Cc,Dc=function(){if(void 0===Cc){var a=null,b=ma.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:va,createScript:va,createScriptURL:va})}catch(c){ma.console&&ma.console.error(c.message)}Cc=a}else Cc=a}return Cc};var Fc=function(a,b){this.h=b===Ec?a:""};Fc.prototype.toString=function(){return"TrustedResourceUrl{"+this.h+"}"};var Ec={};var Gc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Hc;a:{var Ic=ma.navigator;if(Ic){var Jc=Ic.userAgent;if(Jc){Hc=Jc;break a}}Hc=""}var Kc=function(a){return-1!=Hc.indexOf(a)};var Mc=function(a,b,c){this.h=c===Lc?a:""};Mc.prototype.toString=function(){return"SafeHtml{"+this.h+"}"};var Nc=function(a){if(a instanceof Mc&&a.constructor===Mc)return a.h;zc("expected object of type SafeHtml, got '"+a+"' of type "+ta(a));return"type_error:SafeHtml"},Lc={},Oc=new Mc(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,Lc);var Pc={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Qc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Nc(Oc);return!c.parentElement}),Rc=function(a,b){if(a.tagName&&Pc[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Qc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Nc(b)};var Sc=function(a){var b=Dc(),c=b?b.createHTML(a):a;return new Mc(c,null,Lc)};var F=window,H=document,Tc=navigator,Uc=H.currentScript&&H.currentScript.src,Vc=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},Wc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Xc=function(a,b,c){var d=H.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Dc(),h=f?f.createScriptURL(a):a;e=new Fc(h,Ec);var k;a:{try{var l=d&&d.ownerDocument,n=l&&(l.defaultView||l.parentWindow);
n=n||ma;if(n.Element&&n.Location){k=n;break a}}catch(x){}k=null}if(k&&"undefined"!=typeof k.HTMLScriptElement&&(!d||!(d instanceof k.HTMLScriptElement)&&(d instanceof k.Location||d instanceof k.Element))){var p;var r=typeof d;if("object"==r&&null!=d||"function"==r)try{p=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(x){p="<object could not be stringified>"}else p=void 0===d?"undefined":null===d?"null":typeof d;zc("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",p)}var t;e instanceof Fc&&e.constructor===Fc?t=e.h:(zc("expected object of type TrustedResourceUrl, got '"+e+"' of type "+ta(e)),t="type_error:TrustedResourceUrl");d.src=t;var q=ra(d.ownerDocument&&d.ownerDocument.defaultView);q&&d.setAttribute("nonce",q);Wc(d,b);c&&(d.onerror=c);var u=ra();u&&d.setAttribute("nonce",u);var v=H.getElementsByTagName("script")[0]||H.body||H.head;v.parentNode.insertBefore(d,v);return d},Yc=function(){if(Uc){var a=Uc.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},Zc=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||H.body||H.head;d.parentNode.insertBefore(c,d);Wc(c,b);void 0!==a&&(c.src=a);return c},$c=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},ad=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},bd=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){F.setTimeout(a,0)},cd=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},dd=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},ed=function(a){var b=H.createElement("div");Rc(b,Sc("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},fd=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},gd=function(a){Tc.sendBeacon&&Tc.sendBeacon(a)||$c(a)},hd=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var id={},jd=function(a){return void 0==id[a]?!1:id[a]};var kd=[];function ld(){var a=Vc("google_tag_data",{});a.ics||(a.ics={entries:{},set:md,update:nd,addListener:od,notifyListeners:pd,active:!1});return a.ics}
function md(a,b,c,d,e,f){var h=ld();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},n=l.region,p=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?n!==e:!p&&!n)){var r=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&F.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,qd(a),pd(),vc("TAGGING",2))},f)}}}
function nd(a,b){var c=ld();c.active=!0;if(void 0!=b){var d=rd(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=rd(a);f.quiet?(f.quiet=!1,qd(a)):h!==d&&qd(a)}}function od(a,b){kd.push({Ue:a,$g:b})}function qd(a){for(var b=0;b<kd.length;++b){var c=kd[b];za(c.Ue)&&-1!==c.Ue.indexOf(a)&&(c.jf=!0)}}function pd(a){for(var b=0;b<kd.length;++b){var c=kd[b];if(c.jf){c.jf=!1;try{c.$g({Te:a})}catch(d){}}}}
var rd=function(a){var b=ld().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},sd=function(a){return!(ld().entries[a]||{}).quiet},td=function(){return jd("gtag_cs_api")?ld().active:!1},ud=function(a,b){ld().addListener(a,b)},vd=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!sd(b[e]))return!0;return!1}if(c()){var d=!1;ud(b,function(e){d||c()||(d=!0,a(e))})}else a({})},wd=function(a,b){if(!1===rd(b)){var c=!1;ud([b],function(d){!c&&rd(b)&&(a(d),c=!0)})}};var xd=[C.s,C.J],yd=function(a){var b=a[C.wf];b&&D(40);var c=a[C.xf];c&&D(41);for(var d=za(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<xd.length;f++){var h=xd[f],k=a[xd[f]],l=d[e];ld().set(h,k,l,"","",c)}},zd=function(a,b){for(var c=0;c<xd.length;c++){var d=xd[c],e=a[xd[c]];ld().update(d,e)}ld().notifyListeners(b)},Ad=function(a){var b=rd(a);return void 0!=b?b:!0},Bd=function(){for(var a=[],b=0;b<xd.length;b++){var c=rd(xd[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Cd=function(a,b){vd(a,b)};var Hd=function(a){return Gd?H.querySelectorAll(a):null},Id=function(a,b){if(!Gd)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Jd=!1;if(H.querySelectorAll)try{var Kd=H.querySelectorAll(":root");Kd&&1==Kd.length&&Kd[0]==H.documentElement&&(Jd=!0)}catch(a){}var Gd=Jd;var Yd={},L=null,Zd=Math.random();Yd.B="GTM-MDPTN53";Yd.fc="as1";Yd.fi="";var $d={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},ae={__paused:!0,__tg:!0},be;for(be in $d)$d.hasOwnProperty(be)&&(ae[be]=!0);var ce="www.googletagmanager.com/gtm.js";
var de=ce,ee=Ha(""),fe=null,ge=null,he="//www.googletagmanager.com/a?id="+Yd.B+"&cv=244",ie={},je={},ke=function(){var a=L.sequence||1;L.sequence=a+1;return a};var le={},me=new Da,ne={},oe={},re={name:"dataLayer",set:function(a,b){m(Va(a,b),ne);pe()},get:function(a){return qe(a,2)},reset:function(){me=new Da;ne={};pe()}},qe=function(a,b){return 2!=b?me.get(a):se(a)},se=function(a){var b,c=a.split(".");b=b||[];for(var d=ne,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Aa(b,d))return}return d},te=function(a,b){oe.hasOwnProperty(a)||(me.set(a,b),m(Va(a,b),ne),pe())},pe=function(a){Fa(oe,function(b,c){me.set(b,c);m(Va(b,
void 0),ne);m(Va(b,c),ne);a&&delete oe[b]})},ue=function(a,b,c){le[a]=le[a]||{};var d=1!==c?se(b):me.get(b);"array"===$a(d)||"object"===$a(d)?le[a][b]=m(d):le[a][b]=d},ve=function(a,b){if(le[a])return le[a][b]},we=function(a,b){le[a]&&delete le[a][b]};var ze={},Ae=function(a,b){if(F._gtmexpgrp&&F._gtmexpgrp.hasOwnProperty(a))return F._gtmexpgrp[a];void 0===ze[a]&&(ze[a]=Math.floor(Math.random()*b));return ze[a]};var Be=/:[0-9]+$/,Ce=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Fe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=De(a.protocol)||De(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(Be,"").toLowerCase());return Ee(a,b,c,d,e)},Ee=function(a,b,c,d,e){var f,h=De(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ge(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(Be,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||vc("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Aa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ce(f,e,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},De=function(a){return a?a.replace(":","").toLowerCase():""},Ge=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},He=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||vc("TAGGING",1),c="/"+c);var d=b.hostname.replace(Be,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Ie=function(a){function b(n){var p=n.split("=")[0];return 0>d.indexOf(p)?n:p+"=0"}function c(n){return n.split("&").map(b).filter(function(p){return void 0!=p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=He(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Je(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Le=function(a,b,c,d){return Ke(d)?Je(a,String(b||document.cookie),c):[]},Oe=function(a,b,c,d,e){if(Ke(e)){var f=Me(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Ne(f,function(h){return h.mc},b);if(1===f.length)return f[0].id;f=Ne(f,function(h){return h.Ib},c);return f[0]?f[0].id:void 0}}};function Qe(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Le(b,f,!1,d).indexOf(c)}
var Ue=function(a,b,c){function d(q,u,v){if(null==v)return delete h[u],q;h[u]=v;return q+"; "+u+"="+v}function e(q,u){if(null==u)return delete h[u],q;h[u]=!0;return q+"; "+u}if(!Ke(c.Ja))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Re(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.wi);f=d(f,"samesite",
c.Ai);c.Bi&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var n=Se(),p=0;p<n.length;++p){var r="none"!==n[p]?n[p]:void 0,t=d(f,"domain",r);t=e(t,c.flags);if(!Te(r,c.path)&&Qe(t,a,b,c.Ja))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return Te(l,c.path)?1:Qe(f,a,b,c.Ja)?0:1},Ve=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ue(a,b,c)};
function Ne(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Me(a,b,c){for(var d=[],e=Le(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),mc:1*l[0]||1,Ib:1*l[1]||1}))}}return d}
var Re=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},We=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Xe=/(^|\.)doubleclick\.net$/i,Te=function(a,b){return Xe.test(document.location.hostname)||"/"===b&&We.test(a)},Se=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Xe.test(e)||We.test(e)||a.push("none");
return a},Ke=function(a){if(!jd("gtag_cs_api")||!a||!td())return!0;if(!sd(a))return!1;var b=rd(a);return null==b?!0:!!b};var Ye=function(){for(var a=Tc.userAgent+(H.cookie||"")+(H.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(La()/1E3)].join(".")},af=function(a,b,c,d,e){var f=Ze(b);return Oe(a,f,$e(c),d,e)},bf=function(a,b,c,d){var e=""+Ze(c),f=$e(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Ze=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},$e=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function cf(a,b,c){var d,e=a.Hb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||La())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var df=["1"],ef={},jf=function(a){var b=ff(a.prefix);ef[b]||gf(b,a.path,a.domain)||(hf(b,Ye(),a),gf(b,a.path,a.domain))};function hf(a,b,c){var d=bf(b,"1",c.domain,c.path),e=cf(c);e.Ja="ad_storage";Ve(a,d,e)}function gf(a,b,c){var d=af(a,b,c,df,"ad_storage");d&&(ef[a]=d);return d}function ff(a){return(a||"_gcl")+"_au"};function kf(){for(var a=lf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function mf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var lf,nf;function of(a){lf=lf||mf();nf=nf||kf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,n=(f&3)<<4|h>>4,p=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(p=64));b.push(lf[l],lf[n],lf[p],lf[r])}return b.join("")}
function pf(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),p=nf[n];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}lf=lf||mf();nf=nf||kf();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var qf;var uf=function(){var a=rf,b=sf,c=tf(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){ad(H,"mousedown",d);ad(H,"keyup",d);ad(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},vf=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};tf().decorators.push(f)},wf=function(a,b,c){for(var d=tf().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,n=a,p=!!h.sameHost;if(l&&(p||n!==H.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(n)){k=!0;break a}}else if(0<=n.indexOf(l[r])||p&&0<=l[r].indexOf(n)){k=!0;break a}k=!1}if(k){var t=h.placement;void 0==t&&(t=h.fragment?2:1);t===b&&Oa(e,h.callback())}}return e},tf=function(){var a=Vc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var xf=/(.*?)\*(.*?)\*(.*)/,yf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,zf=/^(?:www\.|m\.|amp\.)+/,Af=/([^?#]+)(\?[^#]*)?(#.*)?/;function Bf(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Df=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(of(String(d))))}var e=b.join("*");return["1",Cf(e),e].join("*")},Cf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=qf)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}qf=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^qf[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},Ff=function(){return function(a){var b=He(F.location.href),c=b.search.replace("?",""),d=Ce(c,"_gl",!0)||"";a.query=Ef(d)||{};var e=Fe(b,"fragment").match(Bf("_gl"));a.fragment=Ef(e&&e[3]||"")||{}}},Gf=function(a){var b=Ff(),c=tf();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Oa(d,e.query),a&&Oa(d,e.fragment));return d},Ef=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=xf.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var n=h[2],p=0;p<b;++p)if(n===Cf(k,p)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=pf(t[q+1]);return r}}}}catch(u){}};
function Hf(a,b,c,d){function e(p){var r=p,t=Bf(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}p=q;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+n}d=void 0===d?!1:d;var f=Af.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function If(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=wf(b,1,c),e=wf(b,2,c),f=wf(b,3,c);if(Pa(d)){var h=Df(d);c?Jf("_gl",h,a):Kf("_gl",h,a,!1)}if(!c&&Pa(e)){var k=Df(e);Kf("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,p=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Kf(n,p,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Jf(n,p,r);break a}}"string"==typeof r&&Hf(n,p,r,void 0)}}
function Kf(a,b,c,d){if(c.href){var e=Hf(a,b,c.href,void 0===d?!1:d);Gc.test(e)&&(c.href=e)}}
function Jf(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=H.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=Hf(a,b,c.action);Gc.test(n)&&(c.action=n)}}}
var rf=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||If(e,e.hostname)}}catch(h){}},sf=function(a){try{if(a.action){var b=Fe(He(a.action),"host");If(a,b)}}catch(c){}},Lf=function(a,b,c,d){uf();vf(a,b,"fragment"===c?2:1,!!d,!1)},Mf=function(a,b){uf();vf(a,[Ee(F.location,"host",!0)],b,!0,!0)},Nf=function(){var a=H.location.hostname,b=yf.exec(H.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(zf,""),l=e.replace(zf,""),n;if(!(n=k===l)){var p="."+l;n=k.substring(k.length-p.length,k.length)===p}return n},Of=function(a,b){return!1===a?!1:a||b||Nf()};var Pf=/^\w+$/,Qf=/^[\w-]+$/,Rf=/^~?[\w-]+$/,Sf={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Tf=function(){if(!jd("gtag_cs_api")||!td())return!0;var a=rd("ad_storage");return null==a?!0:!!a},Uf=function(a,b){sd("ad_storage")?Tf()?a():wd(a,"ad_storage"):b?vc("TAGGING",3):vd(function(){Uf(a,!0)},["ad_storage"])},Xf=function(a){var b=[];if(!H.cookie)return b;var c=Le(a,H.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Vf(c[d]);e&&-1===Aa(b,e)&&b.push(e)}return Wf(b)};
function Yf(a){return a&&"string"==typeof a&&a.match(Pf)?a:"_gcl"}
var $f=function(){var a=He(F.location.href),b=Fe(a,"query",!1,void 0,"gclid"),c=Fe(a,"query",!1,void 0,"gclsrc"),d=Fe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ce(e,"gclid",void 0);c=c||Ce(e,"gclsrc",void 0)}return Zf(b,c,d)},Zf=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Qf))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":jd("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},bg=function(a){var b=$f();Uf(function(){ag(b,a)})};
function ag(a,b,c){function d(l,n){var p=cg(l,e);p&&Ve(p,n,f)}b=b||{};var e=Yf(b.prefix);c=c||La();var f=cf(b,c,!0);f.Ja="ad_storage";var h=Math.round(c/1E3),k=function(l){return["GCL",h,l].join(".")};a.aw&&(!0===b.Gi?d("aw",k("~"+a.aw[0])):d("aw",k(a.aw[0])));a.dc&&d("dc",k(a.dc[0]));a.gf&&d("gf",k(a.gf[0]));a.ha&&d("ha",k(a.ha[0]));a.gp&&d("gp",k(a.gp[0]))}
var eg=function(a,b){var c=Gf(!0);Uf(function(){for(var d=Yf(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Sf[f]){var h=cg(f,d),k=c[h];if(k){var l=Math.min(dg(k),La()),n;b:{for(var p=l,r=Le(h,H.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(dg(r[t])>p){n=!0;break b}n=!1}if(!n){var q=cf(b,l,!0);q.Ja="ad_storage";Ve(h,k,q)}}}}ag(Zf(c.gclid,c.gclsrc),b)})},cg=function(a,b){var c=Sf[a];if(void 0!==c)return b+c},dg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Vf(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var fg=function(a,b,c,d,e){if(za(b)){var f=Yf(e),h=function(){for(var k={},l=0;l<a.length;++l){var n=cg(a[l],f);if(n){var p=Le(n,H.cookie,void 0,"ad_storage");p.length&&(k[n]=p.sort()[p.length-1])}}return k};Uf(function(){Lf(h,b,c,d)})}},Wf=function(a){return a.filter(function(b){return Rf.test(b)})},gg=function(a,b){for(var c=Yf(b.prefix),d={},e=0;e<a.length;e++)Sf[a[e]]&&(d[a[e]]=Sf[a[e]]);Uf(function(){Fa(d,function(f,h){var k=Le(c+h,H.cookie,void 0,"ad_storage");if(k.length){var l=k[0],n=dg(l),
p={};p[f]=[Vf(l)];ag(p,b,n)}})})};function hg(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var ig=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(td()){var c=$f();if(hg(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);Mf(function(){return d},3);Mf(function(){var e={};return e._up="1",e},1)}}},jg=function(){var a;if(Tf()){for(var b=[],c=H.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Id:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Id]||(h[b[k].Id]=[]),h[b[k].Id].push({timestamp:l[1],bh:l[2]}))}a=h}else a={};return a};var kg=/^\d+\.fls\.doubleclick\.net$/;function lg(a,b){sd(C.s)?Ad(C.s)?a():wd(a,C.s):b?D(42):Cd(function(){lg(a,!0)},[C.s])}function mg(a){var b=He(F.location.href),c=Fe(b,"host",!1);if(c&&c.match(kg)){var d=Fe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function ng(a,b,c){if("aw"==a||"dc"==a){var d=mg("gcl"+a);if(d)return d.split(".")}var e=Yf(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Ad(C.s)&&c,h;h=$f()[a]||[];if(0<h.length)return f?["0"]:h}var k=cg(a,e);return k?Xf(k):[]}
var og=function(a){var b=mg("gac");if(b)return!Ad(C.s)&&a?"0":decodeURIComponent(b);var c=jg(),d=[];Fa(c,function(e,f){for(var h=[],k=0;k<f.length;k++)h.push(f[k].bh);h=Wf(h);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},pg=function(a,b){var c=$f().dc||[];lg(function(){jf(b);var d=ef[ff(b.prefix)],e=!1;if(d&&0<c.length){var f=L.joined_au=L.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;gd(l);e=f[h]=
!0}}null==a&&(a=e);if(a&&d){var n=ff(b.prefix),p=ef[n];p&&hf(n,p,b)}})};var qg=/[A-Z]+/,rg=/\s/,sg=function(a){if(g(a)&&(a=Ja(a),!rg.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(qg.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],C:d}}}}},ug=function(a){for(var b={},c=0;c<a.length;++c){var d=sg(a[c]);d&&(b[d.id]=d)}tg(b);var e=[];Fa(b,function(f,h){e.push(h)});return e};
function tg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.C[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var vg=function(){var a=!1;return a};var xg=function(a,b,c,d){return(2===wg()||d||"http:"!=F.location.protocol?a:b)+c},wg=function(){var a=Yc(),b;if(1===a)a:{var c=de;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=H.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Lg=function(a){return Ad(C.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Ie(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},Mg=function(){var a;if(!(a=ee)){var b;if(!0===F._gtmdgs)b=!0;else{var c=Tc&&Tc.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Ga("1");return Ae(1,100)<d?Ae(2,2):-1},Ng=function(a){var b;return b};var Og=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Pg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Qg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Rg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Tg=function(a){var b;qe("gtm.allowlist")&&D(52);b=qe("gtm.allowlist");b||(b=qe("gtm.whitelist"));b&&D(9);
var c=b&&Qa(Ia(b),Pg),d;qe("gtm.blocklist")&&D(51);d=qe("gtm.blocklist");d||(d=qe("gtm.blacklist"));d||(d=qe("tagTypeBlacklist"))&&D(3);d?D(8):d=[];Sg()&&(d=Ia(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Aa(Ia(d),"google")&&D(2);var e=
d&&Qa(Ia(d),Qg),f={};return function(h){var k=h&&h[Rb.Ha];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=je[k]||[],n=a(k,l);if(b){var p;if(p=n)a:{if(0>Aa(c,k))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>Aa(c,l[r])){D(11);p=!1;break a}}else{p=!1;break a}p=!0}n=p}var t=!1;if(d){var q=0<=Aa(e,k);if(q)t=q;else{var u=Ea(e,l||[]);u&&D(10);t=u}}var v=!n||t;v||!(0<=Aa(l,"sandboxedScripts"))||c&&-1!==Aa(c,"sandboxedScripts")||(v=Ea(e,Rg));return f[k]=v}},
Sg=function(){return Og.test(F.location&&F.location.hostname)};var Ug={active:!0,isAllowed:function(){return!0}},Vg=function(a){var b=L.zones;return b?b.checkState(Yd.B,a):Ug},Wg=function(a){var b=L.zones;!b&&a&&(b=L.zones=a());return b};var Xg=function(){},Yg=function(){};var Zg=!1,$g=0,ah=[];function bh(a){if(!Zg){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Zg=!0;for(var e=0;e<ah.length;e++)I(ah[e])}ah.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function ch(){if(!Zg&&140>$g){$g++;try{H.documentElement.doScroll("left"),bh()}catch(a){F.setTimeout(ch,50)}}}var dh=function(a){Zg?a():ah.push(a)};var eh={},fh={},gh=function(a,b,c,d){if(!fh[a]||ae[b]||"__zone"===b)return-1;var e={};bb(d)&&(e=m(d,e));e.id=c;e.status="timeout";return fh[a].tags.push(e)-1},hh=function(a,b,c,d){if(fh[a]){var e=fh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function ih(a){for(var b=eh[a]||[],c=0;c<b.length;c++)b[c]();eh[a]={push:function(d){d(Yd.B,fh[a])}}}
var lh=function(a,b,c){fh[a]={tags:[]};xa(b)&&jh(a,b);c&&F.setTimeout(function(){return ih(a)},Number(c));return kh(a)},jh=function(a,b){eh[a]=eh[a]||[];eh[a].push(Na(function(){return I(function(){b(Yd.B,fh[a])})}))};function kh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Na(function(){b++;d&&b>=c&&ih(a)})},Bg:function(){d=!0;b>=c&&ih(a)}}};var mh=function(){function a(d){return!ya(d)||0>d?0:d}if(!L._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=ya(re.get("gtm.start"))?re.get("gtm.start"):0;L._li={cst:a(c-b),cbt:a(ge-b)}}};var qh={},rh=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},sh=!1;
var xh=function(a){},wh=function(){return F.GoogleAnalyticsObject||"ga"},yh=function(a,b){return function(){var c=rh(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Dh=function(){return"&tc="+Eb.filter(function(a){return a}).length},Gh=function(){2022<=Eh().length&&Fh()},Ih=function(){Hh||(Hh=F.setTimeout(Fh,500))},Fh=function(){Hh&&(F.clearTimeout(Hh),Hh=void 0);void 0===Jh||Kh[Jh]&&!Lh&&!Mh||(Nh[Jh]||Oh.rh()||0>=Ph--?(D(1),Nh[Jh]=!0):(Oh.Nh(),$c(Eh()),Kh[Jh]=!0,Qh=Rh=Sh=Mh=Lh=""))},Eh=function(){var a=Jh;if(void 0===a)return"";var b=wc("GTM"),c=wc("TAGGING");return[Th,Kh[a]?"":"&es=1",Uh[a],b?"&u="+b:"",c?"&ut="+c:"",Dh(),Lh,Mh,Sh?Sh:"",Rh,Qh,"&z=0"].join("")},
Vh=function(){return[he,"&v=3&t=t","&pid="+Ca(),"&rv="+Yd.fc].join("")},Wh="0.005000">Math.random(),Th=Vh(),Xh=function(){Th=Vh()},Kh={},Lh="",Mh="",Qh="",Rh="",Sh="",Jh=void 0,Uh={},Nh={},Hh=void 0,Oh=function(a,b){var c=0,d=0;return{rh:function(){if(c<a)return!1;La()-d>=b&&(c=0);return c>=a},Nh:function(){La()-d>=b&&(c=0);c++;d=La()}}}(2,1E3),Ph=1E3,Yh=function(a,b,c){if(Wh&&!Nh[a]&&b){a!==Jh&&(Fh(),Jh=a);var d,e=String(b[Rb.Ha]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;Lh=Lh?Lh+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(Gb[h]?"1":"2")+d;Qh=Qh?Qh+"."+k:"&ti="+k;Ih();Gh()}},Zh=function(a,b,c){if(Wh&&!Nh[a]){a!==Jh&&(Fh(),Jh=a);var d=c+b;Mh=Mh?Mh+"."+d:"&epr="+d;Ih();Gh()}},$h=function(a,b,c){};
function ai(a,b,c,d){var e=Eb[a],f=bi(a,b,c,d);if(!f)return null;var h=Nb(e[Rb.Me],c,[]);if(h&&h.length){var k=h[0];f=ai(k.index,{H:f,F:1===k.Xe?b.terminate:f,terminate:b.terminate},c,d)}return f}
function bi(a,b,c,d){function e(){if(f[Rb.ig])k();else{var x=Ob(f,c,[]);var A=gh(c.id,String(f[Rb.Ha]),Number(f[Rb.Ne]),x[Rb.jg]),z=!1;x.vtp_gtmOnSuccess=function(){if(!z){z=!0;var G=La()-E;Yh(c.id,Eb[a],"5");hh(c.id,A,"success",
G);h()}};x.vtp_gtmOnFailure=function(){if(!z){z=!0;var G=La()-E;Yh(c.id,Eb[a],"6");hh(c.id,A,"failure",G);k()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;Yh(c.id,f,"1");var B=function(){var G=La()-E;Yh(c.id,f,"7");hh(c.id,A,"exception",G);z||(z=!0,k())};var E=La();try{Mb(x,c)}catch(G){B(G)}}}var f=Eb[a],h=b.H,k=b.F,l=b.terminate;if(c.pd(f))return null;var n=Nb(f[Rb.Oe],c,[]);if(n&&n.length){var p=n[0],r=ai(p.index,{H:h,F:k,terminate:l},c,d);if(!r)return null;h=r;k=2===p.Xe?l:r}if(f[Rb.Ie]||f[Rb.mg]){var t=f[Rb.Ie]?Fb:c.Wh,q=h,u=k;if(!t[a]){e=Na(e);
var v=ci(a,t,e);h=v.H;k=v.F}return function(){t[a](q,u)}}return e}function ci(a,b,c){var d=[],e=[];b[a]=di(d,e,c);return{H:function(){b[a]=ei;for(var f=0;f<d.length;f++)d[f]()},F:function(){b[a]=fi;for(var f=0;f<e.length;f++)e[f]()}}}function di(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ei(a){a()}function fi(a,b){b()};var ii=function(a,b,c){for(var d=[],e=0;e<Eb.length;e++)if(a[e]){var f=Eb[e];var h=c.add();try{var k=ai(e,{H:h,F:h,terminate:h},b,e);k?d.push({sf:e,kf:Pb(f),Yg:k}):(gi(e,b),h())}catch(n){h()}}c.Bg();d.sort(hi);for(var l=0;l<d.length;l++)d[l].Yg();return 0<d.length};function hi(a,b){var c,d=b.kf,e=a.kf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.sf,k=b.sf;f=h>k?1:h<k?-1:0}return f}
function gi(a,b){if(!Wh)return;var c=function(d){var e=b.pd(Eb[d])?"3":"4",f=Nb(Eb[d][Rb.Me],b,[]);f&&f.length&&c(f[0].index);Yh(b.id,Eb[d],e);var h=Nb(Eb[d][Rb.Oe],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ji=!1,oi=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(ji)return!1;ji=!0}var d=Vg(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=Vg(Number.MAX_SAFE_INTEGER);}if(f)return!1}Wh&&!Nh[b]&&Jh!==b&&(Fh(),Jh=b,Qh=Lh="",Uh[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Ih());
var h={id:b,name:c,pd:Tg(d.isAllowed),Wh:[],df:function(){D(6)},Se:ki(b)},k=lh(b,a.eventCallback,a.eventTimeout);li(b);var l=Vb(h);e&&(l=mi(l));var n=ii(l,h,k);"gtm.js"!==c&&"gtm.sync"!==c||xh(Yd.B);switch(c){case "gtm.init":D(19),n&&D(20)}return ni(l,
n)};function ki(a){return function(b){Wh&&(cb(b)||$h(a,"input",b))}}function li(a){ue(a,"event",1);ue(a,"ecommerce",1);ue(a,"gtm");ue(a,"eventModel");}
function mi(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&$d[String(Eb[c][Rb.Ha])]&&(b[c]=!0);return b}function ni(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Eb[c]&&!ae[String(Eb[c][Rb.Ha])])return!0;return!1}function pi(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return He(""+c+b).href}}function qi(a,b){return ri()?pi(a,b):void 0}function ri(){var a=!1;return a};var si=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.H=function(){};this.F=function(){};this.eventId=void 0},ti=function(a){var b=new si;b.eventModel=a;return b},ui=function(a,b){a.targetConfig=b;return a},vi=function(a,b){a.containerConfig=b;return a},wi=function(a,b){a.h=b;return a},xi=function(a,b){a.globalConfig=b;return a},yi=function(a,b){a.H=b;return a},zi=function(a,b){a.F=b;return a};
si.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Ai=function(a){function b(e){Fa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Fa(c,function(e){d.push(e)});return d};var Bi;if(3===Yd.fc.length)Bi="g";else{var Ci="G";Bi=Ci}
var Di={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Bi,OPT:"o"},Ei=function(a){var b=Yd.B.split("-"),c=b[0].toUpperCase(),d=Di[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Yd.fc.length){var h="w";f="2"+h}else f="";return f+d+Yd.fc+e};var Fi=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var Gi=function(){return Kc("iPhone")&&!Kc("iPod")&&!Kc("iPad")};Kc("Opera");Kc("Trident")||Kc("MSIE");Kc("Edge");!Kc("Gecko")||-1!=Hc.toLowerCase().indexOf("webkit")&&!Kc("Edge")||Kc("Trident")||Kc("MSIE")||Kc("Edge");-1!=Hc.toLowerCase().indexOf("webkit")&&!Kc("Edge")&&Kc("Mobile");Kc("Macintosh");Kc("Windows");Kc("Linux")||Kc("CrOS");var Hi=ma.navigator||null;Hi&&(Hi.appVersion||"").indexOf("X11");Kc("Android");Gi();Kc("iPad");Kc("iPod");Gi()||Kc("iPad")||Kc("iPod");Hc.toLowerCase().indexOf("kaios");var Ii=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(k){e=!1}if(e)return c;var f;a:{try{var h=c.parent;if(h&&h!=c){f=h;break a}}catch(k){}f=null}if(!(c=f))break}return null};var Ji=function(){};var Ki=function(a){return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies||void 0!==a.listenerId&&"number"!==typeof a.listenerId||void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Li=function(a,b){this.i=a;this.h=null;this.L={};this.oa=0;this.fa=void 0===b?500:b;this.o=null};la(Li,Ji);var Ni=function(a){return"function"===typeof a.i.__tcfapi||null!=Mi(a)};
Li.prototype.addEventListener=function(a){var b={},c=Bc(function(){return a(b)}),d=0;-1!==this.fa&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.fa));var e=function(f,h){clearTimeout(d);f?(b=f,b.internalErrorState=Ki(b),h&&0===b.internalErrorState||(b.tcString="tcunavailable",h||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Oi(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Li.prototype.removeEventListener=function(a){a&&a.listenerId&&Oi(this,"removeEventListener",null,a.listenerId)};
var Qi=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var h=e;if(0===h)return!1;var k=c;2===c?(k=0,2===h&&(k=1)):3===c&&(k=1,1===h&&(k=0));var l;if(0===k)if(a.purpose&&a.vendor){var n=Pi(a.vendor.consents,void 0===d?"755":d);l=n&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:n&&Pi(a.purpose.consents,b)}else l=jd("ticdac");else l=1===k?a.purpose&&a.vendor?
Pi(a.purpose.legitimateInterests,b)&&Pi(a.vendor.legitimateInterests,void 0===d?"755":d):jd("ticdac"):!0;return l},Pi=function(a,b){return!(!a||!a[b])},Oi=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(Mi(a)){Ri(a);var f=++a.oa;a.L[f]=c;if(a.h){var h={};a.h.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},Mi=function(a){if(a.h)return a.h;a.h=Ii(a.i,"__tcfapiLocator");return a.h},Ri=function(a){a.o||
(a.o=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.L[c.callId](c.returnValue,c.success)}catch(e){}},Fi(a.i,a.o))};var Si={1:0,3:0,4:0,7:3,9:3,10:3};function Ti(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Ui=Ti("",550),Vi=Ti("",500);function Wi(){var a=L.tcf||{};return L.tcf=a}
var Xi=function(a,b){this.o=a;this.h=b;this.i=La();},Yi=function(a){},Zi=function(a){},ej=function(){var a=Wi(),b=new Li(F,3E3),c=new Xi(b,a);if(($i()?!0===F.gtag_enable_tcf_support:!1!==F.gtag_enable_tcf_support)&&!a.active&&("function"===typeof F.__tcfapi||Ni(b))){a.active=!0;a.Jb={};aj();var d=setTimeout(function(){bj(a);cj(a);d=null},Vi);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)bj(a),cj(a),Yi(c);else{var f;if(!1===e.gdprApplies)f=dj(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var h={},k;for(k in Si)if(Si.hasOwnProperty(k))if("1"===k){var l=e,n=!0;n=void 0===n?!1:n;var p;var r=l;!1===r.gdprApplies?p=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Ki(r)),p="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===r.eventStatus)?!0:!1);h["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||
jd("tugac")&&void 0===l.gdprApplies&&!n||jd("tntac")&&("string"!==typeof l.tcString||!l.tcString.length)?!0:Qi(l,"1",0):!1}else h[k]=Qi(e,k,Si[k]);f=h}f&&(a.tcString=e.tcString||"tcempty",a.Jb=f,cj(a),Yi(c))}}),Zi(c)}catch(e){d&&(clearTimeout(d),d=null),bj(a),cj(a)}}};function bj(a){a.type="e";a.tcString="tcunavailable";a.Jb=dj()}function aj(){var a={};yd((a.ad_storage="denied",a.wait_for_update=Ui,a))}
var $i=function(){var a=!1;a=!0;return a};function dj(){var a={},b;for(b in Si)Si.hasOwnProperty(b)&&(a[b]=!0);return a}function cj(a){var b={};zd((b.ad_storage=a.Jb["1"]?"granted":"denied",b))}
var fj=function(){var a=Wi();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},gj=function(){var a=Wi();return a.active?a.tcString||"":""},hj=function(a){if(!Si.hasOwnProperty(String(a)))return!0;var b=Wi();return b.active&&b.Jb?!!b.Jb[String(a)]:!0};function ij(a,b,c){function d(p){var r;L.reported_gclid||(L.reported_gclid={});r=L.reported_gclid;var t=f+(p?"gcu":"gcs");if(!r[t]){r[t]=!0;var q=[],u=function(A,z){z&&q.push(A+"="+encodeURIComponent(z))},v="https://www.google.com";if(td()){var x=Ad(C.s);u("gcs",Bd());p&&u("gcu","1");L.dedupe_gclid||(L.dedupe_gclid=""+Ye());u("rnd",L.dedupe_gclid);if((!f||h&&"aw.ds"!==h)&&Ad(C.s)){var y=Xf("_gcl_aw");u("gclaw",y.join("."))}u("url",String(F.location).split(/[?#]/)[0]);u("dclid",jj(b,k));!x&&b&&(v=
"https://pagead2.googlesyndication.com")}u("gdpr_consent",gj());"1"===Gf(!1)._up&&u("gtm_up","1");u("gclid",jj(b,f));u("gclsrc",h);u("gtm",Ei(!c));var w=v+"/pagead/landing?"+q.join("&");gd(w)}}var e=$f(),f=e.gclid||"",h=e.gclsrc,k=e.dclid||"",l=!a&&(!f||h&&"aw.ds"!==h?!1:!0),n=td();if(l||n)n?Cd(function(){d();Ad(C.s)||wd(function(p){return d(!0,p.Te)},C.s)},[C.s]):d()}
function jj(a,b){var c=a&&!Ad(C.s);return b&&c?"0":b}var kj=function(a){if(H.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,
null))}return!1};
var lj=function(){var a=H.body,b=H.documentElement||a&&a.parentElement,c,d;if(H.compatMode&&"BackCompat"!==H.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};D(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},mj=function(a){var b=lj(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var nj=[],oj=!(!F.IntersectionObserver||!F.IntersectionObserverEntry),pj=function(a,b,c){for(var d=new F.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<nj.length;f++)if(!nj[f])return nj[f]=d,f;return nj.push(d)-1},qj=function(a,b,c){function d(k,l){var n={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:k.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:n,isIntersecting:0<l,rootBounds:n,target:k,time:La()};I(function(){return a(p)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=mj(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},rj=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(oj){var e=!1;I(function(){e||
qj(a,b,c)()});return pj(function(f){e=!0;for(var h={$a:0};h.$a<f.length;h={$a:h.$a},h.$a++)I(function(k){return function(){return a(f[k.$a])}}(h))},b,c)}return F.setInterval(qj(a,b,c),1E3)},sj=function(a){oj?0<=a&&a<nj.length&&nj[a]&&(nj[a].disconnect(),nj[a]=void 0):F.clearInterval(a)};var tj=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),uj=["SCRIPT","IMG","SVG","PATH","BR"],vj=["BR"];function wj(a){var b;if(a===H.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var h=0;h<f.childElementCount;h++)if(f.children[h]===a){e=h+1;break a}e=-1}else e=1}d=wj(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function xj(){var a;var b=[],c=H.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=uj.indexOf(f.tagName.toUpperCase()))){for(var h=!1,k=0;k<f.childElementCount&&1E4>k;k++)if(!(0<=vj.indexOf(f.children[k].tagName.toUpperCase()))){h=!0;break}h||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,n=l.elements,p=[],r=0;r<n.length;r++){var t=n[r],q=t.textContent;t.value&&(q=t.value);if(q){var u=q.match(tj);if(u){var v=
u[0],x;if(F.location){var y=Ee(F.location,"host",!0);x=0<=v.toLowerCase().indexOf(y)}else x=!1;x||p.push({element:t,Fi:v})}}}for(var w=[],A=10<p.length?"3":l.status,z=0;z<p.length&&10>z;z++){var B=p[z].element;w.push({querySelector:wj(B),tagName:B.tagName,isVisible:!kj(B),type:1})}return{elements:w,status:A}}var gk=function(){var a=!0;hj(7)&&hj(9)&&hj(10)||(a=!1);var b=!0;b=!1;b&&!fk()&&(a=!1);return a},fk=function(){var a=!0;hj(3)&&hj(4)||(a=!1);return a};function Ck(){var a=L;return a.gcq=a.gcq||new Dk}
var Ek=function(a,b,c){Ck().register(a,b,c)},Fk=function(a,b,c,d){Ck().push("event",[b,a],c,d)},Gk=function(a,b){Ck().push("config",[a],b)},Hk=function(a,b,c){Ck().push("get",[a,b],c)},Ik={},Jk=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.o=null;this.h=!1},Kk=function(a,b,c,d,e){this.type=a;this.o=b;this.aa=c||"";this.h=d;this.i=e},Dk=function(){this.o={};this.i={};this.h=[]},Lk=function(a,b){var c=sg(b);return a.o[c.containerId]=a.o[c.containerId]||new Jk},
Mk=function(a,b,c){if(b){var d=sg(b);if(d&&1===Lk(a,b).status){Lk(a,b).status=2;var e={};Wh&&(e.timeoutId=F.setTimeout(function(){D(38);Ih()},3E3));a.push("require",[e],d.containerId);Ik[d.containerId]=La();if(vg()){}else{var h="/gtag/js?id="+
encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=qi(c,h)||k;Xc(l)}}}},Nk=function(a,b,c,d){if(d.aa){var e=Lk(a,d.aa),f=e.o;if(f){var h=m(c),k=m(e.targetConfig[d.aa]),l=m(e.containerConfig),n=m(e.i),p=m(a.i),r=qe("gtm.uniqueEventId"),t=sg(d.aa).prefix,q=zi(yi(xi(wi(vi(ui(ti(h),k),l),n),p),function(){Zh(r,t,"2");}),function(){
Zh(r,t,"3");});try{Zh(r,t,"1");f(d.aa,b,d.o,q)}catch(u){Zh(r,t,"4");}}}};
Dk.prototype.register=function(a,b,c){if(3!==Lk(this,a).status){Lk(this,a).o=b;Lk(this,a).status=3;c&&(Lk(this,a).i=c);var d=sg(a),e=Ik[d.containerId];if(void 0!==e){var f=L[d.containerId].bootstrap,h=d.prefix.toUpperCase();L[d.containerId]._spx&&(h=h.toLowerCase());var k=qe("gtm.uniqueEventId"),l=h,n=La()-f;if(Wh&&!Nh[k]){k!==Jh&&(Fh(),Jh=k);var p=l+"."+Math.floor(f-e)+"."+Math.floor(n);Rh=Rh?Rh+","+p:"&cl="+p}delete Ik[d.containerId]}this.flush()}};
Dk.prototype.push=function(a,b,c,d){var e=Math.floor(La()/1E3);Mk(this,c,b[0][C.Ga]||this.i[C.Ga]);this.h.push(new Kk(a,e,c,b,d));d||this.flush()};
Dk.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Lk(this,c.aa).status&&!a)return;Wh&&F.clearTimeout(c.h[0].timeoutId);break;case "set":Fa(c.h[0],function(p,r){m(Va(p,r),b.i)});break;case "config":var d=c.h[0],e=!!d[C.Zb];delete d[C.Zb];var f=Lk(this,c.aa),h=sg(c.aa),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.aa]={});f.h&&e||Nk(this,C.ia,d,c);f.h=!0;delete d[C.wb];k?m(d,f.containerConfig):
m(d,f.targetConfig[c.aa]);break;case "event":Nk(this,c.h[1],c.h[0],c);break;case "get":var l={},n=(l[C.xa]=c.h[0],l[C.wa]=c.h[1],l);Nk(this,C.Da,n,c);}this.h.shift()}};var Ok=!1,Pk=[];function Qk(){if(!Ok){Ok=!0;for(var a=0;a<Pk.length;a++)I(Pk[a])}}var Rk=function(a){Ok?I(a):Pk.push(a)};var Sk="HA GF G UA AW DC".split(" "),Tk=!1,Uk={},Vk=!1;function Wk(a,b){var c={event:a};b&&(c.eventModel=m(b),b[C.Kc]&&(c.eventCallback=b[C.Kc]),b[C.Wb]&&(c.eventTimeout=b[C.Wb]));return c}function Xk(){return Tk}
var $k={config:function(a){},event:function(a){var b=a[1];if(!(2>
a.length)&&g(b)){var c;if(2<a.length){if(!bb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=Wk(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Vk=!0,Xk(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&bb(a[1])?b=m(a[1]):3==a.length&&g(a[1])&&(b={},bb(a[2])||za(a[2])?b[a[1]]=m(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){Xk()&&m(a[2],{subcommand:a[1]})}if(3===a.length){D(39);var c=ke(),d=a[1];"default"===d?(b(),yd(a[2])):"update"===d&&(b(),zd(a[2],c))}}};
$k.get=function(a){};var al={policy:!0};
var bl=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},fl=function(a){var b=el(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var wl=function(a){if(vl(a))return a;this.h=a};wl.prototype.hh=function(){return this.h};var vl=function(a){return!a||"object"!==$a(a)||bb(a)?!1:"getUntrustedUpdateValue"in a};wl.prototype.getUntrustedUpdateValue=wl.prototype.hh;var xl=[],yl=!1,zl=function(a){return F["dataLayer"].push(a)},Al=function(a){var b=L["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};function Bl(a){var b=a._clear;Fa(a,function(d,e){"_clear"!==d&&(b&&te(d,void 0),te(d,e))});fe||(fe=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=ke(),a["gtm.uniqueEventId"]=c,te("gtm.uniqueEventId",c));return oi(a)}
function Cl(){for(var a=!1;!yl&&0<xl.length;){yl=!0;delete ne.eventModel;pe();var b=xl.shift();if(null!=b){var c=vl(b);if(c){var d=b;b=vl(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=qe(h,1);if(za(k)||bb(k))k=m(k);oe[h]=k}}try{if(xa(b))try{b.call(re)}catch(x){}else if(za(b)){var l=
b;if(g(l[0])){var n=l[0].split("."),p=n.pop(),r=l.slice(1),t=qe(n.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,r)}catch(x){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{var u=b;if(u.length&&g(u[0])){var v=$k[u[0]];if(v&&(!c||!al[u[0]])){b=v(u);break a}}b=void 0}if(!b){yl=!1;continue}}a=Bl(b)||a}}finally{c&&pe(!0)}}yl=!1}
return!a}function Dl(){var a=Cl();try{bl(F["dataLayer"],Yd.B)}catch(b){}return a}
var Fl=function(){var a=Vc("dataLayer",[]),b=Vc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};dh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Rk(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<L.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new wl(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);xl.push.apply(xl,e);if(300<
this.length)for(D(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return Cl()&&k};var d=a.slice(0);xl.push.apply(xl,d);El()&&I(Dl)},El=function(){var a=!0;return a};var Gl={};Gl.$b=new String("undefined");
var Hl=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Gl.$b?b:a[d]);return c.join("")}};Hl.prototype.toString=function(){return this.h("undefined")};Hl.prototype.valueOf=Hl.prototype.toString;Gl.og=Hl;Gl.$c={};Gl.Rg=function(a){return new Hl(a)};var Il={};Gl.Oh=function(a,b){var c=ke();Il[c]=[a,b];return c};Gl.Ve=function(a){var b=a?0:1;return function(c){var d=Il[c];if(d&&"function"===typeof d[b])d[b]();Il[c]=void 0}};Gl.ph=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Gl.Hh=function(a){if(a===Gl.$b)return a;var b=ke();Gl.$c[b]=a;return'google_tag_manager["'+Yd.B+'"].macro('+b+")"};Gl.Ah=function(a,b,c){a instanceof Gl.og&&(a=a.h(Gl.Oh(b,c)),b=wa);return{nd:a,H:b}};var Jl=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||cd(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Kl=function(a){L.hasOwnProperty("autoEventsSettings")||(L.autoEventsSettings={});var b=L.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Ll=function(a,b,c){Kl(a)[b]=c},Ml=function(a,b,c,d){var e=Kl(a),f=Ma(e,b,d);e[b]=c(f)},Nl=function(a,b,c){var d=Kl(a);return Ma(d,b,c)};var Ol=["input","select","textarea"],Pl=["button","hidden","image","reset","submit"],Ql=function(a){var b=a.tagName.toLowerCase();return!Ba(Ol,function(c){return c===b})||"input"===b&&Ba(Pl,function(c){return c===a.type.toLowerCase()})?!1:!0},Rl=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):fd(a,["form"],100)},Sl=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(Ql(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Tl=!!F.MutationObserver,Ul=void 0,Vl=function(a){if(!Ul){var b=function(){var c=H.body;if(c)if(Tl)(new MutationObserver(function(){for(var e=0;e<Ul.length;e++)I(Ul[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;ad(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<Ul.length;e++)I(Ul[e])}))})}};Ul=[];H.body?b():I(b)}Ul.push(a)};var gm=F.clearTimeout,hm=F.setTimeout,N=function(a,b,c){if(vg()){b&&I(b)}else return Xc(a,b,c)},im=function(){return new Date},jm=function(){return F.location.href},km=function(a){return Fe(He(a),"fragment")},lm=function(a){return Ge(He(a))},mm=function(a,b){return qe(a,b||2)},nm=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=zl(a)):d=zl(a);return d},om=function(a,b){F[a]=b},V=function(a,b,c){b&&
(void 0===F[a]||c&&!F[a])&&(F[a]=b);return F[a]},pm=function(a,b,c){return Le(a,b,void 0===c?!0:!!c)},qm=function(a,b,c){return 0===Ve(a,b,c)},rm=function(a,b){if(vg()){b&&I(b)}else Zc(a,b)},sm=function(a){return!!Nl(a,"init",!1)},tm=function(a){Ll(a,"init",!0)},um=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":de;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";N(xg("https://","http://",c))},vm=function(a,
b){var c=a[b];return c},wm=function(a,b,c){Wh&&(cb(a)||$h(c,b,a))};
var xm=Gl.Ah;function Um(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Vm=new Da;function Wm(a,b){function c(h){var k=He(h),l=Fe(k,"protocol"),n=Fe(k,"host",!0),p=Fe(k,"port"),r=Fe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,n,p,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Xm(a){return Ym(a)?1:0}
function Ym(a){var b=a.arg0,c=a.arg1;if(a.any_of&&za(c)){for(var d=0;d<c.length;d++){var e=m(a,{});m({arg1:c[d],any_of:void 0},e);if(Xm(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var h=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var k=0;k<h.length;k++)if(b[h[k]]){f=b[h[k]](c);break a}}catch(q){}}f=!1}return f;case "_ew":return Um(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Aa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var r=String(c)+p,t=Vm.get(r);t||(t=new RegExp(c,p),Vm.set(r,t));n=t.test(b)}catch(q){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Wm(b,c)}return!1};var Zm={},$m=encodeURI,X=encodeURIComponent,an=$c;var bn=function(a,b){if(!a)return!1;var c=Fe(He(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var cn=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Zm.qh=function(){var a=!1;return a};function no(){return F.gaGlobal=F.gaGlobal||{}}var oo=function(){var a=no();a.hid=a.hid||Ca();return a.hid},po=function(a,b){var c=no();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var To=window,Uo=document,Vo=function(a){var b=To._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===To["ga-disable-"+a])return!0;try{var c=To.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Je("AMP_TOKEN",String(Uo.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Uo.getElementById("__gaOptOutExtension")?!0:!1};function Yo(a){delete a.eventModel[C.wb];$o(a.eventModel)}var $o=function(a){Fa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[C.la]||{};Fa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var cp=function(a,b,c){Fk(b,c,a)},dp=function(a,b,c){Fk(b,c,a,!0)},gp=function(a,b){};
function fp(a,b){}var Y={a:{}};
Y.a.vis=["google"],function(){var a={};(function(b){Y.__vis=b;Y.__vis.b="vis";Y.__vis.g=!0;Y.__vis.priorityOverride=0})(function(b){var c,d=[];d.push("CSS"===b.vtp_selectorType?b.vtp_elementSelector:"#"+b.vtp_elementId);d.push(b.vtp_outputMethod);"BOOLEAN"==b.vtp_outputMethod&&d.push(b.vtp_onScreenRatio);c=d.join("&");var e=a[c],f=Number(im());if(e&&250>f-e.time)return e.value;e={time:f,value:null};var h=b.vtp_outputMethod,k=null;if("CSS"==b.vtp_selectorType){var l=Hd(b.vtp_elementSelector);l&&0<
l.length&&(k=l[0])}else k=H.getElementById(b.vtp_elementId);if(k)switch(h){case "BOOLEAN":var n=(Number(b.vtp_onScreenRatio)||50)/100;e.value=mj(k)>=n&&!kj(k);break;case "PERCENT":e.value=0,kj(k)||(e.value=Math.round(1E3*mj(k))/10)}a[c]=e;return e.value})}();Y.a.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.b="ctv";Y.__ctv.g=!0;Y.__ctv.priorityOverride=0})(function(){return"244"})}();

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");var d=c&&c.e&&c.e(b);wm(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.b="c";Y.__c.g=!0;Y.__c.priorityOverride=0})(function(a){wm(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Y.a.d=["google"],function(){(function(a){Y.__d=a;Y.__d.b="d";Y.__d.g=!0;Y.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Hd(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=H.getElementById(a.vtp_elementId);b&&(d?c=cd(b,d):c=dd(b));return Ja(String(b&&c))})}();
Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0;Y.__e.priorityOverride=0})(function(a){return String(ve(a.vtp_gtmEventId,"event"))})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.b="f";Y.__f.g=!0;Y.__f.priorityOverride=0})(function(a){var b=mm("gtm.referrer",1)||H.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Fe(He(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):lm(String(b)):String(b)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.b="j";Y.__j.g=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];wm(c,"j",a.vtp_gtmEventId);return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0;Y.__k.priorityOverride=0})(function(a){return pm(a.vtp_name,mm("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.b="r";Y.__r.g=!0;Y.__r.priorityOverride=0})(function(a){return Ca(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.b="u";Y.__u.g=!0;Y.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=mm("gtm.url",1);c=c||jm();var d=b[a("vtp_component")];if(!d||"URL"==d)return lm(String(c));var e=He(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;h?za(k)?n=k:n=String(k).replace(/\s+/g,
"").split(","):n=[String(k)];for(var p=0;p<n.length;p++){var r=Fe(e,"QUERY",void 0,void 0,n[p]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Fe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=mm(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;wm(d,"v",a.vtp_gtmEventId);return d})}();




Y.a.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.b="cid";Y.__cid.g=!0;Y.__cid.priorityOverride=0})(function(){return Yd.B})}();

Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.b="gas";Y.__gas.g=!0;Y.__gas.priorityOverride=0})(function(a){var b=m(a),c=b;c[Rb.Ha]=null;c[Rb.gg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();




Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.b="paused";Y.__paused.g=!0;Y.__paused.priorityOverride=0})(function(a){I(a.vtp_gtmOnFailure)})}();
Y.a.hid=["google"],function(){(function(a){Y.__hid=a;Y.__hid.b="hid";Y.__hid.g=!0;Y.__hid.priorityOverride=0})(function(){return Gl.$b})}();
Y.a.zone=[],function(){function a(p){for(var r=p.vtp_boundaries||[],t=0;t<r.length;t++)if(!r[t])return!1;return!0}function b(p){var r=Yd.B,t=r+":"+p.vtp_gtmTagId,q=mm("gtm.uniqueEventId")||0,u=Wg(function(){return new h}),v=a(p),x=p.vtp_enableTypeRestrictions?p.vtp_whitelistedTypes.map(function(E){return E.typeId}):null;x=x&&Qa(x,f);if(u.registerZone(t,q,v,x))for(var y=p.vtp_childContainers.map(function(E){return E.publicId}),w=0;w<y.length;w++){var A=String(y[w]);if(u.registerChild(A,r,t)){var z=
0!==A.indexOf("GTM-");if(z){var B=function(E,G){nm(arguments)};B("js",new Date);n?(B("config",A),l||um(A,z)):(L.addTargetToGroup(A),Gk({},A))}else um(A,z)}}}var c={active:!1,isAllowed:function(){return!1},sh:function(){return!1}},d={active:!0,isAllowed:function(){return!0},sh:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},h=function(){this.h={};this.i={}};h.prototype.checkState=function(p,r){var t=
this.h[p];if(!t)return d;var q=this.checkState(t.ff,r);if(!q.active)return c;for(var u=[],v=0;v<t.Md.length;v++){var x=this.i[t.Md[v]];x.Fb(r)&&u.push(x)}return u.length?{active:!0,isAllowed:function(y,w){w=w||[];var A=q.isAllowed;if(!A(y,w))return!1;for(var z=0;z<u.length;++z)if(u[z].isAllowed(y,w))return!0;return!1}}:c};h.prototype.unregisterChild=function(p){delete this.h[p]};h.prototype.registerZone=function(p,r,t,q){var u=this.i[p];if(u)return u.o(r,t),!1;if(!t)return!1;this.i[p]=new k(r,q);
return!0};h.prototype.registerChild=function(p,r,t){var q=this.h[p];if(!q&&L[p]||q&&q.ff!==r)return!1;if(q)return q.Md.push(t),!1;this.h[p]={ff:r,Md:[t]};return!0};var k=function(p,r){this.h=[{eventId:p,Fb:!0}];this.i=null;if(r){this.i={};for(var t=0;t<r.length;t++)this.i[r[t]]=!0}};k.prototype.o=function(p,r){var t=this.h[this.h.length-1];p<=t.eventId||t.Fb!=r&&this.h.push({eventId:p,Fb:r})};k.prototype.Fb=function(p){if(!this.h||0==this.h.length)return!1;for(var r=this.h.length-1;0<=r;r--)if(this.h[r].eventId<=
p)return this.h[r].Fb;return!1};k.prototype.isAllowed=function(p,r){r=r||[];if(!this.i||e[p]||this.i[p])return!0;for(var t=0;t<r.length;++t)if(this.i[r[t]])return!0;return!1};var l=!1;var n=!0;n=!1;(function(p){Y.__zone=p;Y.__zone.b="zone";Y.__zone.g=
!0;Y.__zone.priorityOverride=0})(function(p){b(p);I(p.vtp_gtmOnSuccess)})}();
Y.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var n=H.createElement("script");n.async=!1;n.type="text/javascript";n.id=k.id;n.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(n.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(n.src=p,Wc(n,l));d.insertBefore(n,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){I(h)}}}var c=function(d){if(H.body){var e=d.vtp_gtmOnFailure,f=xm(d.vtp_html,d.vtp_gtmOnSuccess,
e),h=f.nd,k=f.H;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(H.body,ed(h),k,e)()}else hm(function(){c(d)},200)};Y.__html=c;Y.__html.b="html";Y.__html.g=
!0;Y.__html.priorityOverride=0}();

Y.a.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.b="dbg";Y.__dbg.g=!0;Y.__dbg.priorityOverride=0})(function(){return!1})}();




Y.a.evl=["google"],function(){function a(){var f=Number(mm("gtm.start"))||0;return im().getTime()-f}function b(f,h,k,l){function n(){if(!kj(f.target)){h.has(d.cc)||h.set(d.cc,""+a());h.has(d.Xc)||h.set(d.Xc,""+a());var r=0;h.has(d.hc)&&(r=Number(h.get(d.hc)));r+=100;h.set(d.hc,""+r);if(r>=k){var t=Jl(f.target,"gtm.elementVisibility",[h.h]),q=mj(f.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(d.Xc));t["gtm.visibleLastTime"]=Number(h.get(d.cc));
nm(t);l()}}}if(!h.has(d.xb)&&(0==k&&n(),!h.has(d.Ta))){var p=V("self").setInterval(n,100);h.set(d.xb,p)}}function c(f){f.has(d.xb)&&(V("self").clearInterval(Number(f.get(d.xb))),f.i(d.xb))}var d={xb:"polling-id-",Xc:"first-on-screen-",cc:"recent-on-screen-",hc:"total-visible-time-",Ta:"has-fired-"},e=function(f,h){this.element=f;this.h=h};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.h)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.h)};e.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.h,h)};e.prototype.i=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.h)};(function(f){Y.__evl=f;Y.__evl.b="evl";Y.__evl.g=!0;Y.__evl.priorityOverride=0})(function(f){function h(){var y=!1,w=null;if("CSS"===l){try{w=Hd(n)}catch(G){D(46)}y=!!w&&v.length!=w.length}else if("ID"===l){var A=H.getElementById(n);A&&(w=[A],y=1!=v.length||v[0]!==A)}w||(w=[],y=0<v.length);if(y){for(var z=0;z<v.length;z++){var B=
new e(v[z],q);c(B)}v=[];for(var E=0;E<w.length;E++)v.push(w[E]);0<=x&&sj(x);0<v.length&&(x=rj(k,v,[t]))}}function k(y){var w=new e(y.target,q);y.intersectionRatio>=t?w.has(d.Ta)||b(y,w,r,"ONCE"===u?function(){for(var A=0;A<v.length;A++){var z=new e(v[A],q);z.set(d.Ta,"1");c(z)}sj(x);if(p&&Ul)for(var B=0;B<Ul.length;B++)Ul[B]===h&&Ul.splice(B,1)}:function(){w.set(d.Ta,"1");c(w)}):(c(w),"MANY_PER_ELEMENT"===u&&w.has(d.Ta)&&(w.i(d.Ta),w.i(d.hc)),w.i(d.cc))}var l=f.vtp_selectorType,n;"ID"===l?n=String(f.vtp_elementId):
"CSS"===l&&(n=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],x=-1;h();p&&Vl(h);I(f.vtp_gtmOnSuccess)})}();


var hp={};hp.macro=function(a){if(Gl.$c.hasOwnProperty(a))return Gl.$c[a]},hp.onHtmlSuccess=Gl.Ve(!0),hp.onHtmlFailure=Gl.Ve(!1);hp.dataLayer=re;hp.callback=function(a){ie.hasOwnProperty(a)&&xa(ie[a])&&ie[a]();delete ie[a]};hp.bootstrap=0;hp._spx=!1;function ip(){L[Yd.B]=hp;Oa(je,Y.a);Ib=Ib||Gl;Jb=Wb}
function jp(){id.gtm_3pds=!0;id.gtag_cs_api=!0;L=F.google_tag_manager=F.google_tag_manager||{};ej();if(L[Yd.B]){var a=L.zones;a&&a.unregisterChild(Yd.B);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)Bb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Eb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Db.push(h[k]);for(var l=b.rules||[],n=0;n<l.length;n++){for(var p=l[n],r={},t=0;t<p.length;t++)r[p[t][0]]=Array.prototype.slice.call(p[t],1);Cb.push(r)}Gb=Y;Hb=Xm;ip();Fl();Zg=!1;$g=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)bh();else{ad(H,"DOMContentLoaded",bh);ad(H,"readystatechange",bh);if(H.createEventObject&&H.documentElement.doScroll){var q=
!0;try{q=!F.frameElement}catch(w){}q&&ch()}ad(F,"load",bh)}Ok=!1;"complete"===H.readyState?Qk():ad(F,"load",Qk);a:{if(!Wh)break a;F.setInterval(Xh,864E5);}ge=(new Date).getTime();}}
(function(a){var e=!0;
e=!1;if(e){a();return}var f=function(){var n=F["google.tagmanager.debugui2.queue"];n||(n=[],F["google.tagmanager.debugui2.queue"]=n,Xc("https://www.googletagmanager.com/debug/bootstrap"));return n},h="x"===Fe(F.location,"query",
!1,void 0,"gtm_debug");if(!h&&H.referrer){var k=He(H.referrer);h="tagassistant.google.com"===Ee(k,"host")}if(!h){var l=Le("__TAG_ASSISTANT");h=l.length&&l[0].length}F.__TAG_ASSISTANT_API&&(h=!0);if(h&&Uc){f().push({messageType:"CONTAINER_STARTING",data:{scriptSource:Uc,resume:function(){a()}}});return}a()})(jp);

})()
