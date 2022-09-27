<template>
  <div>后台首页</div>
  {{ $store.state.user }}
</template>

<script setup>
import { reactive, ref } from "vue";
</script>
