import { createApp } from 'vue'
// import './style.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)
//using router
app.use(router)

app.mount('#app')
