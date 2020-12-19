<template>
  <div class="VacantePage">
    <h1>{{ vacant.titleOffer }}</h1>
    <ApplyVacant :vacant="vacant" />

    <div class="section metadata">
      <span>{{ vacant.companyName }}</span>
    </div>
    <div class="section description">
      <h2>Descripcion de la empresa</h2>
      <p>
        {{ vacant.description }}
      </p>
    </div>
    <div class="section requeriments">
      <h2>Requisitos Tecnicos</h2>
      <p>
        {{ vacant.offerRequirements }}
      </p>
    </div>
    <div class="section responsabilities">
      <h2>Responsabilidades</h2>
      <p>
        {{ vacant.responsabilities }}
      </p>
    </div>
    <div class="section salary">
      <h2>Rango Salarial</h2>
      <p>{{ vacant.salaryFrom }} - {{ vacant.salaryTo }} USD</p>
    </div>
    <div class="section category">
      <h2>Categoría</h2>
      <p>{{ vacant.category }}</p>
    </div>

    <div class="section category">
      <h2>Modalidad</h2>
      <p>{{ vacant.isRemote }}</p>
    </div>

    <div v-if="!vacant.isRemote" class="section category">
      <h2>Ubicación</h2>
      <p>{{ vacant.country }} - {{ vacant.city }}</p>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

import ApplyVacant from "@/components/ApplyVacant";

export default {
  components: { ApplyVacant },
  data() {
    return {
      vacant: {},
    };
  },
  methods: {
    async getVacant() {
      const vacantQuery = await api.get("jobOffers/" + this.$route.params.id);
      this.vacant = vacantQuery.data.body;
    },
  },
  async mounted() {
    await this.getVacant();
  },
};
</script>

<style lang="scss">
.VacantePage {
  h1,
  h2 {
    color: #95ca3e;
    margin-bottom: 5px;
  }
}
.metadata {
  width: 400px;
  display: flex;
  justify-content: space-between;
  a {
    color: #f97308;
    text-decoration: underline;
  }
}
.section {
  margin: 1em 0;
  p,
  span {
    font-size: 1.2em;
    text-align: justify;
  }
}
</style>