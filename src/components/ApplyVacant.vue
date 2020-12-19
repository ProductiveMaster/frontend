<template>
  <div class="buttons">
    <router-link v-if="viewVacant" :to="'/home/vacante/' + vacant._id">
      <button class="button clear margin-apply-button">
        Ver Vacante Completa
      </button>
    </router-link>

    <button
      @click="applyMethod('training')"
      class="button clear margin-apply-button"
    >
      Practicar
    </button>
    <button @click="applyMethod('apply')" class="button margin-apply-button">
      Aplicar
    </button>

    <br />
    <br />
    <p v-if="aplied.length || trained.length">
      Solicitaste:
      <br />
      {{ aplied.length }} Aplicación <br />
      {{ trained.length }} Entrenamiento
    </p>
  </div>
</template>

<script>
import api from "@/services/api";
import { mapActions, mapState } from "vuex";
export default {
  props: {
    viewVacant: Boolean,
    vacant: Object,
  },
  computed: {
    ...mapState(["user", "apply"]),

    aplied() {
      return this.apply.filter((vacantAplied) => {
        return (
          vacantAplied.jobId._id == this.vacant._id &&
          vacantAplied.studentId._id == this.user._id &&
          vacantAplied.type == "apply"
        );
      });
    },
    trained() {
      return this.apply.filter((vacantAplied) => {
        return (
          vacantAplied.jobId._id == this.vacant._id &&
          vacantAplied.studentId._id == this.user._id &&
          vacantAplied.type == "training"
        );
      });
    },
  },
  methods: {
    ...mapActions(["getApply"]),
    async applyMethod(type) {
      const applyQuery = await api.post("jobApplications", {
        studentId: this.user._id,
        jobId: this.vacant._id,
        applicationDate: Date.now(),
        type,
      });

      if (applyQuery.data.error) {
        this.$toast.open({
          message: applyQuery.data.message,
          type: "error",
        });
      } else {
        this.$toast.open({
          message: "Se ha enviado tu solicitud serás contactado pronto.",
          type: "success",
        });

        this.getApply();
      }
    },
  },
};
</script>

<style>
.margin-apply-button {
  margin-top: 10px !important;
}
</style>