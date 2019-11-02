<template>
    <div class="project_related_information">
        <div class="project_related_information_header">
            <p>基本情况</p>
            <div class="project_related_information_circle">
                <div class="timeline-icon icon-larger iconbg-turqoise icon-color-white">
                    <div class="timeline-bar"></div>
                </div>
            </div>
            <hr/>
        </div>
        <div class="project_related_information_content">
            <!--      v-for="a in projectRelatedInformation"-->

            <div class="project_related_information_content1">
                <div class="el-icon-success">
                    <a>项目名称：{{documentFileAllData[0].projectName.name}}</a>
                </div>
                <div class="el-icon-success">
                    <a>建设位置：{{documentFileAllData[0].projectName.constructionLocation}}</a>
                </div>
                <div class="el-icon-success">
                    <a>建设单位：{{documentFileAllData[0].constructionUnit.name}}</a>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: "ProjectRelatedInfomation",
        props: {documentFileAllData: Array},
        mounted() {
        },
        methods: {}
    };
</script>
<style>
    .timeline-icon {
        left: 0;
        margin: -40px 0 18px 680px;
        line-height: 70px;

        border-radius: 40px;
        height: 20px;
        width: 20px;
        z-index: 10;
    }

    .iconbg-turqoise {
        box-shadow: 0 0 0 4px white, inset 0 0 0 2px rgba(0, 0, 0, 0.05),
        0 0 0 8px rgba(0, 0, 0, 0.2);
        background-color: #ff9900;
    }

    .icon-color-white {
        color: white;
    }

    a {
        font-size: 18px;
        color: #666666;
    }

    .el-icon-success {
        color: #0d83e3;
        font-size: 20px;
        padding-left: 20px;
        padding-top: 15px;
    }

    .project_related_information {
        width: 750px;
        height: 181px;
        box-shadow: 0 0px 12px 0 rgba(52, 52, 52, 0.5);
    }

    hr {
        margin: 0px;
        height: 1px;
        border: 0px;
        background-color: #d5d5d5;
        color: #808080;
    }

    p {
        font-size: 18px;
        width: 200px;
        padding-top: 20px;
        padding-left: 20px;
        color: #0330cc;
    }
</style>


