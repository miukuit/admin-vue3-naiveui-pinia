<template>
  <svg aria-hidden="true" :width="size" :height="size">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '1em',
  },
  color: {
    type: String,
    default: '#333',
  },
})
const symbolId = computed(() => `#icon-${props.icon}`)
</script>