import { createApp } from 'vue';
import App from './App.vue';
import pinia from '@/store';
import router from '@/router';
import createStorage from 'web-localstorage-plus';
import setPiniaPersist from '@web-localstorage-plus/pinia';

createStorage({
    rootName: 'spp-storage',
});

setPiniaPersist(pinia);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
