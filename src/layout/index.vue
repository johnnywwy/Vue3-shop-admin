<template>
  <a-layout class="layout" has-sider>
    <a-layout-sider
      class="fmenu-wrapper"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo" />
      <FMenu />
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <!-- <a-layout-header style="background: #fff; padding: 0 16px">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header> -->
      <FHeader />
      <a-layout-content
        :style="{
          margin: '80px 16px',
          padding: '24px',
          background: 'pink',
          minHeight: '280px',
        }"
      >
        <FTagListVue />
        <RouterView></RouterView>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import FMenu from "./components/FMenu.vue";
import FHeader from "./components/FHeader.vue";
import FTagListVue from "./components/FTagList.vue";

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

const collapsed = ref<boolean>(false);
</script>
<style scoped lang="less">
.layout {
  min-height: 100vh;

  .fmenu-wrapper {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;

    &::-webkit-scrollbar {
      width: 0px;
    }
  }
  .logo {
    height: 32px;
    margin: 16px;
    color: #fff;
    background: rgba(255, 255, 255, 0.3);
  }
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
}
</style>
