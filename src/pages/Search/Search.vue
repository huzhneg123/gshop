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
    <button @click="an">按钮</button>
    <button @click="mei">没</button>

    <transition name="r">
      <div :class="f"></div>
    </transition>
  </section>
</template>

<script>
import HeaderTop from "../../componets/HeaderTop/HeaderTop";

export default {
  data() {
    return {
      f: ""
    };
  },
  components: {
    HeaderTop
  },
  methods: {
    an() {
      this.f = "fang";
    },
    mei() {
      this.f = "";
    }
  }
};
</script>

<style>
/* --------- */

.r-enter,
.r-leave-to {
  transform: translateX(-100%);
}
.r-enter-to,
.r-leave {
  transform: translateX(0);
}

.fang {
  transition: 0.5s linear;

  height: 200px;
  width: 100%;
  background-color: rebeccapurple;
}
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