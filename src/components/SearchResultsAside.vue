<template>
    <div class="search-result-aside">
        <div>为您找到相关结果{{projectLists.totalElements}}条</div>
        <el-radio-group
                v-model="myradioSorted"
                size="mini"
                style="margin-right:80px;margin-top:10px;"
                @change="onRadioSorted()"
        >
            <el-radio-button label="sortProjectName">项目名称</el-radio-button>
            <el-radio-button label="sortUnit">建设单位</el-radio-button>
            <el-radio-button label="sortLocation">建设位置</el-radio-button>
        </el-radio-group>
        <ProjectProfile
                :projectLists="SortProjectLists"
                style="margin-top:-20px;"
        ></ProjectProfile>
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
    import ProjectProfile from "@/components/ProjectProfile.vue";
    import {constants} from "crypto";

    export default {
        name: "SearchResultsAside",
        components: {ProjectProfile},
        props: {projectLists: Object, radioSorted: String, SortProjectLists: Array},
        data() {
            return {myradioSorted: this.radioSorted};
        },
        computed: {
            isPaginationShow: function () {
                //是否显示分页组件
                return this.projectLists.totalElements / 20 > 1;
            }
        },
        methods: {
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
    };
</script>
<style scoped>
    .search-result-aside {
        margin-top: 0px;
        text-align: right;
    }
</style>
