<template>
  <div>后台首页</div>
  {{ $store.state.user.username }}
  <a-button @click="handleLogout">退出登录</a-button>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { logout } from "../api/manager";
import { showModal, toast } from "../composables/util";

const router = useRouter();
const store = useStore();

const handleLogout = () => {
  showModal("退出登录");

  logout().finally(() => {
    store.dispatch("logout");
    // 跳转会登录页
    router.push("/login");
    // 提示退出登录成功
    toast("退出登录成功");
  });
};
</script>
