<template>
  <section class="secondary--bg header">
    <div class="logo">
      <img src="../assets/logotipo.png" alt="Logotipo">
    </div>
    <!--Boton para coach-->
    <div class="userName">
      <a href="#" class="light--text">Salir</a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .header{
    background: #1c2d56;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    padding: 1em;
    box-shadow: 0px 0px 10px 1px #000;
    .logo{
      img{
        border-style: none;
        max-height: 80px;
      }
    }
    .userName {
      a {
        text-decoration: none;
        font-size: 1.5em;
      }
    }
  }
</style>