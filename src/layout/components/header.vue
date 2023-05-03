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
        <app-icon :size="28" icon="ant-design:menu-unfold-outlined" v-if="collapsed" />
        <app-icon :size="28" icon="ant-design:menu-fold-outlined" v-else />
      </div>
      <!-- 面包屑 -->
      <n-breadcrumb>
        <template v-for="(item, index) in breadcrumbList" :key="index">
          <n-breadcrumb-item v-if="item.meta.title">
            <n-dropdown
              v-if="item.children.length"
              :options="item.children"
              @select="dropdownSelect"
            >
              <span class="link-text">
                <component v-if="item.meta.icon" :is="item.meta.icon" />
                {{ item.meta.title }}
              </span>
            </n-dropdown>
            <span class="link-text" v-else>
              <component v-if="item.meta.icon" :is="item.meta.icon" />
              {{ item.meta.title }}
            </span>
          </n-breadcrumb-item>
        </template>
      </n-breadcrumb>
    </div>
    <div class="header-right">
      <!-- 切换全屏 -->
      <n-tooltip placement="bottom" :delay="800">
        <template #trigger>
          <div class="icon-item full-icon" @click="toggleFullScreen">
            <app-icon :icon="fullscreenIcon" :size="25"  />
          </div>
        </template>
        <span>全屏</span>
      </n-tooltip>
      <!-- 个人中心 -->
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"

const route = useRoute()
const router = useRouter()

const emits = defineEmits([
  'update:collapsed'
])
const props = defineProps({
  collapsed: {
    type: Boolean
  },
  collapsedWidth: {
    type: Number,
    default: 60
  }
})

const breadcrumbList = computed(() => {
  return route.matched
})
const fullscreenIcon = ref('ant-design:fullscreen-outlined')


onMounted(() => {
  // 监听全屏切换事件
  document.addEventListener('fullscreenchange', toggleFullscreenIcon);
})
// 设置更新菜单收起按钮
function setMenuStatus () {
  emits('update:collapsed', !props.collapsed)
}
const toggleFullscreenIcon = () => {
  fullscreenIcon.value = document.fullscreenElement !== null ? 'ant-design:fullscreen-exit-outlined' : 'ant-design:fullscreen-outlined'
}
function dropdownSelect (key) {
  router.push({ name: key });
}
// 设置全屏
const toggleFullScreen =  () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen(); // 置为全屏模式
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); // 全屏模式切换到窗口模式
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding-right: 10px;
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
  &-right {
    height: 100%;
    display: flex;
    .icon-item {
      width: 45px;
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