import Vue from 'vue';
import VueResource from 'vue-resource'
import Vuex from 'vuex';
import one from './weiqi/one.js'
import two from './weiqi/two.js'
Vue.use(VueResource)
Vue.use(Vuex);
const $http = new Vue().$http
const store = new Vuex.Store({
    state: {
        text: 1,
        token: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxMzgxMzgxMzgwMCIsInNjb3BlIjpbIndyaXRlIl0sImV4cCI6MTUwMDEwNjM3MjIwNywidXNlcmlkIjoxLCJhdXRob3JpdGllcyI6WyJhZG1pbiJdLCJqdGkiOiIxZTQzMTdkMy0wMTFhLTRlYTgtYjQwZC05NTUxMGFhZTg2ODUiLCJ0aWQiOjEsImNsaWVudF9pZCI6IkRPQ1RPUiJ9.rxgsjc73c2ZLnT-PY63NxOxTuZoYsC_t0X3MSoxE9yA',
        user: null,
        ip: 'http://192.168.1.250:5555',
        userList: []
    },
    mutations: {
        addText(state) {
            state.text++
        },
        reduceText(state) {
            state.text--
        },
        getUser(state, user) {
            state.user = user
        },
        getUserList(state, userList) {
            state.userList = userList
        }
    },
    actions: {
        ADDTEXT({ commit }) {
            commit('addText')
        },
        REDUCETEXT({ commit }) {
            commit('reduceText')
        },
        GETUSER({ commit, state, dispatch }, userId) {
            let url = '/api/organization/employees/detail?userId=' + userId
            $http.get(url, {
                headers: {
                    Authorization: state.token
                }
            }).then((res) => {
                console.log(res)
                commit('getUser', res.body)
                dispatch('GETUSERLIST')
            })
        },
        GETUSERLIST({ commit, state }) {
            let url = '/api/organization/employees'
            $http.get(url, {
                headers: {
                    Authorization: state.token
                }
            }).then((res) => {
                console.log(res.body.list)
                commit('getUserList', res.body.list)
            })
        }

    },
    modules: {
        one,
        two
    }
})
export default store;