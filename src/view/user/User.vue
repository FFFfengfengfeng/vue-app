<template>
    <div class="user-page">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
            <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>

        <el-card class="box-card">
            <div slot="header" class="f-card_header">
                <h3>管理员列表</h3>
                <el-button type="primary" icon="el-icon-plus" @click="navigateToAdd">添加</el-button>
            </div>
            <el-table :data="list"
                      stripe
                      v-loading="loading"
                      style="width: 100%">
                <el-table-column prop="id"
                                 label="id">
                </el-table-column>
                <el-table-column prop="name"
                                 label="姓名">
                </el-table-column>
                <el-table-column prop="level"
                                 :formatter="userLevel"
                                 label="用户级别">
                </el-table-column>
                <el-table-column prop="create_time"
                                 label="创建时间">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.create_time }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini"
                                   @click="editUser(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini"
                                   type="danger"
                                   @click="deleteUser(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <div class="f-page_pagination">
            <el-pagination background
                           layout="prev, pager, next"
                           :total="total"
                           :page-size="size">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: '',
            size: 10,
            page: 1,
            list: [],
            total: 0,
            loading: true
        }
    },
    created() {
        this.getList();
    },
    methods: {
        getList: function() {
            const _this = this;

            _this.$http({
                url: '/admin/user/lists',
                data: {
                    keyword: _this.keyword,
                    size: _this.size,
                    page: _this.page
                },
                success: function(res) {
                    if (res.status == 1) {
                        _this.list = res.data.data;
                        _this.total = res.data.total;
                    }
                    setTimeout(() => {
                        _this.loading = false;
                    }, 200);
                }
            })
        },
        userLevel: function(row, column, cellValue, index) {
            // console.log(a,b,c,d)
            switch (row.level) {
                case 1:
                    return '超级管理员'
                    break;
                case 2:
                    return '一级管理员'
                    break;
                case 3:
                    return '二级管理员'
                    break;
                default:
                    break;
            }
        },
        editUser: function(index, row) {
            const _this = this;

            _this.$router.push({
                path: '/user-edit',
                query: {
                    id: row.id
                }
            });
        },
        deleteUser: function(index, row) {
            const _this = this;

            _this.$http({
                url: '/admin/user/delete',
                data: {
                    id: row.id,
                },
                success: function(res) {
                    if (res.status == 1) {
                        _this.$notify({
                            title: '成功',
                            message: '删除成功',
                            type: 'success',
                            duration: 1000
                        });
                        _this.getList();
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
        navigateToAdd: function() {
            this.$router.push({
                path: '/user-add'
            });
        }
    },
}
</script>

<style lang="less" scoped>

</style>
