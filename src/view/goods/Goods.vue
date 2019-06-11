<template>
    <div class="goods-page">
        <el-button type="primary" @click="add">更新num</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0
        }
    },
    methods: {
        add() {
            this.$store.dispatch('add');
        }
    }
}
</script>

<style lang="less" scoped>

</style>
