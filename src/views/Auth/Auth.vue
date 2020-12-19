<template>
  <div class="secondary--bg page">
    <div class="container-ui">
      <div class="card text-center login-content">
        <img class="logo" :src="require('@/assets/logo.png')" />
        <h1>{{ issignin ? "Iniciar Sesión" : "Regístrate" }}</h1>
        <p>Para acceder a la plataforma</p>

        <form @submit.prevent="signinMethod" v-if="issignin">
          <input
            v-model="email"
            required
            class="input"
            type="email"
            placeholder="Correo Electrónico"
          />
          <input
            v-model="password"
            required
            class="input"
            placeholder="Contraseña"
            type="password"
          />
          <br />
          <br />
          <button type="submit" class="button">Iniciar Sesión</button>
          <br />
          <router-link to="/registro">
            <button class="button clear">Regístrate</button>
          </router-link>
        </form>
        <form @submit.prevent="signupMethod" v-else>
          <input
            v-model="name"
            required
            class="input"
            type="text"
            placeholder="Nombre"
          />

          <input
            v-model="lastname"
            required
            class="input"
            type="text"
            placeholder="Apellido"
          />
          <input
            v-model="email"
            required
            class="input"
            type="email"
            placeholder="Correo Electrónico"
          />

          <select v-model="gender" required class="input" placeholder="Genero">
            <option value="Indefinido">Seleccionar</option>
            <option value="Mujer">Mujer</option>
            <option value="Hombre">Hombre</option>
            <option value="Otro">Otro</option>
          </select>

          <input
            v-model="birthDate"
            required
            class="input"
            placeholder="Fecha de Nacimiento"
            type="date"
          />

          <input
            v-model="password"
            required
            class="input"
            placeholder="Contraseña"
            type="password"
          />
          <input
            v-model="passwordConfirm"
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
      <br />
      <br />
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
      gender: "Indefinido",
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
    ...mapActions(["signup", "signin"]),
    async signupMethod() {
      if (this.password != this.passwordConfirm) {
        return this.$toast.open({
          message: "Ambas Contraseñas deben coincidir",
          type: "error",
        });
      }

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

      if (signupQuery.success) {
        this.$toast.open({
          message: signupQuery.message,
          type: "success",
        });

        this.$router.push("/iniciar-sesion");
      } else {
        this.$toast.open({
          message: signupQuery.message,
          type: "error",
        });
      }
    },
    async signinMethod() {
      const signinQuery = await this.signin({
        email: this.email,
        password: this.password,
      });

      if (signinQuery.success) {
        this.$toast.open({
          message: signinQuery.message,
          type: "success",
        });

        this.$router.push("/home/vacantes");
        location.reload();
      } else {
        this.$toast.open({
          message: signinQuery.message,
          type: "error",
        });
      }
      // this.$toast.open("Bienvenido");
      // this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
.login-content {
  padding: 2% 5% !important;
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