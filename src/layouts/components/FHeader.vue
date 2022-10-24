<template>
  <div class="flex">
    <span>
      汇海研发
      <menu-fold-outlined />
      <undo-outlined />
    </span>
    <div>
      <fullscreen-outlined />
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>     
          <a-avatar size="small" :src="$store.state.user.avatar"/>
           {{ $store.state.user.username }}
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">退出登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {
  MenuFoldOutlined,
  UndoOutlined,
  FullscreenOutlined,
} from "@ant-design/icons-vue";

import { UserOutlined, DownOutlined } from "@ant-design/icons-vue";
</script>

<style lang='less' scoped>
</style>