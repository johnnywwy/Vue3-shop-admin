<template>
  <div>后台首页</div>
  {{ $store.state.user.username }}
  <a-button @click="handleLogout">退出登录</a-button>
</template>

<script setup lang="ts">
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { Modal } from "ant-design-vue";
import { createVNode, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { logout } from "../api/manager";
import { showModal, toast } from "../composables/util";

const router = useRouter();
const store = useStore();

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
    onCancel() {},
  });
};
</script>
