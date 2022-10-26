<template>
  <a-layout>
    <!-- 侧边栏 -->
    <a-layout-sider class="menu">
      <f-menu />
    </a-layout-sider>
    <a-layout class="layout">
      <!-- 头部 -->
      <a-layout-header class="header">
        <f-header />
      </a-layout-header>
      <!-- 主体 -->
      <a-layout-content class="main">
        <f-tag-list />
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import FHeader from "./components/FHeader.vue";
import FMenu from "./components/FMenu.vue";
import FTagList from "./components/FTagList.vue";
</script>

<style scoped>
.header {
  background: #fff;
}
.layout {
  height: calc(100vh);
}
.menu {
  height: inherit;
  /* background: #ccc; */
}
</style>