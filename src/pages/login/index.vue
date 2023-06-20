<template>登陆页面</template>

<script lang="ts" setup>
import { useStorage } from 'web-localstorage-plus';
import useLoginStore from '@/store/login';

const store = useLoginStore();

console.log(store.spp);

var storage = useStorage();
storage.setItem('user', {
    name: 'spp',
    age: 28,
});
</script>
