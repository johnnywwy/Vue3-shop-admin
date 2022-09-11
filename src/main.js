import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
// 引入antd css
import 'ant-design-vue/dist/antd.css';
// 引入antd 
import Antd from 'ant-design-vue';
// 引入 windi css
import 'virtual:windi.css'

const app = createApp(App)
app.use(router)

app.use(Antd)
app.mount('#app');
