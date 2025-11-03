<script setup lang="tsx">
import { useAsideStore } from '@/store'

const asideStore = useAsideStore()
</script>

<template>
  <div class="h-full w-full flex flex-justify-between flex-items-center">
    <el-space wrap>
      <el-tooltip
        :content="asideStore.collapsed ? '展开' : '折叠'"
        placement="bottom-start"
      >
        <el-button text size="large" @click="asideStore.toggleCollapse">
          <el-icon size="large">
            <font-awesome-icon :icon="asideStore.collapsed ? ['fa-solid', 'fa-indent'] : ['fa-solid', 'fa-outdent']" />
          </el-icon>
        </el-button>
      </el-tooltip>
    </el-space>
  </div>
</template>

<style lang="scss" scoped></style>
