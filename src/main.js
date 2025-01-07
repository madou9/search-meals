import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
.use(router) // Add this line to use the router in the app instance 
.use(store) // Add this line to use the store in the app instance
.mount('#app')
