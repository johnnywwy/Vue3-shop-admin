<template>
  <a-layout class="layout">
    <a-layout-sider
      v-model:collapsed="collapsed"
      collapsible
      class="overflow-auto h-100vh"
    >
      <div class="logo" />
      <FMenu />
    </a-layout-sider>
    <a-layout>
      <FHeader></FHeader>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <RouterView></RouterView>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";

import FMenu from "./components/FMenu.vue";
import FHeader from "./components/FHeader.vue";
import FTagListVue from "./components/FTagList.vue";
import { ref } from "vue";
const collapsed = ref<boolean>(false);
</script>
<style lang="less" scoped>
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
.logo {
  height: 32px;
  margin: 16px;
  color: #fff;
  background: rgba(255, 255, 255, 0.3);
}
.layout {
  min-height: 100vh;
}

// 全局滚动条
::-webkit-scrollbar {
  background-color: rgba(27, 27, 27, 0.4);
  border-radius: 10px;
  width: 4px; //y轴滚动条宽度
  height: 3px; //x轴滚动条高度
}

::-webkit-scrollbar-thumb {
  border-radius: 10px; //滚动条的圆角
  background: rgba(27, 27, 27, 0.4); //滚动条的背景颜色
}

::-webkit-scrollbar-track {
  border-radius: 10px; //滚动条的背景区域的圆角
  background: #fff; //滚动条的背景颜色
}
</style>
