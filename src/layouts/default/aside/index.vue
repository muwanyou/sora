<script setup lang="tsx">
import { useRoute } from 'vue-router'
import logoImage from '@/assets/images/logo.svg'
import { appName, appType, siteUrl } from '@/configs/base'
import { homePath } from '@/configs/path'
import { useAsideStore } from '@/store'

const route = useRoute()
const asideStore = useAsideStore()
</script>

<template>
  <div class="h-full flex flex-col">
    <el-link class="header" :href="siteUrl" :underline="false">
      <el-image v-if="asideStore.collapsed" class="h-[18px] w-[18px]" :src="logoImage" />
      <span v-else class="overflow-hidden whitespace-nowrap text-center">{{ appName }} - {{ appType }}</span>
    </el-link>
    <el-scrollbar>
      <el-menu
        router
        :default-active="String(route.meta.code)"
        style="border-right: none;"
        :collapse="asideStore.collapsed"
      >
        <el-menu-item index="home" :route="homePath">
          <el-icon size="large">
            <font-awesome-icon :icon="['fa-solid', 'fa-home']" />
          </el-icon>
          <el-text size="large" style="color: inherit;">
            首页
          </el-text>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.header {
  color: var(--el-color-primary);
  font-size: var(--el-font-size-extra-large);
  height: var(--el-menu-item-height);
  padding: 0 var(--el-menu-base-level-padding);
}
</style>
