import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        name: `dashboard_index`,
        meta: {
          title: '仪表板'
        },
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  }
];

export default routes;
