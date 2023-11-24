<script setup lang="ts">
import { RouterView } from 'vue-router';

import SideBar from './components/SideBar.vue';
</script>

<template class="common-layout">
  <div class="common-layout">
    <el-container>
      <el-aside class="side-bar">
        <SideBar />
      </el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
}
.side-bar {
  width: 20vw;
  height: 100vh;
  background-color: aquamarine;
}
</style>
