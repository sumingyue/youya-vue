(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4c2969a"],{"1f92":function(t,i,a){"use strict";var n=a("735a"),e=a.n(n);e.a},"35fb":function(t,i,a){"use strict";function n(t){if(Array.isArray(t)){for(var i=0,a=new Array(t.length);i<t.length;i++)a[i]=t[i];return a}}function e(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return n(t)||e(t)||r()}a.d(i,"a",(function(){return s}))},"3c20":function(t,i,a){t.exports=a.p+"img/index-banner-01.7f906eed.png"},"735a":function(t,i,a){},"7f05":function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"plr-15 pt-10"},[n("div",{staticClass:"mb-10"},[n("van-swipe",{attrs:{autoplay:3e3,"show-indicators":!1}},t._l(t.images,(function(t,i){return n("van-swipe-item",{key:i},[n("router-link",{attrs:{to:"video"}},[n("img",{attrs:{src:a("3c20"),width:"100%",alt:""}})])],1)})),1)],1),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.list,(function(i,a){return n("router-link",{key:a,attrs:{to:{name:"article",params:{id:i.id}}}},[n("div",{staticClass:"article-item"},[n("img",{attrs:{src:i.thumb,alt:""}}),n("div",[n("div",{staticClass:"fz-15 c3 text-hide2"},[t._v(t._s(i.title))]),n("div",{staticClass:"fz-11 c9 text-hide"},[t._v(t._s(i.subTitle))])])])])})),1)],1)},e=[],r=a("35fb"),s=a("fddc"),o={components:{},props:{},data:function(){return{images:[0,1],list:[],loading:!1,finished:!1}},watch:{},computed:{},methods:{onLoad:function(){var t=this;setTimeout((function(){var i=s.mock({"list|10":[{"id|+1":1,title:s.Random.cparagraph(2),subTitle:s.Random.cparagraph(2),thumb:s.Random.image("150x150","#D8C7AF","美文")}]}).list;t.list=[].concat(Object(r["a"])(t.list),Object(r["a"])(i)),t.loading=!1,t.list.length>=40&&(t.finished=!0)}),1e3)}},created:function(){axios.get("/article/banner"),axios.get("/article")},mounted:function(){this.list=s.mock({"list|10":[{"id|+1":1,title:s.Random.cparagraph(2),subTitle:s.Random.cparagraph(2),thumb:s.Random.image("150x150","#D8C7AF","美文")}]}).list}},c=o,l=(a("1f92"),a("6691")),d=Object(l["a"])(c,n,e,!1,null,"3a6fa3ab",null);i["default"]=d.exports}}]);
//# sourceMappingURL=chunk-f4c2969a.41e7578b.js.map