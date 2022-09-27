import { notification } from "ant-design-vue";

// 成功提示
export function toast(message, type = "success") {
  return notification[type]({
    message,
    type,
    duration: 2.5,
  });
}
