<template>
    <div id="app">
        <el-container>
            <el-header style="padding: 0px;">
                <ProjectHeader/>
            </el-header>
            <el-main style="padding:0px;">
                <router-view/>


            </el-main>
            <el-footer height='100%'>
                <ProjectFooter/>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import Documents from '@/views/Documents.vue'
    import ProjectHeader from "@/views/Header.vue";
    import ProjectFooter from "@/views/Footer.vue";

    export default {
        name: "app",
        components: {
            ProjectHeader,
            ProjectFooter, Documents
        }
    };
</script>

<style>
    body {
        margin: 0;
    }

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        margin-top: 0px;
    }

    .el-header {
        margin: 0px;
        padding: 0px;
    }

    .el-footer {
        background-color: #545c64;
        color: white;
        text-align: center;
    }
</style>
