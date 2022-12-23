<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    theme="dark"
    mode="inline"
    @select="selectMenu"
  >
    <template v-for="(item, index) in asideMenus" :key="index">
      <a-sub-menu :key="item.name" v-if="item.child && item.child.length > 0">
        <template #icon>
          <PieChartOutlined />
        </template>
        <template #title>
          <span>{{ item.name }}</span>
        </template>
        <a-menu-item :key="item2.path" v-for="(item2, index2) in item.child"
          >{{ item2.name }}
          <template #icon>
            <TeamOutlined />
          </template>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item :key="item.path" v-else>
        <file-outlined />
        <span>{{ item.name }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";

const router = useRouter();
const selectedKeys = ref<string[]>(["1"]);
const asideMenus = [
  {
    name: "后台面板",
    icon: "userOutlined",
    path: "/",
    child: [
      {
        name: "首页",
        icon: "DesktopOutlined",
        path: "/index",
      },
    ],
  },
  {
    name: "商城管理",
    icon: "PieChartOutlined",
    path: "/goods",
    child: [
      {
        name: "主控台2",
        icon: "TeamOutlined",
        path: "/goods/list",
      },
    ],
  },
  {
    name: "文件",
    icon: "FileOutlined",
    path: "/file",
  },
];

// 选择
const selectMenu = (e: any) => {
  console.log(e);
  router.push(e.key);
};
</script>
