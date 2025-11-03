<script setup lang="tsx">
import type { SubmitResult } from 'vue-element-plus-x/types/EditorSender'
import type { FilesCardProps, FilesType } from 'vue-element-plus-x/types/FilesCard'
import { ref } from 'vue'
import { Attachments, EditorSender } from 'vue-element-plus-x'

const loading = ref(false)
const editorSenderRef = ref()
const isShowHeader = ref(false)
const files = ref<FilesCardProps[]>([
  {
    uid: '123',
    name: '测试1',
    fileSize: 20,
    showDelIcon: true,
    imgVariant: 'square',
  },
  {
    uid: '123',
    name: '测试2',
    fileSize: 20,
    showDelIcon: true,
    imgVariant: 'square',
  },
  {
    uid: '123',
    name: '测试3',
    fileSize: 20,
    showDelIcon: true,
    imgVariant: 'square',
  },
])
function handleSubmit() {
  loading.value = true
  const result: SubmitResult = editorSenderRef.value.getCurrentValue()
  console.log(result.text)
  loading.value = false
}
</script>

<template>
  <div class="h-full flex flex-col gap-16px">
    <el-card>
      <EditorSender ref="editorSenderRef" variant="updown">
        <template v-if="isShowHeader" #header>
          <Attachments
            :items="files"
            drag
            hide-upload
            overflow="scrollX"
          />
        </template>
        <template #prefix>
          <div class="flex flex-wrap gap-8px flex-items-center">
            <el-button round>
              <el-icon>
                <font-awesome-icon :icon="['fa-solid', 'fa-plus']" />
              </el-icon>
            </el-button>
          </div>
        </template>
        <template #action-list>
          <div class="flex gap-8px flex-items-center">
            <el-button round color="#626aef" :loading="loading" @click="handleSubmit">
              <el-icon>
                <font-awesome-icon :icon="['fa-solid ', 'fa-paper-plane']" />
              </el-icon>
            </el-button>
          </div>
        </template>
      </EditorSender>
    </el-card>
  </div>
</template>
