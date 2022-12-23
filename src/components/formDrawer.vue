<template>
  <a-drawer
    :width="width"
    :title="title"
    :placement="placement"
    :visible="showDrawer"
    :maskClosable="false"
    :destroyOnClose="destroyOnClose"
    @close="close"
  >
    <template #extra>
      <a-button style="margin-right: 8px" @click="close">取消</a-button>
      <a-button type="primary" @click="submit" :loading="loading">{{
        confirmText
      }}</a-button>
    </template>
    <!-- <a-form :model="form" :rules="rules" layout="horizontal" ref="formRef">
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item
            label="原始密码"
            name="oldpassword"
            :labelCol="{ span: 4 }"
          >
            <a-input
              v-model:value="form.oldpassword"
              placeholder="请输入旧密码"
            />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
            label="新密码"
            name="newpassword"
            :labelCol="{ span: 4 }"
          >
            <a-input
              v-model:value="form.newpassword"
              placeholder="请输入新密码"
            />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="新密码" name="repassword" :labelCol="{ span: 4 }">
            <a-input
              v-model:value="form.repassword"
              placeholder="请再次输入新密码"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form> -->
    <div class="formDrawer">
      <slot></slot>
    </div>
  </a-drawer>
</template>

<script setup>
import { ref } from "vue";
// 显示隐藏抽屉
const showDrawer = ref(false);
// 抽屉方向
const placement = ref("right");

const props = defineProps({
  title: String,
  width: {
    type: String,
    default: "500",
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  confirmText: {
    type: String,
    default: "确定",
  },
});

// 加载
const loading = ref(false);

// 加载动画
const showLoading = () => (loading.value = true);
const hideLoading = () => (loading.value = false);

// 打开
const open = () => (showDrawer.value = true);

// 关闭
const close = () => (showDrawer.value = false);

// 暴露方法
const emit = defineEmits(["submit"]);

// 提交
const submit = () => emit("submit");

// 向父组件暴露方法
defineExpose({
  open,
  close,
  submit,
  showLoading,
  hideLoading,
});
</script>
<style scoped lang="less">
.formDrawer {
  width: 100%;
  height: 100%;
  //   @apply bg-red-500;
  overflow-y: auto;
}
</style>
