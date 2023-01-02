<template>
  <div class="f-tag-list">
    <a-tabs
      hide-add
      v-model:activeKey="activeTab"
      type="editable-card"
      @change="changeTab"
      @edit="onEdit"
    >
      <a-tab-pane
        v-for="pane in tabList"
        :key="pane.path"
        :tab="pane.title"
        :closable="pane.path !== '/'"
      >
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import { useCookies } from "@vueuse/integrations/useCookies";

const route = useRoute();
const router = useRouter();
const cookie = useCookies();

const activeTab = ref(route.path);

const tabList = ref([
  { title: "后台首页", path: "/" },
  // { title: "商品管理", path: "/goods/list" },
]);

// 添加标签导航
const addTab = (tab) => {
  let noTab = tabList.value.findIndex((t) => t.path === tab.path) == -1;
  if (noTab) {
    tabList.value.push(tab);
  }
  cookie.set("tabList", tabList.value);
};

// 初始化标签导航栏
function initTabList() {
  let tbs = cookie.get("tabList");
  if (tbs) {
    tabList.value = tbs;
  }
}

initTabList();

onBeforeRouteUpdate((to, form) => {
  activeTab.value = to.path;
  addTab({
    title: to.meta.title,
    path: to.path,
  });
});

// 删除标签
const remove = (t) => {
  let tabs = tabList.value;
  let a = activeTab.value;
  if (a == t) {
    tabs.forEach((tab, index) => {
      if (tab.path == t) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          a = nextTab.path;
        }
      }
    });
  }

  activeTab.value = a;
  router.push(activeTab.value);

  tabList.value = tabList.value.filter((tab) => tab.path != t);
  cookie.set("tabList", tabList.value);
};

const onEdit = (targetKey: string) => {
  console.log(targetKey);

  remove(targetKey);
};

const changeTab = (t) => {
  console.log(t);
  activeTab.value = t;
  router.push(t);
};
</script>

<style scoped lang="less">
.f-tag-list {
  // border: 1px solid red;
  background: #f0f2f5;

  :deep(.ant-tabs-nav) {
    margin-bottom: 0;
  }
}
</style>
