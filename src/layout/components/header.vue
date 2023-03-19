<template>
  <div class="header"
    :style="{
      '--size': `${collapsedWidth}px`,
      'height': `${collapsedWidth}px`
    }"
  >
    <div class="header-left">
      <!-- 菜单收起 -->
      <div class="header-left-menu" @click="setMenuStatus">
        <n-icon size="28" v-if="collapsed">
          <component :is="MenuUnfoldOutlined"></component>
        </n-icon>
        <n-icon size="28" v-else>
          <component :is="MenuFoldOutlined"></component>
        </n-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd'
const props = defineProps({
  collapsed: {
    type: Boolean
  },
  collapsedWidth: {
    type: Number,
    default: 60
  }
})
const emits = defineEmits([
  'update:collapsed'
])

function setMenuStatus() {
  emits('update:collapsed', !props.collapsed)
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  background-color: #fcfcfc;
  &-left {
    height: 100%;
    display: flex;
    align-items: center;
    &-menu {
      width: 50px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: .3s;
      &:hover {
        background-color: rgb(159 159 159 / 10%);
      }
    }
  }
}
</style>