<template>
  <div>
    <VacantItem />
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
import VacantItem from "./components/VacantItem";
import Modal from "@/components/Modal";
import VacanteItem from "./components/VacantItem";
export default {
  components: {
    Modal,
    CreateVacant,
    VacantItem,
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