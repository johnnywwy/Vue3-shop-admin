<template>
  <div>
    <a-result icon="warning" title="404提示" sub-title="你找的页面走丢了~">
      <template #extra>
        <a-button type="primary" @click="$router.push('/')">回到首页</a-button>
      </template>
    </a-result>
  </div>
</template>
