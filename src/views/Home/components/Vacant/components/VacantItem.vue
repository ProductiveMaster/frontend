<template>
  <article class="card VacantItem tertiary--bg">
    <strong class="job">Frontend Developer</strong>
    <div class="items">
      <div class="time">
        Empresa: <br />
        Globant
      </div>
      <div class="company">
        Salario: <br />
        1500 - 2000
      </div>
      <div class="modality">
        Modalidad: <br />
        Remoto
      </div>

      <div class="modality">
        Ubicación: <br />
        Colombia - Bogotá
      </div>

      <div class="modality">
        Categoría: <br />
        Frontend
      </div>
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
  margin-top: 2rem;
  justify-content: space-between;

  & div {
    font-size: 1.2rem;
    padding: 10px;
    display: inline-block;
  }
}

.buttons {
  margin-top: 2rem;
  justify-content: flex-end;
  & .button {
    margin: 0 10px;
  }
}
</style>