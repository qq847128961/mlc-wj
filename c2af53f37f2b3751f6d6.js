(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{224:function(t,n,e){var content=e(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(25).default)("bccb6888",content,!0,{sourceMap:!1})},255:function(t,n,e){"use strict";e(224)},256:function(t,n,e){(n=e(24)(!1)).push([t.i,".page-account-info{padding:15px 10px}.page-account-info .account-info{padding:20px 40px;background-color:#fff;min-height:500px}.page-account-info .account-info-title{font-size:20px;font-weight:700;margin-bottom:20px}.page-account-info .account-info-item{border-bottom:1px solid #eee;padding:10px 0}.page-account-info .account-info-item .label{font-size:14px;font-weight:700}.page-account-info .account-info-item .content{margin-top:10px;color:#666}",""]),t.exports=n},321:function(t,n,e){"use strict";e.r(n);e(33);var c=e(7),o=e(4),r=e.n(o),l={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function n(){var e,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.app,t.params,n.next=3,e.$http.get("/sys/user/current");case 3:if(!(data=n.sent)){n.next=6;break}return n.abrupt("return",{currentUser:r.a.get(data,"data")});case 6:case"end":return n.stop()}}),n)})))()},methods:{get:function(t,n){return r.a.get(t,n)}}},f=(e(255),e(26)),component=Object(f.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-account-info"},[e("div",{staticClass:"account-info"},[t._m(0),e("div",{staticClass:"account-info-title"},[t._v("账户信息")]),e("div",{staticClass:"account-info-item"},[e("div",{staticClass:"label"},[t._v("账户")]),e("div",{staticClass:"content"},[t._v(t._s(t.currentUser.account))])]),t._m(1),e("div",{staticClass:"account-info-item"},[e("div",{staticClass:"label"},[t._v("姓名")]),e("div",{staticClass:"content"},[t._v(t._s(t.currentUser.loginName?t.currentUser.loginName:"暂无"))])]),e("div",{staticClass:"account-info-item"},[e("div",{staticClass:"label"},[t._v("身份类型")]),e("div",{staticClass:"content"},[t._v(t._s(t.get(t.currentUser,"role.name")))])]),e("div",{staticClass:"account-info-item"},[e("div",{staticClass:"label"},[t._v("邮箱")]),e("div",{staticClass:"content"},[t._v(t._s(t.currentUser.email?t.currentUser.email:"暂无"))])])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title-top"},[n("div",{staticClass:"title-top__start"}),n("div",{staticClass:"title-top__end"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"account-info-item"},[n("div",{staticClass:"label"},[this._v("登录密码")]),n("div",{staticClass:"content"},[this._v("***********")])])}],!1,null,null,null);n.default=component.exports}}]);