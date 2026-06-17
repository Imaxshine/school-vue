<script setup>
defineProps({
  color: {
    type: String,
    default: 'white',
  },
  back_ground: {
    type: String,
    default: 'rgba(11, 4, 4, 0.96)',
  },
  padding: {
    type: String,
    default: '16px 22px',
  },
  b_radius: {
    type: String,
    default: '7px',
  }
})

</script>

<template>
  <dialog open class="d-flex p-5 justify-content-center align-items-center">
    <div
      class=""
      :style="{
        background: back_ground,
        color: color,
        padding: padding,
        'border-radius': b_radius,
      }"
    >
      <slot name="alert"></slot>
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3px);
  z-index: 10;
}
</style>