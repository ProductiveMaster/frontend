<template>
  <table class="table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>email</th>
        <th>Genero</th>
        <th>Edad</th>
        <th>Tipo de Cuenta</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in usersList" :key="user._id">
        <td>{{ user.name }}</td>
        <td>Apellido</td>
        <td>email</td>
        <td>Genero</td>
        <td>Edad</td>
        <td>Tipo de Cuenta</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["usersList"]),
  },
  methods: {
    ...mapActions(["getUsers"]),
  },
  mounted() {
    // this.getUsers();
  },
};
</script>

<style>
</style>