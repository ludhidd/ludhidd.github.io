(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(t,e,s){},220:function(t,e,s){"use strict";var n=s(208);s.n(n).a},228:function(t,e,s){"use strict";s.r(e);var n={name:"Posts",components:{Vuess:()=>s.e(8).then(s.bind(null,226))},data:()=>({nextPost:0,prevPost:3,allH:[],catalogList:[],currentIndex:0,offsetList:[],hasToc:!1}),props:{content:{type:Array,default:()=>[]}},created(){},methods:{getPageIndex(){if(0===this.content.length||1===this.content.length)return this.nextPost=NaN,void(this.prevPost=NaN);for(var t=0,e=this.content.length;t<e;t++)this.content[t].path===this.$page.path&&(t+1===this.content.length?(this.nextPost=NaN,this.prevPost=t-1):t-1<0?(this.nextPost=t+1,this.prevPost=NaN):(this.nextPost=t+1,this.prevPost=t-1))}}},o=(s(220),s(15)),i=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{key:this.$page.title,staticClass:"post-content"},[e("el-row",[e("el-col",[e("Content")],1)],1),this._v(" "),e("vssue")],1)},[],!1,null,"a7f46e8a",null);e.default=i.exports}}]);