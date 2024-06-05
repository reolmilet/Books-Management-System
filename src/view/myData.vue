<script >
import myData from '../components/myData.vue'
import Statistic from '../components/Statistic.vue'
export default {
 
  components: {
    myData,
    Statistic
  }
}
</script>
<template>
  <div class="data">
    <Statistic></Statistic>
    <myData></myData>
  </div>

</template>
<style>
.data {
  height: 100vh;
}
</style>
  