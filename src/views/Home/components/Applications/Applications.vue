<template>
  <div>
    <ApplicationItem
      :application="application"
      v-for="application in applyFiltered"
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
    ...mapState(["apply", "user"]),
    applyFiltered() {
      if (this.user.type == "admin") {
        return this.apply;
      } else if (this.user.type == "master") {
        return this.apply.filter((app) => {
          console.log(app.studentId._id, this.user._id);
          return app.studentId._id == this.user._id;
        });
      }
    },
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