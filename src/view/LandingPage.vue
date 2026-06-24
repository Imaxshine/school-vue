<script setup>
import icon from '/icon/school.png'
import { ref } from 'vue'
import { useTokenStore } from '@/stores/token'
import { useRouter } from 'vue-router'
const router = useRouter()
const token = useTokenStore()

const logout = async () => {
  const message = ref('You are about to logout from this site, press cancel to exit!')
  if (confirm(message.value)) {
    token.removeToken()
    await router.replace({ name: 'login' })
  } else {
    return null
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-secondary">
    <div class="container-fluid">
      <div>
        <RouterLink :to="{ name: 'home' }">
          <img class="brand-image navbar-brand" :src="icon" alt="image" />
        </RouterLink>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <RouterLink class="nav-link fs-5" :to="{ name: 'home' }">Home</RouterLink>
          <RouterLink class="nav-link fs-5" :to="{ name: 'dash' }">Dashboard</RouterLink>
          <!--          <RouterLink class="nav-link fs-5" to="">Students</RouterLink>-->
          <RouterLink class="nav-link fs-5" :to="{ name: 'about' }">About us</RouterLink>
          <RouterLink v-if="!token.isLogin" class="nav-link fs-5" :to="{ name: 'login' }">
            <i class="bi bi-box-arrow-in-right text-success"></i>
            Login
          </RouterLink>
          <RouterLink v-if="!token.isLogin" class="nav-link fs-5" :to="{ name: 'register' }">
            <i class="bi bi-people-fill text-success"></i>
            Sign-up
          </RouterLink>
          <RouterLink v-if="token.isLogin" class="nav-link fs-5 text-danger" to="" @click="logout">
            <i class="bi bi-box-arrow-left"></i>
            Logout
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <div class="body-container container-fluid">
    <div class="main-window">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.brand-image {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
.body-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.body-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/student2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  filter: blur(3px) brightness(0.5);

  z-index: -1;
}
</style>
