import axios from 'axios'
import { camelCase, snakeCase } from 'change-case'
import { apiTimeout } from '@/configs/api'
import { useAuthenticationStore } from '@/store'
import { transformKeys } from '@/utils/common'

const instance = axios.create({
  baseURL: `/api`,
  timeout: apiTimeout,
})
instance.interceptors.request.use(
  (config) => {
    const authenticationStore = useAuthenticationStore()
    if (authenticationStore.loggedIn) {
      config.headers.setAuthorization(`${authenticationStore.tokenType} ${authenticationStore.accessToken}`)
    }
    if (config.params) {
      config.params = transformKeys(config.params, snakeCase)
    }
    if (config.data) {
      config.data = transformKeys(config.data, snakeCase)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
instance.interceptors.response.use(
  (response) => {
    if (response.data) {
      response.data = transformKeys(response.data, camelCase)
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default instance
