<template>
    <div
            v-loading.fullscreen.lock="dataLoading"
            element-loading-text="正在搜索数据，请等待."
            element-loading-background="rgba(0, 0, 0, 0.7)"
    >

        <div v-if='isListNotEmpty'>
            <el-row>
                <!--        <el-col :span="12">-->
                <!--          <SearchResults-->
                <!--            :projectLists="projectLists"-->
                <!--            @onPageChange="onPageChange"-->
                <!--            @onPrevClick="onPrevClick"-->
                <!--            @onNextClick="onNextClick"-->
                <!--          ></SearchResults>-->
                <!--        </el-col>-->
                <el-col :span="24">
                    <SearchResultsAside
                            :SortProjectLists="projectSortedLists"
                            :projectLists="projectLists"
                            :radioSorted="radioSorted"
                            @onRadioSorted="onRadioSorted"
                            @onPageChange="onPageChange"
                            @onPrevClick="onPrevClick"
                            @onNextClick="onNextClick"
                    ></SearchResultsAside>
                </el-col>
            </el-row>
        </div>

        <div v-else-if="!dataLoading">
            未找到数据，请重新输入搜索内容
        </div>
    </div>
</template>

<script>
    import BASEURL from "@/httpconfig/api.js";
    import SearchResults from "@/components/SearchResults.vue";
    import SearchResultsAside from "@/components/Search_result/Search_result_page.vue";
    // import SearchResultsAside from "@/components/SearchResultsAside.vue";
    export default {
        name: "Search",
        components: {SearchResults, SearchResultsAside},

        computed: {
            isListNotEmpty: function () {
                return this.projectLists.numberOfElements > 0;
            }
        },
        data() {
            return {
                projectLists: [],
                projectSortedLists: [],
                searchText: "",
                dataLoading: false,
                radioSorted: "sortProjectName",
                pageNo: 0
            };
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            $route: "fetchData"
        },
        mounted() {
            this.getDataFromRoute();
        },
        methods: {
            getDataFromRoute() {
                var searchText = this.$route.query.searchText;
                this.onRouteRefreshSearchText();

                if (!this.isNull(searchText)) {
                    this.getProjectDataFromServer(searchText, 0);
                    this.getSortedProjectDataFromServer(searchText, 0);
                }
            },
            fetchData() {
                this.getDataFromRoute();
            },
            onPageChange(page) {
                var searchText = this.$route.query.searchText;
                this.pageNo = page - 1;
                this.getProjectDataFromServer(searchText, page - 1);
                this.getSortedProjectDataFromServer(
                    searchText,
                    page - 1,
                    this.radioSorted
                );
            },
            onNextClick(page) {
                var searchText = this.$route.query.searchText;
                this.pageNo = page - 1;
                this.getProjectDataFromServer(searchText, page - 1);
                this.getSortedProjectDataFromServer(
                    searchText,
                    page - 1,
                    this.radioSorted
                );
            },
            onPrevClick(page) {
                this.pageNo = page - 1;
                var searchText = this.$route.query.searchText;
                this.getProjectDataFromServer(searchText, page - 1);
                this.getSortedProjectDataFromServer(
                    searchText,
                    page - 1,
                    this.radioSorted
                );
            },
            onRadioSorted(val) {
                this.radioSorted = val;
                var searchText = this.$route.query.searchText;
                this.getSortedProjectDataFromServer(
                    searchText,
                    this.pageNo,
                    this.radioSorted
                );
            },

            /**
             * 从服务器获得数据
             */
            getProjectDataFromServer(newSearchText, newPageNo) {
                var self = this;
                this.categoris = [];
                this.dataLoading = true;

                this.$http
                    .get(BASEURL.project + "list", {
                        params: {
                            searchtext: newSearchText,
                            pageNo: newPageNo
                        }
                    })
                    .then(response => {
                        if (self.isNull(response.data)) {
                            //
                        } else {
                            self.projectLists = response.data;
                        }
                        this.dataLoading = false;
                    })
                    .catch(function (error) {
                        console.log(error);
                        self.$router.push({name: "servererror"});
                    });
            },
            /**
             * 从服务器获得排好序的数据
             */
            getSortedProjectDataFromServer(newSearchText, newPageNo, sortType) {
                var self = this;
                this.categoris = [];
                this.dataLoading = true;

                this.$http
                    .get(BASEURL.project + "listsorted", {
                        params: {
                            searchtext: newSearchText,
                            sortType: sortType,
                            pageNo: newPageNo
                        }
                    })
                    .then(response => {
                        if (self.isNull(response.data)) {
                            //
                        } else {
                            self.projectSortedLists = response.data;
                        }
                        this.dataLoading = false;
                    })
                    .catch(function (error) {
                        console.log(error);
                        self.$router.push({name: "servererror"});
                    });
            }
        }
    };
</script>

<style scoped>
</style>
