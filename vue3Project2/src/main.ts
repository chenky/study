import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

const c1: cql1 = { a: "a" }

app.use(createPinia())
app.use(router)

app.mount('#app')
