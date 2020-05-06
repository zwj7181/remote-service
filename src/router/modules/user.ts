import BlankLayout from '@/layouts/blankLayout.vue';

export default [
  {
    path: '/user',
    name: 'user',
    component: BlankLayout,
    children: [
      {
        // 以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;
        // 在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        path: 'login',
        name: 'sign in',
        component: () => import('@/views/user/login.vue'),
        meta: {
          title: '登录'
        }
      },
      {
        path: 'register',
        name: 'sign up',
        component: () => import('@/views/user/register.vue'),
        meta: {
          title: '注册/新建孕册'
        }
      }
    ]
  }
];
