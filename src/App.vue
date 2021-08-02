<template>
  <div id="app">
    <!-- 上面是路由 -->
    <router-view></router-view>
    <!-- 下面是底部 route表示当前路由，后面配置再router组件中-->
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from "./componets/FooterGuide/FooterGuide";
export default {
  components: {
    FooterGuide
  }
};
</script>


 
<style lang="stylus" rel="stylesheet/stylus"></style>
