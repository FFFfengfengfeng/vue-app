<template>
    <div class="user-page">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
            <el-breadcrumb-item>管理员添加</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <el-card class="box-card">
            <div slot="header" class="f-card_header">
                <h3>添加管理员</h3>
                <el-button type="primary" icon="el-icon-back" @click="navigateToUser">返回</el-button>
            </div>
            <el-form ref="form" :model="form" :rules="rules" label-width="110px" class="user-form">
                <el-form-item label="管理员名称" prop="name" placeholder="请输入管理员名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="管理员级别" prop="level">
                    <el-select v-model="form.level" placeholder="请选择管理员级别">
                        <el-option label="一级管理员" value="2"></el-option>
                        <el-option label="二级管理员" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                level: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入管理员名称', trigger: 'blur' },
                    { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
                ],
                level: [
                    { required: true, message: '请选择管理员级别', trigger: 'change' },
                ],
            }
        }
    },
    methods: {
        navigateToUser: function() {
            this.$router.push({
                path: '/user'
            });
        },
        submitForm: function() {
            const _this = this;

            _this.$http({
                url: '/admin/user/add',
                data: {
                    name: _this.form.name,
                    level: _this.form.level
                },
                success: function(res) {
                    if (res.status == 1) {
                        _this.$notify({
                            title: '成功',
                            message: '添加成功',
                            type: 'success',
                            duration: 1000
                        });
                        setTimeout(_this.navigateToUser, 800);
                    } else {
                        _this.$notify.error({
                            title: '错误',
                            message: res.msg,
                            duration: 1000
                        });
                    }
                }
            });
        },
        resetForm: function(name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>

<style lang="less" scoped>
.user-form{
    width: 300px;
}
</style>


