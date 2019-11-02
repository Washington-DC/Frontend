<template>
    <div class="examination_and_approval_from">
        <div class="examination_and_approval_from_header">
            <p>{{AcceptanceForm.AcceptanceFormHeader}}</p>
            <div class="examination_and_approval_from_circle">
                <div class="timeline-icon icon-larger iconbg-turqoise icon-color-white">
                    <div class="timeline-bar"></div>
                </div>
            </div>
            <hr/>
        </div>
        <div class="examination_and_approval_from_content">
            <table
                    cellspacing="0"
                    border="1"
            >
                <!-- 顶部title -->
                <tr>
                    <th>属性</th>
                    <th colspan="2">内容</th>
                </tr>
                <!-- 暂无数据时显示 -->
                <tr v-if="!AcceptanceForm.tableInfo">
                    <td :colspan="6">
                        暂无数据
                    </td>
                </tr>
                <!-- template不会被渲染 -->
                <template v-for="(item,index) in AcceptanceForm.tableInfo">
                    <!-- 左侧跨行区域 -->
                    <tr>
                        <td :rowspan="item.content.length+1">{{item.attribute}}</td>

                    </tr>
                    <!-- 右侧数据 -->
                    <tr
                            v-for="(child,index) in item.content"
                            :key="index"
                    >
                        <td>
                            {{child.content1}}
                        </td>
                        <td>
                            {{child.content2}}
                        </td>

                    </tr>
                </template>

            </table>

        </div>

    </div>
</template>
<script>
    export default {
        name: "ExaminationAndApprovalForm",
        props: ["AcceptanceForm"]
    };
</script>
<style>
    .examination_and_approval_from {
        width: 750px;
        border: thin;
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

    .iconbg-turqoise {
        box-shadow: 0 0 0 4px white, inset 0 0 0 2px rgba(0, 0, 0, 0.05),
        0 0 0 8px rgba(0, 0, 0, 0.2);
        background-color: #ff9900;
    }

    .icon-color-white {
        color: white;
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
        line-height: 24px;
        width: 200px;
        padding-top: 20px;
        padding-left: 20px;
        color: #0330cc;
    }

    table {
        margin-top: 15px;
        width: 100%;
        border: 1px solid #e9eaec;
        border-collapse: collapse;
    }

    th {
        background-color: #f8f8f9;
    }

    th,
    td {
        padding: 5px;
        border: 1px solid #e9eaec;
        text-align: center;
        vertical-align: middle;
        line-height: 30px;
    }
</style>


