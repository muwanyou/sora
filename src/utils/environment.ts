function getAppName(): string {
  return String(import.meta.env.VITE_APP_NAME)
}
function getAppType(): string {
  return String(import.meta.env.VITE_APP_TYPE)
}
function getSiteUrl(): string {
  return String(import.meta.env.VITE_SITE_URL)
}
function getRouterMode(): string {
  return String(import.meta.env.VITE_ROUTER_MODE)
}
function getBasePath(): string {
  return String(import.meta.env.VITE_BASE_PATH)
}
function getHomePath(): string {
  return String(import.meta.env.VITE_HOME_PATH)
}
function getLoginPath(): string {
  return String(import.meta.env.VITE_LOGIN_PATH)
}
function getApiUrl(): string {
  return String(import.meta.env.VITE_SERVER_URL)
}
function getApiTimeout(): number {
  return Number(import.meta.env.VITE_API_TIMEOUT)
}

export {
  getApiTimeout,
  getApiUrl,
  getAppName,
  getAppType,
  getBasePath,
  getHomePath,
  getLoginPath,
  getRouterMode,
  getSiteUrl,
}
