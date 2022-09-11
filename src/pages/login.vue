<template>
    <a-row class="min-h-screen bg-indigo-500">
        <a-col :span="16" class="flex items-center justify-center">
            <div>
                <div class="font-bold text-5xl text-light-50 mb-4">欢迎光临</div>
                <div class="text-gray-200 text-sm">此站点是《vue3 + vite实战商城后台开发》视频课程的演示地址</div>
            </div>
        </a-col>
        <a-col :span="8" class="bg-light-50 flex items-center justify-center flex-col">
            <h2 class="font-bold text-3xl text-gray-800">欢迎回来</h2>
            <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
                <span class="h-[1px] w-16 bg-gray-200"></span>
                <span>账号密码登录</span>
                <span class="h-[1px] w-16 bg-gray-200"></span>
            </div>
            <!-- 可以的 -->
            <!-- <a-form ref="formRef" :model="formState" @finish="handleSubmit">
                <a-form-item label="账号：" name="username" :rules="userRules">
                    <a-input v-model:value="formState.username" placeholder="请输入登录账号">
                    </a-input>
                </a-form-item>
                <a-form-item style="text-align: right">
                    <a-button type="primary" html-type="submit">登录</a-button>
                </a-form-item>
            </a-form> -->
            <a-form ref="formRef" :model="formState" class="w-[250px]" @finish="handleSubmit">
                <a-form-item label="区域：" name="area" :rules="userRules.area">
                    <a-cascader v-model:value="formState.area" style="width: 100%" multiple max-tag-count="responsive"
                        :field-names="{ label: 'name', value: 'code', children: 'items' }" :options="options"
                        placeholder="请选择"></a-cascader>
                    <!-- <a-input v-model:value="formState.username" placeholder="请输入登录账号">
                    </a-input> -->
                </a-form-item>
                <a-form-item label="密码：" name="password" :rules="userRules.password">
                    <a-input v-model:value="formState.password" placeholder="请输入密码">
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-button color="#626aef" shape="round" class="w-[250px] " type="primary" html-type="submit">
                        登 录
                    </a-button>
                </a-form-item>
            </a-form>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import { reactive, ref, toRaw } from 'vue'
import { CascaderProps } from 'ant-design-vue';
import { message } from 'ant-design-vue';
import type { FormInstance } from 'ant-design-vue';

// const useForm = Form.useForm;

const formRef = ref<FormInstance>();
interface FormState {
    area: Array<string[]>;
    password: string;
}
const formState = reactive<FormState>({
    area: [],
    password: '',

});

const options: CascaderProps['options'] = [
    {
        code: 'zhejiang',
        name: 'Zhejiang',
        items: [
            {
                code: 'hangzhou',
                name: 'Hangzhou',
                items: [
                    {
                        code: 'xihu',
                        name: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        code: 'jiangsu',
        name: 'Jiangsu',
        items: [
            {
                code: 'nanjing',
                name: 'Nanjing',
                items: [
                    {
                        code: 'zhonghuamen',
                        name: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

// 选中的数据
const value = ref<string[]>([])

// 验证规则
const userRules = reactive({
    area: [
        { required: true, message: '请选择区域' },
    ],
    password: [
        { required: true, message: '请输入登录账号' },
        {
            min: 1,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur',
        },
    ]
})


// const { resetFields, validate, validateInfos } = useForm(formState, userRules);


const handleSubmit = async () => {

    console.log('formState', formState);
    const valid = await formRef.value?.validate()
    console.log(valid);

    // validate()
    //     .then(res => {
    //         console.log(res, toRaw(formState));
    //     })

    console.log('submit!')
}
</script>