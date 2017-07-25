export default {
  // SET_NUM: (state, {
  //   num
  // }) => {
  //   state.num = num
  // },
  // SET_NOW: (state, {
  //   now
  // }) => {
  //   state.now = Object.assign({}, now)
  // },
  // SOCKET_CONNECT: (state, status) => {
  //   state.connect = true;
  // },
  // SOCKET_USER_MESSAGE: (state, message) => {
  //   state.message = message;
  // }
  SET_SEARCHINPUT: (state, { searchInput }) => {
    state.searchInput = searchInput
  },
  SET_THEME: (state, { theme }) => {
      state.theme = theme
      localStorage.setItem('theme', theme)
  }
}