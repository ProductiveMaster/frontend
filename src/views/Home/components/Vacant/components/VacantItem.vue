<template>
  <div class="card card-padding">
    <strong> {{ vacant.titleOffer }} </strong>
    <br />
    <br />
    <div>
      <div class="inline-block padding-1">
        <strong>Empresa</strong>
        <br />
        <span> {{ vacant.companyName }}</span>
      </div>
      <div class="inline-block padding-1">
        <strong>Salario</strong>
        <br />
        <span> ${{ vacant.salaryFrom }} - ${{ vacant.salaryTo }} USD</span>
      </div>
      <div class="inline-block padding-1">
        <strong>Categoría</strong>
        <br />
        <span> {{ vacant.category }} </span>
      </div>
      <div class="inline-block padding-1">
        <strong>Nivel</strong>
        <br />
        <span> {{ vacant.offerLevel }} </span>
      </div>
      <div class="inline-block padding-1">
        <strong>Modalidad</strong>
        <br />
        <span> {{ vacant.isRemote ? "Remoto" : "Presencial" }} </span>
      </div>
      <div class="inline-block padding-1">
        <strong>Skills</strong>
        <br />
        <span> {{ vacant.skills.join(",") }} </span>
      </div>
    </div>

    <ApplyVacant
      v-if="user.type == 'master'"
      :vacant="vacant"
      :viewVacant="true"
    />
  </div>
</template>

<script>
import ApplyVacant from "@/components/ApplyVacant";
import { mapState } from "vuex";
export default {
  props: ["vacant"],
  components: {
    ApplyVacant,
  },
  computed: {
    ...mapState(["user"]),
  },
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

@media (max-width: 900px) {
  table {
    display: block;
  }
}
</style>