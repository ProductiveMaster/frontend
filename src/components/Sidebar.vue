<template>
  <section class="tertiary--bg sidebar">
    <div v-for="route in routes" :key="route.path" class="sidebarOption active">
      <router-link :to="route.path">
        <p class="light--text">{{ route.name }}</p>
      </router-link>
    </div>
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
        { path: "/home/perfil", name: "Perfil" },
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
  height: calc(100vh - 60px);
  .sidebarOption {
    padding: 15px 0;
    width: 80%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid white;
    margin: auto;
    cursor: pointer;

    a {
      text-decoration: none;
      p {
        font-size: 1.2em;
      }
    }
  }

  .sidebarOption.active {
    border-bottom: 2px solid #95ca3e;
  }
}
</style>