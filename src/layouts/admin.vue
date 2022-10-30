<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo text-light-50 flex items-center justify-center">
        兴汇海
      </div>
      <f-menu></f-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <f-header></f-header>
      </a-layout-header>
      <a-layout-content style="margin: 16px 16px">
        <f-tag-list-vue></f-tag-list-vue>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '80vh' }"
        >
          <!-- 面包屑 -->
          <!-- <div class="mb-4">
            <a-breadcrumb>
              <a-breadcrumb-item>Home</a-breadcrumb-item>
              <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
              <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
              <a-breadcrumb-item>An Application</a-breadcrumb-item>
            </a-breadcrumb>
          </div> -->

          <router-view v-slot="{ Component }">
            <transition name="fade">
              <keep-alive :max="10">
                <component :is="Component"></component>
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import FMenu from "./components/FMenu.vue";
import FHeader from "./components/FHeader.vue";
import FTagListVue from "./components/FTagList.vue";
import index from "../pages/index.vue";

import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const collapsed = ref<boolean>(false);
const route = useRoute();
const router = useRouter();
console.log(route);
console.log(router);
</script>
<style scoped lang="less">
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 300ms;
}
.fade-enter-active {
  transition-delay: 300ms;
}
</style>
