import router from "./router";
import { getToken } from "./composables/auth";

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  console.log(to, from);
  const token = getToken();
  // 没有登录 想去的页面还是要登录后才能看的页面
  if (!token && to.path != "/login") {
    return next({ path: "/login" });
  }
  next();
  return false;
});
