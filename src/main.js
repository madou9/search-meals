import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router) // Add this line to use the router in the app instance 
.mount('#app')
