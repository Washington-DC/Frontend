<template>
    <div>
        <div
                v-for="(item,index) in itemData.projectAndPostNoList"
                :key="index"
        >
            <TimeAxisItemContenNormal
                    :itemData="item"
                    :projectType="projectType"
                    :paramName="paramName"
                    :sortType="sortType"
                    @onContentClick="onContentClick"
            ></TimeAxisItemContenNormal>

        </div>
    </div>
</template>
<script>
    import TimeAxisItemContenNormal from "./TimeAxisItemContenNormal.vue";

    export default {
        name: "TimeAxisItemContentResultWithLabel",
        components: {TimeAxisItemContenNormal},
        props: {
            itemData: Object,
            projectType: String,
            paramName: String,
            sortType: String
        },
        computed: {},
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
