<template>
  <div>
    <pre>
      {{ user.type }}
    </pre>
    <SearchBar />
    <Categories />
    <VacantItem />
    <Modal v-if="showCreateVacant" @close="showCreateVacant = false">
      <CreateVacant />
    </Modal>
    <div
      @click="showCreateVacant = true"
      v-if="user.type == 'admin'"
      class="fab"
    >
      +
    </div>
    <div>
      <VacanteItem
        :vacant="vacant"
        v-for="vacant in vacants"
        :key="vacant._id"
      />
    </div>
  </div>
</template>

<script>
import CreateVacant from "./components/CreateVacant";
import VacantItem from "./components/VacantItem";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import Modal from "@/components/Modal";
import { mapState } from "vuex";

import api from "@/services/api";

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
      vacants: [],
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async getVacantsMethod() {
      const vacantsQuery = await api.get("jobOffers");

      this.vacants = vacantsQuery.data.body;
    },
  },
  async mounted() {
    await this.getVacantsMethod();
  },
};
</script>

<style>
</style>