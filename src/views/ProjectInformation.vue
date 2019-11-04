<template>
    <div class="projectInformation">
        <SearchHeader :searchValue="searchText"></SearchHeader>

        <div v-if="projectType === 'ProjectUnit'">

            <el-tabs
                    type="border-card"
                    v-model="sortType"
                    @tab-click="onProjectUnitTabClick"
            >
                <el-tab-pane
                        label="地区分类"
                        name="sortRegion"
                >
                    <TimeAxis
                            :dataList="dataList"
                            :projectType="projectType"
                            :paramName="paramName"
                            :sortType="sortType"
                    ></TimeAxis>
                </el-tab-pane>
                <el-tab-pane
                        label="时间顺序"
                        name="sortTime"
                >
                    <TimeAxis
                            :dataList="dataList"
                            :projectType="projectType"
                            :paramName="paramName"
                            :sortType="sortType"
                    ></TimeAxis>
                </el-tab-pane>

                <el-tab-pane
                        label="业务类型"
                        name="sortBusiness"
                >
                    <TimeAxis
                            :dataList="dataList"
                            :projectType="projectType"
                            :paramName="paramName"
                            :sortType="sortType"
                    ></TimeAxis>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div v-else-if="projectType === 'ProjectLocation'">
            <el-tabs
                    type="border-card"
                    v-model="sortType"
                    @tab-click=""
            >
                <el-tab-pane
                        label="建设单位"
                        name="sortUnit"
                >
                    <TimeAxis
                            :dataList="dataList"
                            :projectType="projectType"
                            :paramName="paramName"
                            :sortType="sortType"
                    ></TimeAxis>
                </el-tab-pane>
                <el-tab-pane
                        label="时间顺序"
                        name="sortTime"
                >
                    <TimeAxis
                            :dataList="dataList" onProjectLocationTabClick
                            :projectType="projectType"
                            :paramName="paramName"
                            :sortType="sortType"
                    ></TimeAxis>
                </el-tab-pane>

                <el-tab-pane
                        label="业务类型"
                        name="sortBusiness"
                >
                    <TimeAxis
                            :dataList="dataList"
                            :projectType="projectType"
                            :paramName="paramName"
                            :sortType="sortType"
                    ></TimeAxis>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div v-else-if="projectType === 'ProjectName'">
            <TimeAxis
                    :dataList="dataList"
                    :projectType="projectType"
                    :paramName="paramName"
                    :sortType="sortType"
            ></TimeAxis>
        </div>

    </div>

</template>

<script>
    import TimeAxis from "@/components/TimeAxis.vue";
    import BASEURL from "@/httpconfig/api.js";
    import SearchHeader from "@/components/SearchHeader"

    export default {
        name: "ProjectInformation",
        components: {TimeAxis, SearchHeader},
        computed: {},
        data() {
            return {
                sortType: "sortTime",
                isShow: true,
                dataList: null,
                projectType: "",
                paramName: "", //项目名称
                searchText: "",//搜索框内容
            };
        },
        mounted() {
            // this.onRouteRefreshSearchText();
            this.searchText = this.$route.query.searchText;
            this.getProjectDataFromRoute();

        },
        methods: {
            onProjectUnitTabClick(tab, event) {
                this.getProjectDataFromRoute();
            },
            onProjectLocationTabClick(tab, event) {
                this.getProjectDataFromRoute();
            },
            getProjectDataFromRoute() {
                this.paramName = this.$route.query.paramName;
                this.projectType = this.$route.query.projectType;
                this.onRouteRefreshSearchText();

                if (!this.isNull(this.paramName)) {
                    if (this.projectType === "ProjectName") {
                        //项目名称
                        this.getPostNoDataFromServer(this.paramName);
                    } else if (this.projectType === "ProjectUnit") {
                        //建设单位
                        if (this.isNull(this.sortType)) this.sortType = "sortTime";
                        this.getDataByUnitFromServer(this.paramName, this.sortType);
                    } else if (this.projectType === "ProjectLocation") {
                        //建设位置
                        if (this.isNull(this.sortType)) this.sortType = "sortTime";
                        this.getDataByLocationFromServer(this.paramName, this.sortType);
                    } else if (this.projectType === "ProjectPostNo") {
                        //相关文件
                    }
                }
            },
            getPostNoDataFromServer(projectName) {
                var self = this;

                this.$http
                    .get(BASEURL.project + "postno", {
                        params: {
                            projectName: projectName
                        }
                    })
                    .then(response => {
                        if (self.isNull(response.data)) {
                            //
                        } else {
                            self.dataList = response.data;

                            console.log(self.dataList);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        self.$router.push({name: "servererror"});
                    });
            },
            /**
             * 根据单位得到相关信息
             */
            getDataByUnitFromServer(unitName, sortType) {
                var self = this;
                var urltype = "";

                //建设单位
                if (sortType === "sortRegion") {
                    //地区分类
                    urltype = "unit/region";
                } else if (sortType === "sortTime") {
                    //时间顺序
                    urltype = "unit/time";
                } else if (sortType === "sortScale") {
                    //规模大小
                    urltype = "unit/scale";
                } else if (sortType === "sortBusiness") {
                    //业务类型
                    urltype = "unit/business";
                }

                this.$http
                    .get(BASEURL.constructionunit + urltype, {
                        params: {
                            unitName: unitName
                        }
                    })
                    .then(response => {
                        if (self.isNull(response.data)) {
                            //
                        } else {
                            console.log(response.data);
                            self.dataList = response.data;
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        self.$router.push({name: "servererror"});
                    });
            },
            /**
             * 根据建设位置得到相关信息
             */
            getDataByLocationFromServer(locationName, sortType) {
                var self = this;

                var urltype = "";

                //建设单位
                if (sortType === "sortUnit") {
                    //建设位置
                    urltype = "location/unit";
                } else if (sortType === "sortTime") {
                    //时间顺序
                    urltype = "location/time";
                } else if (sortType === "sortScale") {
                    //规模大小
                    urltype = "location/scale";
                } else if (sortType === "sortBusiness") {
                    //业务类型
                    urltype = "location/business";
                }

                this.$http
                    .get(BASEURL.constructionunit + urltype, {
                        params: {
                            locationName: locationName
                        }
                    })
                    .then(response => {
                        if (self.isNull(response.data)) {
                            //
                        } else {
                            console.log(response.data);
                            self.dataList = response.data;
                        }
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
    .location-icon {
        width: 185px;
        hight: 30px;
        align: center;
        background-color: yellow;
        padding: 13px;
        margin: 50px;
    }
</style>
