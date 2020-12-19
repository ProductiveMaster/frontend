<template>
  <div class="backdrop-modal">
    <div class="modal-content">
      <button @click="$emit('close')" class="modal-content__close tertiary--bg">
        x
      </button>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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

.modal-content {
  max-height: 90vh;

  &__close {
    padding: 5px 12px 8px;
    border-radius: 50px;
    border: solid 2px white;
    float: right;
    margin-right: -10px;
    margin-top: -10px;
    font-weight: bold;
  }
}
</style>