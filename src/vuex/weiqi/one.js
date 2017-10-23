const oneObj = {
    state: {
        oneText: 1
    },
    mutations: {
        changeOneText(state, num) {
            state.oneText *= 2 + num
        }
    },
    actions: {
        CHANGEONETEXT({ commit, dispatch }, mes) {
            commit('changeOneText', mes + 1)
        }
    },
    getters: {

    }
}
export default oneObj;