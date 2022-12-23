import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { logout, updatepassword } from "@/api/manager";
import { toast } from "./util";
import { Modal } from "ant-design-vue";
import { createVNode } from "vue";

import {
    ExclamationCircleOutlined,
} from "@ant-design/icons-vue";
export function useRePassword() {

    const router = useRouter();
    const store = useStore();

    // 表单节点
    const formRef = ref();

    const formDrawerRef = ref(null);

    // 数据
    const form = reactive({
        oldpassword: "",
        newpassword: "",
        repassword: "",
    });

    // 验证规则
    const rules = {
        oldpassword: [
            { required: true, message: "旧密码不能为空", trigger: "blur" },
        ],
        newpassword: [
            { required: true, message: "新密码不能为空", trigger: "blur" },
        ],
        repassword: [
            {
                required: true,
                message: "再次输入新密码",
                trigger: "blur",
            },
        ],
    };

    // 登录功能
    const onSubmit = async () => {
        const valid = await formRef.value?.validate();
        if (!valid) {
            return false;
        }
        formDrawerRef.value.showLoading();
        updatepassword(form)
            .then((res) => {
                toast("修改密码成功");
                // 退出登录
                store.dispatch("logout");

                // 跳转回登录页
                router.push("/login");
            })
            .finally(() => {
                formDrawerRef.value.hideLoading();
            });
    };

    const openRePasswordForm = () => formDrawerRef.value.open();

    return {
        formDrawerRef,
        form,
        rules,
        formRef,
        onSubmit,
        openRePasswordForm,
    };
}

export function useLogout() {

    const router = useRouter();
    const store = useStore();

    // 退出登录方法
    const handleLogout = () => {
        Modal.confirm({
            title: "是否退出登录?",
            icon: createVNode(ExclamationCircleOutlined),
            onOk() {
                logout().finally(() => {
                    store.dispatch("logout");
                    // 跳转会登录页
                    router.push("/login");
                    // 提示退出登录成功
                    toast("退出登录成功");
                });
            },
        });
    };
    return { handleLogout }
}