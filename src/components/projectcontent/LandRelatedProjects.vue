<template>
    <div class="land_related_page">
        <div class="land_related_projects_header">
            <p>历史文号</p>
            <div class="land_related_project_circle">
                <div class="timeline-icon iconbg-turqoise icon-color-white">
                    <div class="timeline-bar"></div>
                </div>
            </div>
            <hr/>
        </div>
        <div class="land_related_projects_content">
            <div class="one-line">
                <div class="center_horizontally">
                    <div
                            class="land_related_content_component"
                            v-for="(a,index) in relatedPostNoData"
                            :key="index"
                    >
                        <!--                        <div class="projectName">-->
                        <!--                            <router-link :to="{ path: '/ProjectInformation',  query: {searchText: getSearchText(), projectName: a.projectName, projectType: 'ProjectName'}}">{{a.postNo.name}}-->
                        <!--                            </router-link>-->
                        <!--                            </div>-->
                        <div>
                            <div class="timeline-icon-big icon-larger-bing iconbg-pink icon-color-white">
                                <div class="timeline-bar"></div>
                            </div>
                            <div
                                    class="fileInformation"
                                    @click="OtherFile(a.name,$event)"
                            >{{a.name}}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: "LandRelatedProjects",
        props: {relatedPostNoData: Array},
        methods: {
            OtherFile: function (index, event) {
                this.current = index;
                var documentFile = index;
                var self = this;
                // this.$router.push({
                //     path: "/FileContent",
                //     query: {searchText: self.getSearchText(), paramName: documentFile}
                // });
                console.log(documentFile);
                this.$emit("PostNoParam", self.getSearchText(), documentFile);
            }
        }
    };
</script>
<style>
    .center_horizontally {
        position: relative;
        top: -35px;
    }

    .land_related_content_component {
        height: 116px;
        width: 135px;
        float: left;
    }

    .land_related_projects_content {
        width: 750px;
        height: 163px;
    }

    .projectName {
        float: left;
        padding-left: 77px;
        margin-top: -10px;
        /*position: relative;*/
        /*top: -48px;*/
        display: inline;
    }

    .fileInformation {
        padding-left: 50px;
        margin-top: -10px;
        text-align: center;
        cursor: pointer;
    }

    hr {
        margin: 0px;
        height: 1px;
        border: 0px;
        background-color: #d5d5d5;
        color: #808080;
    }

    .one-line {
        left: 0;
        content: "";
        background-color: #c1c1c1;
        background-image: -webkit-linear-gradient(
                top,
                #eaf0f2 0%,
                #c1c1c1 8%,
                #c1c1c1 92%,
                #eaf0f2 100%
        );
        /*margin-left: 80px;*/
        /*position: absolute;*/
        display: block;
        height: 2px;
        margin-top: 50px;
        width: 100%;
        top: 0;
    }

    .land_related_page {
        width: 750px;
        height: 280px;
        box-shadow: 0 0px 12px 0 rgba(52, 52, 52, 0.5);
    }

    .timeline-icon {
        left: 0;
        margin: -40px 0 18px 680px;
        line-height: 70px;
        border-radius: 40px;
        height: 20px;
        width: 20px;
        z-index: 10;
    }

    .timeline-icon-big {
        left: 0;
        margin: 20px 0 20px 80px; /*上右下左*/

        line-height: 70px;
        border-radius: 40px;
        /*position: relative;*/
        height: 30px;
        width: 30px;
    }

    .iconbg-turqoise {
        box-shadow: 0 0 0 4px white, inset 0 0 0 2px rgba(0, 0, 0, 0.05),
        0 0 0 8px rgba(0, 0, 0, 0.2);
        background-color: #ff9900;
    }

    .iconbg-pink {
        box-shadow: 0 0 0 4px white, inset 0 0 0 2px rgba(0, 0, 0, 0.05),
        0 0 0 8px rgba(0, 0, 0, 0.2);
        background-color: #ff66cc;
    }

    .iconbg-gray {
        box-shadow: 0 0 0 4px white, inset 0 0 0 2px rgba(0, 0, 0, 0.05),
        0 0 0 8px rgba(0, 0, 0, 0.2);
        background-color: #999999;
    }

    .iconbg-bottle_green {
        box-shadow: 0 0 0 4px white, inset 0 0 0 2px rgba(0, 0, 0, 0.05),
        0 0 0 8px rgba(0, 0, 0, 0.2);
        background-color: #336666;
    }

    .iconbg-bottle_red {
        box-shadow: 0 0 0 4px white, inset 0 0 0 2px rgba(0, 0, 0, 0.05),
        0 0 0 8px rgba(0, 0, 0, 0.2);
        background-color: #ff3333;
    }

    .icon-color-white {
        color: white;
    }

    p {
        font-size: 18px;
        width: 200px;
        padding-top: 20px;
        padding-left: 20px;
        color: #0330cc;
    }
</style>


