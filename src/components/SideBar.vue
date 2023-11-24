<script setup lang="ts">
//
</script>

<template>
  <el-row>
    <el-col :span="24">
      <h1>NextSocial</h1>
      <el-menu router>
        <el-menu-item index="1" :route="{ name: 'MyProfile' }">
          <el-icon>
            <UserFilled />
          </el-icon>
          <span>Mi Perfil</span>
        </el-menu-item>

        <el-menu-item index="2" :route="{ name: 'FriendList' }">
          <el-icon>
            <Menu />
          </el-icon>
          <span> Mis Amigos </span>
        </el-menu-item>

        <el-menu-item index="3">
          <el-icon>
            <setting />
          </el-icon>
          <span>Configuración</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped>
/*  */
</style>
