<template>
  <n-popover
    width="trigger"
    trigger="click"
    :show-arrow="false"
    ref="iconSelectPopoverRef"
    placement="bottom"
    @update:show="popprtShow"
  >
    <template #trigger>
      <div class="icon-select"
        :class="{
          'focus': showPopover
        }"
      >
        <div class="select--inner">
          <span class="type">{{ type }}</span>
          <app-icon :icon="value" :type="type" :size="22" />
          <span class="value">{{ value }}</span>
        </div>
      </div>
    </template>
    <div class="choose-container">
      <div class="filter-box">
        <n-input v-model:value="filterTxt" clearable placeholder="图标筛选...">
          <template #prefix>
            <app-icon icon="ant-design:search-outlined" :size="18" />
          </template>
        </n-input>
      </div>
      <n-tabs v-model:value="tabsValue">
        <n-tab-pane name="svg" tab="svg"></n-tab-pane>
        <n-tab-pane name="iconify" tab="iconify">
          
        </n-tab-pane>
      </n-tabs>
    </div>
  </n-popover>
</template>

<script setup>
const props = defineProps({
  value: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'iconify'
  }
})
const emits = defineEmits([
  'update:value'
])

const iconSelectPopoverRef = ref()
const showPopover = ref(false)
const filterTxt = ref('') // 筛选内容
const tabsValue = ref(props.type) // 默认选项卡

const popprtShow = (e) => {
  showPopover.value = e
}

const selectIcon = () => {
  iconSelectPopoverRef.value.setShow(false) // 非受控模式下控制是否显示 popover
  showPopover.value = false // 移除 focus 样式
  // emits('update:value', e)
  // emits('update:value', e)
}
</script>

<style lang="scss" scoped>
.icon-select {
  height: 34px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid rgb(224, 224, 230);
  background-color: rgb(255 255 255);
  cursor: pointer;
  transition: .3s;
  &:hover {
    border-color: #36ad6a;
  }
  &.focus {
    position: relative;
    z-index: 1;
  }
  &.focus::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.2);
    border: 1px solid #36ad6a;
    z-index: -1;
  }
  .select--inner {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .type {
      margin-right: 5px;
      padding: 0 5px;
      border-radius: 3px;
      font-size: 12px;
      background-color: #3c4043;
      color: #fff;
    }
    .value {
      flex: 1;
      width: 0;
      margin-left: 5px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>