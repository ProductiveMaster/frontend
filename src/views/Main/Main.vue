<template>
  <section class="secondary--bg main">
    <article class="left light--text">
      <h1>Productive Master</h1>
      <h3 class="primary--text">¿Perdido entre las vacantes?</h3>
      <p>
        Aquí puedes encontrar la vacante <br />
        que tanto estabas buscando
      </p>
      <router-link to="/registro">
        <button class="button light-shadow">Buscar Vacantes</button>
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
  align-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
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
}
</style>