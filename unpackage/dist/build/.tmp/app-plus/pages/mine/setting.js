(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/setting"],{"055e":function(t,e,n){"use strict";n.r(e);var a=n("6a8b"),o=n("ecde");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("c9eb");var s,u=n("f0c5"),r=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"37e9f8f2",null,!1,a["a"],s);e["default"]=r.exports},"27da":function(t,e,n){},3319:function(t,e,n){"use strict";(function(t){n("632b"),n("921b");a(n("66fd"));var e=a(n("055e"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},5598:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("547f"));function i(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{flag:!1,updateType:2}},methods:{briefIntroduction:function(){t.navigateTo({url:"/pages/mine/briefIntroduction",animationType:"slide-in-right"})},loginOut:function(){var e=this,n=this;if(a("log",this.$store.state.userInfo," at pages\\mine\\setting.vue:39"),this.$store.state.userInfo&&!this.$store.state.userInfo.userId)return n.$store.commit("logout"),t.showToast({title:"退出成功",mask:!0}),void setTimeout(function(){t.hideToast(),t.switchTab({url:"/pages/tarbar/mine/mine",animationType:"slide-in-right"})},2e3);t.showModal({title:"确认退出？",content:"温馨提示：退出后会影响某些功能使用，确认退出？",showCancel:!0,cancelText:"取消",confirmText:"确定",success:function(a){a.confirm&&t.request({url:n.websiteUrl+"/api/user/logout?userId="+e.$store.state.userInfo.userId,method:"POST",header:{Authorization:e.$store.state.userInfo.token},success:function(e){200==e.data.code?(n.$store.commit("logout"),t.showToast({title:"退出成功",mask:!0}),setTimeout(function(){t.hideToast(),t.switchTab({url:"/pages/tarbar/mine/mine",animationType:"slide-in-right"})},2e3)):600==e.data.code?n.$store.commit("logout"):plus.nativeUI.toast(e.data.msg)},fail:function(){},complete:function(){}})}})},flagUpdate:function(){var e,n=this,o=plus.os.name.toUpperCase(),i=plus.runtime.appid;plus.runtime.getProperty(i,function(i){e=plus.storage.getItem("app-id"),a("log",e," at pages\\mine\\setting.vue:104"),e=e?e.replace(/\./g,""):i.versionCode,a("log",o,e," at pages\\mine\\setting.vue:110"),t.request({url:n.websiteUrl+"/sys/checkversion",method:"POST",data:{systemName:o,versionCode:e},success:function(t){var e=t.data;null==e.data?n.flag=!1:""==e.data.path&&""==e.data.versionWgtPath||(n.flag=!0)}})})},update:function(){o.default.update(this.websiteUrl,this.updateType)}},onShow:function(){},computed:{version:function(){return plus.storage.getItem("app-id")?plus.storage.getItem("app-id"):"1.0.0"}},onLoad:function(){this.flagUpdate()}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},"6a8b":function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},c9eb:function(t,e,n){"use strict";var a=n("27da"),o=n.n(a);o.a},ecde:function(t,e,n){"use strict";n.r(e);var a=n("5598"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a}},[["3319","common/runtime","common/vendor"]]]);