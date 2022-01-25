import type { RouteRecordRaw } from "vue-router";
import { App, createApp } from "vue";
import type { AppRouteRecordRaw } from "./types";

import { createRouter, createWebHashHistory } from "vue-router";

const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/home',
  meta : {
    title: 'Root'
  }
}
const HomeRoute: AppRouteRecordRaw = {
  path: '/home',
  name: 'home',
  component: () => import('/@/views/home/index.vue'),
  meta: {
    title: '首页'
  }
}

const basicRoutes = [RootRoute, HomeRoute]
// as 类型断言, 手动指定一个值的类型
const router = createRouter({
  history: createWebHashHistory(),
  routes: (basicRoutes as unknown) as RouteRecordRaw[]

})
export function setupRouter(app: App<Element>)  {
  app.use(router);
}
export default router
