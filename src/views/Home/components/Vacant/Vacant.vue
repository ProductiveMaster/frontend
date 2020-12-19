<template>
  <div>
    <Modal v-if="showCreateVacant">
      <CreateVacant />
      <button @click="showCreateVacant = false" class="button">Salir</button>
    </Modal>
    <div @click="showCreateVacant = true" class="fab">+</div>
  </div>
</template>

<script>
import CreateVacant from "./components/CreateVacant";
import Modal from "@/components/Modal";
export default {
  components: {
    CreateVacant,
    Modal,
  },
  data() {
    return {
      showCreateVacant: false,
    };
  },
};
</script>

<style>
</style>