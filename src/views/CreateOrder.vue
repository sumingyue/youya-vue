<template>
  <div class="p-15">
    <div class="catalogue">
      <div class="thumb" :style="{backgroundImage:'url('+detail.image+')'}">
        <div class="duration">全部{{detail.period}}集</div>
      </div>
      <div class="title">
        <div class="fz-16 c3">{{detail.name}}</div>
        <div class="fz-16 text-price">¥{{detail.price}}</div>
      </div>
    </div>

    <ul class="cell-group">
      <li class="cell">
        <div class="cell__title">支付方式</div>
        <div class="cell__value">微信支付</div>
      </li>
      <li class="cell">
        <div class="cell__title">商品金额</div>
        <div class="cell__value">￥{{detail.price}}</div>
      </li>
      <li class="cell">
        <div class="cell__title">优惠码抵扣</div>
        <div class="cell__value">
          <span v-if="!discounts" @click="showCouponModel" class="text-primary text-underline">有优惠码？</span>
          <span v-else class="text-primary">-￥{{coupon.amount}}</span>
        </div>
      </li>
    </ul>
    <footer class="footer-bar flex flex-align-center">
      <div class="price">
        <span class="fz-15 text-price fw-700">¥{{detail.price - ( coupon.amount || 0 ) | toF }}</span>
      </div>
      <div class="btn-youya" @click="submitOrder">去支付</div>
    </footer>

    <van-popup v-model="isShowCouponModel">
      <div class="prompt-box">
        <h2 class="fz-17 c3 fw-700 text-center mb-15">请输入优惠码</h2>
        <input class="input-item mb-10" type="text" v-model="couponCode">
        <div>
          <button class="btn-primary mr-10" @click="hideCouponModel">取消</button>
          <button class="btn-info" @click="getCouponCode">确认</button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        couponCode: "",
        // D86HIDIV
        discounts: false,
        isShowCouponModel: false,
        detail: {},
        coupon: {}
      };
    },
    watch: {},
    computed: {},
    methods: {
      showCouponModel() {
        this.isShowCouponModel = true;
      },
      hideCouponModel() {
        this.isShowCouponModel = false;
      },
      async getCouponCode() {
        if (!this.couponCode) {
          this.$toast('请输入优惠码');
          return;
        }
        this.$toast.loading({
          message: "加载中..."
        })
        let {
          code,
          data,
          message
        } = await axios.get(`/user/course-order/code?code=${this.couponCode}`)
        this.isShowCouponModel = false;
        this.$toast.clear()
        if (code == 0) {
          this.coupon = data
          this.discounts = true
        } else {
          this.$toast(message);
        }
      },
      async getData() {
        this.$toast.loading({
          message: '加载中...'
        });
        let {
          code,
          data,
          message
        } = await axios.get("/course/detail", {
          params: {
            id: this.$route.params.id
          }
        })
        if (code == 0) {
          this.$toast.clear()
          this.detail = data
        } else {
          this.$toast.fail(message)
        }
      },
      async submitOrder(){
        this.$toast.loading({
          message: '加载中...'
        });
        let {
          code,
          data,
          message
        } = await axios.post("/user/course-order", {
          course_id: this.$route.params.id,
          code: this.couponCode
        })
        if (code == 0) {
          this.$toast.clear()
          console.log(data)
          this.payed(data.id)
        } else {
          this.$toast.fail(message)
        }
      },
      //hedian 课程订单完成(测试)
      async payed(order_id){
        let {
          code,
          data,
          message
        } = await axios.post("/user/course-order/payed", {
          order_id
        })
        if (code == 0) {
          console.log(data)
        } else {
          this.$toast.fail(message)
        }
      }
    },
    created() {
      this.getData()
      this.payed(7)
    },
    mounted() {},
    filters:{
      toF(value){
        var num = Number(value)
        console.log(Number(value));
        if(isNaN(num)){
          return "错误参数"
        }else{
          return num.toFixed(2)
        }
      }
    }
  };
</script>
<style lang="less">
  .catalogue {
    display: flex;
    margin-bottom: 15px;

    .thumb {
      position: relative;
      width: 90px;
      height: 50px;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      border-radius: 5px;

      .duration {
        position: absolute;
        right: 7px;
        bottom: 2px;
        font-size: 11px;
        color: #fff;
      }
    }

    .title {
      margin-left: 10px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .footer-bar {
    padding: 0 10px;
    box-shadow: 0px 0px 5px 0px rgba(238, 238, 238, 1);
  }

  .footer-bar .price {
    flex: 1;
    text-align: center;
  }

  .btn-youya {
    width: 260px;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    border-radius: 20px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    box-shadow: 1px 5px 6px rgba(131, 179, 219, .2);
  }

  .prompt-box {
    padding-top: 15px;
    width: 305px;
    min-height: 130px;
    text-align: center;

    .input-item {
      padding: 0 10px;
      width: 260px;
      height: 35px;
      line-height: 35px;
      border-radius: 5px;
      border: 1px solid rgba(221, 221, 221, 1);
      color: #666;
      font-size: 14px;
      box-sizing: border-box;
    }
  }

  .btn-primary {
    width: 100px;
    height: 30px;
    background: rgba(255, 255, 255, 1);
    border-radius: 5px;
    border: 1px solid rgba(238, 238, 238, 1);
    font-size: 12px;
    color: #999;
    box-sizing: border-box;
  }

  .btn-info {
    width: 100px;
    height: 30px;
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    border-radius: 5px;
    font-size: 12px;
    color: #fff;
  }

  .van-popup--center {
    border-radius: 5px;
  }
</style>