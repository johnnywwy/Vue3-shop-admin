<template>
  <a-layout>
    <a-layout-header class="header">
      <f-header />
    </a-layout-header>
    <a-layout class="layout">
      <a-layout-sider>
        <f-menu class="menu"></f-menu>
      </a-layout-sider>
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
  background: pink;
}
.layout {
  height: calc(100vh - 64px);
}
.menu {
  height: inherit;
  background: green;
}
.main {
  color: red;
}
</style>