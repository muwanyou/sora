import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAsideStore = defineStore('aside', () => {
  const collapsed = ref<boolean>(false)
  function toggleCollapse() {
    collapsed.value = !collapsed.value
  }
  return {
    collapsed,
    toggleCollapse,
  }
}, {
  persist: false,
})
