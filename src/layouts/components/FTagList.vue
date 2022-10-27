<template>
  <div>
    <a-tabs
      v-model:activeKey="activeTab"
      hide-add
      type="editable-card"
      @edit="onEdit"
      @change="changeTab"
      class="red"
    >
      <a-tab-pane
        class="tab-pane"
        v-for="pane in tabList"
        :key="pane.path"
        :tab="pane.title"
        :closable="pane.closable"
      >
        <!-- {{ pane.content }} -->
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";

import { useCookies } from "@vueuse/integrations/useCookies";
const cookie = useCookies();
const route = useRoute();
const router = useRouter();

onBeforeRouteUpdate((to, from) => {
  activeTab.value = to.path;
  addTab({
    title: to.meta.title,
    path: to.path,
  });
});

const tabList = ref([
  {
    title: `后台首页`,
    path: "/home",
    closable: false,
  },
]);

const activeTab = ref(route.path);

const remove = (t: string) => {
  console.log(t);
  let tabs = tabList.value;
  let a = activeTab.value;
  if (a == t) {
    tabs.forEach((tab, index) => {
      if (tab.path == t) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        console.log(nextTab);

        if (nextTab) {
          a = nextTab.path;
        }
      }
    });
  }
  activeTab.value = a;
  tabList.value = tabList.value.filter((tab) => tab.path != t);
  cookie.set("tabList", tabList.value);
  router.push(activeTab.value);
};

// 初始化标签导航栏
const initTabList = () => {
  let tbs = cookie.get("tabList");
  if (tbs) {
    tabList.value = tbs;
  }
};

initTabList();

// 添加标签导航栏
const addTab = (tab) => {
  let noTab = tabList.value.findIndex((t) => t.path === tab.path) === -1;
  if (noTab) {
    tabList.value.push(tab);
  }
  cookie.set("tabList", tabList.value);
};

const onEdit = (targetKey: string) => {
  console.log(targetKey);

  remove(targetKey);
};

const changeTab = (t) => {
  console.log("change", t);
  router.push(t);
  activeTab.value = t;
};
</script>

<style lang="less" scoped>
.red {
  // border: 1px solid red;
}
:deep(.ant-tabs-nav) {
  margin-bottom: 0px !important;
}
</style>
