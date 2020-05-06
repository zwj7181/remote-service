export default [
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '404-页面不存在'
    }
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    meta: {
      title: '401-用户无权限'
    }
  },
  {
    path: "*",
    redirect: "/404"
  }
];
