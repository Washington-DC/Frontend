<template>
    <div class="search-result_page">

        <Retrieval :searchText="searchText"></Retrieval>

        <RetrievalResult
                :projectLists="SortProjectLists"
                :totalElement="projectLists.totalElements"
                :getradioSorted="myradioSorted"
                @radioSorted='getradioSorted'
        ></RetrievalResult>
        <el-pagination
                v-if="isPaginationShow"
                layout="prev, pager, next"
                :total="projectLists.totalElements"
                :page-size="20"
                @current-change="onPageChange"
                @prev-click="onPrevClick"
                @next-click="onNextClick"
        >
        </el-pagination>

    </div>

</template>

<script>
    import Retrieval from "@/components/Search_result/Retrieval"
    import RetrievalResult from "@/components/Search_result/RetrievalResult"

    export default {
        name: "SearchPage",
        components: {
            Retrieval, RetrievalResult
        },
        props: {projectLists: Object, radioSorted: String, SortProjectLists: Array, searchText: String},
        data() {
            return {
                myradioSorted: ""
            }
        },
        computed: {
            isPaginationShow: function () {
                //是否显示分页组件
                return this.projectLists.totalElements / 20 > 1;
            }
        },
        methods: {
            getradioSorted(val) {
                this.myradioSorted = val;

            },
            onRadioSorted() {
                console.log(this.myradioSorted);
                this.$emit("onRadioSorted", this.myradioSorted);
            },
            onPageChange(page) {
                this.$emit("onPageChange", page);
            },
            onNextClick(page) {
                this.$emit("onNextClick", page);
            },
            onPrevClick(page) {
                this.$emit("onPrevClick", page);
            }
        }
    }
</script>

<style scoped>

    .foot {
        width: 94.6%;
        height: 15%;
        padding: 50px;
        /*
            border-style:solid;
            border-width:1px;*/
    }
</style>
