<template>
  <article class="card VacantItem tertiary--bg">
    <strong class="job">Frontend Developer</strong>
    <div class="items">
      <span class="time"
        >Empresa: <br />
        Globant</span
      >
      <span class="company"
        >Salario: <br />
        1500 - 2000</span
      >
      <span class="modality"
        >Modalidad: <br />
        Remoto</span
      >

      <span class="modality"
        >Ubicación: <br />
        Colombia - Bogotá</span
      >

      <span class="modality"
        >Categoría: <br />
        Frontend</span
      >
    </div>
    <div class="buttons">
      <button class="button clear">Practicar</button>
      <button class="button">Aplicar</button>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
.VacantItem {
  border-radius: 5px;
  padding: 1.2em;
}
.items {
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  & span {
    font-size: 1.2rem;
    padding: 10px;
  }
}

.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  & .button {
    margin: 0 10px;
  }
}
</style>