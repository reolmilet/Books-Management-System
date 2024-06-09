import { createStore } from 'vuex'
import api from '../api/index.js'

export default createStore({
  state: {

    userData: {},
    signin: {},
    match: 'false',
    AllBookList: {},
    myBookList: [],
    borrowBookData: {}
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
    },
    reduceBook(state, book) {
      state.myBookList = state.myBookList.filter(item => item.id !== book.id)
    },
    setBorrowBookData(state, borrowBookData) {
      state.borrowBookData = borrowBookData
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
    async axiosSetBorrowData({ commit }, data) {
     
      const response = await api.borrowBookServlet(data)
      
      return response
    },
    async axiosGetUserData({ commit,dispatch }, value) {
      const res = await api.FindUserServlet(value)
     
      commit('setSignin', res.data.userdata)
      commit('setMatch', true)
      await dispatch('axiosMyBookList', res.data.userdata.id)
      await dispatch('axiosFindBorrowBookData', res.data.userdata.id)
     
      return res.data.match
    },
    async axiosAllBookList({ commit }, ) {
      const response = await api.getAllBookList()
      if (response.data == true) {
        commit('setAllBookList', data)
 
      }
      return response.data
    },
    async axiosMyBookList({ commit }, value) {
      const response = await api.getBorrowBookList(value)
      
        commit('setMyBookList', response.data)
      
      return response.data
    },
    async axiosReturnBook({ commit }, data) {
      const response = await api.returnBorrowBookServlet(data)
      return response
    },
    async axiosFindBorrowBookData({ commit }, value) {
      const response = await api.findBorrowBookDataServlet(value)
      commit('setBorrowBookData', response.data)
      return response.data
    }
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
    getBorrowBookData(state) {
      return state.borrowBookData
    }
  }
})
