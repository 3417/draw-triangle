import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import '@/assets/flexlibe.js'
createApp(App).use(ElementPlus,{ size: 'small',locale}).mount('#app')
