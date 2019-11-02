<template>
    <div class="Association_subgraph">
        <el-tabs
                tab-position="left"
                class="tabs"
        >
            <el-tab-pane label="引力图">
                <ForceGraph :graphData="graphData"></ForceGraph>
            </el-tab-pane>
            <el-tab-pane label="关系图">
                <CustomGraph :graphData="graphData"></CustomGraph>
            </el-tab-pane>
            <el-tab-pane label="圆">
                <CircleGraph :graphData="graphData"></CircleGraph>
            </el-tab-pane>

        </el-tabs>
        <DetailsList class="detailslist"></DetailsList>
        <!--<div class="Association_subgraph_right">
          <el-button
            type="primary"
            @click="IsClick"
          >筛选</el-button>
          <div
            class="ScreeningBoard"
            v-show="screen"
          >
            <div class="ExpansionHierarchy">
              <p>展开层级</p>
              <hr />
              <div v-for="i in ExpansionHierarchy.radioNum">
                <el-radio
                  v-model="ExpansionHierarchy.radio"
                  :label="i"
                >{{i}}级</el-radio>
              </div>

            </div>
            <div class="Relationship">
              <p>关系</p>
              <hr />
              <el-checkbox-group v-model="Relationship.checkList">
                <el-checkbox label="相同项目性质"></el-checkbox>
                <el-checkbox label="相同建设单位"></el-checkbox>
                <el-checkbox label="相同建设位置"></el-checkbox>
                <el-checkbox label="相同建设规模"></el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="Range">
              <p>范围</p>
              <a>（与该项目的距离）</a>
              <hr />
              <el-checkbox-group v-model="Range.checkList">
                <el-checkbox label="≤5Km"></el-checkbox>
                <el-checkbox label="≤10Km"></el-checkbox>
                <el-checkbox label="≤20Km"></el-checkbox>

              </el-checkbox-group>
            </div>
            <div class="Concept">
              <p>概念</p>
              <hr />
              <el-checkbox-group v-model="Concept.checkList">
                <el-checkbox label="建设单位"></el-checkbox>
                <el-checkbox label="规地字"></el-checkbox>
                <el-checkbox label="规建字"></el-checkbox>
                <el-checkbox label="规竣字"></el-checkbox>
                <el-checkbox label="项目名称"></el-checkbox>
              </el-checkbox-group>

            </div>
            <div class="confirm">
              <el-button type="primary">确认</el-button>
            </div>

          </div>
        </div>-->
    </div>

</template>

<script>
    import ForceGraph from "./ForceGraph.vue";
    import CustomGraph from "./CustomGraph.vue";
    import CircleGraph from "./CircleGraph.vue";
    import DetailsList from "./DetailsList";
    import BASEURL from "@/httpconfig/api.js";

    export default {
        name: "Association_subgraph",
        components: {ForceGraph, CustomGraph, CircleGraph, DetailsList},
        data() {
            return {
                ExpansionHierarchy: {
                    radio: "1",
                    radioNum: 3
                },
                Relationship: {checkList: []},
                Range: {
                    checkList: []
                },
                Concept: {
                    checkList: []
                },
                screen: false,
                graphData: null
            };
        },

        methods: {
            getProjectDataFromRoute() {
                var projectType = this.$route.query.projectType;
                var paramName = this.$route.query.paramName;
                var sortType = this.$route.query.sortType;

                this.onRouteRefreshSearchText();
                this.getGraphDataFromServer(projectType, paramName, sortType);
            },
            getGraphDataFromServer(projectType, paramName, sortType) {
                var self = this;

                this.$http
                    .get(BASEURL.project + "graphdata", {
                        params: {
                            projectType: projectType,
                            paramName: paramName,
                            sortType: sortType
                        }
                    })
                    .then(response => {
                        if (self.isNull(response.data)) {
                            //
                        } else {
                            self.graphData = response.data;
                            // self.dataPre();
                            //  self.drawGraph();
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        self.$router.push({name: "servererror"});
                    });
            },
            IsClick: function () {
                this.screen = !this.screen;
            }
        },
        mounted() {
            // this.onRouteRefreshSearchText();
            this.getProjectDataFromRoute();
        }
    };
</script>

<style scoped>
    .Association_subgraph {
        display: flex;
    }

    .tabs {
        width: 1000px;
    }

    .detailslist {
        width: 320px;
    }

    .Association_subgraph_right {
        width: 436px;
        height: 600px;
        margin-top: 10px;
        float: left;
    }

    .el-button {
        width: 140px;
        height: 38px;
    }

    .el-checkbox {
        padding-left: 12px;
        padding-top: 8px;
        width: 90px;
        color: #808080;
    }

    .ScreeningBoard {
        width: 417px;
        height: 456px;
        box-shadow: 0 0px 12px 0 rgba(52, 52, 52, 0.5);
        margin-top: 20px;
    }

    .el-radio {
        float: left;
        width: 90px;
        height: 16px;
        padding-left: 12px;
        padding-top: 12px;
        color: #808080;
    }

    p {
        font-size: 18px;
        width: 90px;
        height: 11px;
        padding-top: 20px;
        padding-left: 20px;
        color: #808080;
    }

    a {
        float: left;
        width: 120px;
        font-size: 12px;
        height: 11px;
        color: #808080;
        position: absolute;
        top: 408px;
        /*left: 922px;*/
        /*left: 100px;*/
        margin-left: 50px;
    }

    hr {
        margin: 0px;
        height: 1px;
        border: 0px;
        background-color: #d5d5d5;
        color: #808080;
    }

    .ExpansionHierarchy {
        height: 58px;
    }

    .Relationship {
        height: 82px;
    }

    .Range {
        height: 59px;
    }

    .confirm {
        width: 20px;
        height: 38px;
        margin-left: 249px;
        margin-top: 40px;
    }
</style>
