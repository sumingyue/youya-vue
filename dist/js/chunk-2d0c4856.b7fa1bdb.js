(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4856"],{"3ad6":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{domProps:{innerHTML:t._s(t.content)}}),t.share_info?s("div",{staticClass:"flex flex-column flex-center flex-align-center"},[s("div",{staticClass:"fz-13 c6"},[t._v("联系微信")]),s("img",{staticStyle:{width:"30vw",height:"30vw"},attrs:{src:t.share_info.share_url,alt:""}}),s("div",{staticClass:"fz-13 c6"},[t._v("代理："+t._s(t.share_info.with_guest.real_name))]),s("div",{staticClass:"fz-13 c6"},[t._v("电话："+t._s(t.share_info.with_guest.phone))]),s("div",{staticClass:"fz-12 c9"},[t._v("长按识别二维码添加微信")])]):t._e()])},i=[],n=(s("96cf"),s("3b8d")),r={components:{},props:{},data:function(){return{content:"",share_id:"",share_info:""}},watch:{},computed:{},methods:{getData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({messages:"加载中..."}),t.next=3,axios.get("/article/detail?id=".concat(this.$route.params.id,"&share_id=").concat(this.share_id));case 3:e=t.sent,s=e.code,a=e.data,e.messages,0==s?(this.$toast.clear(),this.content=a.text,document.title=a.title,a.share_info&&(this.share_info=a.share_info)):this.$toast.fail(messege);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=JSON.parse(localStorage.getItem("userinfo"));this.share_id=t.id,this.getData()},mounted:function(){}},c=r,o=s("2877"),h=Object(o["a"])(c,a,i,!1,null,"0d747238",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0c4856.b7fa1bdb.js.map