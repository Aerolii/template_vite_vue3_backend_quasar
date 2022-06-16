import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { setupI18n } from './locale'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// i18n
setupI18n(app)

app.mount('#app')
