<script >
import { ref,computed } from 'vue';
import store from '../stores/index.js';
import { cloneFnJSON } from '@vueuse/core';
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const bookBo=computed(()=>store.state.myBookList.some(item=>item.id===props.book.id))
    const mybook = computed(() => store.state.myBookList);
const addBook = async() => {

  if(!store.state.match){
    alert("请先登录")
    return
  }
    store.commit('addBook', props.book);

    const data = {
      book_id: props.book.id,
      user_id: store.state.signin.id
    }
    await store.dispatch('axiosSetBorrowData',data);
  }
  const reduceBook = async() => {

    store.commit('reduceBook', props.book);
    const data = {
      book_id: props.book.id,
      user_id: store.state.signin.id
    }
    await store.dispatch('axiosReturnBook',data);
   
  }
  return { mybook, addBook,reduceBook ,bookBo}
  },
  
//   watch()={
//     mybook:{
//       handler(newVal, oldVal) {
//         store.commit('updateMyBookList', newBook);
//       },
//       deep: true
//     }
// };
}
</script>
<template>
    <div class="container">
  <div class="images">

    <img :src="book.img" />
  </div>
  
  
  <div class="product">
  <p style="margin-bottom: 5px;">{{ book.author }}</p>
    <h1>{{ book.title }}</h1>
    <h2>{{ book.price }}￥</h2>
    <p class="desc">{{ book.brief }}</p>
    <div class="buttons">
      <button class="add" @click="addBook" v-if="!bookBo">加入书架</button>
      <button class="add" @click="reduceBook" v-if="bookBo">取消加入书架</button>
      <button class="like"><span>♥</span></button>
    </div>
  </div>
</div>


</template>
<style >
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');

html {
  display: grid;
  min-height: 100%;
}

body {
  margin: 10px;
  display: grid;
  background: #ffffff;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
}

.container {
  margin: 20px;
  position: relative;
 
  overflow: hidden;
  width: 520px;
  height: 350px;
  background: #F5F5F5;
  box-shadow: 5px 5px 15px rgba(186, 126, 126, .5);
  border-radius: 10px;
}

p {
  font-size: 0.6em;
  color: #BA7E7E;
  letter-spacing: 1px;
}

h1 {
  font-size: 1.2em;
  color: #4E4E4E;
  margin-top: -5px;
}

h2 {
  color: #C3A1A0;
  margin-top: -5px;
}

.images img {
  width: 200px;
  height: 300px;
  margin-top: 20px;
  margin-left: 40px;
}

.slideshow-buttons {
  top: 70%;
  display: none;
}

.one, .two, .three, .four {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #E0C9CB;
}

.one {
  left: 22%;
}

.two {
  left: 27%;
}

.three {
  left: 32%;
}

.four {
  left: 37%;
}

.product {
  position: absolute;
  width: 40%;
  height: 100%;
  top: 10%;
  left: 60%;
}

.desc {
  text-transform: none;
  letter-spacing: 0;
  margin-bottom: 17px;
  color: #4E4E4E;
  font-size: .7em;
  line-height: 1.6em;
  margin-right: 25px;
  text-align: justify;
}

button {
  background: #D4B3B5;
  padding: 10px;
  display: inline-block;
  outline: 0;
  border: 0;
  margin: -1px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #F5F5F5;
  cursor: pointer;
}

button:hover {
  background: #BA7E7E;
  transition: all .4s ease-in-out;
}

.add {
  width: 67%;
}

.like {
  width: 22%;
}

.sizes {
  display: grid;
  color: #D9AAB7;
  grid-template-columns: repeat(auto-fill, 30px);
  width: 60%;
  grid-gap: 4px;
  margin-left: 20px;
  margin-top: 5px;
}

.sizes:hover {
  cursor: pointer;
}

.pick {
  margin-top: 11px;
  margin-bottom:0;
  margin-left: 20px;
}

.size {
  padding: 9px;
  border: 1px solid #E0C9CB;
  font-size: 0.7em;
  text-align: center;
}

.size:hover {
  background: #BA7E7E;
  color: #F5F5F5;
  transition: all .4s ease-in-out;
}

.focus {
  background: #BA7E7E;
  color: #F5F5F5;
}

footer {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.8em;
  text-transform: uppercase;
  padding: 10px;
}

footer p {
  letter-spacing: 3px;
}

footer a {
  color: #ffffff;
  text-decoration: none;
}

footer a:hover {
  color: #7d7d7d;
}
</style>