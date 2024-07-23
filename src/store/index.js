import { createStore } from 'vuex';

export default createStore({
  state: {
    accessToken: null,
    books: []
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setBooks(state, books) {
      state.books = books;
    }
  },
  actions: {
    fetchBooks(/* { commit }, accessToken */) { // eslint-disable-line no-unused-vars
      // 调用阿里云盘 API 获取书籍列表
      // 未来可能使用 commit 和 accessToken
    }
  },
  getters: {
    isAuthenticated: state => !!state.accessToken,
    getBooks: state => state.books
  }
});