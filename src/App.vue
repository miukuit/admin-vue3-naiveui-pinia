<template>
  <app-provider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </app-provider>
</template>

<script setup>
import AppProvider from '@/components/app-provider/index.vue';
</script>