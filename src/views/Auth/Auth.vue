<template>
  <div class="secondary--bg page">
    <div class="container-ui">
      <div class="card text-center login-content">
        <img class="logo" :src="require('@/assets/logo.png')" />
        <h1>{{ issignin ? "Iniciar Sesión" : "Regístrate" }}</h1>
        <p>Para acceder a la plataforma</p>

        <form v-if="issignin">
          <input
            required
            class="input"
            type="email"
            placeholder="Correo Electrónico"
          />
          <input
            required
            class="input"
            placeholder="Contraseña"
            type="password"
          />
          <br />
          <br />
          <button class="button">Iniciar Sesión</button>
          <br />
          <router-link to="/registro">
            <button class="button clear">Regístrate</button>
          </router-link>
        </form>
        <form @submit.prevent="signup" v-else>
          <input required class="input" type="text" placeholder="Nombre" />

          <input required class="input" type="text" placeholder="Apellido" />
          <input
            required
            class="input"
            type="email"
            placeholder="Correo Electrónico"
          />

          <select required class="input" placeholder="Genero">
            <option value="0">Seleccionar</option>
            <option value="1">Mujer</option>
            <option value="2">Hombre</option>
            <option value="3">Otro</option>
          </select>

          <input
            required
            class="input"
            placeholder="Fecha de Nacimiento"
            type="date"
          />

          <input
            required
            class="input"
            placeholder="Contraseña"
            type="password"
          />
          <input
            required
            class="input"
            placeholder="Confirmar Contraseña"
            type="password"
          />
          <br />
          <br />
          <button type="submit" class="button">Regístrate</button>
          <br />
          <router-link to="/iniciar-sesion">
            <button class="button clear">Inciar Sesión</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
require("@/assets/css/style.scss");
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      gender: "",
      birthDate: "",
      password: "",
      passwordConfirm: "",
      imgPath: "",
    };
  },
  computed: {
    issignin() {
      return this.$route.name == "signin";
    },
  },
  methods: {
    ...mapActions(["signup"]),
    async signupMethod() {
      const signupQuery = await this.signup({
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        gender: this.gender,
        birthDate: this.birthDate,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
        imgPath: this.imgPath,
      });

      if (signupQuery) {
        this.$toast.open("Bienvenido");
        this.$router.push("/home");
      }
    },
    async signinMethod() {
      const signupQuery = await this.signup({
        email: this.email,
        password: this.password,
      });

      if (signupQuery) {
        this.$toast.open("Bienvenido");
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-content {
  padding: 5% 5% !important;
  max-width: 500px;
  margin: 0 auto;
}

h1 {
  margin-top: 30px;
}

h2 {
  margin-top: 30px;
}

.logo {
  width: 200px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

form {
  margin-top: 2rem;
}

input {
  margin-top: 1rem;
}

button {
  margin-top: 2rem;
}
</style>