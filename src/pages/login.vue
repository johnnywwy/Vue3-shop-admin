<template>
  <a-row class="min-h-screen bg-indigo-500">
    <a-col :span="16" :lg="12" class="flex items-center justify-center">
      <div>
        <div class="font-bold text-5xl text-light-50 mb-4">欢迎光临</div>
        <div class="text-gray-200 text-sm">
          此站点是《vue3 + vite实战商城后台开发》视频课程的演示地址
        </div>
      </div>
    </a-col>
    <a-col
      :span="8"
      :lg="12"
      class="bg-light-50 flex items-center justify-center flex-col"
    >
      <h2 class="font-bold text-3xl text-gray-800">欢迎回来</h2>
      <div
        class="flex items-center justify-center my-5 text-gray-300 space-x-2"
      >
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span>账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <a-form
        ref="formRef"
        :model="formState"
        class="w-[250px]"
        :rules="rules"
        @finish="onSubmit"
      >
        <a-form-item name="username">
          <a-input
            v-model:value="formState.username"
            placeholder="请输入登录账号"
          >
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password
            v-model:value="formState.password"
            placeholder="请输入密码"
          >
            <template #prefix>
              <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button
            color="#626aef"
            shape="round"
            class="w-[250px]"
            type="primary"
            html-type="submit"
            :loading="loading"
          >
            登 录
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref, toRaw } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import type { FormInstance } from "ant-design-vue";
import { useRouter } from "vue-router";
import { setToken } from "../composables/auth";
import { toast } from "../composables/util";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const formRef = ref<FormInstance>();

// 定义数据结构
interface FormState {
  username: string;
  password: string;
}
const formState = reactive<FormState>({
  username: "admin",
  password: "admin",
});

// 选中的数据
const value = ref<string[]>([]);
const loading = ref(false);
// 验证规则
const rules = reactive({
  username: [
    { required: true, message: "用户名不能为空" },
    {
      min: 1,
      max: 5,
      message: "Length should be 1 to 5",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "密码不能为空" },
    {
      min: 1,
      max: 5,
      message: "Length should be 1 to 5",
      trigger: "blur",
    },
  ],
});

// 登录功能
const onSubmit = async () => {
  const valid = await formRef.value?.validate();
  if (!valid) {
    return false;
  }
  loading.value = true;
  store
    .dispatch("login", formState)
    .then((res) => {
      toast("登录成功！");
      router.push("/");
    })
    .finally(() => {
      loading.value = false;
    });
};

const onKeyUp = (e: KeyboardEvent) => {
  // console.log(e);
  if (e.key === "Enter") {
    onSubmit();
  }
};

onMounted(() => {
  document.addEventListener("keyup", onKeyUp);
});

onBeforeUnmount(() => {
  document.removeEventListener("keyup", onKeyUp);
});
</script>
