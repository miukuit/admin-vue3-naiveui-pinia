
<template>
  <n-layout class="layout" has-sider>
    <!-- 左侧侧边栏 -->
    <n-layout-sider
      show-trigger="bar"
      :width="menuWidth"
      :native-scrollbar="false"
      :inverted="inverted"
      :collapsed-width="collapsedWidth"
      :collapsed="collapsed"
      collapse-mode="width"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <sider-logo :collapsed="collapsed" :collapsed-width="collapsedWidth" />
      <sider-menu />
    </n-layout-sider>
    <!-- 右侧内容 -->
    <n-layout>
      <!-- 顶栏 -->
      <n-layout-header>
        <page-header v-model:collapsed="collapsed" :collapsed-width="collapsedWidth" />
      </n-layout-header>
      <!-- 内容 -->
      <n-layout-content>
        <app-icon type="svg" icon="logo" />
        <app-icon :icon="iconName" />
        <n-select v-model:value="iconName" :options="selectOptions" />
      </n-layout-content>
      <!-- 回到顶部 -->
      <n-back-top :right="50" />
    </n-layout>
  </n-layout>
</template>

<script setup>
import SiderLogo from './components/logo.vue'
import siderMenu from './components/menu.vue';
import PageHeader from './components/header.vue';

import * as antIcon from '@iconify-json/ant-design'

const collapsed = ref(false)
const menuWidth = ref(220)
const collapsedWidth = ref(60)
const inverted = ref(true) // 使用反转背景色, 增加对比度

// console.log(antIcon.icons.icons)
const allAntIcon = ref(antIcon.icons.icons)
const iconName = ref('ant-design:alert-outlined')

const selectOptions = computed(() => {
  return Object.entries(allAntIcon.value).map(([key]) => ({
    label: key,
    value: `ant-design:${key}`,
  }))
})

</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
</style>