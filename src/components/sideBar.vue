<template>
    <el-row class="tac">
      <el-col :span="12">
      
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router="true"
        >
        <el-menu-item index="bookShopping" >
            <el-icon><icon-menu /></el-icon>
            <span >图书商城</span>
          </el-menu-item>
          <el-menu-item index="myBook" >
            <el-icon><icon-menu /></el-icon>
            <span>我的书架</span>
          </el-menu-item>
          
          <el-menu-item index="myData">
            <el-icon><document /></el-icon>
            <span>借阅信息</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      
    </el-row>
  </template>
  
  <script lang="ts" setup>
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  import stores from '../stores';
  const handleOpen = (key: string, keyPath: string[]) => {

  }
  const handleClose = (key: string, keyPath: string[]) => {

  }
  
  </script>
  <style>
.el-menu-vertical-demo{
    width: 200px;
    height: 100%;
}
</style>
  