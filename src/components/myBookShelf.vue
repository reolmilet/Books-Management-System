<template>
  <div class="bookshelf" v-for="(group, index) in groupedImages" :key="'group-' + index">
    <div class="book-grid" >
      <div >
        <ul>
          <li v-for="(img, index) in group" :key="'img-' + index">
            <img :src="img" />
          </li>
        </ul>
      </div>
    </div>
    <div class="shelf-shadows"></div>
    <div class="shelf"></div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import store from '../stores/index.js';
export default {
  setup() {
    const images = computed(() => store.state.myBookList.map(item => item.img));
    

    const groupedImages = computed(() => {
      let groups = [];
      for (let i = 0; i < images.value.length; i += 3) {
        groups.push(images.value.slice(i, i + 3));
      }
      return groups;
    });

    return { groupedImages };
  }
}
</script>

<style>
/* your styles here */
</style>
<style >
::before, ::after {
    content: none;
}
.bookshelf {
  width: calc(100% - 200px);
  margin: 5rem auto;
  text-align: center;
  position: relative;
}

.book-grid {
  z-index: 2;
  position: relative;
  transform: translateY(-15px);
}

.book-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.book-grid ul li {
  justify-self: center;
}

.book-grid ul li img {
  display: block;
  box-shadow: 0px -5px 20px 2px rgba(0, 0, 0, 0.3);
  width: 200px;
  height: 300px;
  object-fit: cover;
}

.shelf-shadows {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  border-radius: 2px;
  z-index: 1;
  box-shadow: 0px -5px 3px 0px rgba(170, 170, 170, 0.2), 0px 15px 20px 0px rgba(170, 170, 170, 0.7), 0px 5px 5px 0px rgba(119, 119, 119, 0.3);
}

.shelf {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background-color: #f9f9f9;
  border-radius: 2px;
  z-index: 3;
}
</style>