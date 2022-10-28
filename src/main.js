import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入样式初始化css文件
import 'normalize.css'
// 引入公共样式
import '@/assets/styles/common.less'
createApp(App).use(store).use(router).mount('#app')
