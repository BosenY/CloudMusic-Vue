export default {
    // SET_NUM: ({ commit }, { num }) => {
    //     commit('SET_NUM', { num})
    // },
    // SET_NOW: ({ commit }, { now }) => {
    //     commit('SET_NOW', { now})
    // },
    // otherAction: (context, type) => {
    //         return true;
    // },
    // socket_userMessage: (context, message) => {
    //     context.dispatch('newMessage', message);
    //     context.commit('NEW_MESSAGE_RECEIVED', message);
    //     if (message.is_important) {
    //         context.dispatch('alertImportantMessage', message);
    //     }
    // },
    SET_SEARCHINPUT: ({ commit }, { searchInput }) => {
            commit('SET_SEARCHINPUT', { searchInput })
    },
    SET_THEME: ({ commit }, { theme }) => {
        commit('SET_THEME', { theme })
    }
}