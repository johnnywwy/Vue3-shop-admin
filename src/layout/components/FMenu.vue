<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    theme="dark"
    mode="inline"
    @select="selectMenu"
    @openChange="onOpenChange"
  >
    <template v-for="(item, index) in asideMenus" :key="index">
      <a-sub-menu :key="item.name" v-if="item.child && item.child.length > 0">
        <template #icon>
          <PieChartOutlined />
        </template>
        <template #title>
          <span>{{ item.name }}</span>
        </template>
        <a-menu-item
          :key="item2.frontpath"
          v-for="(item2, index2) in item.child"
          >{{ item2.name }}
          <template #icon>
            <TeamOutlined />
          </template>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item :key="item.frontpath" v-else>
        <file-outlined />
        <span>{{ item.name }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons-vue";
import { computed, ref, watch } from "vue";

const store = useStore();
const router = useRouter();
const route = useRoute();

// 默认选中的菜单
const selectedKeys = ref<string[]>([route.path]);

// 默认打开的一级菜单
const openKeys = ref(["/"]);

// 侧边菜单栏
const asideMenus = computed(() => store.state.menus);

// 监听路由的变化
watch(
  () => route.path,
  (_new, oldVal) => {
    console.log("新的" + _new, "旧的" + oldVal);
    selectedKeys.value = [_new];
  }
);

// 选择
const selectMenu = (e: any) => {
  // console.log(e);
  // console.log(route);

  router.push(e.key);
  // console.log(asideMenus.value);
};

const onOpenChange = (openKeys: string[]) => {
  // const latestOpenKey = openKeys.find(
  //   (key) => openKeys.value.indexOf(key) === -1
  // );
  // if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
  //   state.openKeys = openKeys;
  // } else {
  //   state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  // }
};
</script>
<style scoped lang="less"></style>
