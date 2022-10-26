<template>
  <div>
    <a href="http://www.huaxiahuihai.com/">
      <img :src="logo" alt="" />
    </a>

  </div>
</template>

<script setup>
import logo from "@/assets/logo.png";
</script>

<style scoped lang="less">
div {
  @apply flex justify-center items-center;
  max-width: 200px;
  max-height: 64px;
  overflow: hidden;
  border: 1px solid red;

  img {
    transform: translateY(5px);
    size: 200px;
  }
}
</style>