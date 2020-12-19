<template>
  <div>
    <Modal v-if="showCreateVacant" @close="showCreateVacant = false">
      <CreateVacant />
    </Modal>
    <div @click="showCreateVacant = true" class="fab">+</div>
    <div>
      <VacanteItem />
    </div>
  </div>
</template>

<script>
import CreateVacant from "./components/CreateVacant";
import Modal from "@/components/Modal";
import VacanteItem from "./components/VacantItem"
export default {
  components: {
    CreateVacant,
    Modal,
    VacanteItem,
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