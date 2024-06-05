<script>
import HomePage from './view/home.vue'
import TabBar from './components/TabBar.vue'
import sideBar from './components/sideBar.vue';
import { RouterView } from 'vue-router'
export default {
  name: 'App',
  components: {
    HomePage,
    TabBar,
    sideBar
  }
}
</script>

<template>
  <div class="common-layout">
    <el-container>

      <el-header class="header"><TabBar></TabBar></el-header>
      <el-container>
        <el-aside width="200px" class="aside"><sideBar></sideBar></el-aside>
        <el-main>
          <div class="home-page-wrapper">
            <RouterView />
           </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.common-layout {
  
  max-height: 100vh; /* 视口的高度 */
  overflow: auto; /* 如果内容超出容器，显示滚动条 */

}
.home-page-wrapper {

  overflow: auto; 
}
.header {
  background-color: #ffffff;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.aside{
  background-color: #ffffff;
  color: #ffffff;
  text-align: center;
  line-height: 100%;
  
}
</style>
