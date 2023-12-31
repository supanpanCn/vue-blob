import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import eslint from '@nabla/vite-plugin-eslint';
import { getPlugin } from '@web-localstorage-plus/pinia';
import { offline } from '@web-localstorage-plus/offline';
const piniaHmrPlugin = getPlugin('vite');

export default defineConfig({
    plugins: [
        eslint(),
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        piniaHmrPlugin(resolve(__dirname, 'src/store')),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        offline(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http url',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, ''),
            },
        },
    },
});
