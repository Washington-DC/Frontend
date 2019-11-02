// initial state
const state = {
    searchText: null, //搜索内容
    tableData: null
}

// getters
const getters = {
    searchText: state => state.searchText,
    tableData: state => state.tableData
}

// actions
const actions = {
    setSearchText({commit, state}, value) {
        commit('setProjectSearchText', value)
    }
}

// mutations
const mutations = {
    setProjectSearchText(state, value) {
        state.searchText = value
    },
    setTableData(state, value) {
        state.tableData = value
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
