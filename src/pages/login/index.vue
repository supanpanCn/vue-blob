<template>
    登陆页面{{ store.age }} {{ user.age }} {{ store.a.b
    }}<button @click="handleClick">click</button>
    <Offline v-if="visible" />
    <Offline2 v-if="visible" />
</template>

<script lang="ts" setup>
import useLoginStore from '@/store/login';
import userStore from '@/store/user';
import { nextTick, ref } from 'vue';
import { useStorage } from 'web-localstorage-plus';
import Offline from './offline.vue';
import Offline2 from './offline2.vue';

const visible = ref<boolean>(false);
const store = useLoginStore();
const user = userStore();
const storage = useStorage();

const handleClick = () => {
    store.updateAge();
    user.updateId();
    store.updateB();
    storage.postMessage('off-line-msg', 1, '__OFFLINE_MODE__');
    nextTick(() => {
        visible.value = true;
    });
};
</script>
