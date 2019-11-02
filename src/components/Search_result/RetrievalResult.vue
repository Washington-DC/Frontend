<template>
    <div class="back">
        <div class="background">
            <div class="padding"></div>
            <div class="sort">
                <span class="font">排序方式</span>
                &nbsp
                <el-button size="mini">建设位置</el-button>
                <el-button size="mini">项目名称</el-button>
                <el-button size="mini">建设单位</el-button>
            </div>
        </div>
        <div class="content">
            <div style="float: left;color: #686868">为您找到相关结果{{total}}条</div>
            <br><br>
            <div class="br" v-for="item in information">
                <div class="text">
                    <div class="tag-group" style="float: right">
                        <span class="tag-group__title"></span>
                        <el-tag :type="item.type" effect="dark">{{item.label}}</el-tag>
                    </div>
                    <div class="text-header">{{item.name}}</div>
                    <hr>
                    <div class="text-content">
                        <div>[项目名称]{{item.name}}</div>
                        <div>[建设单位]{{item.company}}</div>
                        <div>[建设位置]{{item.location}}</div>
                        <div>[相关文件]{{item.about}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RetrievalResult",
        props: ["information"],
        computed: {
            total: function () {
                var total = this.information.length;
                return total;
            }
        },/*
      mounted: function () {
        this.infors = this.content;
        for (var i = 0; i < this.content.information.length; i++) {
          if (this.content.information[i].type===)
            }
      }*/
    }
</script>

<style scoped>
    .back {
        background-color: #F0F0F0;
    }

    .background {
        width: 100%;
        height: 40px;
        background-image: url("../../assets/images/1710311735330961064.jpg");
        background-repeat: repeat-x;
        background-size: 100% 100% !important;
        margin: 0px;
        padding-top: 10px;
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
