import { createApp } from 'vue'
import App from './App.vue'
import VueUIComponents from './index'

const app = createApp(App)

// 安装组件库
app.use(VueUIComponents)

app.mount('#app') 