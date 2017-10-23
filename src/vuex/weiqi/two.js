const twoObj = {
    state: {
        twoText: 2
    },
    mutations: {
        changeTwoText(state) {
            state.twoText++
        }
    },
    actions: {
        CHANGETWOTEXT({ commit }) {
            commit('changeTwoText')
        }
    }
}
export default twoObj;