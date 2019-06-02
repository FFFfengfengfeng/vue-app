<template>
    <div class="login-page">
        <el-card class="login-form">
            <div class="login-title">欢迎登录</div>
            <el-form ref="form" :rules="rules" :model="form" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="form.name" type="text" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">立即登录</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import $storage from '../../utils/storage'
export default {
    data() {
        return {
            form: {
                name: '',
                password: '',
            },
            rules : {
                name: [
                    {required: true, message: '请输入用户名称', trigger: 'blur'},
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                ],
            }
        }
    },
    methods: {
        login: function() {
            const _this = this;

            _this.$http({
                url: '/admin/login/enter',
                data: {
                    name: _this.form.name,
                    password: _this.form.password
                },
                success: function(res) {
                    if (res.status == 1) {
                        $storage('token', res.data.token);
                        $storage('name', res.data.name);
                        _this.$notify({
                            title: '成功',
                            message: '登录成功',
                            type: 'success',
                            duration: 1000
                        });
                        setTimeout(() => {
                            _this.$router.push({
                                path: '/'
                            });
                        }, 200);
                    } else {
                        _this.$notify.error({
                            title: '错误',
                            message: res.msg,
                            duration: 1000
                        });
                    }
                    console.log(res);
                }
            });
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

