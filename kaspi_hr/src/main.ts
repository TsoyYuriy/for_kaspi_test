import '@/assets/styles/global.scss'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice';
import ProgressSpinner from 'primevue/progressspinner'
import Toast from 'primevue/toast';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(ToastService);
app.component('app-progress-spinner', ProgressSpinner)
app.component('app-toast', Toast)
app.mount('#app')
