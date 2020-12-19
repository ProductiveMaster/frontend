<template>
  <section class="tertiary--bg sidebar">
    <div class='sidebarOption'>
      <a href='#'>
        <p class="light--text">Perfil</p>
      </a>
    </div>
    <div class='sidebarOption'>
      <a href='#'>
        <p class="light--text">Usuarios</p>
      </a>
    </div>
    <div class='sidebarOption'>
      <a href='#'>
        <p class="light--text">Vacantes</p>
      </a>
    </div>
    <div class='sidebarOption'>
      <a href='#'>
        <p class="light--text">Aplicaciones</p>
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .sidebar{
    width: 250px;
    height: calc(100% - 100px);
    .sidebarOption{
      height: 80px;
      width: 80%;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #95ca3e;
      margin: auto;
      a{
        text-decoration: none;
        p{
          font-size: 1.2em;
        }
      }
    }
  }
</style>