<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const redirectUrl = () => {
  router.replace({ name: 'home' })
}
</script>

<template>
  <div class="container-fluid bg-body-secondary d-flex justify-content-center align-items-center">
    <div class="bg-light p-4 w-75 rounded-2 shadow">
      <p class="text-end fs-3"><strong class="text-capitalize">404 page not found</strong></p>
      <p class="text-center">The requested URL was not found on this server.</p>
      <p class="text-center shadow rounded-1 p-2">
        <button class="visit_btn bg-light p-1 text-primary fs-5" @click="redirectUrl">
          visit home page
        </button>
      </p>
      <hr />
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  height: 100vh;
  width: auto;
  font-family:
    DM Sans,
    Avenir,
    Helvetica,
    Arial,
    Tahoma,
    sans-serif;
}
.visit_btn {
  border: none;
  border-left: 1px solid #ff43ee;
  border-right: 1px solid #ff43ee;
  border-radius: 10px;
}
</style>
