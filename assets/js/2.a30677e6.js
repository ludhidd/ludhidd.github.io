(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{197:function(t,e,i){},198:function(t,e,i){"use strict";var n=i(197);i.n(n).a},199:function(t,e,i){},200:function(t,e,i){},210:function(t,e,i){"use strict";var n={naem:"RyGuide",mounted(){},methods:{select(t){"/weibo/"===t?window.open(this.$themeConfig.blogSet.weibo):"/github/"===t?window.open(this.$themeConfig.blogSet.github):"/music/"===t?window.open(this.$themeConfig.blogSet.music):this.$router.push(t)}}},s=(i(198),i(15)),c=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",{staticClass:"guide",attrs:{span:10}},[i("el-row",[i("el-col",{staticClass:"guide_desc"},[i("a",{attrs:{href:"javascript:;"}},[i("img",{staticClass:"logo",attrs:{src:t.$themeConfig.blogSet.avater||"",alt:"ry"}})]),t._v(" "),i("h1",[t._v(t._s(t.$themeConfig.blogSet.author||"如遇"))]),t._v(" "),i("p",{staticClass:"txt_des"},[t._v(t._s(t.$themeConfig.blogSet.description||""))]),t._v(" "),i("el-menu",{staticClass:"links",on:{select:t.select}},[i("el-menu-item",{attrs:{index:"/blog/"}},[i("i",{staticClass:"iconfont icon-blog"})]),t._v(" "),i("el-menu-item",{attrs:{index:"/github/"}},[i("i",{staticClass:"iconfont icon-git"})]),t._v(" "),i("el-menu-item",{attrs:{index:"/music/"}},[i("i",{staticClass:"iconfont icon-compact-disc"})])],1)],1)],1)],1)},[],!1,null,"06376f52",null);e.a=c.exports},211:function(t,e,i){"use strict";var n=i(199);i.n(n).a},212:function(t,e,i){"use strict";var n=i(200);i.n(n).a},223:function(t,e,i){"use strict";i.r(e);var n=i(210),s={mounted(){}},c=(i(211),i(15)),o=Object(c.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"particles"}},[e("vue-particles",{attrs:{color:"#fff",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:3,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1)},[],!1,null,"c49dccac",null).exports,a={components:{Guide:n.a,Particles:o},created(){if("undefined"!=typeof window){var t=document.title;document.addEventListener("visibilitychange",function(){document.hidden?document.title="​(●—●)喔哟，崩溃啦！":(document.title="(/≧▽≦/)咦！又好了！",setTimeout(function(){document.title=t},2e3))},!1)}}},l=(i(212),Object(c.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",style:{backgroundImage:"url("+this.$themeConfig.blogSet.indexbg+")"}},[e("particles"),this._v(" "),e("guide")],1)},[],!1,null,null,null));e.default=l.exports}}]);