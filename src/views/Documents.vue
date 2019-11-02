<template>
    <div style="padding:10px;">
        <SearchHeader
                class="search-header"
                @onSearch="onSearch"
                :searchValue="searchValue"
        ></SearchHeader>
        <router-view
                v-if="!isSearchTextNull"
                @OnSetSearchText="OnSetSearchText"
        ></router-view>
        <div v-else>请输入搜索内容</div>

    </div>
</template>
<script>
    import SearchHeader from "@/components/SearchHeader.vue";

    export default {
        name: "Documents",
        components: {SearchHeader},
        computed: {
            isSearchTextNull: function () {
                return this.isNull(this.searchValue);
            }
        },
        data() {
            return {
                searchValue: ""
            };
        },
        mounted() {
            this.searchValue = this.$route.query.searchText;
        },
        methods: {
            onSearch(text) {
                this.searchValue = text;
                this.setSearchText(text);
                this.$router.push({path: "/Search", query: {searchText: text}});
            },
            OnSetSearchText(text) {
                this.setSearchText(text);

                this.searchValue = text;
            }
        }
    };
</script>
<style>
    .search-header {
        padding: 10px;
    }
</style>


