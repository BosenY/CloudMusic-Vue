import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action.js'
import mutations from './mutation.js'
import getters from './getter.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        num: 1,
        now:{},
        connect: false,
        message: null,
        searchInput: '',
        theme: localStorage.getItem('theme') || 'theme-red'
    },
    actions,
    mutations,
    getters
})
export default store