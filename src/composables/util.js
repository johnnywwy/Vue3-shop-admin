import { notification } from "ant-design-vue";
import nProgress from "nprogress";

// 消息提示
export function toast(message, type = "success") {
  return notification[type]({
    message,
    type,
    duration: 1.5,
  });
}


//显示全屏loading
export function showFullLoading() {
  nProgress.start();
}

//显示全屏loading
export function hideFullLoading() {
  nProgress.done();
} 