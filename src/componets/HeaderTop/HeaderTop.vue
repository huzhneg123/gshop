<template>
  <header class="msite_header">
    <slot name="left"></slot>
    <div class="header_title">
      <div class="header_title_text ellipsis">{{title}}</div>
    </div>
    <slot name="right"></slot>
  </header>

  <!-- <header class="msite_header">
      <div class="header_search">
        <i class="iconfont icon-sousuo icon-sousuo2"></i>
      </div>
      <div class="header_title">
        <div class="header_title_text ellipsis">昌平区北七家宏福科技园</div>
      </div>
      <span class="header_login">
        <span class="header_login_text">登录|注册</span>
      </span>
  </header>-->
</template>

<script>
export default {
  // 接受title参数
  props: {
    title: String
  }
};
</script>

<style>
.msite_header {
  height: 35px;
  background-color: green;
  position: relative;
}
.icon-sousuo2 {
  vertical-align: middle;
  margin-left: 13px;
  color: rgb(185, 179, 179);
  font-size: 25px;
  line-height: 35px;
}
.header_search {
  float: left;
}
.header_title {
  width: 150px;
  line-height: 35px;
  margin-left: 110px;
  /* float: left; */
  text-align: center;
}
.header_title_text {
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.header_login {
  position: absolute;
  line-height: 35px;
  margin-left: 300px;
  margin-top: -35px;
}
.header_login_text {
  font-size: 13px;
  color: #fff;
}
</style>