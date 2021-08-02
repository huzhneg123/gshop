<template>
  <div class="footer_guide">
    <!-- 条件满足/msite===$router.path,才会给对应的按钮加上on样式 -->
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on:'/msite'===$route.path}"
      @click="goTo('/msite')"
    >
      <span class="item_icon">
        <i class="iconfont icon-u"></i>
      </span>
      <span class="s">外卖</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on:'/search'===$route.path}"
      @click="goTo('/search')"
    >
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="s">搜索</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on:'/order'===$route.path}"
      @click="goTo('/order')"
    >
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span class="s">订单</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on:'/profile'===$route.path}"
      @click="goTo('/profile')"
    >
      <span class="item_icon">
        <i class="iconfont icon-personal"></i>
      </span>
      <span class="s">我的</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      // 替换路由
      this.$router.replace(path);
    }
  }
};
</script>

<style  >
.footer_guide {
  position: fixed;
  display: flex;
  border-top: 1px solid rgb(235, 232, 232);
  bottom: 0;
  height: 30px;
  /* justify-content: space-around; */
}

.guide_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 34px;
}
.s {
  font-size: 12px;
}
.on {
  color: green;
}
</style>