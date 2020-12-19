<template>
  <div>
    <SearchBar />
    <Categories />
    <Modal v-if="showCreateVacant" @close="showCreateVacant = false">
      <CreateVacant
        @getVacants="getVacantsMethod"
        @close="showCreateVacant = false"
      />
    </Modal>
    <div
      @click="showCreateVacant = true"
      v-if="user.type == 'admin'"
      class="fab"
    >
      +
    </div>
    <div>
      <VacantItem
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
import { mapActions, mapState } from "vuex";

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
    ...mapActions(["getApply"]),
    async getVacantsMethod() {
      const vacantsQuery = await api.get("jobOffers");

      this.vacants = vacantsQuery.data.body.offers;
    },
  },
  async mounted() {
    await this.getVacantsMethod();
    await this.getApply();
  },
};
</script>

<style>
</style>