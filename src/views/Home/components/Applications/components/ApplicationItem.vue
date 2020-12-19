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
        <button @click="editModal = true" class="button">Actualizar</button>
      </span>
    </div>

    <Modal v-if="editModal" @close="editModal = false">
      <ApplicationEdit />
    </Modal>
    <!-- <pre>
      {{ application }}
    </pre> -->
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import ApplicationEdit from "./ApplicationEdit";
export default {
  props: {
    application: Object,
  },
  components: {
    Modal,
    ApplicationEdit,
  },
  data() {
    return {
      editModal: false,
    };
  },
};
</script>

<style>
.application {
  margin-top: 10px !important;
}
</style>