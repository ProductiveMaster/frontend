<template>
  <div class="VacantePage">
    <h1>Mid-Level Full Stack Developer</h1>
    <div class="section metadata">
      <span>Mono</span>
      <a href="https://www.monoban.co/">https://www.monoban.co/</a>
    </div>
    <div class="section description">
      <h2>Descripcion de la empresa</h2>
      <p>
        Mono es una startup colombiana. Estamos creando una banca digital para
        empresas en Colombia, somos un equipo con gran experiencia en fintech.
        Esta es una de nuestras primeras contrataciones. Serás la segunda
        persona que entra al equipo y trabajarás codo a codo con experimentados
        fundadores (ex-YC Founder, ex-Nubank). Construiremos juntos el futuro de
        la banca para PYMEs de Latinoamérica.
      </p>
    </div>
    <div class="section requeriments">
      <h2>Requisitos Tecnicos</h2>
      <p>
        1-2 años trabajando en ambientes de desarrollo. Vamos a usar Elixir +
        Phoenix LiveView. No es requisito saber de ninguno. El hambre/velocidad
        de aprender es mucho más valorada.
      </p>
    </div>
    <div class="section responsabilities">
      <h2>Responsabilidades</h2>
      <p>
        Junto con el equipo de fundadores, desarrollar el back del producto de
        banking. Trabajará directamente con el CTO y CPO.
      </p>
    </div>
    <div class="section salary">
      <h2>Rango Salarial</h2>
      <p>USD $1.500 - $2.500</p>
    </div>
    <div class="section category">
      <h2>Categoría</h2>
      <p>Remoto</p>
    </div>
    <button class="button">Aplicar</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.VacantePage {
  h1,
  h2 {
    color: #95ca3e;
    margin-bottom: 5px;
  }
  .button {
    background: #f97308;
  }
}
.metadata {
  width: 400px;
  display: flex;
  justify-content: space-between;
  a {
    color: #f97308;
    text-decoration: underline;
  }
}
.section {
  margin: 1em 0;
  p,
  span {
    font-size: 1.2em;
    text-align: justify;
  }
}
</style>