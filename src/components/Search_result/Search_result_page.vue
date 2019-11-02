<template>
    <div class="search-result_page">

        <Retrieval></Retrieval>

        <RetrievalResult :information="information"></RetrievalResult>
        <div class="foot">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total=page*10>
            </el-pagination>
        </div>
    </div>

</template>

<script>
    import Retrieval from "@/components/Search_result/Retrieval"
    import RetrievalResult from "@/components/Search_result/RetrievalResult"

    export default {
        name: "SearchPage",
        components: {
            Retrieval, RetrievalResult
        },
        data() {
            return {
                information: [
                    {
                        name: "1#商业楼等2项（西城区华龙大厦项目）",
                        company: '北京都市圣景房地产开发有限公司',
                        location: '西城区德外大街18号',
                        about: '1994规条字0456号',
                        type: '',
                        label: '第一阶段'
                    },
                    {
                        name: '1#居民楼等2项（西城区华龙大厦项目）',
                        company: '北京都市圣景房地产开发有限公司',
                        location: '西城区德外大街18号',
                        about: '1994规条字0456号',
                        type: 'success',
                        label: '第二阶段'
                    },
                    {
                        name: '1#商业楼等2项（西城区华龙大厦项目）',
                        company: '北京都市圣景房地产开发有限公司',
                        location: '西城区德外大街18号',
                        about: '1994规条字0456号',
                        type: 'danger',
                        label: '第三阶段'
                    },
                    {
                        name: '1#居民楼等2项（西城区华龙大厦项目）',
                        company: '北京都市圣景房地产开发有限公司',
                        location: '西城区德外大街18号',
                        about: '1994规条字0456号',
                        type: 'warning',
                        label: '第四阶段'
                    },
                    {
                        name: '1#商业楼等2项（西城区华龙大厦项目）',
                        company: '北京都市圣景房地产开发有限公司',
                        location: '西城区德外大街18号',
                        about: '1994规条字0456号',
                        type: 'danger',
                        label: '第三阶段'
                    },

                ],
                page: 10,
            }
        }
    }
</script>

<style scoped>

    .foot {
        width: 94.6%;
        height: 15%;
        padding: 50px;
        /*
            border-style:solid;
            border-width:1px;*/
    }
</style>
