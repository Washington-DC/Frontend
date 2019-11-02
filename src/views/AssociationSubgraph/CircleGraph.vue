<template>
    <div
            class="Association_subgraph_left"
            id="subCircleGraph"
            ref="subCircleGraph"
    ></div>
</template>
<script>
    //引入基本模板
    let echarts = require("echarts/lib/echarts");
    //引入关系图组件
    require("echarts/lib/chart/graph");
    require("echarts/lib/component/legend");
    //引入提示框和title组件
    require("echarts/lib/component/tooltip");
    require("echarts/lib/component/title");
    export default {
        name: "ForceGraph",
        props: {graphData: Object},
        data() {
            return {};
        },
        mounted() {
        },
        watch: {
            graphData: function (d) {
                this.drawGraph();
            }
        },

        methods: {
            getColors(name) {
                switch (name) {
                    case "项目名称":
                        return "#F82B7E";
                    case "用地类型":
                        return "#F33F2B";
                    case "构筑物名称":
                        return "#F76A00";
                    case "发文号":
                        return "#00A950";
                    case "用地性质名称":
                        return "#999999";
                    case "来函单位":
                        return "#567CF7";
                    case "建筑物名称":
                        return "#7260E9";
                    case "建设单位":
                        return "#a27900";
                }
                return "F7C675";
            },
            getdata(nodeName) {
                var i;
                for (i = 0; i < this.graphData.antity.length; i++) {
                    this.graphData.antity[i].draggable = true;

                    if (this.graphData.antity[i].name === nodeName)
                        this.graphData.antity[i].symbolSize = [100, 100];
                    else this.graphData.antity[i].symbolSize = [50, 50];
                }
                return this.graphData.antity;
            },
            drawGraph() {
                var paramName = this.$route.query.paramName;

                var self = this;
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById("subCircleGraph"));
                // 绘制图表
                var _categories = [];
                var colors = ["#F82B7E"];

                self.graphData.legend.forEach(element => {
                    _categories.push({
                        name: element,
                        itemStyle: {
                            //可配置颜色
                            normal: {
                                color: self.getColors(element)
                            }
                        }
                    });
                });

                myChart.setOption({
                    title: {
                        text: paramName
                    },

                    tooltip: {
                        formatter(x) {
                            return x.data.des;
                        }
                    },
                    legend: {
                        x: "center",
                        show: true,
                        data: self.graphData.legend
                    },
                    series: [
                        {
                            type: "graph",
                            layout: "circular",
                            symbolSize: 80,
                            roam: true,
                            focusNodeAdjacency: true,
                            categories: _categories,
                            edgeSymbol: ["", "line"],
                            // edgeSymbolSize: [80, 10],
                            edgeLabel: {
                                // 连接两个关系对象的线上的标签
                                normal: {
                                    textStyle: {
                                        fontSize: 12,
                                        fontFamily: "Microsoft YaHei"
                                    },
                                    //position:"center",
                                    show: true,
                                    formatter(x) {
                                        switch (x.data.name) {
                                            case "company":
                                                return "建设单位";
                                            case "project":
                                                return "项目";
                                            case "building":
                                                return "建筑物";
                                            case "structure":
                                                return "构筑物";
                                            case "project_nature":
                                                return "项目性质";
                                            case "pipeline":
                                                return "管线";
                                            case "traffic":
                                                return "交通";
                                            case "road":
                                                return "道路";
                                            case "water":
                                                return "水利";
                                            case "same_project":
                                                return "同一项目";
                                            default:
                                                return x.data.name;
                                        }
                                    }
                                }
                            },
                            force: {
                                repulsion: 1000,
                                edgeLength: 105
                            },
                            draggable: false,
                            itemStyle: {
                                normal: {
                                    color: "#4b565b"
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 1,
                                    color: "#4b565b"
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    fontFamily: "Microsoft YaHei",
                                    fontSize: 14,
                                    textStyle: {},
                                    formatter: function (val) {
                                        //设置自动换行
                                        var value = val.name;
                                        var str = "";
                                        var num = 4; //每行显示字数
                                        var valLength = value.length; //该项x轴字数
                                        var rowNum = Math.ceil(valLength / num); // 行数

                                        if (rowNum > 1) {
                                            for (var i = 0; i < rowNum - 1; i++) {
                                                var temp = "";
                                                var start = i * num;
                                                var end = start + num;

                                                temp = value.substring(start, end) + "\n";
                                                str += temp;

                                                if (i === rowNum - 2) {
                                                    str += value.substring(end);
                                                }
                                            }
                                            return str;
                                        } else {
                                            return value;
                                        }
                                    }
                                }
                            },
                            data: self.getdata(paramName),
                            links: this.graphData.relation,
                            animationEasingUpdate: "quinticInOut", // 数据更新动画的缓动效果。[ default: cubicOut ]    "quinticInOut"
                            animationDurationUpdate: 100 // 数据更新动画的时长。[ default: 300 ]
                        }
                    ]
                });
            }
        }
    };
</script>
<style scoped>
    .Association_subgraph_left {
        width: 1200px;
        height: 800px;
        float: left;
        margin-top: 10px;
    }
</style>
