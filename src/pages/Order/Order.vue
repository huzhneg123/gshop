<template>
  <section class="order">
    <HeaderTop title="订单列表"></HeaderTop>
    <!-- <header class="header">
      <a class="header_title2">
        <span class="header_title_text">订单列表</span>
      </a>
    </header>-->
    <section class="order_no_login">
      <img src="./images/person.png" />
      <h3>登录后查看外卖订单</h3>
      <div class="b">
        <button>立即登陆</button>
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

<style>
img {
  width: 100%;
}
h3 {
  text-align: center;
}
.b {
  margin-top: 5px;
  text-align: center;
}
</style>