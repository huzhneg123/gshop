<template>
  <section class="profile">
    <HeaderTop title="我的"></HeaderTop>

    <section class="profile-number">
      <div class="h">
        <router-link to="/Login" class="profile-link">
          <div class="profile_image">
            <i class="iconfont icon-personal"></i>
          </div>
          <div class="user-info">
            <p class="user-info-top">登录/注册</p>
            <p>
              <span class="user-icon">
                <i class="iconfont icon-shouji icon-mobile"></i>
              </span>
              <span class="icon-mobile-number">暂无绑定手机号</span>
            </p>
          </div>
          <span class="arrow">
            <i class="iconfont icon-arrow-right"></i>
          </span>
        </router-link>
        <!-- <a href="javascript:" class="profile-link">
          <div class="profile_image">
            <i class="iconfont icon-personal"></i>
          </div>
          <div class="user-info">
            <p class="user-info-top">登录/注册</p>
            <p>
              <span class="user-icon">
                <i class="iconfont icon-shouji icon-mobile"></i>
              </span>
              <span class="icon-mobile-number">暂无绑定手机号</span>
            </p>
          </div>
          <span class="arrow">
            <i class="iconfont icon-arrow-right"></i>
          </span>
        </a>-->
      </div>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <div>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">
              <span>0.00</span>元
            </span>
            <span class="info_data_bottom">我的余额</span>
          </a>
        </div>
        <div>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">
              <span>0</span>个
            </span>
            <span class="info_data_bottom">我的优惠</span>
          </a>
        </div>
        <div>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">
              <span>0</span>分
            </span>
            <span class="info_data_bottom">我的积分</span>
          </a>
        </div>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <div class="my_order">
        <a href="javascript:">
          <span>
            <i class="iconfont icon-dingdan"></i>
          </span>
          <span class="my_order_div">
            <span>我的订单</span>
            <span class="my_order_icon">
              <i class="iconfont icon-arrow-right"></i>
            </span>
          </span>
        </a>
      </div>
      <!-- 积分商城 -->
      <div class="my_order">
        <a href="javascript:">
          <span>
            <i class="iconfont icon-ziyuan"></i>
          </span>
          <span class="my_order_div">
            <span>积分商城</span>
            <span class="my_order_icon">
              <i class="iconfont icon-arrow-right"></i>
            </span>
          </span>
        </a>
      </div>

      <!-- 硅谷外卖会员卡 -->

      <div class="my_order">
        <a href="javascript:">
          <span>
            <i class="iconfont icon-huiyuan"></i>
          </span>
          <span class="my_order_div">
            <span>硅谷外卖会员卡</span>
            <span class="my_order_icon">
              <i class="iconfont icon-arrow-right"></i>
            </span>
          </span>
        </a>
      </div>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 服务中心 -->
      <div class="my_order">
        <a href="javascript:">
          <span>
            <i class="iconfont icon-fuwuzhongxin"></i>
          </span>
          <span class="my_order_div">
            <span>服务中心</span>
            <span class="my_order_icon">
              <i class="iconfont icon-arrow-right"></i>
            </span>
          </span>
        </a>
      </div>
    </section>
  </section>
</template>

<script>
import HeaderTop from "../../componets/HeaderTop/HeaderTop";

export default {
  components: {
    HeaderTop
  }
};
</script>

<style >
.h {
  position: relative;
  margin-top: 2px;
  height: 100px;
  background-color: green;
}
.profile_image {
  float: left;
  width: 50px;
  height: 50px;
  background-color: rgb(216, 213, 213);
  margin-top: 25px;
  margin-left: 10px;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;
}
.profile_image .icon-personal {
  font-size: 35px;
}
.user-info {
  position: absolute;
  font-size: 14px;
  margin: 32px 80px;
}
.user-info p:last-child {
  font-size: 14px;
  margin-top: 5px;
}
.user-info-top {
  color: #ffffff;
}
.icon-mobile-number {
  color: #ffffff;
}
.icon-mobile {
  color: #ffffff;
}
.arrow {
  position: absolute;
  margin-top: 43px;
  margin-left: 280px;
  color: #ffffff;
}
/* ------------------ */
.info_data_list {
  display: flex;
  height: 100px;
}

.info_data_list div {
  box-sizing: border-box;
  width: 33.33%;
  border-right: 1px solid rgb(196, 192, 192);
  border-bottom: 1px solid rgb(196, 192, 192);
}
.info_data_link {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.info_data_top span {
  display: inline-block;
  margin-top: 20px;
  text-align: center;
  font-size: 30px;
  color: orange;
}
.info_data_bottom {
  font-size: 13px;
  color: black;
  margin-top: 10px;
}
/* 我的订单 */
.my_order {
  position: relative;
  height: 40px;
  /* background-color: red; */
  line-height: 40px;
  border-bottom: 1px solid rgb(226, 224, 224);
}
.my_order a span .icon-dingdan {
  margin-left: 10px;
  margin-right: 10px;
}

.my_order a span .icon-ziyuan {
  margin-left: 10px;
  margin-right: 10px;
}
.my_order a span .icon-huiyuan {
  margin-left: 10px;
  margin-right: 10px;
}
.my_order a span .icon-fuwuzhongxin {
  margin-left: 10px;
  margin-right: 10px;
}
.my_order_icon .icon-arrow-right {
  position: absolute;
  right: 20px;
}
</style>