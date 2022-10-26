<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @select="handelSelect">
    <!-- <a-menu-item key="1">
      <pie-chart-outlined />
      <span>成绩管理</span>
    </a-menu-item>
    <a-menu-item key="2">
      <desktop-outlined />
      <span>体测预约</span>
    </a-menu-item> -->
    <template v-for="(item, index) in asideMenu" :key="index">
      <a-sub-menu v-if="item.child && item.child.length > 0" :key="item.name" >
        <template #title>
          <span>
            <component :is="item.meta?.icon"></component>
            <span>{{ item.meta?.title }}</span>
          </span>
        </template>
        <a-menu-item v-for="(it, i) in item.child" :key="it.name">
          <component :is="it.meta?.icon"></component>
          {{ it.meta?.title }}
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item v-else :key="index">
        <component :is="item.meta?.icon"></component>
        <span>{{ item.meta?.title }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script setup lang="ts">

import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  FundOutlined,
  SettingOutlined
} from '@ant-design/icons-vue';
import { ref } from 'vue';


const selectedKeys = ref<string[]>(['1'])

const asideMenu = [
  {
    // 成绩管理
    "name": 'ScoreManage',
    "path": '/score-manage',
    "meta": { "title": '成绩管理', "icon": PieChartOutlined },
    "child": [{
      "path": '/score-manage/list',
      "name": 'ScoreManageList',
      "meta": { "title": '原始成绩管理', "icon": PieChartOutlined },
    }, {
      "path": '/score-manage/student',
      "name": 'ScoreManageStudent',
      "meta": { "title": '学生成绩管理', "icon": PieChartOutlined },
    }, {
      "path": '/score-manage/import',
      "name": 'ScoreManageImport',
      "meta": { "title": '成绩采集管理', "icon": PieChartOutlined },
    }]
  },
  {
    name: 'PhysicalBooking',
    path: '/booking-manage',
    icon: DesktopOutlined,
    meta: { icon: DesktopOutlined, title: '体测预约' },
    child: [{
      name: 'PhysicalBookingList',
      path: '/booking-manage/list',
      icon: DesktopOutlined,
      meta: { icon: DesktopOutlined, title: '预约场地管理' },
    }, {
      path: '/booking-manage/report',
      name: 'PhysicalBookingReport',
      meta: { icon: DesktopOutlined, title: '预约报表管理' },
    }, {
      path: '/booking-manage/state',
      name: 'PhysicalBookingState',
      meta: { icon: DesktopOutlined, title: '预约情况管理' },
    }, {
      path: '/booking-manage/log',
      name: 'PhysicalBookingLog',
      meta: { icon: DesktopOutlined, title: '预约日志管理' },
    }]
  },
  // {
  //   "name": '学生管理',
  //   "icon": UserOutlined,
  //   "child": [{
  //     "name": '学生信息',
  //     "icon": UserOutlined,
  //   }, {
  //     "name": '学生特征值',
  //     "icon": UserOutlined,
  //   }]
  // },
  // {
  //   "name": '体测统计',
  //   "icon": TeamOutlined,
  //   "child": [{
  //     "name": '总分统计',
  //     "icon": TeamOutlined,
  //   }, {
  //     "name": '单科统计',
  //     "icon": TeamOutlined,
  //   }, {
  //     "name": 'BMI统计',
  //     "icon": TeamOutlined,
  //   }]
  // },
  // {
  //   "name": '信息管理',
  //   "icon": UnorderedListOutlined,
  //   "child": [{
  //     "name": '班级信息',
  //     "icon": UnorderedListOutlined,
  //   }, {
  //     "name": '学校信息',
  //     "icon": UnorderedListOutlined,
  //   }, {
  //     "name": '区域信息',
  //     "icon": UnorderedListOutlined,
  //   }]
  // },
  // {
  //   "name": '统计图表',
  //   "icon": FundOutlined,
  // },
  // {
  //   "name": '系统设置',
  //   "icon": SettingOutlined,
  // },
]

const handelSelect = (e) => {
  console.log(e);
}

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