import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// 普通路由，无需验证权限
export const constantRouter: any[] = [];

// 创建实例
const router = createRouter({
  history: createWebHistory(''),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({
    left: 0,
    top: 0
  })
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
