import '@/assets/css/easy-responsive-shortcodes.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/css/woocommerce.css'
import '@/assets/css/woocommerce-layout.css'
import '@/assets/css/woocommerce-smallscreen.css'
import '@/assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "@/router";

const app = createApp(App)

// Используем плагины и монтируем роутер и хранилище
app.use(VueAxios, axios).use(store).use(router)

// Монтируем приложение
app.mount('#app')
