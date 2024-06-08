import { createStore } from 'vuex'
import api from '../api/index.js'

export default createStore({
  state: {

    userData: {},
    signin: {},
    match: 'false',
    AllBookList: {},
    myBookList: [],
  },
  mutations: {
   
    setUserData(state, userData) {
      state.userData = userData
    },
    setSignin(state, signin) {
      state.signin = signin
    },
    setMatch(state, match) {
      state.match = match
    },
    setAllBookList(state, AllBookList) {
      state.AllBookList = AllBookList
    },
    setMyBookList(state, myBookList) {
      state.myBookList = myBookList
    },
    addBook(state, book) {
      state.myBookList.push(book)
    }
   
  },
  actions: {
   
    async axiosSetUserData({ commit }, data) {
      const response = await api.addUsersServlet(data)
      if (response.data == true) {
        commit('setUserData', data)
      }
      return response.data
    },
    async axiosGetUserData({ commit }, value) {
      const res = await api.FindUserServlet(value)

      commit('setSignin', res.data.userdata)
      commit('setMatch', res.data.match)
      return res.data.match
    },
    async axiosAllBookList({ commit }, ) {
      const response = await api.getAllBookList()
      if (response.data == true) {
        commit('setAllBookList', data)
        console.log(data)
      }
      return response.data
    },
  },
  getters: {
    
    getUserData(state) {
      return state.userData
    },
    getSignin(state) {
      return state.signin
    },
    getMatch(state) {
      return state.match
    },
  getBookList(state) {
      return state.AllBookList
    },
    getMyBookList(state) {
      return state.myBookList
    },
  }
})
