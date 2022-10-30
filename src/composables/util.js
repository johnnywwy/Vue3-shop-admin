import { notification, Modal } from "ant-design-vue";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
import nProgress from "nprogress";

// 消息提示
export function toast(message, type = "success") {
  return notification[type]({
    message,
    type,
    duration: 1.5,
  });
}
export function showModal(title = '提示内容', content = '') {
  Modal.confirm({
    title: title,
    icon: createVNode(ExclamationCircleOutlined),
    content: content,
    onOk() { },
    onCancel() { },
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