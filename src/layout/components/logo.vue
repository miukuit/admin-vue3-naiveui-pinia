<template>
  <div class="logo"
    :style="{
      '--size': `${collapsedWidth}px`
    }"
  >
    <img :src="logoImg" alt="logo" class="img">
    <h2 v-show="!collapsed" class="title">后台管理系统</h2>
  </div>
</template>

<script setup name="logo">
// public 下的logo文件
import logoImg from '/logo.svg'

const props = defineProps({
  collapsed: {
    type: Boolean
  },
  collapsedWidth: {
    type: Number,
    default: 60
  }
})
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--size);
  line-height: var(--size);
  overflow: hidden;
  white-space: nowrap;
  .img {
    height: calc(var(--size) / 2);
  }
  .title {
    margin-left: 10px;
  }
}
</style>