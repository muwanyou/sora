<script setup lang="tsx">
import { useAsideStore } from '@/store'
import Aside from './aside/index.vue'
import Footer from './footer/index.vue'
import Header from './header/index.vue'

const asideStore = useAsideStore()
</script>

<template>
  <el-container class="h-screen bg-[#f7fafc]">
    <el-aside class="z-9 bg-white" :style="`width: ${asideStore.collapsed ? 'calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2)' : '220px'};`">
      <Aside />
    </el-aside>
    <el-container>
      <el-header class="bg-white">
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer class="bg-white">
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-aside {
  box-shadow: var(--el-box-shadow-light);
  border-radius: var(--el-border-radius-base);
  transition:
    var(--el-transition-duration) width ease-in-out,
    var(--el-transition-duration) padding-left ease-in-out,
    var(--el-transition-duration) padding-right ease-in-out;
}
</style>
