import store from './../store/index'
import BASEURL from '@/httpconfig/api.js'

export default {
    install(Vue) {
        /**
         * tmp是否为空
         * @param {*} tmp
         */
        Vue.prototype.isNull = function (tmp) {
            if (!tmp || typeof tmp == 'undefined' || tmp == 0 || tmp == null) {
                return true
            }
            return false
        }

        Vue.prototype.setSearchText = function (text) {
            store.dispatch('setSearchText', {value: text})
        }

        Vue.prototype.getSearchText = function () {
            if (this.isNull(store)) return -1
            if (this.isNull(store.state)) return -1
            if (this.isNull(store.state.storeAppData)) return -1

            return store.state.storeAppData.searchText.value
        }

        Vue.prototype.onRouteRefreshSearchText = function () {
            var searchText = this.$route.query.searchText

            if (!this.isNull(searchText)) {
                this.searchText = searchText
                this.$emit('OnSetSearchText', searchText)
            }
        }
    }
}
