<template>
    <div class="projectProfile">
        <div class="content">
            <div
                    class="topicalsubject"
                    v-for="(item, index)  in projectLists"
                    :key="index"
            >
                <!--标题-->
                <div class='topicalsubject-header'>
                    <router-link
                            :to="{ path: '/ProjectInformation',  query: {searchText: getSearchText(), paramName: item.name, projectType: 'ProjectName'}}">
                        {{item.name}}
                    </router-link>
                </div>

                <hr>

                <!--内容-->
                <div class='topicalsubject-content'>
                    <div>
                        <router-link
                                :to="{ path: '/ProjectInformation',  query: {searchText: getSearchText(), paramName: item.name, projectType: 'ProjectName'}}">
                            项目名称：{{item.name}}
                        </router-link>

                    </div>

                    <div>
                        建设单位 ：
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

                    <div>
                        相关文件 ：
                        <span
                                v-for="(postNoItem, postNoindex) in item.postNoList"
                                :key="postNoindex"
                        >
              <router-link
                      :to="{ path: '/FileContent',  query: {searchText: getSearchText(), paramName: postNoItem.name}}">
                {{postNoItem.name}}
              </router-link>&nbsp;&nbsp;
            </span>
                    </div>
                </div>

            </div>
        </div>
        <div class="ProjectInformation">
        </div>
    </div>
</template>

<script>
    export default {
        name: "projectProfile",
        data() {
            return {};
        },
        props: ["projectLists"],
        methods: {}
    };
</script>

<style scoped>
    .topicalsubject {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        margin-right: 30px;
        /*margin-left: 150px;*/

        margin-bottom: 18px;
        text-align: left;
    }

    .content {
        margin: 10px;
        margin-left: 0px;
        padding: 5px;
        padding-left: 0px;
        border-right: 1px solid #dddddd;
    }

    .projectProfile {
        padding-top: 10px;
    }

    .topicalsubject-header {
        font-family: cursive;
        padding: 10px;
    }

    .topicalsubject-header a {
        text-decoration: none;
        font-size: 1.5em;
    }

    .topicalsubject-content {
        font-size: 1em;
    }

    .topicalsubject-content a {
        text-decoration: none;
    }
</style>
