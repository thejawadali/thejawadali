import "./index.css";
import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App)
AOS.init({
  once: true
})
app.use(createPinia())
app.mount('#app')
