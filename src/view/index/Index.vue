<template>
    <el-container class="index-page">
        <el-header class="index-header">
            <img class="index-logo" src="../../assets/images/logo.svg" @click="toHome">
            <el-menu class="index-nav"
                     mode="horizontal"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b">
                <el-menu-item @click="loginOut">退出登录</el-menu-item>
                <!-- <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu> -->
            </el-menu>
        </el-header>
        <el-container>
            <el-aside width="250px">
                <el-menu default-active="/admin"
                         :router="true"
                         class="index-menu">
                    <el-menu-item index="/user">
                        <i class="el-icon-setting"></i>
                        <span slot="title">管理员管理</span>
                    </el-menu-item>
                    <el-menu-item index="/classify">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">分类管理</span>
                    </el-menu-item>
                    <el-menu-item index="/goods">
                        <i class="el-icon-goods"></i>
                        <span slot="title">商品管理</span>
                    </el-menu-item>
                    <!-- <el-menu-item index="/">
                        <i class="el-icon-monitor"></i>
                        <span slot="title">广告管理</span>
                    </el-menu-item> -->
                </el-menu>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            asideRouter: true
        }
    },
    methods: {
        loginOut: function() {
            const _this = this;

            _this.$storage.remove('token');
            _this.$storage.remove('name');
            _this.$notify({
                title: '成功',
                message: '退出成功',
                type: 'success',
                duration: 1000
            });
            setTimeout(() => {
                _this.$router.push({
                    path: '/login'
                });
            }, 200);
        },
        toHome: function() {
            this.$router.push({
                path: '/home'
            });
        }
    }
};
</script>

<style lang="less" scoped>
.index-page{
    height: 100%;
}
.index-menu{
    height: 100%;
}
.index-header{
    background: #545c64;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.index-logo{
    display: block;
    height: 60px;
    cursor: pointer;
}
</style>

