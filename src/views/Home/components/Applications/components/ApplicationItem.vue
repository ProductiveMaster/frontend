<template>
  <div class="card application padding-2">
    <div class="inline-block padding-1">
      <strong>
        {{ application.jobId.titleOffer }}
      </strong>
      <br />
      <span>Empresa: {{ application.jobId.companyName }}</span>
      <br />
      <span>Categoría: {{ application.jobId.category }}</span>
    </div>
    <div class="inline-block padding-1">
      <strong>
        {{ application.studentId.name }} {{ application.studentId.lastname }}
      </strong>
      <br />
      <span>{{ application.studentId.email }}</span>
      <br />
      <span>{{ application.studentId.skills.join(",") }}</span>
    </div>
    <br />
    <div class="right-text">
      <router-link
        :to="'/home/vacante/' + application.jobId._id"
        class="padding-1"
      >
        <button class="button clear">Ver Vacante</button>
      </router-link>
      <span class="padding-1">
        <button class="button">Actualizar</button>
      </span>
    </div>
    <!-- <pre>
      {{ application }}
    </pre> -->
  </div>
</template>

<script>
export default {
  props: {
    application: Object,
  },
};
</script>

<style>
.application {
  margin-top: 10px !important;
}
</style>