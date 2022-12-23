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
          <a-avatar size="small" :src="store.state.user.avatar" class="mx-1" />
          {{ store.state.user.username }}
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

  <form-drawer
    ref="formDrawerRef"
    title="修改密码"
    destroyOnClose
    @submit="onSubmit"
  >
    <a-form :model="form" :rules="rules" layout="horizontal" ref="formRef">
      <a-row>
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
    </a-form>
  </form-drawer>
</template>
<script setup lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import formDrawer from "../../components/formDrawer.vue";
import { MenuProps, Modal } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
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

import { useRePassword, useLogout } from "../../composables/useManager";

const router = useRouter();
const store = useStore();

const { isFullscreen, toggle } = useFullscreen();

// 修改密码
const { formDrawerRef, form, rules, formRef, onSubmit, openRePasswordForm } =
  useRePassword();

// 退出登录
const { handleLogout } = useLogout();

// 退出登录
const onClick: MenuProps["onClick"] = ({ key }) => {
  console.log(key);
  switch (key) {
    case "rePassword":
      console.log("修改密码");
      openRePasswordForm();
      break;
    case "logout":
      handleLogout();
      break;
  }
};

// 刷新页面
const refresh = () => {
  location.reload();
};

//
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
