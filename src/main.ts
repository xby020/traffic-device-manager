import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';

import { setupNaive } from './plugins';
import { setupStore } from '@/store';

import './assets/index.postcss';

const head = createHead();
const app = createApp(App);

// 挂载Naive-ui组件
setupNaive(app);

// 挂载状态管理
setupStore(app);

// app.use(store)
app.use(router);
app.use(head);

app.mount('#app');
