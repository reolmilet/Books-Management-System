<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import bookshelf from '../components/bookshelf.vue'
import bookcard from '../components/bookcard.vue';
import stores from '../stores/index.js'
import bookcardList from '../components/bookcardList.vue';
import Promise from 'bluebird';

export default {
  components: {
    bookshelf,
    bookcard,
    bookcardList
  },
  setup() {
    let computedAllBookList = ref(stores.state.AllBookList)
    let promise = null;

    const getAllBookList = async () => {
      promise = Promise.resolve(stores.dispatch('axiosAllBookList'));
      computedAllBookList.value = await promise;
      console.log(computedAllBookList.value);
    }

    onMounted(getAllBookList);

    onBeforeUnmount(() => {
      if (promise && promise.isPending()) {
        promise.cancel();
      }
    });

    return { computedAllBookList }
  }
}
</script>
<template>
  <div class="card" >
    <!-- <bookcardList v-if="computedAllBookList.value" :computedAllBookList="computedAllBookList.value"></bookcardList> -->
  <bookcard v-for="book in computedAllBookList ":key="book.id"  :book="book"></bookcard>

  </div>

</template>
<style>
.card{
  display: grid;
  grid-template-columns: repeat(2, 100fr);
}

</style>
  