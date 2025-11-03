import { getApiTimeout, getApiUrl } from '@/utils/environment'

const apiUrl = getApiUrl()
const apiTimeout = getApiTimeout()

export {
  apiTimeout,
  apiUrl,
}
