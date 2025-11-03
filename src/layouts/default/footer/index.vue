<script setup lang="tsx">
import { appName, appType, siteUrl } from '@/configs/base'

const year = new Date().getFullYear()
</script>

<template>
  <div class="h-full flex flex-col flex-justify-center flex-items-center">
    <el-link class="font-size-14px" :href="siteUrl" target="_blank" :underline="false">
      Copyright © {{ year }} {{ appName }} - {{ appType }}
    </el-link>
  </div>
</template>
