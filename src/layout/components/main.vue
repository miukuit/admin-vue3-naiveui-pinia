<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-slide" mode="out-in" appear>
      <section class="layout-main">
        <keep-alive>
          <component :is="Component" :key="route.name" v-if="route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" :key="route.name" v-if="!route.meta.keepAlive" />
        <!-- 返回顶部 -->
        <n-back-top :bottom="20" />
      </section>
    </transition>
  </router-view>
</template>

<script setup>
const route = useRoute()
</script>

<style lang="scss" scoped>
.layout-main {
  padding: 10px;
}
</style>