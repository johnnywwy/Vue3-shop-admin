<template>
  <RouterView></RouterView>
</template>

<script setup></script>

<style>
#nprogress .bar {
  background-color: #f4f4f4 !important;
  height: 3px;
}

/* 配置滚动条 */
::-webkit-scrollbar {
  width: 8px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(67, 66, 66, 0);
  background: #8a88888e;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(194, 27, 27, 0.091);
  border-radius: 5px;
  background: #ededed;
}
</style>
