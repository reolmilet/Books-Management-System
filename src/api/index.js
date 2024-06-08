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
    console.log(`book_id1111111: ${value.book_id}, user_id: ${value.user_id}`);
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

export default {

  addUsersServlet,
  FindUserServlet,
 
  getAllBookList,
  borrowBookServlet
}
