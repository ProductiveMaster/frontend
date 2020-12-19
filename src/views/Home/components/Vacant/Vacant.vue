<template>
  <div>
    <VacantItem />
    <Modal v-if="showCreateVacant" @close="showCreateVacant = false">
      <CreateVacant />
    </Modal>
    <div @click="showCreateVacant = true" class="fab">+</div>
    <div>
      <Categories />
      <VacanteItem />
    </div>
  </div>
</template>

<script>
import CreateVacant from "./components/CreateVacant";
import VacantItem from "./components/VacantItem";
import Categories from "./components/Categories";
import Modal from "@/components/Modal";
export default {
  components: {
    Modal,
    CreateVacant,
    VacantItem,
    Categories,
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