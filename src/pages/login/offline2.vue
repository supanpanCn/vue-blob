<template>offline2</template>

<script lang="ts" setup>
import { useStorage } from 'web-localstorage-plus';
const storage = useStorage();
storage.onMessage(
    'off-line-msg',
    () => {
        console.log('接受到离线消息2');
    },
    '__OFFLINE_MODE__'
);
</script>
