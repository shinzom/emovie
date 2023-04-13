<template>
    <el-container class="common-layout" style="display: flex;flex-direction: column">
        <div class="container">
            <Menu />
        </div>
        <div>
            <router-view />
        </div>
    </el-container>
</template>
<script lang="ts" setup>
import Menu from './Menu.vue';
</script>