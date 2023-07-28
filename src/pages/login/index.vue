<template>
    登陆页面{{ store.age }} {{ user.age }} {{ store.a.b
    }}<button @click="handleClick">click</button>
</template>

<script lang="ts" setup>
import useLoginStore from '@/store/login';
import userStore from '@/store/user';

const store = useLoginStore();
const user = userStore();

const handleClick = () => {
    store.updateAge();
    user.updateId();
    store.updateB();
};
</script>
