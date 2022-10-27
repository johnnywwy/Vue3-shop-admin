<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    theme="dark"
    mode="inline"
    @select="handelSelect"
  >
    <template v-for="(item, index) in asideMenu" :key="index">
      <a-sub-menu v-if="item.child && item.child.length > 0" :key="item.path">
        <template #title>
          <span>
            <component :is="item.icon"></component>
            <span>{{ item.name }}</span>
          </span>
        </template>
        <a-menu-item v-for="(it, i) in item.child" :key="it.path">
          <component :is="it.icon"></component>
          {{ it.name }}
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item v-else :key="index">
        <component :is="item.icon"></component>
        <span>{{ item.name }}</span>
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
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons-vue";

import { ref } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

const selectedKeys = ref<string[]>(["1"]);

const asideMenu = [
  {
    name: "首页",
    path: "/home",
    icon: HomeOutlined,
    key: "/home",
    // meta: [{ path: '/home' }]
  },
  {
    // 成绩管理
    name: "成绩管理",
    path: "/score-manage",
    icon: PieChartOutlined,
    key: "/score-manage",
    child: [
      {
        name: "原始成绩管理",
        path: "/score-manage/list",
        icon: PieChartOutlined,
        key: "/score-manage/list",
      },
      {
        name: "学生成绩管理",
        path: "/score-manage/student",
        icon: PieChartOutlined,
        key: "/score-manage/student",
      },
      {
        name: "成绩采集管理",
        path: "/score-manage/import",
        icon: PieChartOutlined,
        key: "/score-manage/import",
      },
    ],
  },
  {
    name: "体测预约",
    path: "/booking-manage",
    icon: DesktopOutlined,
    child: [
      {
        name: "预约场地管理",
        path: "/booking-manage/list",
        icon: DesktopOutlined,
      },
      {
        path: "/booking-manage/report",
        name: "预约报表管理",
        icon: DesktopOutlined,
      },
      {
        path: "/booking-manage/state",
        name: "预约情况管理",
        icon: DesktopOutlined,
      },
      {
        path: "/booking-manage/log",
        name: "预约日志管理",
        icon: DesktopOutlined,
      },
    ],
  },
  {
    name: "学生管理",
    icon: UserOutlined,
    path: "/booking-manage/state",
    child: [
      {
        name: "学生信息",
        icon: UserOutlined,
        path: "/student-manage/student-info",
      },
      {
        name: "学生特征值",
        icon: UserOutlined,
        path: "/student-manage/student-feature",
      },
    ],
  },
  {
    name: "体测统计",
    icon: TeamOutlined,
    path: "/analysis",
    child: [
      {
        name: "总分统计",
        icon: TeamOutlined,
        path: "/analysis/physical-score",
      },
      {
        name: "单科统计",
        icon: TeamOutlined,
        path: "/analysis/subject-score",
      },
      {
        name: "BMI统计",
        icon: TeamOutlined,
        path: "/analysis/BMI-score",
      },
    ],
  },
  {
    path: "/info-manage",
    name: "信息管理",
    icon: UnorderedListOutlined,
    child: [
      {
        path: "/info-manage/class-info",
        name: "班级信息",
        icon: UnorderedListOutlined,
      },
      {
        path: "/info-manage/schcool-info",
        name: "学校信息",
        icon: UnorderedListOutlined,
      },
      {
        path: "/info-manage/area-info",
        name: "区域信息",
        icon: UnorderedListOutlined,
      },
    ],
  },
  {
    path: "/statisticsChart",
    name: "统计图表",
    icon: FundOutlined,
  },
  {
    name: "系统设置",
    icon: SettingOutlined,
    path: "/system-setting",
  },
];

// 选择侧边栏
const handelSelect = (item) => {
  console.log(item.key);
  router.push(item.key);
};
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
