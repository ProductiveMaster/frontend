<template>
  <section class="tertiary--bg sidebar">
    <router-link v-for="route in routes" :key="route.path" :to="route.path">
      <div
        class="sidebarOption"
        :class="{ active: $route.path.includes(route.path) }"
      >
        <p class="light--text">{{ route.name }}</p>
      </div>
    </router-link>

    <!-- 
    <div class="sidebarOption active">
      <a href="#">
        <p class="light--text">Perfil</p>
      </a>
    </div>
    <div class="sidebarOption">
      <a href="#">
        <p class="light--text">Usuarios</p>
      </a>
    </div>
    <div class="sidebarOption">
      <a href="#">
        <p class="light--text">Vacantes</p>
      </a>
    </div>
    <div class="sidebarOption">
      <a href="#">
        <p class="light--text">Aplicaciones</p>
      </a>
    </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        // { path: "/home/perfil", name: "Perfil" },
        { path: "/home/usuarios", name: "Usuarios" },
        { path: "/home/vacantes", name: "Vacantes" },
        { path: "/home/aplicaciones", name: "Aplicaciones" },
      ],
    };
  },
};
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  width: 300px;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  transition: 0.5s;

  .sidebarOption {
    padding: 10px;
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 5px;
    a {
      text-decoration: none;
      p {
        font-size: 1.2em;
      }
    }
  }

  .sidebarOption.active {
    background: rgba(255, 255, 255, 0.2);
    transition: 0.2s;
  }
}

@media (max-width: 900px) {
  .sidebar {
    left: -300px;
    transition: 0.5s;
  }
}
</style>