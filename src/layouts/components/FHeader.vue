<template>
  <div class="f-header">
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
        <sync-outlined @click="refresh" class="btn" />
      </a-tooltip>
    </div>

    <div>
      <PhysicalProjectSelector></PhysicalProjectSelector>
    </div>
    <div class="ml-auto">
      <a-avatar size="small" :src="$store.state.user.avatar" class="mx-2" />
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
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
  </div>
</template>

<script setup lang="ts">
import { MenuFoldOutlined, SyncOutlined } from "@ant-design/icons-vue";
import logo from "@/assets/logo.png";
import type { SelectProps } from "ant-design-vue";
import { DownOutlined } from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";

import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { Modal } from "ant-design-vue";
import { createVNode, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { logout } from "../../api/manager";
import { showModal, toast } from "../../composables/util";
import PhysicalProjectSelector from "../../pages/analysisManage/components/PhysicalProjectSelector.vue";

const router = useRouter();
const store = useStore();

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

// 关闭侧边导航来
const closeSide = () => {
  console.log("关闭侧边导航栏");
};

// 刷新页面
const refresh = () => {
  location.reload();
};
// const value1 = ref("lucy");

// const options1 = ref<SelectProps['options']>([
//   {
//     value: 'jack',
//     label: 'Jack',
//   },
//   {
//     value: 'lucy',
//     label: 'Lucy',
//   },
//   {
//     value: 'disabled',
//     label: 'Disabled',
//     disabled: true,
//   },
//   {
//     value: 'yiminghe',
//     label: 'Yiminghe',
//   },
// ]);

// const focus = () => {
//   console.log('focus');
// };

// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };

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
</script>

<style scoped lang="less">
.f-header {
  display: flex;
  height: 100%;
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
</style>
