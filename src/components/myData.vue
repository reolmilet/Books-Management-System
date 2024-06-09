<template>
    <div class="demo-collapse">
      <el-collapse v-model="activeNames" @change="handleChange">
        
  <div v-for="data in borrowData" :key="data.id">
    <el-collapse-item :title="  data.book_name" :name="data.id.toString()">
      
      <div>
        开始借阅时间: {{ data.borrow_time }}
      </div>
      <div>
        归还时间: {{ data.bo_return!=0?data.return_time:'未归还' }}
      </div>
      
      <div>
       总共借阅时间: {{ data.bo_return!=0?data.borrowtime+'分钟' :'未归还'}}
      </div>
    </el-collapse-item>
  </div>



        
       
      </el-collapse>
    </div>
  </template>
  
  <script >
  import { ref, computed } from "vue";

import store from "../stores";
export default {
  name: "myData",
 
  setup() {
    const borrowData = computed(() => store.state.borrowBookData || []);
    const borrowOnce = borrowData.value.reduce((unique, item) => {
      if (!unique.some((obj) => obj.book_id === item.book_id)) {
        unique.push(item);
      }
      return unique;
    }, []);
    const totalBorrowTime = computed(() => {
      return borrowData.value.reduce((total, item) => total + item.borrowtime, 0)
    })
    
    
    return {  borrowData,borrowOnce,totalBorrowTime };
  },
};
  </script>
  