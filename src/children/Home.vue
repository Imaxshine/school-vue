<script setup>

</script>

<template>
  <div class="container">
    <div class="row nav-bar">
      <div class="col-3"><RouterLink class="text-decoration-none bg-dark p-2 rounded-4" to="">About us</RouterLink></div>
      <div class="col-3"><RouterLink class="text-decoration-none bg-dark p-2 rounded-4" to="">Contact us</RouterLink></div>
      <div class="col-3"><RouterLink class="text-decoration-none bg-dark p-2 rounded-4" to="">Location</RouterLink></div>
    </div>

    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.nav-bar{
  //display: flex;
  //flex-direction: row;
  //justify-content: space-around;
  //padding: 5px;
}
.nav-bar div{
  margin: 0 auto;
}
</style>