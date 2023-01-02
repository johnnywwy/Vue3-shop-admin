import { createRouter, createWebHashHistory } from "vue-router";

import Index from "@/pages/index.vue";
import Login from "@/pages/login.vue";
import NotFound from "@/pages/404.vue";
import Admin from '@/layout/index.vue'

import goodList from "@/pages/goods/list.vue"
import categoryList from "@/pages/category/list.vue"


// 默认路由 所有用户共享
const routes = [
  {
    path: "/",
    component: Admin,
    name: 'admin',
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: '登录页'
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

// 动态路由数组，用于匹配菜单动态添加路由
const asyncRoutes = [
  {
    path: "/",
    component: Index,
    name: '/',
    meta: {
      title: '主控页'
    },
  },
  {
    path: "/goods/list",
    component: goodList,
    name: '/goods/list',
    meta: {
      title: '商品管理'
    },
  },
  {
    path: "/category/list",
    component: categoryList,
    name: '/category/list',
    meta: {
      title: '分类管理'
    },
  }

]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 动态添加路由
export function addRoutes(menus) {

  // 是否有新的路由
  let hasNewRoutes = false

  const findAndAddRoutesByMenus = (arr) => {
    arr.forEach(e => {

      let item = asyncRoutes.find(o => o.path === e.frontpath)

      if (item && !router.hasRoute(item.path)) {
        router.addRoute('admin', item)
        hasNewRoutes = true
      }
      if (e.child && e.child.length > 0) {
        findAndAddRoutesByMenus(e.child)

      }
    })
  }
  findAndAddRoutesByMenus(menus)
  // console.log(router.getRoutes());
  return hasNewRoutes
}
