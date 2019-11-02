<template>
    <div style="padding:10px;">
        <div class="file_content_header">{{FileName}}</div>
        <el-container style="padding:0px;">

            <el-main style="padding-top:0px;padding-bottom:0px;">
                <ProjectRelatedInfomation :documentFileAllData="documentFileAllData"></ProjectRelatedInfomation>
                <LandRelatedProjects
                        @PostNoParam="getPostNoParam"
                        :relatedPostNoData="relatedPostNoData"
                ></LandRelatedProjects>
                <!--        <ExaminationAndApprovalForm :AcceptanceForm="documentFileAllData.AcceptanceForm"></ExaminationAndApprovalForm>-->
            </el-main>
            <el-aside width="200px">
                <ProjectAssociationSubgraphAside :postNo="FileName"></ProjectAssociationSubgraphAside>
            </el-aside>
        </el-container>

    </div>
</template>
<script>
    import LandRelatedProjects from "@/components/projectcontent/LandRelatedProjects.vue";
    import ProjectRelatedInfomation from "@/components/projectcontent/ProjectRelatedInfomation.vue";
    import ExaminationAndApprovalForm from "@/components/projectcontent/ExaminationAndApprovalForm.vue";
    import ProjectAssociationSubgraphAside from "@/components/projectcontent/ProjectAssociationSubgraphAside.vue";

    import BASEURL from "@/httpconfig/api.js";

    export default {
        name: "FileContent",
        components: {
            LandRelatedProjects,
            ProjectRelatedInfomation,
            ExaminationAndApprovalForm,
            ProjectAssociationSubgraphAside
        },
        data() {
            return {
                documentFileAllData: null,
                relatedPostNoData: null,
                FileName: ""
            };
        },
        mounted() {
            this.getDocumentDataFromRoute();
        },
        methods: {
            getPostNoParam: function (searchText, Filename) {
                console.log(searchText);
                if (!this.isNull(searchText)) {
                    this.searchText = searchText;
                    this.FileName = Filename;
                    this.getFileData(this.FileName);
                    this.$emit("OnSetSearchText", searchText);
                }
            },
            getDocumentDataFromRoute() {
                this.onRouteRefreshSearchText();
                this.FileName = this.$route.query.paramName;
                console.log(this.FileName);
                if (!this.isNull(this.FileName)) {
                    this.getFileData(this.FileName);
                    this.getRelatedPostNoDataFromServer(this.FileName);
                }
            },
            getFileData(documentFileName) {
                var self = this;
                this.$http
                    .get(BASEURL.document + "document", {
                        params: {
                            documentFileName: documentFileName
                            // "abc123"
                        }
                    })
                    .then(response => {
                        console.log(response.data);
                        if (self.isNull(response.data)) {
                            //
                        } else {
                            self.documentFileAllData = response.data;
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        self.$router.push({name: "servererror"});
                    });
            },
            getRelatedPostNoDataFromServer(postNoName) {
                var self = this;
                this.relatedPostNo = null;
                this.$http
                    .get(BASEURL.document + "relatedpostno", {
                        params: {
                            postNoName: postNoName
                        }
                    })
                    .then(response => {
                        console.log(response.data);
                        if (self.isNull(response.data)) {
                            //
                        } else {
                            self.relatedPostNoData = response.data;
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
<style>
    .file_content_header {
        background-color: #4577b7;
        padding-top: 10px;
        padding-bottom: 10px;
        color: white;

        font-size: 1.6em;
        text-align: center;
    }
</style>


