(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08e5465c"],{"238a":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"plr-15 ptb-10"},[a("div",{staticClass:"subscribe-item"},[a("div",{staticClass:"cover",style:{backgroundImage:"url("+t.course.image+")"}},[a("div",{staticClass:"cate"},[t._v(t._s(t.course.with_class.name))]),a("div",{staticClass:"count"},[a("div",{staticClass:"avatar"},t._l(t.course.with_booked_user,(function(t,s){return a("div",{key:s},[a("img",{attrs:{src:t,alt:""}})])})),0),a("div",{staticClass:"ml-10"},[t._v(t._s(t.course.count)+" 人预约")])]),a("div",{staticClass:"time"},[t._v(t._s(t.course.start_time)+" 开课")])]),a("div",{staticClass:"flex plr-5"},[a("div",{staticStyle:{flex:"1"}},[a("div",{staticClass:"title mb-5"},[t._v(t._s(t.course.title))]),a("div",{staticClass:"address"},[a("van-icon",{attrs:{name:"location-o"}}),t._v(" "+t._s(t.course.address))],1)])])])]),a("div",{staticClass:"bar-10"}),a("div",{staticClass:"plr-15 ptb-10 "},[a("h2",{staticClass:"fz-15 c3 mb-10"},[t._v("课程简介")]),a("p",{staticClass:"fz-14 c9 mb-15"},[t._v(t._s(t.course.description))]),a("div",{staticClass:"bar-1 mb-10"}),a("h2",{staticClass:"fz-15 c3 mb-10"},[t._v("预约详情")]),a("div",{staticClass:"flex flex-align-center mb-20"},[a("div",{staticClass:"fz-13 c9"},[t._v("\n        剩余"),a("span",{staticClass:"text-primary"},[t._v(t._s(t.course.number_booking||0))]),t._v("个名额\n      ")]),a("div",{staticClass:"count2"},[a("div",{staticClass:"avatar"},t._l(t.course.avatar,(function(t,s){return a("div",{key:s},[a("img",{attrs:{src:t,alt:""}})])})),0),a("div",{staticClass:"fz-13 c9 ml-10"},[a("span",{staticClass:"text-primary"},[t._v(t._s(t.course.number_booked||0))]),t._v("人预约")])])]),a("div",{staticClass:"bar-1 mb-10"}),a("h2",{staticClass:"fz-15 c3 mb-10"},[t._v("讲师介绍")]),a("div",{staticClass:"detail"},[a("img",{attrs:{src:t.course.lecturer_image,alt:""}}),a("div",{staticClass:"fz-13 c9"},[a("div",{staticClass:"fz-15 text-primary"},[t._v(t._s(t.course.lecturer_name||"杨晓妮"))]),a("div",{domProps:{innerHTML:t._s(t.course.lecturer_detail)}})])])]),a("footer",{staticClass:"footer-bar flex flex-center flex-align-center"},[a("router-link",{attrs:{to:{name:"subscribe_auth",params:{course_id:t.course.id}}}},[a("div",{staticClass:"btn-youya"},[t._v("立即预约")])])],1)])},i=[],c=(a("96cf"),a("3b8d")),r=(a("96eb"),{components:{},props:{},data:function(){return{course:{}}},watch:{},computed:{},methods:{getData:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var s,a,e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/reservation/detail?id=".concat(this.$route.params.id));case 3:s=t.sent,a=s.code,e=s.data,i=s.message,0==a?(this.$toast.clear(),this.course=e):this.$toast.fail(i);case 8:case"end":return t.stop()}}),t,this)})));function s(){return t.apply(this,arguments)}return s}()},created:function(){this.getData()},mounted:function(){}}),n=r,o=(a("9339"),a("2877")),l=Object(o["a"])(n,e,i,!1,null,null,null);s["default"]=l.exports},"5dae":function(t,s,a){},9339:function(t,s,a){"use strict";var e=a("5dae"),i=a.n(e);i.a}}]);
//# sourceMappingURL=chunk-08e5465c.e6ed860e.js.map