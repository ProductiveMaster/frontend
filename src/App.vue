<template>
  <router-view />
</template>

<script>
import { mapMutations } from "vuex";
require("@/assets/css/style.scss");
import api from "./services/api";
export default {
  methods: {
    ...mapMutations(["updateState"]),
    async validateAuth() {
      var localUser = localStorage.getItem("productiveUser");

      if (localUser) {
        try {
          localUser = JSON.parse(localUser);

          const userQuery = await api.get("user/" + localUser._id);

          this.updateState({
            prop: "user",
            value: userQuery.data.body,
          });
        } catch (error) {
          this.$toast.open({
            message:
              "Tu Cuenta ha cambiado necesitamos que inicies sesión nuevamente",
            type: "error",
          });

          this.updateState({
            prop: "user",
            value: {},
          });

          localStorage.removeItem("productiveUser");
          localStorage.removeItem("productiveToken");

          this.$router.push("/");
        }
      }
    },
  },
  async mounted() {
    await this.validateAuth();
  },
};
</script>
<style lang="scss">
</style>
