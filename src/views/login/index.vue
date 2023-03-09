<template>
  <div class="title">
    <div v-for="(item, index) in itemList">
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script setup>
  const a = ref('a')
	let sad = 123
  let bool = 1 === 4
  const itemList = ref([1, 2, 3, 4])
</script>
<style lang="scss" scoped></style>
