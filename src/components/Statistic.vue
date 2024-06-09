<template>
  <el-row>
    <el-col :span="8">
      <el-statistic title="您的借阅次数为" :value="borrowData.length" />
    </el-col>
    <el-col :span="8">
      <el-statistic :value="borrowOnce.length">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            看书进度为
            
          </div>
        </template>
        <template #suffix>/10</template>
      </el-statistic>
    </el-col>
    <el-col :span="8">
      <el-statistic title="看书时间为" :value="totalBorrowTime+'分钟'" />
    </el-col>
   
  </el-row>
</template>

<script>
import { ref, computed } from "vue";
import { useTransition } from "@vueuse/core";
import { ChatLineRound, Male } from "@element-plus/icons-vue";
import store from "../stores";
export default {
  name: "Statistic",
  components: {
    ChatLineRound,
    Male,
  }, // 这里添加了逗号
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
    
    const source = ref(0);
    const outputValue = useTransition(source, {
      duration: 1500,
    });
    source.value = 172000;
    return { outputValue, borrowData,borrowOnce,totalBorrowTime };
  },
};
</script>

<style scoped>
.el-col {
  text-align: center;
}
</style>
