webpackJsonp([7],{102:function(e,t){},103:function(e,t){},104:function(e,t){},109:function(e,t,n){function o(e){n(102)}var a=n(8)(n(81),n(110),o,"data-v-08b5f79a",null);e.exports=a.exports},110:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-10 col-sm-4 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4 col-sm-offset-4 col-xs-offset-1"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal",router:!0}},[n("el-menu-item",{class:{"is-active":"/"==e.$route.path},attrs:{index:"/"}},[e._v("\n                首页\n            ")]),e._v(" "),n("el-menu-item",{class:{"is-active":"/profile"==e.$route.path},attrs:{index:"/profile"}},[e._v("\n                个人中心\n            ")])],1),e._v(" "),n("loginStatus")],1)])},staticRenderFns:[]}},111:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-status"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.username,expression:"username"}]},[e._v("你好："),n("span",{staticClass:"username"},[e._v(e._s(e.username))]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.logout}},[e._v("退出")])],1),e._v(" "),n("router-link",{directives:[{name:"show",rawName:"v-show",value:!e.username,expression:"!username"}],attrs:{to:"/login"}},[n("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("登录")])],1)],1)},staticRenderFns:[]}},112:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Top"),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-10 col-sm-4 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4 col-sm-offset-4 col-xs-offset-1"},[n("router-view")],1)])],1)},staticRenderFns:[]}},33:function(e,t,n){function o(e){n(103)}var a=n(8)(n(82),n(111),o,"data-v-20d73689",null);e.exports=a.exports},35:function(e,t,n){"use strict";var o=n(2),a=n(113);o.default.use(a.a),t.a=new a.a({routes:[{path:"/",name:"random",component:function(e){return n.e(4).then(function(){var t=[n(119)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/add",name:"add",component:function(e){return n.e(5).then(function(){var t=[n(118)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/register",name:"register",component:function(e){return n.e(0).then(function(){var t=[n(123)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/login",name:"login",component:function(e){return n.e(2).then(function(){var t=[n(121)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/profile",name:"profile",component:function(e){return n.e(1).then(function(){var t=[n(122)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/test",name:"test",component:function(e){return n.e(3).then(function(){var t=[n(120)];e.apply(null,t)}.bind(this)).catch(n.oe)}}],base:"/eat/"})},37:function(e,t){},40:function(e,t,n){function o(e){n(104)}var a=n(8)(n(80),n(112),o,null,null);e.exports=a.exports},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{loginStatus:n(33),Top:n(109)},mounted:function(){bus.$emit("checkLogin",!0)}}},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{loginStatus:n(33)},data:function(){return{}},methods:{}}},82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{username:null}},methods:{checkLogin:function(){var e=this;this.axios.get(apiUrl+"/eatApi/user/checkLogin").then(function(t){var n=t.data;1==n.msgcode?(e.username=n.username,bus.username=n.username):e.username=null}).catch(function(t){e.$message({message:"登录状态验证失败",type:"warning"}),console.log(t)})},logout:function(){var e=this;this.axios.post(apiUrl+"/eatApi/user/logout").then(function(t){1==t.data.msgcode?(e.username=null,bus.username=null):e.$message({message:"退出失败，请重试",type:"warning"})}).catch(function(t){e.$message({message:"退出失败，请重试",type:"warning"}),console.log(t)})}},mounted:function(){var e=this;bus.$on("checkLogin",function(){e.checkLogin()})}}},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(40),s=n.n(a),i=n(34),r=n.n(i),u=n(39),c=n.n(u),l=n(37),f=(n.n(l),n(36)),p=n.n(f),d=n(35),m=n(38),h=n.n(m);r.a.defaults.withCredentials=!0,window.bus=new o.default({data:{username:null}}),window.apiUrl="https://zhaohaodang.com";var v=r.a.create({transformRequest:[function(e){return e=h.a.stringify(e)}],headers:{"Content-Type":"application/x-www-form-urlencoded"}});o.default.use(c.a,v),o.default.use(p.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:d.a,template:"<App/>",components:{App:s.a}})}},[83]);
//# sourceMappingURL=app.6e399c4b752d53753dfe.js.map