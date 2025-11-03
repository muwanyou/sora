import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import router from '@/router'
import pinia from '@/store'
import App from './App.vue'
import '@/styles/index.scss'
import 'uno.css'
import 'element-plus/dist/index.css'

async function init() {
  const app = createApp(App)
  library.add(fas)
  library.add(fab)
  library.add(far)
  app.component('font-awesome-icon', FontAwesomeIcon)
  app.use(pinia)
  app.use(router)
  app.mount('#app')
}
init()
