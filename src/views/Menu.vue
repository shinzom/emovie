<template>
    <el-menu :active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#74aa8d"
        text-color="#fff" font-size="40px" active-text-color="#020304" router default-active="/homepage"
        @select="selectMenu">
        <el-menu-item index="/homepage" style="color: #000000;font-size: 30px;">eMovie</el-menu-item>
        <el-sub-menu index="2">
            <template #title>电影</template>
            <el-menu-item index="2-1">推荐</el-menu-item>
            <el-menu-item index="/hot">热门</el-menu-item>
            <el-menu-item index="/highrating">高分</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/search">搜索</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="/login">登录</el-menu-item>
        <el-menu-item index="6">关于</el-menu-item>
    </el-menu>
</template>

<script >

export default {
    data() {
        return {
            activeIndex: "/homepage",
        }
    },
    methods: {
        selectMenu(index){
            this.activeIndex = index;
        }
    }
}

</script>


<style>
.flex-grow {
    flex-grow: 1;
}
</style>