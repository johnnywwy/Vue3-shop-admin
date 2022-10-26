<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
       <a-menu-item key="1">
         <pie-chart-outlined />
         <span>成绩管理</span>
       </a-menu-item>
       <a-menu-item key="2">
         <desktop-outlined />
         <span>体测预约</span>
       </a-menu-item>
       <a-sub-menu key="sub1">
         <template #title>
           <span>
             <user-outlined />
             <span>学生管理</span>
           </span>
         </template>
         <a-menu-item key="3">学生信息</a-menu-item>
         <a-menu-item key="4">学生特征值</a-menu-item>
       </a-sub-menu>
       <a-sub-menu key="sub2">
         <template #title>
           <span>
             <team-outlined />
             <span>体测统计</span>
           </span>
         </template>
         <a-menu-item key="5">总分统计</a-menu-item>
         <a-menu-item key="6">单科统计</a-menu-item>
         <a-menu-item key="8">BMI统计</a-menu-item>
       </a-sub-menu>
       <a-menu-item key="9">
         <file-outlined />
         <span>File</span>
       </a-menu-item>
     </a-menu>
</template>

<script setup lang="ts">

import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';


const selectedKeys = ref<string[]>(['1'])
</script>

<style scoped lang="less">
div {
  @apply flex justify-center items-center;
  max-width: 200px;
  max-height: 60px;
  overflow: hidden;
  // border: 1px solid red;

  img {
    transform: translateY(5px);
    size: 200px;
  }
}
</style>