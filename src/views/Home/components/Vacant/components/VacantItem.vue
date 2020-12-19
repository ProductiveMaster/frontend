<template>
  <div class="card card-padding">
    <strong> {{ vacant.titleOffer }} </strong>
    <table class="VacantItem">
      <thead class="items">
        <tr>
          <th>Empresa</th>
          <th>Salario</th>
          <th>Categoría</th>
          <th>Nivel</th>
          <th>Modalidad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {{ vacant.companyName }}
          </td>
          <td>{{ vacant.salaryFrom }} - {{ vacant.salaryTo }}</td>
          <td>{{ vacant.category }}</td>
          <td>{{ vacant.offerLevel }}</td>
          <td>
            {{ vacant.isRemote ? "Remoto" : "Presencial" }}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="buttons">
      <router-link :to="'/home/vacante/' + vacant._id">
        <button class="button clear">Ver Vacante Completa</button>
      </router-link>

      <button class="button clear">Practicar</button>

      <button class="button">Aplicar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["vacant"],
};
</script>

<style lang="scss">
.card-padding {
  padding: 2rem;
  margin-top: 10px;
}

.VacantItem {
  width: 100%;
  padding: 1.2em;
}
.items {
  justify-content: space-around;
  margin-bottom: 1em;
  span {
    font-size: 1.2em;
  }
  th {
    text-align: left;
  }
  td {
    padding: 10px;
    font-size: 1.2em;
  }
}

.buttons {
  margin-top: 0rem;
  text-align: right;
  .button {
    margin: 0 10px;
  }
}
</style>