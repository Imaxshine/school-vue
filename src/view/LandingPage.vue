<script setup>
import {ref} from "vue";
const openMenu = ref(false);
const closeMenu = ref(true);

const getOpenMenu = ()=>{
  openMenu.value = true;
  closeMenu.value = false;
}
const getCloseMenu = ()=>{
  openMenu.value = false;
  closeMenu.value = true;
}
</script>

<template>
<div class="app-container container-fluid p-3">
  <div class="top-bar rounded-2">
    <h2>Uhuru Secondary school</h2>
  </div>
  <div class="screen-view">
    <div v-if="closeMenu" class="openBtn m-2">
      <button class="btn btn-info" style="font-size: 18px;" v-on:click="getOpenMenu"> <i class="bi bi-list"></i> </button>
    </div>
    <div v-if="openMenu" class="menu">
    <div class="mb-5 text-end">
      <button class="btn btn-danger" style="font-size: 18px;" @click="getCloseMenu"> <i class="bi bi-x-lg"></i> </button>
    </div>
      <div class="my-2"><RouterLink class="btn btn-dark" :to="{name: 'about'}">HOME</RouterLink></div>
      <div class="my-2"><RouterLink class="btn btn-dark" >DASHBOARD</RouterLink></div>
      <div class="my-2"><RouterLink class="btn btn-dark" >STUDENT'S</RouterLink></div>
    </div>
<!--    RouterView-->
    <div>
      <div class="screen-routerView p-4">
        <RouterView />
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.top-bar{
  display: grid;
  grid-template-rows: 70px 1fr;
  justify-content: center;
}
.top-bar h2{
  margin: 10px auto;
}
.screen-routerView{
  display: flex;
  min-height: 100vh;
  justify-content: center;
}
.app-container{
  overflow-x: auto;
  min-height: 100vh;
  width: 100vw;
  background: rgba(32, 32, 32, 0.93);
  color: rgb(211, 203, 203);
}
.screen-view{
  display: grid;
  grid-template-columns: 120px 1fr;
}
.menu{
  min-height: 100vh;
  border-right: 2px solid rgb(211, 203, 203);
  margin: 40px auto;
  padding: 6px 19px;
  display: flex;
  flex-direction: column;
}
.openBtn{
  animation: playing 2s ease-in-out infinite;
}
@keyframes playing {
  0%{
    transform: translateX(0);
  }
  50%{
    transform: translateX(8px);
  }
  100%{
    transform: translateX(0);
  }
}
.router-link-active{
  border-bottom: 2px solid rgb(211, 203, 203);
}
</style>