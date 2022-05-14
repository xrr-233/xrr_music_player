import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

createApp(App).use(router).mount('#app')
