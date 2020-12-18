<template>
  <div class="secondary--bg page">
    <div class="container-ui">
      {{ typeAuth }}
      <button class="button">grij</button>
    </div>
  </div>
</template>

<script>
require("@/assets/css/style.scss");
export default {
  data() {
    return {};
  },
  computed: {
    typeAuth() {
      return this.$route.name == "signin";
    },
  },
};
</script>

<style lang="scss">
h1 {
  margin-top: 30px;
}
h2 {
  margin-top: 30px;
}
</style>