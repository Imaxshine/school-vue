<script setup></script>

<template>
  <dialog open class="d-flex justify-content-center align-items-center">
    <div class="dots-holder d-flex">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  height: 100vh;
  width: 100vw;
  padding-top: 5px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  border: none;
  z-index: 5;
}
.dots-holder {
  height: 40px;
  width: 50px;
}
.dots-holder span {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  margin: 0 2px;
  padding: 5px;
  animation: playing 1.5s ease-in-out infinite;
}
.dots-holder span:nth-child(1) {
  background-color: #0808e4;
  animation-delay: -0.8s;
}
.dots-holder span:nth-child(2) {
  background-color: #f8a204;
  animation-delay: -0.6s;
}
.dots-holder span:nth-child(3) {
  background-color: #dfe607;
  animation-delay: -0.4s;
}
.dots-holder span:nth-child(4) {
  background-color: #09ef5a;
  animation-delay: -0.2s;
}
@keyframes playing {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(10px);
  }
  80% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
