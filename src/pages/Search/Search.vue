<template>
  <section class="search">
    <HeaderTop title="搜索"></HeaderTop>
    <!-- <header class="header">
      <a class="header_title2">
        <span class="header_title_text">搜索</span>
      </a>
    </header>-->
    <form class="search_form" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" />
      <input type="submit" name="submit" class="search_submit" />
    </form>
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
/* .header {
  height: 35px;
  background-color: green;
  line-height: 35px;
  text-align: center;
} */

.search_form input:first-child {
  margin-top: 5px;

  height: 30px;
  background-color: rgb(245, 237, 237);
  border-radius: 10px;
  width: 85%;
}

.search_form input:last-child {
  color: #ffffff;
  height: 30px;
  width: 45px;
  background-color: green;
}
</style>