<script setup lang="ts">
import { onBeforeMount } from 'vue';

import useUsers from '../composables/useUsers';

const { store, getUsers } = useUsers();

onBeforeMount(() => {
  getUsers();
});
</script>

<template>
  <h1>Friends List</h1>
  <el-divider></el-divider>

  <el-table :data="store.users" style="width: 100%">
    <el-table-column prop="name" label="Nombre" />
    <el-table-column prop="username" label="Usuario" />
    <el-table-column prop="email" label="Email" />>
    <el-table-column prop="address.city" label="Ciudad" />
    <el-table-column prop="phone" label="Tfno." />
    <el-table-column prop="website" label="Website" />
    <el-table-column prop="company.name" label="Compañía" />
  </el-table>
</template>

<style scoped>
/*  */
</style>
