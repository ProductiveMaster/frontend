<template>
  <section class="tertiary--bg sidebar">
    <div class="sidebarOption">
      <p class="light--text">
        <img
          class="person-icon"
          :src="require('@/assets/img/icons/person.svg')"
        />
        {{ user.name }} {{ user.lastname }}
      </p>
    </div>
    <router-link v-for="route in routes" :key="route.path" :to="route.path">
      <div
        class="sidebarOption"
        :class="{ active: $route.path.includes(route.path) }"
      >
        <p class="light--text">{{ route.name }}</p>
      </div>
    </router-link>

    <div class="tips card secondary--bg">
      <p>
        {{ selectedTip() }}
      </p>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import tips from "./tips";
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
  computed: {
    ...mapState(["user"]),
  },

  methods: {
    selectedTip() {
      const randomTop = () => {
        tips;

        return;
      };
      return randomTop();
    },
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
  padding: 0 1em;

  .sidebarOption {
    padding: 10px;
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 5px;

    p {
      display: flex;
      align-items: center;
      font-size: 1.2em;
      img {
        margin-right: 20px;
      }
    }
  }

  .sidebarOption.active {
    background: rgba(255, 255, 255, 0.2);
    transition: 0.2s;
  }
  .tips {
    margin-top: 1em;
    height: auto;
    p {
      font-size: 1.2em;
    }
  }
}

@media (max-width: 900px) {
  .sidebar {
    left: -300px;
    transition: 0.5s;
  }
}

.person-icon {
  width: 30px;
}
</style>