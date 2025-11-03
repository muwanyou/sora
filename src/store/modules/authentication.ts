import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginUser } from '@/api'

export const useAuthenticationStore = defineStore('authentication', () => {
  const tokenType = ref<string>('')
  const accessToken = ref<string>('')
  const loggedIn = ref<boolean>(false)
  async function login(username: string, password: string) {
    const { data } = await loginUser({ username, password })
    tokenType.value = data.tokenType
    accessToken.value = data.accessToken
    loggedIn.value = true
  }
  async function logout() {
    tokenType.value = ''
    accessToken.value = ''
    loggedIn.value = false
  }
  return {
    tokenType,
    accessToken,
    loggedIn,
    login,
    logout,
  }
}, {
  persist: true,
})
