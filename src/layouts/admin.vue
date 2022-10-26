<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo text-light-50 flex items-center justify-center">
        兴汇海
      </div>
      <f-menu></f-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; border: 1px solid red;">
        <f-header></f-header>
      </a-layout-header>

      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '80vh' }">
          <index></index>
        </div>
       
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>

import FMenu from './components/FMenu.vue';
// import FMenu from './components/FMenu.vue';
import FHeader from './components/FHeader.vue';
import FTagListVue from './components/FTagList.vue';
import index from '../pages/index.vue';

import { ref } from 'vue';


const collapsed = ref<boolean>(false)


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

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>