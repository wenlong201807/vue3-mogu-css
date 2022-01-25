import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 纯样式的效果，放一个全局即可，两者区别还是不清楚（对比vue.config.js中配置）
// import 'lib-flexible/flexible.js'
import 'normalize.css/normalize.css'
import mgjUI from '@/components' // 自定义插件使用
import './style/index.scss';
// import 'vant/lib/toast/style';
// import '@/mock'; // mock数据

// 自定义插件使用，需要在这里use(mgjUI)
createApp(App).use(store).use(router).use(mgjUI).mount('#app')
