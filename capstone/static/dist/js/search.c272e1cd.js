(function(e){function t(t){for(var s,i,o=t[0],l=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],a[i]&&f.push(a[i][0]),a[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(f.length)f.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},a={search:0},n=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;n.push([4,"chunk-common"]),r()})({"0629":function(e,t,r){"use strict";var s=r("e5f3"),a=r.n(s);t["default"]=a.a},"0838":function(e,t,r){"use strict";var s=r("08fb"),a=r("856f"),n=r("a6c2"),i=Object(n["a"])(a["default"],s["a"],s["b"],!1,null,null,null);t["default"]=i.exports},"08fb":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"result"},[r("div",{staticClass:"result-title row"},[r("div",{staticClass:"col-md-9"},[r("a",{staticClass:"simple",attrs:{target:"_blank",href:e.$parent.metadata_view_url("jurisdiction",e.result.id)},domProps:{textContent:e._s(e.result.name_long)}})]),r("div",{staticClass:"col-md-3 decision-date"},[r("a",{staticClass:"see-cases",on:{click:function(t){return e.$parent.$emit("see-cases","jurisdiction",e.result.slug)}}},[e._v("\n          See cases\n        ")])])])])},a=[];r.d(t,"a",function(){return s}),r.d(t,"b",function(){return a})},"1cd0":function(e,t,r){"use strict";var s=r("f519"),a=r.n(s);t["default"]=a.a},"207d":function(e,t,r){var s=r("ffa2");s(s.S+s.F*!r("9419"),"Object",{defineProperty:r("78e5").f})},"251f":function(e,t){e.exports={props:["result"]}},"2f77":function(e,t,r){"use strict";var s=r("e1b2"),a=r("0629"),n=r("a6c2"),i=Object(n["a"])(a["default"],s["a"],s["b"],!1,null,null,null);t["default"]=i.exports},"31b0":function(e,t,r){"use strict";var s=r("f789"),a=r("1cd0"),n=r("a6c2"),i=Object(n["a"])(a["default"],s["a"],s["b"],!1,null,null,null);t["default"]=i.exports},4:function(e,t,r){e.exports=r("98d8")},"53ca":function(e,t,r){"use strict";var s=r("5fa5"),a=r("6fc4"),n=r("5271"),i=r("13b5"),o=[].sort,l=[1,2,3];s(s.P+s.F*(i(function(){l.sort(void 0)})||!i(function(){l.sort(null)})||!r("ffaa")(o)),"Array",{sort:function(e){return void 0===e?o.call(n(this)):o.call(n(this),a(e))}})},"6f3b":function(e,t,r){r("207d");var s=r("4da1").Object;e.exports=function(e,t,r){return s.defineProperty(e,t,r)}},8478:function(e,t,r){e.exports=r("6f3b")},"856f":function(e,t,r){"use strict";var s=r("251f"),a=r.n(s);t["default"]=a.a},"98d8":function(e,t,r){"use strict";r.r(t);var s=r("a4b5"),a=r("4af9"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-page"},[r("search-form",{ref:"searchform",staticClass:"bg-tan",attrs:{field_errors:e.field_errors,search_error:e.search_error,showLoading:e.showLoading,endpoint:e.endpoint,urls:e.urls,choices:e.choices},on:{"new-search":e.newSearch}}),r("result-list",{attrs:{last_page:e.last_page,first_page:e.first_page,page:e.page,results:e.results,first_result_number:e.first_result_number,last_result_number:e.last_result_number,showLoading:e.showLoading,endpoint:e.endpoint,hitcount:e.hitcount,urls:e.urls},on:{"see-cases":e.seeCases,"next-page":e.nextPage,"prev-page":e.prevPage}})],1)},i=[],o=r("8478"),l=r.n(o);function u(e,t,r){return t in e?l()(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("0dbc"),r("1a43"),r("fa38"),r("0012"),r("53ca"),r("5b54"),r("2bf3"),r("ef92");var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"row",on:{submit:function(t){return t.preventDefault(),e.$emit("new-search",e.fields,e.endpoint)}}},[r("div",{staticClass:"col-md-3"},[r("h1",{staticClass:"page-title"},[r("img",{staticClass:"decorative-arrow",attrs:{alt:"","aria-hidden":"true",src:e.urls.static+"img/arrows/violet-arrow-right.svg"}}),e._v("\n      Find\n    ")])]),r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-7"},[r("searchroutes",{attrs:{endpoint:e.endpoint,endpoints:e.endpoints}}),r("br"),e.search_error?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[r("p",[e._v(e._s(e.search_error))]),r("h2",{staticClass:"sr-only",attrs:{id:"form-errors-heading",tabindex:"-1"}},[e._v(e._s(e.search_error))])]):e._e(),Object.keys(e.field_errors).length?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[r("p",[e._v("Please correct the following "+e._s(Object.keys(e.field_errors).length)+" error(s):")]),r("h2",{staticClass:"sr-only",attrs:{id:"form-errors-heading",tabindex:"-1"}},[e._v("\n            Please correct the following "+e._s(Object.keys(e.field_errors).length)+" error(s)")]),r("ul",{staticClass:"bullets"},e._l(e.field_errors,function(t,s){return r("li",{key:"error"+s},[r("a",{attrs:{href:"#"+s}},[e._v(e._s(e.getFieldByName(s).label)+":")]),e._v(" "+e._s(t)+"\n            ")])}),0)]):e._e(),e._l(e.fields,function(t){return r("div",{key:t.name,staticClass:"row field-row",class:{"alert-danger":e.field_errors.hasOwnProperty(t["name"])}},[r("div",{staticClass:"col-4 field_label_container"},[r("label",{staticClass:"querylabel",attrs:{for:t["name"]}},[e._v("\n              "+e._s(t["label"])+"\n            ")])]),r("div",{staticClass:"col-7"},[t["choices"]?[r("select",{directives:[{name:"model",rawName:"v-model",value:t["value"],expression:'field["value"]'}],attrs:{id:t["name"]},on:{change:function(r){var s=Array.prototype.filter.call(r.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(t,"value",r.target.multiple?s:s[0])}}},e._l(e.choices[t["choices"]],function(t){return r("option",{key:t[1],domProps:{value:t[0]}},[e._v("\n                  "+e._s(t[1])+"\n                ")])}),0)]:[r("input",{directives:[{name:"model",rawName:"v-model",value:t["value"],expression:'field["value"]'}],class:["queryfield",e.field_errors[t.name]?"is-invalid":""],attrs:{type:"text",id:t["name"],placeholder:t["format"]||!1},domProps:{value:t["value"]},on:{input:function(r){r.target.composing||e.$set(t,"value",r.target.value)}}})],t.info?r("small",{staticClass:"form-text text-muted",attrs:{id:"help-text-"+t.name}},[e._v(e._s(t.info))]):e._e(),e.field_errors[t.name]?r("div",{staticClass:"invalid-feedback"},[e._v("\n              "+e._s(e.field_errors[t.name])+"\n            ")]):e._e()],2),r("div",{staticClass:"col-1"},[r("button",{class:[e.fields.length<=1?"disabled":"active","field-button"],attrs:{type:"button",disabled:e.fields.length<=1},on:{click:function(r){return e.removeField(t.name)}}})])])}),r("div",{staticClass:"row"},[r("div",{staticClass:"col-3"}),r("div",{staticClass:"col-8"},[r("div",{staticClass:"submit-button-group"},[r("loading-button",{attrs:{showLoading:e.showLoading}},[e._v("Search")])],1),e.fields.length>0?r("div",{staticClass:"dropdown addfield"},[r("button",{staticClass:"dropdown-toggle add-field-button btn-secondary",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n            Add Field \n          ")]),r("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},e._l(e.availableFields(),function(t){return r("button",{key:t.name,staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(r){return e.addField(t)}}},[e._v("\n              "+e._s(t.label)+"\n            ")])}),0)]):e._e()]),r("div",{staticClass:"col-1"})])],2),r("div",{staticClass:"col-lg-5 search-disclaimer"},[r("p",[e._v("\n          Searching U.S. caselaw published through mid-2018. "),r("a",{attrs:{href:e.urls.search_docs}},[e._v("Documentation")]),e._v("."),r("br")]),r("p",[r("span",{staticClass:"bold"},[e._v("Need legal advice?")]),e._v(" This is not your best option! Read about\n          "),r("a",{attrs:{href:e.urls.search_docs+"#research"}},[e._v("our limitations and alternatives")]),e._v(".\n        ")])])])])])},d=[],f=(r("a0c4"),r("e9de"),r("8ade"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"dropdown dropdown-search-routes col-12"},[r("button",{staticClass:"btn dropdown-toggle dropdown-title",attrs:{type:"button",id:"search-routes-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false","aria-describedby":"overview"}},[e._v("\n      "+e._s(e.endpoint)+"\n    ")]),r("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"search-routes-dropdown"}},e._l(Object.keys(e.endpoints),function(t){return r("button",{key:t,class:["dropdown-item","search-tab",t===e.endpoint?"active":""],attrs:{type:"button"},on:{click:function(r){return e.changeEndpoint(t)}}},[e._v("\n        "+e._s(t)+"\n      ")])}),0)])])}),p=[],h={name:"searchroutes",props:["endpoint","endpoints"],methods:{changeEndpoint:function(e){this.$router.push({name:"endpoint",params:{endpoint:e}})}}},m=h,v=r("a6c2"),g=Object(v["a"])(m,f,p,!1,null,null,null),_=g.exports,b=r("52d6"),C={components:{searchroutes:_,LoadingButton:b["a"]},data:function(){return{query:[],newfield:null,page_size:10,fields:[],endpoints:{cases:[{name:"search",value:"",label:"Full-Text Search",default:!0,format:"e.g. library",info:"Terms stemmed and combined using AND. Words in quotes searched as phrases."},{name:"name_abbreviation",label:"Case Name Abbreviation",value:"",format:"e.g. Taylor v. Sprinkle"},{name:"decision_date_min",label:"Decision Date Earliest",format:"YYYY-MM-DD"},{name:"decision_date_max",value:"",label:"Decision Date Latest",format:"YYYY-MM-DD"},{name:"docket_number",value:"",label:"Docket Number",format:"e.g. Civ. No. 74-289"},{name:"cite",value:"",label:"Citation",format:"e.g. 1 Ill. 17"},{name:"reporter",value:"",label:"Reporter",choices:"reporter"},{name:"court",value:"",label:"Court",format:"e.g. ill-app-ct",hidden:!0},{name:"court_id",value:"",label:"Court ID",format:""},{name:"jurisdiction",value:"",label:"Jurisdiction",choices:"jurisdiction"}],courts:[{name:"id",value:"",label:"ID",format:""},{name:"slug",value:"",label:"Slug",format:"e.g. ill-app-ct"},{name:"name",value:"",label:"Name",format:"e.g. 'Illinois Supreme Court'"},{name:"name_abbreviation",value:"",format:"e.g. 'Ill.'",label:"Name Abbreviation"},{name:"jurisdiction",value:"",label:"Jurisdiction",choices:"jurisdiction",default:!0}],jurisdictions:[{name:"id",value:"",format:"e.g. 47",label:"Database ID"},{name:"name",value:"",label:"Name",format:"e.g. 'Ill.'"},{name:"name_long",value:"",label:"Long Name",format:"e.g. 'Illinois'",default:!0},{name:"whitelisted",value:"",label:"Whitelisted Jurisdiction",choices:"whitelisted",info:"Whitelisted jurisdictions are not subject to the 500 case per day access limitation."}],reporters:[{name:"full_name",value:"",label:"Full Name",format:"e.g. 'Illinois Appellate Court Reports'"},{name:"short_name",value:"",label:"Short Name",format:"e.g. 'Ill. App.'"},{name:"start_year",value:"",label:"Start Year",format:"e.g. '1893'",info:"Year in which the reporter began publishing."},{name:"end_year",value:"",label:"End Year",format:"e.g. '1894'",info:"Year in which the reporter stopped publishing."},{name:"jurisdiction",value:"",label:"Jurisdiction",choices:"jurisdiction",default:!0}]}}},props:["choices","search_error","field_errors","urls","showLoading","endpoint"],methods:{removeField:function(e){this.fields=this.fields.filter(function(t){return t.name!==e})},addField:function(e){this.fields.push(e)},getFieldByName:function(e){return this.endpoints[this.endpoint].find(function(t){return t.name===e})},availableFields:function(){var e=this;return this.endpoints[this.endpoint].filter(function(t){return!t.hidden&&!e.fields.includes(t)})}}},w=C,y=Object(v["a"])(w,c,d,!1,null,null,null),x=y.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.showLoading?r("div",{staticClass:"results-loading-container col-centered"},[r("img",{staticClass:"loading-gif",attrs:{alt:"","aria-hidden":"true",src:e.urls.static+"img/loading.gif"}}),r("div",{staticClass:"loading-text"},[e._v("Loading results ...")])]):e.results.length?r("div",{staticClass:"results-list-container col-centered col-lg-8 col-sm-10"},[r("p",{staticClass:"hitcount",attrs:{id:"results_count_focus",tabindex:"-1"}},[e.results[e.page]&&e.results[e.page].length?r("span",[e._v("\n      "+e._s(e.first_result_number!==e.last_result_number?"Results "+e.first_result_number+" to "+e.last_result_number:"Result "+e.first_result_number)+"\n      of "+e._s(e.hitcount?e.hitcount.toLocaleString():"many")+"\n    ")]):r("span",[e._v("No results")])]),"cases"===e.endpoint?r("ul",{staticClass:"results-list"},e._l(e.results[e.page],function(e){return r("case-result",{key:e.id,attrs:{result:e}})}),1):"courts"===e.endpoint?r("ul",e._l(e.results[e.page],function(e){return r("court-result",{key:e.id,attrs:{result:e}})}),1):"jurisdictions"===e.endpoint?r("ul",e._l(e.results[e.page],function(e){return r("jurisdiction-result",{key:e.id,attrs:{result:e}})}),1):"reporters"===e.endpoint?r("ul",e._l(e.results[e.page],function(e){return r("reporter-result",{key:e.id,attrs:{result:e}})}),1):e._e(),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[!0!==e.first_page?r("button",{staticClass:"btn btn-sm",on:{click:function(t){return e.$emit("prev-page")}}},[e._v("\n        Back\n      ")]):r("button",{staticClass:"btn btn-sm disabled",attrs:{disabled:""}},[e._v("Back")])]),r("div",{staticClass:"col-6 text-right"},[!0!==e.last_page?r("button",{staticClass:"btn btn-sm",on:{click:function(t){return e.$emit("next-page")}}},[e._v("Page "+e._s(e.page+2))]):r("button",{staticClass:"btn btn-sm disabled",attrs:{disabled:""}},[e._v("Next")])])])]):e._e()},k=[],S=(r("67c8"),r("2f77")),P=r("6104"),$=r("31b0"),O=r("0838"),F={props:["results","first_result_number","last_result_number","showLoading","endpoint","hitcount","page","first_page","last_page","urls"],components:{"reporter-result":S["default"],"case-result":P["default"],"court-result":$["default"],"jurisdiction-result":O["default"]},methods:{metadata_view_url:function(e,t){return this.urls.view_court.replace("987654321",t).replace("/court/","/"+e+"/")}}},L=F,T=Object(v["a"])(L,j,k,!1,null,null,null),D=T.exports,N=r("6c44"),R={beforeMount:function(){this.urls=urls,this.choices=choices},mounted:function(){this.handleRouteUpdate(this.$route)},watch:{$route:function(e,t){this.handleRouteUpdate(e,t)}},components:{SearchForm:x,ResultList:D},data:function(){return{title:"Search",hitcount:null,page:0,results:[],first_result_number:null,last_result_number:null,showLoading:!1,cursors:[],endpoint:"cases",page_size:10,choices:{},cursor:null,last_page:!0,first_page:!0,field_errors:{},search_error:null}},methods:{routeComparisonString:function(e){if(!e)return"";var t={cursor:!0,page:!0},r=e.query,s=Object.keys(r).filter(function(e){return!t[e]});return s.sort(),e.params.endpoint+"|"+s.map(function(e){return"".concat(e,":").concat(r[e])}).join("|")},handleRouteUpdate:function(e,t){var r=this,s=e.query,a=this.$refs.searchform;if(this.routeComparisonString(e)!==this.routeComparisonString(t)){this.resetResults(),this.endpoint=e.params.endpoint;var n=[],i=a.endpoints[this.endpoint],o=!0,l=!1,u=void 0;try{for(var c,d=i[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){var f=c.value;s[f.name]&&(f.value=s[f.name],n.push(f))}}catch(h){l=!0,u=h}finally{try{o||null==d.return||d.return()}finally{if(l)throw u}}n.length||(n=i.filter(function(e){return e.default})),a.fields=n}var p=s.page?parseInt(s.page)-1:void 0;p>=0&&(this.page=p,s.cursor&&(this.cursors[this.page]=s.cursor),(0===this.page||this.results[this.page]||this.cursors[this.page])&&this.getResultsPage().then(function(){r.scrollToResults(),r.last_page=!r.cursors[r.page+1],r.first_page=0===r.page,r.first_result_number=1+r.page_size*r.page,r.last_result_number=r.first_result_number+r.results[r.page].length-1}))},newSearch:function(){this.goToPage(0)},nextPage:function(){this.goToPage(this.page+1)},prevPage:function(){this.goToPage(this.page-1)},goToPage:function(e){this.page=e;var t={page:this.page+1};this.cursors[this.page]&&(t.cursor=this.cursors[this.page]);var r=!0,s=!1,a=void 0;try{for(var n,i=this.$refs.searchform.fields[Symbol.iterator]();!(r=(n=i.next()).done);r=!0){var o=n.value;o.value&&(t[o.name]=o.value)}}catch(l){s=!0,a=l}finally{try{r||null==i.return||i.return()}finally{if(s)throw a}}this.$router.push({name:"endpoint",params:{endpoint:this.endpoint},query:t})},getResultsPage:function(){var e=this;if(this.results[this.page])return Promise.resolve();var t=this.assembleUrl();this.search_error="",this.field_errors={};var r=Math.random();return this.currentFetchID=r,this.showLoading=!0,fetch(t).then(function(t){if(r!==e.currentFetchID)throw"canceled";if(!t.ok)throw t;return t.json()}).then(function(t){e.hitcount=t.count;var r=t.next,s=t.previous;e.page>1&&!e.cursors[e.page-1]&&s&&(e.cursors[e.page-1]=e.getCursorFromUrl(s)),!e.cursors[e.page+1]&&r&&(e.cursors[e.page+1]=e.getCursorFromUrl(r)),e.$set(e.results,e.page,t.results),e.showLoading=!1}).catch(function(r){if("canceled"!==r){if(e.showLoading=!1,e.scrollToSearchForm(),400===r.status&&e.field_errors)return r.json().then(function(t){throw e.field_errors=t,r});throw r.status?e.search_error="Search error: API returned "+r.status+" for the query "+t:e.search_error="Search error: failed to load results from "+t,console.log("Search error:",r),r}})},resetResults:function(){this.title="Search",this.hitcount=null,this.page=0,this.results=[],this.first_result_number=null,this.last_result_number=null,this.cursors=[],this.last_page=!0,this.first_page=!0},seeCases:function(e,t){var r;this.$router.push({name:"endpoint",params:{endpoint:"cases"},query:(r={},u(r,e,t),u(r,"page",1),r)})},getCursorFromUrl:function(e){try{return new URL(e).searchParams.get("cursor")}catch(t){return null}},scrollToResults:function(){this.scrollTo("#results_count_focus")},scrollToSearchForm:function(){this.scrollTo("#form-errors-heading")},scrollTo:function(e){setTimeout(function(){var t=document.querySelector(e);t.focus({preventScroll:!0}),t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})})},assembleUrl:function(){var e={page_size:this.page_size};return this.cursors[this.page]&&(e.cursor=this.cursors[this.page]),this.$refs.searchform.fields.forEach(function(t){t["value"]&&(e[t["name"]]=t["value"])}),"".concat(this.urls.api_root).concat(this.endpoint,"/?").concat(Object(N["a"])(e))}}},I=R,M=Object(v["a"])(I,n,i,!1,null,null,null),E=M.exports;s["default"].config.devtools=!0,s["default"].config.productionTip=!1,s["default"].use(a["a"]);var Y=new a["a"]({routes:[{path:"/:endpoint",component:E,name:"endpoint"},{path:"/",redirect:"/cases"},{path:"*",redirect:"/"}]});new s["default"]({el:"#app",components:{Main:E},template:"<Main/>",router:Y})},e1b2:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"result"},[r("div",{staticClass:"result-title row"},[r("div",{staticClass:"col-md-9"},[r("a",{staticClass:"simple",attrs:{target:"_blank",href:e.$parent.metadata_view_url("reporter",e.result.id)},domProps:{textContent:e._s(e.result.full_name)}})]),r("div",{staticClass:"col-md-3 decision-date"},[r("a",{staticClass:"see-cases",on:{click:function(t){return e.$parent.$emit("see-cases","reporter",e.result.slug)}}},[e._v("\n          See cases\n        ")])])])])},a=[];r.d(t,"a",function(){return s}),r.d(t,"b",function(){return a})},e5f3:function(e,t){e.exports={props:["result"]}},f519:function(e,t){e.exports={props:["result"]}},f789:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"result"},[r("div",{staticClass:"result-title row"},[r("div",{staticClass:"col-md-9"},[r("a",{staticClass:"simple",attrs:{target:"_blank",href:e.$parent.metadata_view_url("court",e.result.id)},domProps:{textContent:e._s(e.result.name)}})]),r("div",{staticClass:"col-md-3 decision-date"},[r("a",{staticClass:"see-cases",on:{click:function(t){return e.$parent.$emit("see-cases","court",e.result.slug)}}},[e._v("\n          See cases\n        ")])])])])},a=[];r.d(t,"a",function(){return s}),r.d(t,"b",function(){return a})},ffaa:function(e,t,r){"use strict";var s=r("13b5");e.exports=function(e,t){return!!e&&s(function(){t?e.call(null,function(){},1):e.call(null)})}}});
//# sourceMappingURL=search.c272e1cd.js.map