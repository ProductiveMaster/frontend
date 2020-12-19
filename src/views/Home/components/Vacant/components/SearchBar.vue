<template>
  <section class="SearchBar">
    <input type="search" name="" id="" placeholder="Escribe el empleo que estas buscando" class="card">
    <button class="button">Buscar</button>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .SearchBar{
    display: flex;
    margin-bottom: 10px;
    input {
      width: 80%;
      border-radius: 5px 0px 0px 5px;
      border: .1px solid #95ca3e;
      &::placeholder{
        color: #fff;
      }
    }
    button {
      border-radius: 0px 5px 5px 0px;
      margin-top: initial;
    }
  }
</style>