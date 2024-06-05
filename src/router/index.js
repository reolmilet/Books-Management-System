import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/home.vue'
import signIn from '../view/signIn.vue'
import signup from '../view/signup.vue'
import bookShopping from '../view/bookShopping.vue'
import myBook from '../view/myBook.vue'
import myData from '../view/myData.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn,
 
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
 
    },
    {
      path: '/bookShopping',
      name: 'bookShopping',
      component: bookShopping,
 
    },
    {
      path: '/myBook',
      name: 'myBook',
      component: myBook,
 
    },
    {
      path: '/myData',
      name: 'myData',
      component: myData,
 
    },
  
  ]
})
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  //如果路由需要跳转
  if (to.meta.isAuth) {
    if (stores.state.match == true) {
      next() //放行
    } else {
      alert('请先登录')
    }
  } else {
    // 否则，放行
    next()
  }
})
export default router
