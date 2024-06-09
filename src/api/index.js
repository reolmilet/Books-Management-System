import Axios from 'axios'
import baseURL from './URL'
import { URLs } from './URL'

const instance = Axios.create({
  baseURL
})

const addUsersServlet = (value) =>
  instance.post(URLs.addUsersServlet, `username=${value.userName}&password=${value.password}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
const borrowBookServlet = (value) => {
    const params = `book_id=${encodeURIComponent(value.book_id)}&user_id=${encodeURIComponent(value.user_id)}`;
    instance.get(`${URLs.borrowBookServlet}?${params}`)
}
const FindUserServlet = (value) =>
  instance.get(URLs.FindUserServlet, {
    params: { username: value.userName, password: value.password }
  })

const getAllBookList = () =>
    instance.get(URLs.getAllBookList, {
      
    })

    const getBorrowBookList = (value) =>
      instance.get(URLs.findBorrowBookServlet, {
        params: {  user_id: value }
      })
    const returnBorrowBookServlet = (value) => {
      const params = `book_id=${encodeURIComponent(value.book_id)}&user_id=${encodeURIComponent(value.user_id)}`;
      instance.get(`${URLs.returnBorrowBookServlet}?${params}`)
    }
    const findBorrowBookDataServlet = (value) =>
      instance.get(URLs.findBorrowBookDataServlet, {
        params: {  user_id: value }
      })
  
export default {

  addUsersServlet,
  FindUserServlet,
 
  getAllBookList,
  borrowBookServlet,
  getBorrowBookList,
  returnBorrowBookServlet,
  findBorrowBookDataServlet
}
