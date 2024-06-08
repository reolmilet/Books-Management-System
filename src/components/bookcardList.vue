<script>
import { onMounted } from 'vue';
import bookcard from './bookcard.vue';

export default {
  props: {
    computedAllBookList: {
      type: Object,
      required: true
    }
  },
  components: {
    bookcard
  },
  setup(props) {
    onMounted(() => {
      console.log(props.computedAllBookList.value);
    });
  }
};
</script>

<template>
  <div class="card">
    <bookcard v-for="book in computedAllBookList.value" :key="book.id" :book="book"></bookcard>
  </div>
</template>