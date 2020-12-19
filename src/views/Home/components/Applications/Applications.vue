<template>
  <div>
    <ApplicationItem
      :application="application"
      v-for="application in apply"
      :key="application._id"
    />
  </div>
</template>

<script>
import api from "@/services/api";
import { mapActions, mapState } from "vuex";

import ApplicationItem from "./components/ApplicationItem";

export default {
  components: {
    ApplicationItem,
  },
  computed: {
    ...mapState(["apply"]),
  },
  methods: {
    ...mapActions(["getApply"]),
  },
  async mounted() {
    await this.getApply();
  },
};
</script>

<style>
</style>