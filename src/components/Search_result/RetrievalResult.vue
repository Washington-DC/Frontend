<template>
    <div class="back">
        <div class="background">
            <div class="padding"></div>
            <div class="sort">
                <span class="font">排序方式</span>
                &nbsp
                <el-radio-group
                        v-model="myradioSorted"
                        size="mini"
                        style="margin-right:80px;margin-top:10px;"
                        @change="radioSorted()"
                >
                    <el-radio-button size="mini" label="sortLocation">建设位置</el-radio-button>
                    <el-radio-button size="mini" label="sortProjectName">项目名称</el-radio-button>
                    <el-radio-button size="mini" label="sortUnit">建设单位</el-radio-button>
                </el-radio-group>
            </div>
        </div>
        <div class="content">
            <div style="float: left;color: #686868">为您找到相关结果{{totalElement}}条</div>
            <br><br>
            <div class="br" v-for="(item, index)  in projectLists"
                 :key="index">
                <div class="text">
                    <div class="tag-group" style="float: right">
                        <span class="tag-group__title"></span>
                        <el-tag :type="item.type" effect="dark">{{item.label}}</el-tag>
                    </div>
                    <div class="text-header">
                        <router-link
                                :to="{ path: '/ProjectInformation',  query: {searchText: getSearchText(), paramName: item.name, projectType: 'ProjectName'}}">
                            {{item.name}}
                        </router-link>
                    </div>
                    <hr>
                    <div class="text-content">
                        <div>
                            <router-link
                                    :to="{ path: '/ProjectInformation',  query: {searchText: getSearchText(), paramName: item.name, projectType: 'ProjectName'}}">
                                项目名称：{{item.name}}
                            </router-link>
                        </div>
                        <div>建设单位 ：
                            <span
                                    v-for="(constructionUnitItem, constructionUnitindex) in item.constructionUnitList"
                                    :key="constructionUnitindex"
                            >
              <router-link
                      :to="{ path: '/ProjectInformation',  query: {searchText: getSearchText(), paramName: constructionUnitItem.name, projectType: 'ProjectUnit'}}">
                {{constructionUnitItem.name}}
              </router-link>&nbsp;&nbsp;
            </span>
                        </div>
                        <div>
                            <router-link
                                    :to="{ path: '/ProjectInformation',  query: {searchText: getSearchText(), paramName: item.constructionLocation, projectType: 'ProjectLocation'}}">
                                建设位置 ：{{item.constructionLocation}}
                            </router-link>
                        </div>
                        <div>相关文件 ：
                            <span
                                    v-for="(postNoItem, postNoindex) in item.postNoList"
                                    :key="postNoindex"
                            >
              <router-link
                      :to="{ path: '/FileContent',  query: {searchText: getSearchText(), paramName: postNoItem.name}}">
                {{postNoItem.name}}
              </router-link>&nbsp;&nbsp;
            </span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RetrievalResult",
        props: {projectLists: Array, totalElement: Number, getradioSorted: String},
        computed: {},
        data() {
            return {myradioSorted: this.getradioSorted};
        },
        methods: {
            radioSorted() {
                console.log(this.myradioSorted);
                this.$emit("radioSorted", this.myradioSorted);
            }
        }
    }
</script>

<style scoped>
    .back {
        background-color: #F0F0F0;
    }

    .background {
        width: 100%;
        height: 40px;
        /*background-image: url("../../assets/images/1710311735330961064.jpg");*/
        background-repeat: repeat-x;
        background-size: 100% 100% !important;
        margin: 0px;
        padding-top: 10px;
        background-color: #F0F0F0;
    }

    .font {
        font-size: 14px;
        font-weight: bold;
    }

    .sort {
        float: right;
        width: 350px;
        height: 28px;
    }

    .padding {
        float: right;
        width: 20%;
        height: 28px;
    }

    .content {
        margin: auto;
        width: 800px;
        height: 100%;
        /*
            border-style:solid;
            border-width:1px;*/
    }

    .text {
        margin: auto;
        width: 600px;
        height: 210px;
        border-radius: 10px;
        box-shadow: 6px 6px 5px #A8A8A8;
        text-align: left;
        background-color: white;
    }

    .text-header {
        /*font-family: cursive;*/
        font-size: 25px;
        padding: 10px;
        padding-top: 20px;
    }

    .text-header a {
        text-decoration: none;
        font-size: 1.5em;
    }

    .text-content {
        font-size: 14px;
        text-align: left;
        padding-left: 20px;
    }

    .text-content a {
        text-decoration: none;
    }

    .br {
        width: 100%;
        height: 220px;
    }
</style>
