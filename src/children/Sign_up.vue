<script setup>
import { ref } from 'vue'
const isOpened = ref(false)

function changeIcons() {
  isOpened.value = !isOpened.value
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <!--   Form     -->
      <div class="col-lg-6 col-md-6 col-sm-12 my-2">
        <div class="card">
          <div class="card-body">
            <h3 class="text-center">Register form</h3>
            <p class="text-center">
              <img class="log_image" src="/icon/background.png" alt="logImage" />
            </p>
            <form>
              <div class="my-3">
                <label class="form-label" for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Username" />
              </div>

              <div class="my-3">
                <label class="form-label" for="email">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="example@yahoo.com"
                />
              </div>

              <div class="pass my-3">
                <label class="form-label" for="pass1">Password</label>
                <input :type="isOpened ? 'text' : 'password' " class="form-control" id="pass1" placeholder="XXXXXX" />
                <div class="icons">
                  <i v-if="isOpened" @click="changeIcons" class="bi bi-eye-slash fs-2"></i>
                  <i v-else v-on:click="changeIcons" class="bi bi-eye fs-2"></i>
                </div>
              </div>

              <div class="my-3">
                <label class="form-label" for="pass2">Confirm Password</label>
                <input type="password" class="form-control" id="pass2" placeholder="XXXXXX" />
              </div>

              <div class="my-3 text-center">
                <button class="btn btn-primary w-100 p-3">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End form  -->

      <!-- Image -->
      <div class="col-lg-6 col-md-6 col-sm-12 my-2">
        <div class="card">
          <div class="card-body">
            <img
              class="right_image d-none d-lg-block d-md-block"
              src="/student5.jpg"
              alt="student-image"
            />
            <p>
              Our <strong>MOTO</strong> is <strong>Brilliant's Pupils</strong>
              may change the nation attitude.
            </p>
          </div>
        </div>
      </div>
      <!-- End Image -->
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  height: 100vh;
  font-family:
    DM Sans,
    Avenir,
    Helvetica,
    Arial,
    sans-serif;
}
.log_image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-bottom: 4px solid #1f60b4;
  border-top: 4px solid #60d460;
}
.row {
  height: 100%;
  overflow: auto;
}
input {
  height: 50px;
  font-family: ui-sans-serif;
}
.pass {
  position: relative;
}
.icons {
  display: inline;
  position: absolute;
  bottom: 8%;
  right: 10px;
  transform: translateY(10%);
}
.bi{
  cursor: pointer;
}
.right_image {
  border-radius: 10px;
  height: 650px;
  width: 100%;
}
label {
  font-weight: bold;
}
</style>
