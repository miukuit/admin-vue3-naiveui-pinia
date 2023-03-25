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
      <div>
        <n-tooltip placement="bottom">
          <template #trigger>
            <n-icon size="18" @click="toggleFullScreen">
              <component :is="fullscreenIcon" />
            </n-icon>
          </template>
          <span>全屏</span>
        </n-tooltip>
      </div>
      <!-- 个人中心 -->
    </div>
  </div>
</template>

<script setup>

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
const fullscreenIcon = ref('FullscreenOutlined')

function setMenuStatus () {
  emits('update:collapsed', !props.collapsed)
}

function dropdownSelect (key) {
  router.push({ name: key });
}

const toggleFullScreen =  () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
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