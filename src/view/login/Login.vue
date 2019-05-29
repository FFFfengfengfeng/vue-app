<template>
    <div class="login-page">
        <el-card class="login-form">
            <div class="login-title">欢迎登录</div>
            <el-form ref="form" :rules="rules" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" >立即登录</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            password: '',
            rules : {
                name: [
                    {required: true, message: '请输入用户名称', trigger: 'blur'},
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                ],
            }
        }
    }
}
</script>

<style lang="less" scoped>
.login-page{
    height: 100%;
    position: relative;
    overflow: hidden;
    background: url('../../assets/images/login-bg.jpg') no-repeat center center/100% 100%;
}
.login-form{
    width: 400px;
    margin: 150px auto 0 auto;
}
.login-title{
    font-size: 20px;
    color: #303133;
    text-align: center;
    margin: 20px auto 30px auto;
}
</style>

