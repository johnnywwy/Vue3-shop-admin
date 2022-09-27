<template>
  <a-form-item name="username">
    <a-input :model-value="props.username" placeholder="请输入登录账号">
      <template #prefix>
        <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
      </template>
    </a-input>
  </a-form-item>
</template>

<script setup>
const props = defineProps({
  username: String,
});
</script>

<style>
</style>