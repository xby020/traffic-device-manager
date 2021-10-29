import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';
import { createHead } from '@vueuse/head';
import 'virtual:windi.css';
import '@icon-park/vue-next/styles/index.css';

import { setupNaive } from './plugins';
import { setupStore } from '@/store';

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
