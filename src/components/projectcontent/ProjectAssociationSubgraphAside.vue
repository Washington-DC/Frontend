<template>
    <div class='project-association-subgraph-aside'>
        <el-button @click="onClick">关联子图</el-button>

    </div>
</template>
<script>
    export default {
        name: "ProjectAssociationSubgraphAside",
        props: {postNo: String},
        methods: {
            onClick() {
                this.$router.push({
                    path: "/AssociationSubgraph",
                    query: {
                        searchText: this.getSearchText(),
                        projectType: "ProjectPostNo",
                        paramName: this.postNo,
                        sortType: ""
                    }
                });
            }
        }
    };
</script>
<style scoped>
    .project-association-subgraph-aside {
        padding: 10px;
    }
</style>
