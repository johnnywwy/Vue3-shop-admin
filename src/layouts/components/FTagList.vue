<template>
  <div>
    <!-- <div :style="{ marginBottom: '16px' }">
      <a-button @click="add">ADD</a-button>
    </div> -->
    <a-tabs v-model:activeKey="activeTab" hide-add type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="pane in tabList" :key="pane.path" :tab="pane.title" :closable="pane.closable">
        <!-- {{ pane.content }} -->
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

import { useCookies } from "@vueuse/integrations/useCookies";
const cookies = useCookies();
const route = useRoute()
// const router = useRouter()

onBeforeRouteUpdate((to, from) => {
  // console.log({
  //   title: to.meta.title,
  //   path: to.path
  // });
  addTab({
    title: to.meta.title,
    path: to.path
  })

})


const tabList = ref([
  {
    title: `学生成绩管理`,
    path: '/score-manage/student',
    closable: false
  }, {
    title: `原始成绩管理`,
    path: '/score-manage/list',
    closable: true
  }
])
// const panes = ref<{ title: string; key: string; closable?: boolean; path: string }[]>(
//   new Array(2).fill(null).map((_, index) => {
//     const id = String(index + 1);
//     return {
//       title: `后台首页 ${id}`,
//       key: id,
//       path: '/'
//     };
//   }),
// );
const activeTab = ref(route.path);

const remove = (targetKey: string) => {
  console.log(targetKey);

  // let lastIndex = 0;
  // panes.value.forEach((pane, i) => {
  //   if (pane.path === targetKey) {
  //     lastIndex = i - 1;
  //   }
  // });
  // panes.value = panes.value.filter(pane => pane.path !== targetKey);
  // if (panes.value.length && activeKey.value === targetKey) {
  //   if (lastIndex >= 0) {
  //     activeKey.value = panes.value[lastIndex].path;
  //   } else {
  //     activeKey.value = panes.value[0].path;
  //   }
  // }
};

// 添加标签导航栏
const addTab = (tab) => {
  let noTab = tabList.value.findIndex(t => t.path === tab.path) === -1
  if (noTab) {
    tabList.value.push(tab)
  }
  console.log(tabList.value);
  
  cookies.set("tabList", tabList.value)
}

const onEdit = (targetKey: string) => {
  remove(targetKey);
};


</script>

<style lang='less' scoped>

</style>