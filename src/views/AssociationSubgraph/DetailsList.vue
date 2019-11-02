<template>
    <el-table
            :data="$store.getters.tableData"
            style="width: 100%;"
            v-if="!isNodeNameNUll"
    >
        <el-table-column
                prop="key"
                label="字段名"
                style="width: 50%;"
        >
        </el-table-column>
        <el-table-column
                prop="value"
                label="值"
                style="width: 50%;"
        >
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "DetailsList",
        data() {
            return {};
        },
        mounted() {
        },
        computed: {
            isNodeNameNUll: function () {
                console.log(this.isNull(this.$store.getters.tableData));
                return this.isNull(this.$store.getters.tableData);
            }
        }
    };
</script>

<style scoped>
</style>
