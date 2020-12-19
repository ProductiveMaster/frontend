<template>
  <div class="backdrop-modal">
    <div class="modal-content"><slot></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.backdrop-modal {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 5;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
}
</style>