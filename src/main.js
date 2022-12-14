import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import { setupRouter } from './config/router.js'
import { notification, message } from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'
import 'ant-design-vue/es/notification/style/css'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas)
library.add(far)

//Editor
import ckeditor from '@ckeditor/ckeditor5-vue'

//VueHighlightJS
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/vs.css'

const pinia = createPinia()
const app = createApp(App)
const router = setupRouter()

pinia.use(({ store }) => {
  store.router = markRaw(router)
  store.notification = markRaw(notification)
  store.message = markRaw(message)
})

app.use(pinia)
app.use(router)
app.use(ckeditor)
app.use(VueHighlightJS)
app.component('Fa', FontAwesomeIcon)

app.mount('#app')
