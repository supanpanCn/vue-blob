<template>
    <div class="root-app">
        <RouterView />
        <div class="spp">
            <el-button type="primary"> Primary </el-button>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
.root-app {
    .spp {
        width: 300px;
        height: 300px;
        background-color: red;
    }
}
</style>
