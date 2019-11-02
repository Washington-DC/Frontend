<template>
    <div class="Search-results">

        <div>为您找到相关结果{{projectLists.totalElements}}条</div>
        <ProjectProfile :projectLists="projectLists.content"></ProjectProfile>

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

    export default {
        name: "SearchResults",
        components: {
            ProjectProfile
        },
        props: {projectLists: Object},
        computed: {
            isPaginationShow: function () {
                //是否显示分页组件
                return this.projectLists.totalElements / 20 > 1;
            }
        },
        data() {
            return {};
        },
        methods: {
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
    .results a {
        font-size: 13px;
        color: #999;
        position: absolute;
        /*left: 60px;*/
        /*margin-left: 130px;*/
        margin-top: 25px;
    }
</style>
