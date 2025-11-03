import { getAppName, getAppType, getSiteUrl } from '@/utils/environment'

const appName = getAppName()
const appType = getAppType()
const siteUrl = getSiteUrl()

export {
  appName,
  appType,
  siteUrl,
}
