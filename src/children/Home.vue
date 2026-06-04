<script setup>
import {timeOut} from '@/functions/timer'
import { ref } from 'vue'
const isOpened = ref(false)
const user_name = ref('copy user name')

// Change text colors
const isCopied = ref(false)
function changeCredentialState() {
  isOpened.value = !isOpened.value
}
const getUserName = async ()=>{
  const userName = document.getElementById('userName').textContent;
  if (userName){
    await navigator.clipboard.writeText(userName);
    isCopied.value = true;
    user_name.value = "Name copied success✔";
    await timeOut(4000);
    isCopied.value = false;
    user_name.value = 'copy user name';
  }
}
</script>

<template>
  <div class="container-fluid" style="font-family: Tahoma, Arial, SansSerif">
    <div class="bg-info p-2 top-title mt-1 rounded-1">
      <h3 class="text-center">Uhuru Secondary school</h3>
    </div>

    <div class="s2-container mb-4">
      <div class="main-card overflow-auto p-3">
        <!--    Nguzo 3    -->
        <div class="info-card">
          <!--          TOTAL-->
          <div class="card p-1">
            <div class="card-header">TOTAL</div>
            <div class="card-body d-flex justify-content-center">
              <div class="total-shaped rounded-pill">
                <div>{{ 50 }}</div>
              </div>
            </div>
            <!-- button   -->
            <div>
              <RouterLink class="btn btn-primary w-100 text-decoration-none" to="">{{
                'OPEN IN DASHBOARD'
              }}</RouterLink>
            </div>
          </div>
        </div>
        <!--        End total-->

        <!--        Female-->
        <div class="info-card">
          <div class="card p-1">
            <div class="card-header">FEMALE</div>
            <div class="card-body d-flex justify-content-center">
              <div class="female-shape rounded-pill">{{ 31 }}</div>
            </div>
            <!-- button   -->
            <div>
              <RouterLink class="btn btn-primary w-100 text-decoration-none" to="">{{
                'OPEN IN DASHBOARD'
              }}</RouterLink>
            </div>
          </div>
        </div>
        <!--        End Female-->

        <!--        Male-->
        <div class="info-card">
          <div class="card p-1">
            <div class="card-header">MALE</div>
            <div class="card-body d-flex justify-content-center">
              <div class="male-shape rounded-pill">
                <div>{{ 19 }}</div>
              </div>
            </div>
            <!-- button   -->
            <div>
              <RouterLink class="btn btn-primary w-100 text-decoration-none" to="">{{
                'OPEN IN DASHBOARD'
              }}</RouterLink>
            </div>
          </div>
        </div>
        <!--        End Male-->

        <!--   Testing credentials     -->
        <div class="info-card">
          <div class="card p-1">
            <div class="card-title">SYSTEM TEST</div>
            <div class="card-body">
              <div class="p-3">
                <div>
                  <small class="text-dark">Open and copy app credential's (<i class="text-danger">This is only for app testing</i>)</small>
                  <button class="btn btn-success w-100" @click="changeCredentialState" style="letter-spacing: 2px;">
                    {{ isOpened ? 'Close' : 'Open' }}
                  </button>
                </div>
                <!--  credential container     -->
                <div v-show="isOpened" class="cred-container p-2 my-2 w-100">
                  <div class="my-1">
                    Username: <code id="userName">admin</code> <button class="my_copy_btn" :class="isCopied ? 'changeTxtColor' : 'black' " @click="getUserName">{{user_name}}</button>
                  </div>
                  <div class="my-1">
                    Password: <code id="password">00ab00</code> <button class="my_copy_btn"> copy password</button>
                  </div>
                </div>
                <!-- End credential container     -->
              </div>
            </div>
          </div>
        </div>
        <!-- End credentials -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-title h3 {
  z-index: 1;
}
.s2-container {
  height: 90vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 5px;
  height: 500px;
  width: 100vw;
  background: rgba(0, 0, 0, 0.3);
}
.main-card .info-card {
  padding: 5px;
  text-align: center;
  background: #dfdcdc;
  color: rgba(7, 7, 7, 0.93);
  font-weight: bold;
  border-radius: 7px;
}
.total-shaped,
.female-shape,
.male-shape {
  height: auto;
  width: auto;
  padding: 50px;
  background: rgba(0, 0, 0, 0.1);
  font-size: 30px;
}
.card:hover {
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.2ms ease-in 2ms;
}
.female-shape {
  background: rgb(138, 138, 232);
}
.male-shape {
  background: rgb(234, 227, 136);
}
.cred-container {
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
}
.my_copy_btn{
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  border-radius: 9px;
  transition: all 1s ease-in-out 0.3ms;
}
.my_copy_btn:hover{
  transform: scale(1.02);
  box-shadow: 4px 6px 5px 5px rgba(0,0,0,0.3);
}
code{
  font-size: 18px;
}
.changeTxtColor{
  color: #038303;
  font-weight: bold;
  font-style: italic;
}
</style>