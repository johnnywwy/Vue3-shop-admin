<template>
  <a-result
    status="404"
    :style="{
      height: '100%',
      background: '#fff',
    }"
    title="Hello World"
    sub-title="Sorry, you are not authorized to access this page."
  >
    <template #extra>
      <a-button type="primary" @click="handleClick">Back Home</a-button>
    </template>
  </a-result>
</template>

<script setup lang="ts">
import { Modal } from "ant-design-vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { logout } from "../api/manager";
import { toast } from "../composables/util";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { createVNode } from "vue";

const router = useRouter();
const store = useStore();

// 退出登录
const handleLogout = () => {
  Modal.confirm({
    title: "退出登录",
    icon: createVNode(ExclamationCircleOutlined),
    onOk() {
      logout().finally(() => {
        store.dispatch("logout");
        // 跳转会登录页
        router.push("/login");
        // 提示退出登录成功
        toast("退出登录成功");
      });
    },
  });
};
</script>
