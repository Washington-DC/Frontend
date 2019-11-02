<template>
    <div class="page">
        <div class="input">
            <el-input
                    placeholder="请输入查询内容"
                    v-model="input"
                    clearable>
            </el-input>
        </div>
        <div class="search">
            <el-button type="primary">信息检索</el-button>
            <el-button type="primary">统计检索</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Retrieval",
        data() {
            return {
                input: ''
            }
        },
    }
</script>

<style scoped>

    .page {
        margin: auto;
        width: 800px;
        height: 40px;
        /*border-style:solid;
        border-width:1px;*/
    }

    .input {
        float: left;
        width: 70%;
        margin: 0px;
        padding: 0px;
    }

    .search {
        float: right;
        margin: 0px;
        padding: 0px;
        text-align: right;
        height: 40px;
    }
</style>
