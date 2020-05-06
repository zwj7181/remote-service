import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import utils from '../utils';
import error from './modules/error';
import user from './modules/user';
import Home from '../views/home/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '主页'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/about/index.vue'),
    meta: {
      title: '关于我们'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    ...user,
    ...error
  ]
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

router.afterEach(() => {
  // 路由切换回到顶部 （根据实际情况决定是否需要）
  if (!window.dom) {
    window.dom = document.documentElement || document.body;
  }
  utils.easeout(window.dom, 0, 5);
});

export default router;
