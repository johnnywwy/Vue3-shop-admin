<template>
  <a-layout-header style="background: #fff; padding: 0 16px" class="f-header">
    <div class="btn-wrapper">
      <a-tooltip placement="bottom">
        <template #title>
          <span>合并导航栏</span>
        </template>
        <menu-fold-outlined class="btn" @click="closeSide" />
      </a-tooltip>
      <a-tooltip placement="bottom">
        <template #title>
          <span>刷新</span>
        </template>
        <redo-outlined @click="refresh" class="btn" />
      </a-tooltip>
      <a-tooltip placement="bottom">
        <template #title>
          <span>全屏</span>
        </template>
        <fullscreen-outlined @click="toggle" class="btn" v-if="!isFullscreen" />
        <fullscreen-exit-outlined @click="toggle" v-else class="btn" />
      </a-tooltip>
    </div>

    <div class="ml-auto">
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          <a-avatar size="small" :src="$store.state.user.avatar" class="mx-1" />
          {{ $store.state.user.username }}
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu @click="onClick">
            <a-menu-item key="rePassword">
              <a href="javascript:;">修改密码</a>
            </a-menu-item>
            <a-menu-item key="logout">
              <a href="javascript:;">退出登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>
<script setup lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";

import { MenuProps, Modal } from "ant-design-vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { logout } from "../../api/manager";
import { toast } from "../../composables/util";

import {
  ExclamationCircleOutlined,
  RedoOutlined,
  DownOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons-vue";
import { createVNode } from "vue";

// 全屏
import { useFullscreen } from "@vueuse/core";

const {
  // 是否全屏
  isFullscreen,
  // 切换全屏
  toggle,
} = useFullscreen();

const router = useRouter();
const store = useStore();
const collapsed = ref<boolean>(false);

// 退出登录
const onClick: MenuProps["onClick"] = ({ key }) => {
  console.log(key);
  switch (key) {
    case "rePassword":
      console.log("修改密码");
      break;
    case "logout":
      handleLogout();
      break;
  }
};

// 退出登录方法
const handleLogout = () => {
  Modal.confirm({
    title: "是否退出登录?",
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

// 刷新页面
const refresh = () => {
  location.reload();
};

const closeSide = () => {
  console.log("关闭侧边导航栏");
};
</script>

<style scoped lang="less">
.f-header {
  display: flex;
  @apply flex items-center px-5;

  .btn-wrapper {
    @apply flex items-center justify-center;
    height: inherit;
    .btn {
      @apply flex items-center justify-center px-2;
      height: inherit;
    }
    .btn:hover {
      @apply bg-light-500;
    }
  }
}
.red {
  border: 1px solid red;
}
</style>
