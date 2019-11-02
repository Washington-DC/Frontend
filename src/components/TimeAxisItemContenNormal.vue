<template>
    <div
            @click="onClick"
            class='timeaxis-item-content'
    >
        {{content}}
    </div>
</template>
<script>
    export default {
        name: "TimeAxisItemContenNormal",

        props: {
            itemData: Object,
            projectType: String,
            paramName: String,
            sortType: String
        },

        computed: {
            content: function () {
                if (this.projectType === "ProjectName") {
                    //项目名称
                    return this.itemData.name;
                } else if (this.projectType === "ProjectUnit") {
                    //建设单位
                    if (this.sortType === "sortRegion") {
                        //地区分类
                        return this.itemData.projectName.name;
                    } else if (this.sortType === "sortTime") {
                        //时间顺序
                        return this.itemData.projectName.name;
                    } else if (this.sortType === "sortScale") {
                        //规模大小
                        return this.itemData.projectName.name;
                    } else if (this.sortType === "sortBusiness") {
                        //业务类型
                        return this.itemData.projectName.name;
                    }
                } else if (this.projectType === "ProjectLocation") {
                    //建设位置
                    if (this.sortType === "sortUnit") {
                        //建设单位
                        return this.itemData.projectName.name;
                    } else if (this.sortType === "sortTime") {
                        //时间顺序
                        return this.itemData.projectName.name;
                    } else if (this.sortType === "sortScale") {
                        //规模大小
                        return this.itemData.projectName.name;
                    } else if (this.sortType === "sortBusiness") {
                        //业务类型
                        return this.itemData.projectName.name;
                    }
                } else if (this.projectType === "ProjectPostNo") {
                    //相关文件
                }
            }
        },
        methods: {
            onClick() {
                this.$emit("onContentClick", {
                    itemData: this.itemData,
                    projectType: this.projectType,
                    paramName: this.paramName,
                    sortType: this.sortType
                });
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
