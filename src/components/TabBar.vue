<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      router="true"
    >
      <div><img
          style="width: 50px"
          src="/public/img/overwatch.jpg"
          alt="Element logo"
        /></div>
        
       
      
      <div class="flex-grow" />
     
      <el-menu-item index="/"> 首页</el-menu-item>
      <el-menu-item index="signIn"> 注册</el-menu-item>
      <el-menu-item index="signup">
        登录
      </el-menu-item>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {

  }
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  </style>
  