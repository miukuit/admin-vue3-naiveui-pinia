<template>
  <div>
    <app-icon type="svg" icon="logo" />
    <app-icon :icon="iconName" />
    <n-select v-model:value="iconName" :options="selectOptions" />
    <div>asdasd</div>
    <icon-select v-model:value="iconName" />
  </div>
</template>

<script setup>
import * as antIcon from '@iconify-json/ant-design'
import IconSelect from '@/components/icon-select/index.vue'

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

<style lang="scss" scoped></style>