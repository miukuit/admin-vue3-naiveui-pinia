
<template>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary">
      Tertiary
    </n-button>
    <n-button type="primary">
      Primary
    </n-button>
    <n-button type="info">
      Info
    </n-button>
    <n-button type="success">
      Success
    </n-button>
    <n-button type="warning">
      Warning
    </n-button>
    <n-button type="error">
      Error
    </n-button>
  </n-space>
</template>

<script setup>
import { lStorage } from '@/utils'
onMounted(() => {
  lStorage.set('asdasd', 'asd') 
  lStorage.set('name', '张三') 
  $loadingBar.start()
  $message.warning('edfghjkl;')
  console.log(lStorage.get('asdasd'))
  console.log(lStorage.get('name'))
  console.log(import.meta.env.VITE_USE_HASH)
})
</script>

<style lang="scss" scoped></style>