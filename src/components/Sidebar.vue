<template>
  <section class="tertiary--bg sidebar">
    <div class="sidebarOption">
      <p class="light--text">
        <img
          class="person-icon"
          :src="require('@/assets/img/icons/person.svg')"
        />
        {{ user.name }} {{ user.lastname }} <br />
        <strong> Nivel {{ average }} </strong>
      </p>
    </div>

    <template v-for="route in routes">
      <a
        v-if="(route.admin && user.type == 'admin') || !route.admin"
        :key="route.path"
        @click="closeMenu(route.path)"
      >
        <div
          class="sidebarOption"
          :class="{ active: $route.path.includes(route.path) }"
        >
          <p class="light--text">{{ route.name }}</p>
        </div>
      </a>
    </template>

    <p class="ProTip light--text">Pro Tip</p>
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
        { path: "/home/Ranking", name: "Ranking", admin: false },
        { path: "/home/usuarios", name: "Usuarios", admin: true },
        { path: "/home/vacantes", name: "Vacantes", admin: false },
        { path: "/home/aplicaciones", name: "Aplicaciones", admin: false },
      ],
    };
  },
  computed: {
    ...mapState(["user", "apply"]),
    average() {
      const applys = this.apply.filter((apply) => {
        return apply.studentId._id == this.user._id;
      });

      var average = 0;
      var totalScore = 0;
      var scoresLength = 0;

      console.log(applys);

      applys.forEach((element) => {
        if (element.qualification) {
          totalScore += element.qualification;
          scoresLength++;
        }
      });

      if (totalScore && scoresLength) {
        average = totalScore / scoresLength;
      }

      return average;
    },
  },

  methods: {
    selectedTip() {
      const randomTop = () => {
        var item = tips[Math.floor(Math.random() * tips.length)];
        return item;
      };
      return randomTop();
    },
    closeMenu(path) {
      this.$router.push(path);
      var sidebar = document.querySelector(".sidebar");
      if (window.innerWidth < 900) {
        sidebar.style.left = "-300px";
      }
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
.ProTip {
  font-size: 1.3em;
  margin: 10px 0;
  margin-top: 40px;
}
// @media (max-width: 900px) {
//   .sidebar {
//     left: -300px;
//     transition: 0.5s;
//   }
// }

.person-icon {
  width: 30px;
}
</style>