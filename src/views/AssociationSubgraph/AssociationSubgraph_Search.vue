<template>
    <div class="search">
        <form>
            <input type="text" placeholder="请输入搜索内容" name="cname">
            <button type="submit" @click="search"></button>
        </form>

    </div>
</template>

<script>
    export default {
        name: "AssociationSubgraph_Search"
    }
</script>

<style scoped>
    .search {
        padding: 10px 0px;
        /*margin-left: 128px;*/
        margin-top: 12px;
    }

    form {
        position: relative;
        width: 500px;
        margin: 0px;
    }

    input, button {
        border: none;
        outline: none;
    }

    input {

        padding-left: 10px;
    }

    button {

        cursor: pointer;
        position: absolute;
    }

    .search input {
        border: 1px solid #999;
        width: 440px;
        height: 34px;
        background: transparent;
        top: 0;
        right: 0;
    }

    .search button {
        background: #3385FF;
        width: 100px;
        height: 38px;
        /*left: 478px;*/
        top: 0;

    }

    .search button:before {
        content: "搜索";
        font-size: 16px;
        color: #F9F0DA;
    }

</style>
