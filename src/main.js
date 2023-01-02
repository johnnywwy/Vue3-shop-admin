import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "./assets/main.css";
// 引入antd css
import "ant-design-vue/dist/antd.css";
// 引入antd
import Antd from "ant-design-vue";
// 引入 windi css
import "virtual:windi.css";

// 引入store
import store from "./store";

// 引入路由守卫
import "./permission";

// 引入全局loading进度条
import 'nprogress/nprogress.css'

const app = createApp(App);
app.use(store);
app.use(router);

app.use(Antd);
app.mount("#app");
