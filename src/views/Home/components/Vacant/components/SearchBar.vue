<template>
  <section class="SearchBar">
    <input
      type="search"
      name=""
      id=""
      placeholder="Escribe el empleo que estas buscando"
      class="card"
    />
    <button class="button">Buscar</button>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.SearchBar {
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  input {
    border-radius: 5px 0px 0px 5px;
    width: 100%;
    border: 0.1px solid #95ca3e;
    &::placeholder {
      color: #fff;
    }
  }
  button {
    border-radius: 0px 5px 5px 0px;
    margin-top: initial;
  }
}
</style>