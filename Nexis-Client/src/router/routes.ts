import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/auth',
    children: [
      { path: 'register', name: 'register', meta: { guestOnly: true }, component: () => import('pages/RegisterUser.vue') },
      { path: 'login', name: 'login', meta: { guestOnly: true }, component: () => import('pages/LoginUser.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
