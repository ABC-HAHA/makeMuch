(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shipinPromoting/shipinPromoting"],{1133:function(t,n,e){"use strict";e.r(n);var a=e("d061"),u=e("d60b");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);var i,r=e("f0c5"),f=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"924ff9c0",null,!1,a["a"],i);n["default"]=f.exports},"3d12":function(t,n,e){"use strict";var a=e("4996"),u=e.n(a);u.a},4996:function(t,n,e){},"6fe5":function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=o(e("c9d3"));function o(t){return t&&t.__esModule?t:{default:t}}var i=function(){return e.e("components/faceContent/faceContent").then(e.bind(null,"3818"))},r=function(){return e.e("components/nodata/nodata").then(e.bind(null,"c1c1"))},f={data:function(){return{list:[],start:0,page:10,showFalg:!0,loadingType:0}},methods:{shipinData:function(){self=this,t.request({url:this.websiteUrl+"/api/comnet/list/3",method:"GET",data:{start:self.start,page:self.page},success:function(t){if(t.data.data.list.length>=t.data.data.totalCount)return self.list=t.data.data.list,void(self.loadingType=2);self.list=t.data.data.list,self.page+=self.page}})}},onLoad:function(){this.shipinData()},onReachBottom:function(){var t=this;a("log","onReachBottom"," at pages\\shipinPromoting\\shipinPromoting.vue:51"),this.loadingType=0,setTimeout(function(){t.shipinData()},300)},components:{FaceContent:i,Loading:u.default,nodataPage:r}};n.default=f}).call(this,e("6e42")["default"],e("0de9")["default"])},"8b09":function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return a})},c9d3:function(t,n,e){"use strict";e.r(n);var a=e("8b09"),u=e("fc33");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("3d12");var i,r=e("f0c5"),f=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"6019da9b",null,!1,a["a"],i);n["default"]=f.exports},c9f8:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{loadingType:{type:Number,default:2},loadingText:{type:Array,default:function(){return["上拉加载更多","加载中...","已经加载全部数据"]}},showFalg:{type:Boolean,default:!0}}};n.default=a},d061:function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return a})},d60b:function(t,n,e){"use strict";e.r(n);var a=e("6fe5"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a},dad2:function(t,n,e){"use strict";(function(t){e("632b"),e("921b");a(e("66fd"));var n=a(e("1133"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},fc33:function(t,n,e){"use strict";e.r(n);var a=e("c9f8"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a}},[["dad2","common/runtime","common/vendor"]]]);