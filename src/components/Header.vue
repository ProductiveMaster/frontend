<template>
  <section class="tertiary--bg header">
    <div class="logo">
      <img src="../assets/logotipo.png" alt="Logotipo" />
    </div>
    <!--Boton para coach-->
    <div class="userName">
      <img
        @click="logout"
        class="exit-button"
        :src="require('@/assets/img/icons/exit.svg')"
      />
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("productiveUser");
      localStorage.removeItem("productiveToken");
      this.$router.push("/");
      location.reload();
    },
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 1em;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
  .logo {
    img {
      border-style: none;
      max-height: 40px;
    }
  }
  .userName {
    a {
      text-decoration: none;
      font-size: 1.5em;
    }
  }
}

.exit-button {
  width: 30px;
}
</style>