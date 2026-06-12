<script setup>
import { ref } from 'vue'
import {loginAPI as api} from '@/services/loginAPI';
import {timeOut} from '@/functions/timer';

const isViewed = ref(false)
const isError = ref(false);
const errorMsg = ref(null);
// User Inputs
const userName = ref("");
const password = ref("");
const userLogin = async function(){
  if (userName.value === ""){
    errorMsg.value = "Username is required";
    isError.value = true;
    await timeOut(3000);
    isError.value = false;
    errorMsg.value = null;
    return;
  }
  if (password.value === ""){
    errorMsg.value = "Password is required";
    isError.value = true;
    await timeOut(3000);
    isError.value = false;
    errorMsg.value = null;
    return;
  }
  //Todo start the requests
  try{
    //Reset form inputs
    userName.value = "";
    password.value = "";

    const response = await api.get('/login');
  }catch (errors){
    //show errors
  }finally {
    //close all progresses
  }
}

const changeInputType = () => {
  isViewed.value = !isViewed.value
}
</script>

<template>
  <div class="container my-2">
    <div class="row card_holder">
      <div class="col-lg-7 col-md-6 col-sm-12">
        <div class="card">
          <div class="card-body">
            <h3 class="text-center">Login</h3>
            <p class="text-center">
              <img class="logo" src="/icon/background.png" alt="logo" />
            </p>

            <form v-on:submit.prevent="userLogin">
              <div class="my-3">
                <label class="form-label" for="username">Username</label>
                <input
                  class="form-control"
                  v-model.trim="userName"
                  type="text"
                  placeholder="Username"
                  id="username"
                />
              </div>

              <div class="pass my-3">
                <label class="form-label" for="password">Username</label>
                <input
                  class="form-control"
                  :type="isViewed ? 'text' : 'password'"
                  v-model.trim="password"
                  placeholder="XXXXXX"
                  id="password"
                />
                <div class="icons">
                  <i v-if="!isViewed" @click="changeInputType" class="bi bi-eye fs-2"></i>
                  <i v-else @click="changeInputType" class="bi bi-eye-slash fs-2"></i>
                </div>
              </div>

              <div class="my-3 text-center">
                <p v-if="isError" class="alert alert-danger text-start">{{ errorMsg }}</p>
                <button class="btn btn-primary w-100 p-3">Login</button>
              </div>

              <div class="text-end">
                Don't you have an account? register
                <RouterLink :to="{ name: 'register' }">here</RouterLink>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-lg-5 col-md-6 col-sm-12">
        <div class="card">
          <div class="card-body">
            <img
              src="/student5.jpg"
              alt="image"
              class="d-none d-lg-block d-md-block d-sm-none"
              style="border-radius: 10px; height: 90vh; width: 100%"
            />

            <p>
              Our <strong>MOTO</strong> is <strong>Brilliant's Pupils</strong>
              may change the nation attitude.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: auto;
  font-family:
    DM Sans,
    Avenir,
    Helvetica,
    Arial,
    sans-serif;
}
.row {
  overflow: auto;
}
.card_holder::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/student4.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  filter: blur(3px) brightness(0.6);
}
input {
  height: 50px;
  font-family: ui-sans-serif;
  font-size: 20px;
}
label {
  font-weight: bold;
}
.pass {
  position: relative;
}
.icons {
  position: absolute;
  right: 5px;
  transform: translateY(-45px);
}
.bi {
  cursor: pointer;
  z-index: 2;
}
.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-bottom: 4px solid #1f60b4;
  border-top: 4px solid #60d460;
}
</style>
