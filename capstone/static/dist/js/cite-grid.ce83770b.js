(function(t){function e(e){for(var i,a,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={"cite-grid":0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;o.push([9,"chunk-common"]),n()})({"00be":function(t,e,n){"use strict";var i=n("4d40"),r=n.n(i);r.a},"0674":function(t,e,n){"use strict";var i=n("c130"),r=n("41e6");t.exports="".repeat||function(t){var e=String(r(this)),n="",o=i(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},"42d8":function(t,e,n){var i=n("7d22");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"4d40":function(t,e,n){},6440:function(t,e,n){"use strict";var i=n("2513"),r=n("c130"),o=n("42d8"),a=n("0674"),s=n("fa22"),c=1..toFixed,u=Math.floor,d=function(t,e,n){return 0===e?n:e%2===1?d(t,e-1,n*t):d(t*t,e/2,n)},l=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));i({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,n,i,s,c=o(this),f=r(t),h=[0,0,0,0,0,0],v="",p="0",m=function(t,e){var n=-1,i=e;while(++n<6)i+=t*h[n],h[n]=i%1e7,i=u(i/1e7)},b=function(t){var e=6,n=0;while(--e>=0)n+=h[e],h[e]=u(n/t),n=n%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var n=String(h[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=l(c*d(2,69,1))-69,n=e<0?c*d(2,-e,1):c/d(2,e,1),n*=4503599627370496,e=52-e,e>0){m(0,n),i=f;while(i>=7)m(1e7,0),i-=7;m(d(10,i,1),0),i=e-1;while(i>=23)b(1<<23),i-=23;b(1<<i),m(1,1),b(2),p=g()}else m(0,n),m(1<<-e,0),p=g()+a.call("0",f);return f>0?(s=p.length,p=v+(s<=f?"0."+a.call("0",f-s)+p:p.slice(0,s-f)+"."+p.slice(s-f))):p=v+p,p}})},9:function(t,e,n){t.exports=n("dd42")},dd42:function(t,e,n){"use strict";n.r(e);var i=n("a4b5"),r=n("4af9"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h2",[t._v("Map view")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-md-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"hoveredJurSelect"}},[t._v("Selected jurisdiction:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.hoveredJur,expression:"hoveredJur"}],staticClass:"form-control",attrs:{id:"hoveredJurSelect"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.hoveredJur=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[t._v("Select one, or hover on the map")]),t._l(t.jurisdictions,(function(e){return n("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e.name_long))])}))],2)]),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mapDirection,expression:"mapDirection"}],staticClass:"form-check-input",attrs:{type:"radio",id:"mapDirectionInbound",value:"inbound"},domProps:{checked:t._q(t.mapDirection,"inbound")},on:{change:function(e){t.mapDirection="inbound"}}}),n("label",{staticClass:"form-check-label",attrs:{for:"mapDirectionInbound"}},[t._v("Inbound citations")])]),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mapDirection,expression:"mapDirection"}],staticClass:"form-check-input",attrs:{type:"radio",id:"mapDirectionOutbound",value:"outbound"},domProps:{checked:t._q(t.mapDirection,"outbound")},on:{change:function(e){t.mapDirection="outbound"}}}),n("label",{staticClass:"form-check-label",attrs:{for:"mapDirectionOutbound"}},[t._v("Outbound citations")])]),n("div",{attrs:{id:"hovered-map-message"}},[t.hoveredJur?n("span",[t._v(" Darker states are more likely to "+t._s("inbound"===t.mapDirection?"cite to":"be cited by")+" "+t._s(t.hoveredJur.name_long)+". ")]):n("span",[t._v(" Hover over a state to see what other states "+t._s("inbound"===t.mapDirection?"most often cite it":"it most often cites")+". ")])])]),n("div",{staticClass:"col-lg-9 col-md-12",attrs:{"aria-label":"United States map showing frequency of citations from one jurisdiction to another by color"}},[n("div",{attrs:{"aria-hidden":"true"}},[n("USMap",{staticClass:"map",on:{mouseover:t.mapMouseover,mouseleave:t.mapMouseleave}})],1)])]),n("h2",[t._v("Grid view")]),n("p",[t._v(" This grid shows what percentage of the citations "),n("i",[t._v("by")]),t._v(" each state on the left are "),n("i",[t._v("to")]),t._v(' each state on the top. For example, the square in the row marked "Alaska" and column marked "Cal." indicates that 2.5% of all citations extracted from Alaska cases are to California cases. '),n("a",{attrs:{href:"#",download:"cite-grid.csv"},on:{click:t.csvDownloadClicked,contextmenu:t.csvDownloadClicked}},[t._v("Download CSV")]),t._v(". ")]),n("div",[t._v(" Coloring of each square is logarithmic to emphasize the range between 0 and 10%:"),n("br"),t._v(" 0% "),n("div",{staticStyle:{display:"inline-block","background-color":"white"}},t._l(20,(function(e){return n("span",{key:e,style:{backgroundColor:t.percentageColor((e-1)/2),width:"1em",display:"inline-block"},attrs:{title:(e-1)/2+"%"}})})),0),t._v(" 10% ")]),n("p",[t._v(" Hover over a grid square for details: ")]),n("div",{staticClass:"table-scroll"},[t.dataLoaded?n("table",[n("tr",[n("th",{class:{"top-header":!0,"left-header":!0,disabled:t.selfDisabled},on:{click:function(e){t.selfDisabled=!t.selfDisabled}}},[t.hoveredGridMessage?n("div",{staticClass:"hovered-grid-message"},[t._v(t._s(t.hoveredGridMessage))]):t._e(),n("div",[t._v("Self")])]),t._l(t.jurisdictions,(function(e){return n("th",{key:e.id,class:{rotate:!0,"top-header":!0,disabled:t.disabled[e.id]},attrs:{scope:"col"},on:{click:function(n){return t.toggleJurisdiction(e)}}},[n("div",[t._v(t._s(e.name))])])}))],2),t._l(t.jurisdictions,(function(e){return n("tr",{key:e.id},[n("th",{staticClass:"left-header",attrs:{scope:"row"}},[t._v(t._s(e.name))]),t._l(t.jurisdictions,(function(i){return n("td",{key:i.id,style:{backgroundColor:t.countColor(e,i)},attrs:{title:t.hoverText(e,i)},on:{mouseover:function(n){t.hoveredGridMessage=t.hoverText(e,i)},mouseleave:function(e){t.hoveredGridMessage=null}}})}))],2)}))],2):t._e()])])])},a=[],s=(n("862d"),n("9588"),n("966c"),n("c770"),n("0ffc"),n("6440"),n("cd24"),n("241c"),n("f542"),n("68d6")),c=n("e82c"),u=n("57d2"),d=(n("c1c3"),n("7a28")),l=n("4428"),f=n.n(l),h=n("0afd"),v=n("376f"),p=function(t,e){return t.reduce((function(t,n){return t[e(n)]=n,t}),{})},m=function(t){return t.reduce((function(t,e){return t+(e||0)}),0)},b={name:"Main",components:{USMap:v["a"]},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getJSON("jurisdictions.json");case 2:t.jurisdictions=e.sent,n=Object(u["a"])(t.jurisdictions);try{for(n.s();!(i=n.n()).done;)r=i.value,r.id=r.id.toString()}catch(o){n.e(o)}finally{n.f()}return t.jurisdictionsById=p(t.jurisdictions,(function(t){return t.id})),t.jurisdictionsBySlug=p(t.jurisdictions,(function(t){return t.slug})),t.jurisdictionsNotOnMap=p(t.jurisdictions.filter((function(t){return null===document.getElementById(t.slug)})),(function(t){return t.id})),e.next=10,t.getJSON("totals.json");case 10:t.totals=e.sent,t.dataLoaded=!0;case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{jurisdictions:null,totals:null,totalsByYear:null,selfDisabled:!1,disabled:{},dataLoaded:!1,detailJurisdiction:null,hoveredJur:null,mapDirection:"inbound",hoveredGridMessage:null}},watch:{hoveredJur:function(t){if(t){var e=t.id,n=document.getElementById(t.slug);n.style.fillOpacity=1,n.classList.add("focused");var i,r="inbound"===this.mapDirection?this.inboundCounts:this.outboundCounts,o=Math.max.apply(Math,Object(c["a"])(r(e,this.jurisdictionsNotOnMap))),a=Object(u["a"])(this.jurisdictions);try{for(a.s();!(i=a.n()).done;){var s=i.value;if(s.id!==e){var d="inbound"===this.mapDirection?this.totals[s.id][e]:this.totals[e][s.id],l=document.getElementById(s.slug);l&&(l.style.fillOpacity=d/o,l.classList.remove("focused"))}}}catch(f){a.e(f)}finally{a.f()}}}},methods:{getJSON:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["b"])("/download/citation_graph/2020-05-08/aggregations/"+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},citePercentage:function(t,e){var n=this.jurisdictionsById[t.id].cites,i=0;return n&&(i=(this.totals[t.id][e.id]||0)/n*100),i?i.toFixed(1):0},countColor:function(t,e){return this.percentageColor(this.citePercentage(t,e))},percentageColor:function(t){return"rgba(44, 96, 255, ".concat(this.logPercentage(t),"%)")},hoverText:function(t,e){var n=this.citePercentage(t,e);return"".concat(this.jurisdictionsById[t.id].name," cites ").concat(this.jurisdictionsById[e.id].name," ").concat(n,"%")},toggleJurisdiction:function(t){this.disabled[t.id]?this.$delete(this.disabled,t.id):this.$set(this.disabled,t.id,!0)},inboundCounts:function(t,e){return e||(e={}),Object.entries(this.totals).filter((function(n){var i=Object(s["a"])(n,2),r=i[0],o=i[1];return r!==t&&!e[r]&&o[t]>0})).map((function(e){var n=Object(s["a"])(e,2),i=(n[0],n[1]);return i[t]}))},outboundCounts:function(t,e){return e||(e={}),Object.entries(this.totals[t]).filter((function(n){var i=Object(s["a"])(n,2),r=i[0],o=i[1];return r!==t&&!e[r]&&o>0})).map((function(t){var e=Object(s["a"])(t,2),n=(e[0],e[1]);return n}))},totalInbound:function(t){return m(this.inboundCounts(t))},totalOutbound:function(t){return m(this.outboundCounts(t))},mapMouseover:function(t){if(this.dataLoaded){var e=t.target;e.classList.contains("state")&&(this.hoveredJur=this.jurisdictionsBySlug[e.parentElement.id])}},mapMouseleave:function(t){},logPercentage:function(t){return t<.1?t:(Math.log(t)-Math.log(.1))/(Math.log(100)-Math.log(.1))*100},csvDownloadClicked:function(t){var e=this,n=[];n.push([""].concat(Object(c["a"])(this.jurisdictions.map((function(t){return t.name_long})))));var i,r=Object(u["a"])(this.jurisdictions);try{var o=function(){var t=i.value;n.push([t.name_long].concat(Object(c["a"])(e.jurisdictions.map((function(n){return e.citePercentage(t,n)})))))};for(r.s();!(i=r.n()).done;)o()}catch(a){r.e(a)}finally{r.f()}n="data:text/csv;base64,"+btoa(f()(n)),t.currentTarget.href=n}}},g=b,y=(n("00be"),n("a6c2")),_=Object(y["a"])(g,o,a,!1,null,"79289054",null),j=_.exports;i["default"].config.devtools=!0,i["default"].config.productionTip=!1,i["default"].use(r["a"]);var w=new r["a"]({mode:"history",base:"/exhibits/cite-grid/",routes:[{path:"/",component:j,name:"main"},{path:"*",redirect:"/"}]});new i["default"]({el:"#app",components:{Main:j},template:"<Main/>",router:w})}});
//# sourceMappingURL=cite-grid.ce83770b.js.map