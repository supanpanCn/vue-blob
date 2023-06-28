import { createApp } from 'vue';
import App from './App.vue';
import createStorage from 'web-localstorage-plus';
import pinia from '@/store';
import router from '@/router';

createStorage({
    rootName: 'spp-storage',
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
