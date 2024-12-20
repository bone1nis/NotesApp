import { createApp } from 'vue'
import routers from '@/routes'
import { store } from "@/store/index"
import App from './App'

import '@/assets/scss/main.scss'

const app = createApp(App)

app.use(store)
app.use(routers)

app.mount('#app')
