<template>
    <div>
        后台首页{{count}}
        <a-button @click="addCount">按钮1</a-button>
    </div>
    <div>
        后台首页{{form.count}}
        <a-button type="primary" @click="addCount2">按钮</a-button>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

let count = ref(1)
const form = reactive({
    count: 2
})

const addCount = () => {
    console.log('addCount');
    count.value++
    console.log(count.value)
}



const addCount2 = () => {
    console.log('addCount2');
    form.count++
    console.log(form.count)
}


</script>