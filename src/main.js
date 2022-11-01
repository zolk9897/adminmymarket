import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import { setupRouter } from './config/router.js'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas)
library.add(far)

//Editor
import ckeditor from '@ckeditor/ckeditor5-vue'
//Mask
import Maska from 'maska'

const pinia = createPinia()
const app = createApp(App)
const router = setupRouter()

app.use(pinia)
app.use(router)
app.use(Maska)
app.use(ckeditor)
app.component('Fa', FontAwesomeIcon)

app.mount('#app')
