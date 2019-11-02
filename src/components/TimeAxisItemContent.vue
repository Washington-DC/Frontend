<template>
    <div>
        <TimeAxisItemContentResultWithLabel
                v-if="isResultWithLabel"
                :itemData="itemData"
                :projectType="projectType"
                :paramName="paramName"
                :sortType="sortType"
                @onContentClick="onContentClick"
        ></TimeAxisItemContentResultWithLabel>
        <TimeAxisItemContenNormal
                v-else
                :itemData="itemData"
                :projectType="projectType"
                :paramName="paramName"
                :sortType="sortType"
                @onContentClick="onContentClick"
        ></TimeAxisItemContenNormal>
    </div>
</template>
<script>
    import TimeAxisItemContentResultWithLabel from "./TimeAxisItemContentResultWithLabel.vue";
    import TimeAxisItemContenNormal from "./TimeAxisItemContenNormal.vue";

    export default {
        name: "TimeAxisItemContent",
        components: {TimeAxisItemContentResultWithLabel, TimeAxisItemContenNormal},
        props: {
            itemData: Object,
            projectType: String,
            paramName: String,
            sortType: String
        },

        computed: {
            isResultWithLabel: function () {
                if (this.projectType === "ProjectName") {
                    //项目名称
                    return false;
                } else if (this.projectType === "ProjectUnit") {
                    //建设单位
                    if (this.sortType === "sortRegion") {
                        //地区分类
                        return true;
                    } else if (this.sortType === "sortTime") {
                        //时间顺序
                        return true;
                    } else if (this.sortType === "sortScale") {
                        //规模大小
                        return true;
                    } else if (this.sortType === "sortBusiness") {
                        //业务类型
                        return true;
                    }
                } else if (this.projectType === "ProjectLocation") {
                    //建设位置
                    if (this.sortType === "sortUnit") {
                        //建设单位
                        return true;
                    } else if (this.sortType === "sortTime") {
                        //时间顺序
                        return true;
                    } else if (this.sortType === "sortScale") {
                        //规模大小
                        return true;
                    } else if (this.sortType === "sortBusiness") {
                        //业务类型
                        return true;
                    }
                } else if (this.projectType === "ProjectPostNo") {
                    //相关文件
                    return false;
                }
            }
        },
        methods: {
            onContentClick(obj) {
                this.$emit("onContentClick", obj);
            }
        }
    };
</script>
<style scoped>
    .timeaxis-item-content {
        cursor: pointer;
        color: dimgray;
    }
</style>
