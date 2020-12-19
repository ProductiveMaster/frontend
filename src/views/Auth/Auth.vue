<template>
  <div class="secondary--bg page">
    <div class="container-ui">
      <div class="card text-center login-content">
        <img class="logo" :src="require('@/assets/logo.png')" />
        <h1>{{ issignin ? "Iniciar Sesión" : "Regístrate" }}</h1>

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
        <form v-else>
          <input
            required
            class="input"
            type="text"
            placeholder="Nombre Completo"
          />
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
          <input
            required
            class="input"
            placeholder="Confirmar Contraseña"
            type="password"
          />
          <br />
          <br />
          <button class="button">Regístrate</button>
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
export default {
  data() {
    return {};
  },
  computed: {
    issignin() {
      return this.$route.name == "signin";
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