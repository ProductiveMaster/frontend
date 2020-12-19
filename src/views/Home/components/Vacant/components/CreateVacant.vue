<template>
  <section>
      <h1>Completa el formulario para crear una vacante</h1>
      <div class="form">
        <form action="">
          <p>
            <label for="">Nombre del puesto</label>
            <input type="text" placeholder="Full Satck Developer" />
          </p>
          <p>
            <label for="">Compañia</label>
            <input type="text" placeholder="Globant" />
          </p>
          <p class="full-width">
            <label for="">Descripcion de la compañia</label>
            <textarea
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
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Crear y mantener..."
            ></textarea>
          </p>
          <p>
            <label for="">Rango salarial</label>
            <input type="number" placeholder="1000 - 1500 USD" />
          </p>
          <p>
            <label for="">Modalidad de trabajo</label>
            <input type="text" placeholder="Remoto" />
          </p>
          <p>
            <label for="">Pais</label>
            <input type="text" placeholder="México" />
          </p>
          <p>
            <label for="">Ciudad</label>
            <input type="text" placeholder="CDMX" />
          </p>
          <p>
            <label for="">Categoria</label>
            <input type="text" placeholder="Full Stack" />
          </p>
          <p>
            <label for="">Nivel</label>
            <input type="text" placeholder="5" />
          </p>
          <p>
            <label for="">Fecha de vencimiento</label>
            <input type="date" placeholder="2020/12/20" />
          </p>
          <p class="full-width">
            <button>Send</button>
          </p>
        </form>
      </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .form {
    width: 100%;
  }
  form {
    display: grid;
    grid-template-columns: 400px 400px;
    grid-gap: 10px;
    place-content: center;
    & label{
      display: block;
    }
    & p input {
      width: 80%;
      margin: 0;
    }
  }
  .full-width {
    grid-column: 1 / 3;
    & textarea {
      width: 90%;
    }
  }
  button,
  input,
  textarea {
    padding: 1em;
  }

  button {
    background: lightgrey;
    width: 100%;
    border: 0;
  }
  button:hover,
  button:focus {
    background: gold;
    outline: 0;
  }

  @media (max-width: 900px) {
    form {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>