<template>
    <div>
        <el-button
                @click="onClick"
                style="margin-top:10px;"
        >关联子图
        </el-button>

        <h1>相关文号</h1>
        <div
                class='timeaxis-aside-item'
                v-for="(item,index) in dataList"
                :key="index"
        >
            <router-link :to="{ path: '/FileContent',  query: {searchText: getSearchText(), paramName: item.name}}">
                {{item.name}}
            </router-link>

        </div>
    </div>
</template>
<script>
    export default {
        name: "TimeAxisAside",
        props: {
            dataList: Array,
            projectType: String,
            paramName: String,
            sortType: String
        },
        data() {
            return {};
        },
        methods: {
            onClick() {
                this.$router.push({
                    path: "/AssociationSubgraph",
                    query: {
                        searchText: this.getSearchText(),
                        projectType: this.projectType,
                        paramName: this.paramName,
                        sortType: this.sortType
                    }
                });
            }
        }
    };
</script>
<style scoped>
    .timeaxis-aside-item {
        padding: 5px;
        cursor: pointer;
    }

    .timeaxis-aside-item a {
        text-decoration: none;
    }
</style>
