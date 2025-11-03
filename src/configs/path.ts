import { getBasePath, getHomePath, getLoginPath } from '@/utils/environment'

const basePath = getBasePath()
const homePath = getHomePath()
const loginPath = getLoginPath()

export {
  basePath,
  homePath,
  loginPath,
}
