<template>
    <div class="home-page">{{ getNum }}</div>
</template>

<script>
export default {
    computed: {
        getNum() {
            return this.$store.state.num;
        }
    }
}
</script>

<style lang="less" scoped>

</style>
