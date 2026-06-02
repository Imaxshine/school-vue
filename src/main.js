import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import route from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App)

app.use(createPinia())
app.use(route)

app.mount('#app')
