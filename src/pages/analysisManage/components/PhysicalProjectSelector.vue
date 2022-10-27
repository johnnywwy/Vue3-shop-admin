<template>
  <div>
    <a-form class="mb-0">
      <a-form-item label="体测计划" class="mb-0 mx-5">
        <a-select
          placeholder="请选择体测计划"
          :fieldNames="{ label: 'name', value: 'id' }"
          @change="handleProjectChange"
        ></a-select>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
// import {
//   Action_GetDivisionTree,
//   Action_SelectProject,
// } from "@/store/mutation-types";
import type { SelectValue, DefaultOptionType } from "ant-design-vue/es/select";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRoute();

const emits = defineEmits(["onChange"]);

// 初始化数据
const props = defineProps({ title: { type: String, require: false } });
const state = {
  pageTitle: useRoute().meta.title,
  //   projects: computed(() => store.state.project.projects),
  //   curProjectId: computed(() => store.state.project.curProjectId),
};

// 声明方法
const handleProjectChange = (value: SelectValue, item: DefaultOptionType) => {
  //   store.dispatch(Action_SelectProject, item);
  // store.dispatch(Action_GetDivisionTree, { projectId: value });
  console.log(value, item, "projectId改变了");
  emits("onChange", item);
};
</script>
<style scoped></style>
