<template>
  <div class="card padding-2">
    <h1>Actualizar Aplicación</h1>
    <h2>{{ application.type == "apply" ? "Aplicación" : "Simulacro" }}</h2>

    <form @submit.prevent="updateApplication" v-if="user.type == 'admin'">
      <textarea
        v-model="tpCoachComments"
        type="text"
        class="input"
        placeholder="Comentarios"
      ></textarea>

      <input
        v-model="qualification"
        type="number"
        class="input"
        placeholder="Calificación"
      />
      <input
        v-model="salary"
        type="number"
        class="input"
        placeholder="Salario"
      />
      <button type="submit" class="button">Actualizar</button>
    </form>
    <form @submit.prevent="updateApplication" v-else-if="user.type == 'master'">
      <textarea
        v-model="studentComments"
        type="text"
        class="input"
        placeholder="Comentarios"
      ></textarea>
      <button type="submit" class="button">Actualizar</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import api from "@/services/api";
export default {
  props: {
    application: Object,
  },
  data() {
    return {
      tpCoachComments: "",
      studentComments: "",
      qualification: "",
      salary: "",
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async updateApplication() {
      const updateQuery = await api.put(
        "jobApplications/" + this.application._id,
        {
          ...this.application,
          tpCoachComments: this.tpCoachComments,
          studentComments: this.studentComments,
          qualification: this.qualification,
          salary: this.salary,
        }
      );

      if (updateQuery.data.error) {
        this.$toast.open({
          message: updateQuery.data.message,
          type: "error",
        });
      } else {
        this.$toast.open({
          message: "Actualización correctamente enviada",
          type: "success",
        });
      }

      console.log(updateQuery);
    },
  },
  mounted() {
    this.studentComments = this.application.studentComments;
    this.tpCoachComments = this.application.tpCoachComments;
    this.salary = this.application.salary;
    this.qualification = this.application.qualification;
  },
};
</script>

<style>
</style>