import { createRouter, createWebHashHistory } from "vue-router";

import Index from "@/pages/index.vue";
import Login from "@/pages/login.vue";
import NotFound from "@/pages/404.vue";

import Admin from '@/layout/index.vue'

const routes = [
  {
    path: "/",
    component: Admin,
    children: [{
      path: "/",
      component: Index,
      meta: {
        title: '后台首页'
      },
    }]
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

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
