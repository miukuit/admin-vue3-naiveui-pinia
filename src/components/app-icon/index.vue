<template>
  <component :is="iconCom" />
</template>

<script setup>
import { h } from 'vue'
import { Icon } from '@iconify/vue'
import { NIcon } from 'naive-ui'
import SvgIcon from './components/svg-icon.vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 14,
  },
  color: {
    type: String,
    default: undefined,
  },
  // iconify | svg
  type: {
    type: String,
    default: 'iconify',
  },
})

const iconCom = computed(() => {
  let icon = props.icon
  let ops = {
    size: props.size,
    color: props.color
  }
  if (props.type === 'iconify') {
    return () => h(NIcon, props, { default: () => h(Icon, { icon }) })
  } else if (props.type === 'svg') {
    return () => h(NIcon, ops, { default: () => h(SvgIcon, { icon }) })
  }
})
</script>

<style lang="scss" scoped>

</style>