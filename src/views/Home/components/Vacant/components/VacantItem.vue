<template>
  <div>
  <table class="VacantItem tertiary--bg">
      <tbody class="items">
          <td>Frontend Developer</td>
          <td>Full Time</td>
          <td>Globant</td>
          <td>Remoto</td>
          <td>Colombia</td>
        <!-- <span class="job">Frontend Developer</span>
        <span class="time">Full Time</span>
        <span class="company">Globant</span>
        <span class="modality">Remoto</span>
        <span class="country">Colombia</span> -->
      </tbody>
      <div class="buttons">
        <button class="button">Practicar</button>
        <button class="button">Aplicar</button>
      </div>
    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .VacantItem {
    width: 100%;
    border-radius: 5px;
    padding: 1.2em;
  }
  .items {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1em;
    & span{
      font-size: 1.2em;
    }
    & td {
      padding: 10px;
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