<template>
  <section class="secondary--bg main">
    <article class="left light--text">
      <img class="logo" src="@/assets/logo.png" alt="Imagen" />

      <h3 class="primary--text">¿Perdido entre las vacantes?</h3>
      <p>
        Aquí puedes encontrar la vacante <br />
        que tanto estabas buscando
      </p>
      <router-link to="/registro">
        <button class="button light-shadow">Buscar Vacantes</button>
      </router-link>
      <router-link to="/iniciar-sesion">
        <button class="button clear">Iniciar Sesión</button>
      </router-link>
    </article>
    <article class="right">
      <img src="../../assets/home.svg" alt="Imagen" />
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main {
  height: 100vh;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  margin: auto;
  gap: 10px;
}
.left {
  padding: 0 2em;
  margin: auto;
  h1 {
    font-size: 5em;
  }
  h3 {
    font-size: 2.5em;
  }
  p {
    font-size: 2em;
    font-weight: initial;
  }
  button {
    margin: 1em 1em 1em 0em;
  }
}
.right {
  width: 100%;
  padding: 0 2em;
  img {
    width: 100%;
  }
}
@media (max-width: 1140px) {
  .main .left h1 {
    font-size: 4em;
  }
}
@media (max-width: 768px) {
  .main .left h1 {
    font-size: 3em;
  }
  .left h3 {
    font-size: 2em;
  }
  .left p {
    font-size: 1.5em;
  }
}

.logo {
  width: 400px;
}
</style>