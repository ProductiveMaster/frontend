<template>
  <router-view />
</template>

<script>
import { mapMutations } from "vuex";
require("@/assets/css/style.scss");
export default {
  methods: {
    ...mapMutations(["updateState"]),
    validateAuth() {
      var localUser = localStorage.getItem("productiveUser");

      if (localUser) {
        localUser = JSON.parse(localUser);
        this.updateState({
          prop: "user",
          value: localUser,
        });
      }
    },
  },
  mounted() {
    this.validateAuth();
  },
};
</script>
<style lang="scss">
</style>
