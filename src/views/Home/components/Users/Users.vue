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
        <td>{{ user.lastname }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.birthDate }}</td>
        <td>
          <select
            v-model="user.type"
            @change="updateUserMethod(user)"
            class="input"
          >
            <option value="master">Master</option>
            <option value="tpcoach">TP Coach</option>
            <option value="admin">Administrador</option>
          </select>
        </td>
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
    ...mapActions(["getUsers", "updateUser"]),

    updateUserMethod(user) {
      this.updateUser(user);
    },
    async getUsersMethod() {
      const userQuery = await this.getUsers();
    },
  },
  async mounted() {
    await this.getUsersMethod();
  },
};
</script>

<style>
select {
  color: white;
}
</style>