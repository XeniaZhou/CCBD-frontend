import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/index.css';
import Notifications from '@kyvg/vue3-notification';

import "./axios"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$axios=axios

app.use(store)
    .use(router)
    .use(ElementPlus)
    .use(Notifications)
    .mount('#app')
