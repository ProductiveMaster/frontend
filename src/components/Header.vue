<template>
  <section class="tertiary--bg header">
    <div @click="showSidenav" class="menu">
      <img src="../assets/img/icons/menu.svg" alt="Logotipo" />
    </div>
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
    showSidenav() {
      var sidebar = document.querySelector(".sidebar");

      if (sidebar.style.left == "0px") {
        sidebar.style.left = "-300px";
      } else {
        sidebar.style.left = "0px";
      }
    },
  },
  mounted() {
    var sidebar = document.querySelector(".sidebar");
    if (window.innerWidth < 900) {
      sidebar.style.left = "-300px";
    } else {
      sidebar.style.left = "0px";
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        sidebar.style.left = "-300px";
      } else {
        sidebar.style.left = "0px";
      }
    });
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  max-width: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 1em;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
  .logo {
    width: auto;
    img {
      border-style: none;
      max-height: 40px;
    }
  }
  .menu {
    img {
      border-style: none;
      width: 30px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
  @media (min-width: 900px) {
    .menu {
      display: none;
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