<template>
  <article class="VacantItem secondary--bg">
      <div class="items">
        <p class="job">Frontend Developer</p>
        <p class="time">Full Time</p>
        <p class="company">Globant</p>
        <p class="modality">Remoto</p>
        <p class="country">Colombia</p>
      </div>
      <div class="buttons">
        <button>Practicar</button>
        <button>Aplicar</button>
      </div>
    </article>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .VacantItem {
    background: gold;
    width: 500px;
    border-radius: 5px;
    padding: 1.2em;
  }
  .items {
    display: flex;
    justify-content: space-around;
    & p{
      font-size: 1.2em;
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    & .button {
      margin: 0 10px;
    }
  }
</style>