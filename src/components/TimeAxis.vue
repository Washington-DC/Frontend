<template>

    <div
            class="custom-bg-white"
            @onContentClick="onContentClick"
    >
        <div class="header2">
            <div class="color-overlay">
                <div class="header-name">{{getChooseType}}</div>
            </div>
        </div>

        <el-container>
            <el-main style="margin:0px;padding:0px;">
                <div
                        class="jazz-timeline-wrapper"
                        v-for="(item,index) in dataList"
                        :key="index"
                        style="margin-bottom:0px;margin-top:0px;"
                >
                    <div class="jazz-timeline white-timeline bordered-timeline one-sided">

                        <div class="timeline-post">
                            <div class="timeline-meta for-large-icons">
                                <div class="meta-details">
                                    <timeAxisItemHeader
                                            :itemData="item"
                                            :projectType="projectType"
                                            :paramName="paramName"
                                            :sortType="sortType"
                                            @onHeaderClick="onHeaderClick"
                                    ></timeAxisItemHeader>

                                </div>
                            </div>
                            <div class="timeline-icon icon-larger iconbg-turqoise icon-color-white">
                                <div class="timeline-bar"></div>
                            </div>
                            <div class="timeline-content">
                                <div class="content-title">
                                    <timeAxisItemContent
                                            :itemData="item"
                                            :projectType="projectType"
                                            :paramName="paramName"
                                            :sortType="sortType"
                                            @onContentClick="onContentClick"
                                    ></timeAxisItemContent>
                                </div>
                                <div class="content-details">
                                </div>
                            </div><!-- timeline content -->
                        </div><!-- .timeline-post -->

                    </div><!-- .timeline -->
                </div><!-- .jazz-timeline-wrapper -->
            </el-main>
            <el-aside width="200px">
                <timeAxisAside
                        :dataList="asideDataList"
                        :projectType="projectType"
                        :paramName="paramName"
                        :sortType="sortType"
                ></timeAxisAside>
            </el-aside>
        </el-container>

    </div>

</template>

<script>
    import TimeAxisItemHeader from "./TimeAxisItemHeader.vue";
    import TimeAxisItemContent from "./TimeAxisItemContent.vue";
    import TimeAxisAside from "./TimeAxisAside.vue";
    import BASEURL from "@/httpconfig/api.js";

    export default {
        name: "TimeAxis",
        components: {
            timeAxisItemHeader: TimeAxisItemHeader,
            timeAxisItemContent: TimeAxisItemContent,
            timeAxisAside: TimeAxisAside
        },
        props: {
            dataList: Array,
            projectType: String,
            paramName: String,
            sortType: String
        },
        data() {
            return {
                asideDataList: null
            };
        },
        computed: {
            getChooseType: function () {
                if (this.projectType === "ProjectName") {
                    //项目名称
                    return this.paramName + "项目 相关文号";
                } else if (
                    this.projectType === "ProjectUnit" ||
                    this.projectType === "ProjectLocation"
                ) {
                    //建设单位
                    //建设位置
                    switch (this.sortType) {
                        case "sortRegion":
                            return this.paramName + " 地区分类";
                        case "sortTime":
                            return this.paramName + " 时间顺序";
                        case "sortScale":
                            return this.paramName + " 规模大小";
                        case "sortBusiness":
                            return this.paramName + " 业务类型";
                        case "sortUnit":
                            return this.paramName + " 建设单位";
                    }
                } else if (this.projectType === "ProjectPostNo") {
                    //相关文件
                    return "相关文号";
                }
            }
        },
        methods: {
            onContentClick(obj) {
                if (obj.projectType === "ProjectName") {
                    //项目名称
                    this.$router.push({
                        path: "/FileContent",
                        query: {
                            searchText: this.getSearchText(),
                            paramName: obj.itemData.name
                        }
                    });
                } else if (obj.projectType === "ProjectUnit") {
                    //建设单位
                    if (obj.sortType === "sortRegion") {
                        //地区分类
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    } else if (obj.sortType === "sortTime") {
                        //时间顺序
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    } else if (obj.sortType === "sortScale") {
                        //规模大小
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    } else if (obj.sortType === "sortBusiness") {
                        //业务类型
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    }
                } else if (obj.projectType === "ProjectLocation") {
                    //建设位置
                    if (obj.sortType === "sortUnit") {
                        //建设单位
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    } else if (obj.sortType === "sortTime") {
                        //时间顺序
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    } else if (obj.sortType === "sortScale") {
                        //规模大小
                        this.asideDataList = null;
                    } else if (obj.sortType === "sortBusiness") {
                        //业务类型
                        this.asideDataList = null;
                    }
                } else if (obj.projectType === "ProjectPostNo") {
                    //相关文件
                }
            },
            onHeaderClick(obj) {
                if (obj.projectType === "ProjectName") {
                    //项目名称
                    //项目名称
                    this.$router.push({
                        path: "/FileContent",
                        query: {
                            searchText: this.getSearchText(),
                            paramName: obj.itemData.name
                        }
                    });
                } else if (obj.projectType === "ProjectUnit") {
                    //建设单位
                    if (obj.sortType === "sortRegion") {
                        //地区分类
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    } else if (obj.sortType === "sortTime") {
                        //时间顺序
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    } else if (obj.sortType === "sortScale") {
                        //规模大小
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    } else if (obj.sortType === "sortBusiness") {
                        //业务类型
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    }
                } else if (obj.projectType === "ProjectLocation") {
                    //建设位置
                    if (obj.sortType === "sortUnit") {
                        //建设单位
                        this.asideDataList = null;
                        // this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    } else if (obj.sortType === "sortTime") {
                        //时间顺序
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    } else if (obj.sortType === "sortScale") {
                        //规模大小
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    } else if (obj.sortType === "sortBusiness") {
                        //业务类型
                        this.getPostNoDataFromServer(obj.itemData.projectName.name);
                    }
                } else if (obj.projectType === "ProjectPostNo") {
                    //相关文件
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
                            self.asideDataList = response.data;
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
    @import "../assets/css/jazz-timeline.css";

    .content-title a {
        text-decoration: none;
    }
</style>
