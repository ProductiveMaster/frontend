<template>
  <form @submit.prevent="searchMethod" class="SearchBar">
    <button @click="$emit('getVacants')" type="button" class="button close">
      x
    </button>

    <input
      v-model="search"
      type="search"
      placeholder="Escribe el empleo que estas buscando"
      class="card"
    />
    <button type="submit" class="button">Buscar {{ category }}</button>
  </form>
</template>

<script>
import api from "@/services/api";
export default {
  props: {
    category: String,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    async searchMethod() {
      const searchQuery = await api.get("jobOffers/search/" + this.search, {
        params: {
          type: this.category,
        },
      });

      this.$emit("updateVacants", searchQuery.data.body);
    },
  },
};
</script>

<style lang="scss">
.SearchBar {
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  input {
    border-radius: 0px;
    width: 100%;
    border: 0.1px solid #95ca3e;
    &::placeholder {
      color: #fff;
    }
  }

  button.close {
    border-radius: 5px 0px 0px 5px;
    margin-top: initial;
    padding-left: 10px;
    padding-right: 10px;
  }
  button {
    border-radius: 0px 5px 5px 0px;
    margin-top: initial;
  }
}
</style>