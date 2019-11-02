<template>
    <div>
        <el-input
                placeholder="请输入查询内容"
                v-model="searchText"
                @keyup.enter.native="onSearch()"
        >
            <el-button
                    slot="append"
                    icon="el-icon-search"
                    @click="onSearch"
            ></el-button>
        </el-input>
    </div>
</template>
<script>
    export default {
        name: "SearchHeader",
        props: ["searchValue"],
        data() {
            return {searchText: ""};
        },
        watch: {
            // 如果 `searchText` 发生改变，这个函数就会运行
            searchValue: function (newsearchValue) {
                this.searchText = newsearchValue;
            }
        },
        methods: {
            onSearch() {
                this.$emit("onSearch", this.searchText);
            }
        }
    };
</script>
<style>
</style>


