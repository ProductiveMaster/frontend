<template>
  <div>
    <h1 class="VacantesTitle">Vacantes</h1>
    <SearchBar
      :category="category"
      @updateVacants="
        vacants = $event;
        isSearch = true;
      "
      @getVacants="getVacantsMethod"
    />
    <Categories @updateCategory="category = $event" />
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
    <div v-if="vacants.length">
      <VacantItem
        :vacant="vacant"
        v-for="vacant in vacants"
        :key="vacant._id"
      />

      <div v-if="currentPage < maxPages && !isSearch" class="text-center">
        <button @click="next" class="button">Mostrar Más</button>
      </div>
    </div>
    <div v-else>
      <div class="text-center">No pudimos encontrar resultados</div>
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
      currentPage: 2,
      maxPages: 0,
      category: "",

      isSearch: false,
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
      this.maxPages = vacantsQuery.data.body.totalPages;
      this.currentPage = vacantsQuery.data.body.currentPage;
      this.isSearch = false;
    },
    async next() {
      const vacantsQuery = await api.get("jobOffers", {
        params: {
          page: this.currentPage + 1,
        },
      });

      this.vacants = [...this.vacants, ...vacantsQuery.data.body.offers];
      this.maxPages = vacantsQuery.data.body.totalPages;
      this.currentPage = vacantsQuery.data.body.currentPage;
      this.isSearch = false;
    },
  },
  async mounted() {
    await this.getVacantsMethod();
    await this.getApply();
  },
};
</script>

<style lang="scss">
.VacantesTitle {
  font-size: 1.5em;
  margin: 10px 0;
}
</style>