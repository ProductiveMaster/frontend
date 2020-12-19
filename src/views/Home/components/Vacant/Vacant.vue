<template>
  <div>
    <SearchBar />
    <Categories />
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
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import Modal from "@/components/Modal";
export default {
  components: {
    Modal,
    CreateVacant,
    VacantItem,
    Categories,
    SearchBar,
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