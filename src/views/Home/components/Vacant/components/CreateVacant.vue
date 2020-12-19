<template>
  <div class="card card-padding">
    <section>
      <h1>Completa el formulario para crear una vacante</h1>
      <div class="form">
        <form action="">
          <div>
            <label for="">Nombre del puesto</label>
            <input
              class="input"
              type="text"
              placeholder="Full Satck Developer"
            />
          </div>
          <p>
            <label for="">Compañia</label>
            <input class="input" type="text" placeholder="Globant" />
          </p>
          <p class="full-width">
            <label for="">Descripcion de la compañia</label>
            <textarea
              class="input"
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Globant es una compañia..."
            ></textarea>
          </p>
          <p class="full-width">
            <label for="">Requisitos tecnicos</label>
            <textarea
              class="input"
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="1-2 años trabajando en..."
            ></textarea>
          </p>
          <p class="full-width">
            <label for="">Responsabilidades</label>
            <textarea
              class="input"
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Crear y mantener..."
            ></textarea>
          </p>
          <p>
            <label for="">Rango salarial</label>
            <input class="input" type="number" placeholder="1000 - 1500 USD" />
          </p>
          <p>
            <label for="">Modalidad de trabajo</label>
            <select name="select" class="input">
              <option value="Remoto" selected>Remoto</option>
              <option value="Presencial">Presensial</option>
              <option value="Mixto">Mixto</option>
            </select>
          </p>
          <p>
            <label for="">País</label>
            <input class="input" type="text" placeholder="México" />
          </p>
          <p>
            <label for="">Ciudad</label>
            <input class="input" type="text" placeholder="CDMX" />
          </p>
          <p>
            <label for="">Categoria</label>
            <select name="select" class="input">
              <option value="Frontend" selected>Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Full Stack">Full Stack</option>
              <option value="DevOps">DevOps</option>
              <option value="Data Science">Data Science</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </p>
          <p>
            <label for="">Nivel</label>
            <input class="input" type="text" placeholder="5" />
          </p>
          <p>
            <label for="">Fecha de vencimiento</label>
            <input class="input" type="date" placeholder="2020/12/20" />
          </p>
          <p class="full-width">
            <button class="button">Send</button>
          </p>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
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