(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{EDuE:function(e,a,t){e.exports={normal:"normal___HWRKS",error:"error___1xQ9Z",timeline:"timeline___1RaW7"}},QeBL:function(e,a,t){"use strict";t.r(a);t("g9YV");var r=t("wCAj"),s=(t("T2oS"),t("W9HT")),n=(t("fOrg"),t("+KLJ")),o=t("qIgq"),c=t.n(o),i=t("q1tI"),l=t.n(i),j=t("n+Aq"),u=t("wd/R"),m=t.n(u),p=t("d6i3"),d=t.n(p),h=t("1l/V"),y=t.n(h),f=t("Qyje"),v=t("p0pE"),g=t.n(v),b=t("vDqi"),k=t.n(b),z=(e,a)=>{return k()(g()({},a,{url:e})).then(e=>e.data)},E=z,w=t("7EGn");function O(){return x.apply(this,arguments)}function x(){return x=y()(d.a.mark(function e(){return d.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",E("https://lab.ahusmart.com/nCoV/api/provinceName").then(e=>Object(w["a"])(e,"results")));case 1:case"end":return e.stop()}},e)})),x.apply(this,arguments)}function C(e,a){return D.apply(this,arguments)}function D(){return D=y()(d.a.mark(function e(a,t){return d.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",E("https://lab.ahusmart.com/nCoV/api/area?".concat(Object(f["stringify"])(a)),t).then(e=>Object(w["a"])(e,"results")));case 1:case"end":return e.stop()}},e)})),D.apply(this,arguments)}function S(e,a){return V.apply(this,arguments)}function V(){return V=y()(d.a.mark(function e(a,t){return d.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",E("https://lab.ahusmart.com/nCoV/api/overall?".concat(Object(f["stringify"])(a)),t).then(e=>Object(w["a"])(e,"results")));case 1:case"end":return e.stop()}},e)})),V.apply(this,arguments)}var Y="\u5168\u56fd",R="\u603b\u8ba1";function I(e){if(!e)return{};var a=Q(e),t={[R]:[]};return a.forEach(e=>{var a=e.updateTime;M(t[R],e,a)}),t}function K(e){if(!e)return{};var a=Q(e),t={};return t[R]=[],a.forEach(e=>{var a=e.updateTime,r=e.cities;M(t[R],e,a),(r||[]).forEach(e=>{var r=e.cityName;t[r]||(t[r]=[]),M(t[r],e,a)})}),t}function Q(e){var a={};return e.filter(e=>e.confirmedCount>0).forEach(e=>{var t=m()(e.updateTime).format("YYYY-MM-DD");a[t]=e}),Object.values(a)}function M(e,a,t){var r=a.confirmedCount,s=B(e,r),n=c()(s,2),o=n[0],i=n[1];e.push(g()({updateTime:t},a,{growthCount:o,growthRate:i}))}function B(e,a){var t=0,r=0,s=e.length;if(s){var n=e[s-1];t=a-n.confirmedCount,r=t/n.confirmedCount}return[t,r]}function F(e){return e===Y?S({latest:0}):C({province:e,latest:0})}function U(e,a){return a===Y?I(e):K(e)}var A=e=>{var a=Object(j["a"])(()=>F(e),[e]),t=a.data,r=a.loading,s=a.error,n=Object(i["useMemo"])(()=>U(t,e),[t,e]);return[n,r,s]},J=A,T=(t("OaEy"),t("2fM7")),N=t("Y1II"),X=t.n(N),P=T["a"].Option,W=e=>{var a=e.areas,t=e.cities,r=e.defaultValue,s=e.onChange,n=Object(i["useState"])(r),o=c()(n,2),j=o[0],u=o[1],m=e=>{var a={area:e,city:R};u(a),s(a)},p=e=>{var a={area:j.area,city:e};u(a),s(a)};return l.a.createElement("div",null,l.a.createElement(T["a"],{className:X.a.select,value:j.area,onChange:m,showSearch:!0},a.map(e=>l.a.createElement(P,{key:e},e))),l.a.createElement(T["a"],{className:X.a.select,value:j.city,onChange:p,showSearch:!0},t.map(e=>l.a.createElement(P,{key:e},e))))},Z=l.a.memo(W),L=t("yP6+"),_=t("cQSq"),G=e=>{var a=e.data,t=e.timeKey,r=e.valueKey,s=e.height,n=e.scale,o=e.transforms,c=e.color,i=e.size,j=e.pointSize,u=e.shape,m=new _,p=m.createView().source(a||[]);return o.forEach(e=>{p.transform(e)}),l.a.createElement(L["Chart"],{height:s,data:p,scale:n,forceFit:!0,padding:"auto"},l.a.createElement(L["Tooltip"],null),l.a.createElement(L["Axis"],{name:t}),l.a.createElement(L["Axis"],{name:r}),l.a.createElement(L["Legend"],null),l.a.createElement(L["Geom"],{type:"line",position:"".concat(t,"*").concat(r),size:i,color:c,shape:u}),l.a.createElement(L["Geom"],{type:"point",position:"".concat(t,"*").concat(r),size:j,shape:"circle",color:c}))};G.defaultProps={height:300,valueKey:"value",categoryKey:"category",color:"category",size:2,pointSize:3,shape:"smooth",transforms:[]};var q=l.a.memo(G),H=t("EDuE"),$=t.n(H),ee="count",ae="updateTime",te="category",re={confirmedCount:"\u786e\u8bca",growthCount:"\u65b0\u589e",deadCount:"\u6b7b\u4ea1",curedCount:"\u6cbb\u6108"},se={"\u786e\u8bca":"#F04864","\u65b0\u589e":"#1890FF","\u7591\u4f3c":"#FACC14","\u6b7b\u4ea1":"#4d5054","\u6cbb\u6108":"#2FC25B"},ne=[te,e=>se[e]],oe=[{type:"rename",map:re},{type:"fold",fields:Object.values(re),key:te,value:ee},{type:"filter",callback(e){return e[ee]>0}}],ce=[{title:"\u65f6\u95f4",dataIndex:ae,key:ae,render:e=>m()(e).format("M.D"),sorter:(e,a)=>e[ae]-a[ae],defaultSortOrder:"descend"}];ce.push(...Object.keys(re).map(e=>({title:re[e],dataIndex:e,key:e,render:e=>e?e.toString():"-"}))),ce.splice(3,0,{title:"\u589e\u957f\u7387",dataIndex:"growthRate",key:"growthRate",render:e=>e?"".concat((100*e).toFixed(2),"%"):"-"});var ie={area:Y,city:R};a["default"]=function(){var e=Object(j["a"])(O,[]),a=e.data,t=void 0===a?[]:a,o=(e.loading,e.error),u=Object(i["useState"])(ie),m=c()(u,2),p=m[0],d=m[1],h=J(p.area),y=c()(h,3),f=y[0],v=y[1],g=y[2],b=Object.keys(f||{}),k=Object(w["a"])(f,p.city)||[],z={[ee]:{type:"linear",alias:"\u4eba\u6570"},[ae]:{type:"timeCat",alias:"\u65f6\u95f4",mask:"M.D",tickCount:k.length},[te]:{type:"cat",alias:"\u7c7b\u578b"}};return l.a.createElement("div",{className:$.a.normal},o&&l.a.createElement(n["a"],{message:"\u9519\u8bef\uff1a\u83b7\u53d6\u533a\u57df\u5217\u8868\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5",type:"error",className:$.a.error}),l.a.createElement(Z,{areas:[Y].concat(t),cities:b,defaultValue:ie,onChange:d}),g&&l.a.createElement(n["a"],{message:"\u9519\u8bef\uff1a\u83b7\u53d6\u5730\u533a\u5386\u53f2\u6570\u636e\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5",type:"error",className:$.a.error}),v?l.a.createElement(s["a"],null):l.a.createElement("div",{className:$.a.timeline},l.a.createElement(q,{data:k,valueKey:ee,timeKey:ae,categoryKey:te,scale:z,transforms:oe,color:ne})),l.a.createElement(r["a"],{dataSource:k,rowKey:ae,columns:ce,pagination:{pageSize:20,hideOnSinglePage:!0},scroll:{x:420},size:"small",loading:v,bordered:!0}))}},RnhZ:function(e,a,t){var r={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-SG":"zavE","./en-SG.js":"zavE","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function s(e){var a=n(e);return t(a)}function n(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id="RnhZ"},Y1II:function(e,a,t){e.exports={select:"select___2-V26"}}}]);