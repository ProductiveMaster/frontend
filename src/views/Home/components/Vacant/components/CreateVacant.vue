<template>
  <div class="card card-padding">
    <section>
      <h1>Completa el formulario para crear una vacante</h1>
      <div class="form">
        <form @submit.prevent="createVacant">
          <div>
            <label>Ej. Nombre del puesto</label>
            <input
              required
              v-model="titleOffer"
              class="input"
              type="text"
              placeholder="Full Satck Developer"
            />
          </div>
          <p>
            <label>Compañía</label>
            <input
              required
              v-model="companyName"
              class="input"
              type="text"
              placeholder="Nombre de la empresa"
            />
          </p>
          <p class="full-width">
            <label>Descripcion de la compañia</label>
            <textarea
              required
              v-model="description"
              class="input"
              name=""
              cols="30"
              rows="7"
            ></textarea>
          </p>
          <p class="full-width">
            <label>Requisitos tecnicos</label>
            <textarea
              required
              v-model="offerRequirements"
              class="input"
              name=""
              cols="30"
              rows="7"
              placeholder="Ej. 1-2 años trabajando en..."
            ></textarea>
          </p>
          <p class="full-width">
            <label>Responsabilidades</label>
            <textarea
              required
              v-model="responsabilities"
              class="input"
              name=""
              cols="30"
              rows="7"
              placeholder="Ej. Crear y mantener..."
            ></textarea>
          </p>
          <p>
            <label>Rango salarial (USD)</label>
            <input
              required
              v-model="salary"
              class="input"
              type="text"
              placeholder="Ej. 1000 - 1500"
            />
          </p>
          <p>
            <label>Modalidad de trabajo</label>
            <select required v-model="isRemote" name="select" class="input">
              <option :value="true" selected>Remoto</option>
              <option :value="false">Presencial</option>
            </select>
          </p>
          <p>
            <label>País</label>
            <input
              required
              v-model="country"
              class="input"
              type="text"
              placeholder="Ej. México"
            />
          </p>
          <p>
            <label>Ciudad</label>
            <input
              required
              v-model="city"
              class="input"
              type="text"
              placeholder="Ej. CDMX"
            />
          </p>
          <p>
            <label>Categoria</label>
            <select required v-model="category" name="select" class="input">
              <option value="Frontend" selected>Frontend</option>
              <option value="Backend">Backend</option>
              <option value="DevOps">DevOps</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Data Science">Data Science</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </p>
          <p>
            <label>Nivel</label>
            <input
              required
              v-model="offerLevel"
              class="input"
              type="number"
              placeholder="Del 1 al 10"
            />
          </p>
          <p>
            <label>Fecha de vencimiento</label>
            <input
              required
              v-model="dueDate"
              class="input"
              type="date"
              placeholder="Ej. 2020/12/20"
            />
          </p>
          <p>
            <label>Habilidades</label>

            <input
              v-model="skills"
              required
              class="input"
              placeholder=" (separadas por comas)"
              type="text"
            />
          </p>
          <p class="full-width">
            <button type="submit" class="button">Crear Vacante</button>
          </p>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import api from "@/services/api";

export default {
  data() {
    return {
      titleOffer: "",
      companyName: "",
      description: "",
      offerRequirements: "",
      responsabilities: "",
      salary: "",
      isRemote: true,
      country: "",
      city: "",
      category: "",
      offerLevel: "",
      dueDate: "",
      skills: "",
    };
  },
  methods: {
    async createVacant() {
      const vacantQuery = await api.post("jobOffers", {
        titleOffer: this.titleOffer,
        companyName: this.companyName,
        description: this.description,
        offerRequirements: this.offerRequirements,
        responsabilities: this.responsabilities,
        salaryFrom: this.salary.split("-")[0],
        salaryTo: this.salary.split("-")[1],
        isRemote: this.isRemoteue,
        country: this.country,
        city: this.city,
        category: this.category,
        offerLevel: this.offerLevel,
        dueDate: this.dueDate,
        skills: this.skills.split(","),
      });

      if (vacantQuery.data.error) {
        this.$toast.open({
          message: vacantQuery.data.message,
          type: "error",
        });
      } else {
        this.$toast.open({
          message: "Vacante Añadida Correctamente",
          type: "success",
        });
        this.$emit("getVacants");
        this.$emit("close");
      }
    },
  },
};
</script>

<style lang="scss">
.card-padding {
  padding: 5%;
}

.form {
  width: 100%;

  form {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
    place-content: center;
    & label {
      display: block;
    }
  }
  .full-width {
    grid-column: 1 / 3;
    & textarea {
      width: 90%;
    }
  }
  input,
  textarea {
    padding: 1em;
  }
  button {
    width: 100%;
  }

  @media (max-width: 900px) {
    form {
      display: block;
    }
  }
}
</style>