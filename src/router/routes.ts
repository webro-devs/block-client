import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/HomePage.vue'),
      },
      {
        path: 'search',
        component: () => import('../pages/SearchPage.vue'),
      },
    ],
  },
  {
    path: '/blog/:id',
    component: () => import('../pages/blog/BlogDetail.vue'),
  },
  {
    path: '/blog-create',
    component: () => import('../pages/blog/BlogCreate.vue'),
  },
  {
    path: '/blog-update/:id',
    component: () => import('../pages/blog/BlogUpdate.vue'),
  },
  {
    path: '/profile/:id',
    component: () => import('../pages/user/ProfilePage.vue'),
  },
  {
    path: '/profile-update/:id',
    component: () => import('../pages/user/ProfileUpdate.vue'),
  },
  {
    path: '/signup',
    component: () => import('../pages/auth/SignUp.vue'),
  },
  {
    path: '/signin',
    component: () => import('../pages/auth/SignIn.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
