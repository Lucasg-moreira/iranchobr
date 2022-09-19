<template>
  <div>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome do animal</th>
            <th scope="col">Id Fazenda</th>
            <th scope="col">Raça</th>
            <th scope="col">Sexo</th>
            <th scope="col">Data de nascimento</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="animal in animais.data">
            <td>{{ animal.id }}</td>
            <td>{{ animal.no_animal }}</td>
            <td>{{ animal.id_fazenda }}</td>
            <td>{{ animal.no_raca }}</td>
            <td>{{ animal.sexo }}</td>
            <td>{{ animal.dt_nascimento }}</td>
            <button @click="remove(animal.id)" class="btn btn-danger btn-sm">Remover</button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
let back_end_api = "http://localhost:3000"
export default {
  name: 'TableAnimals',
  props: {
    animais: []
  },
  methods: {
    async remove(id) {
      await axios.delete(`${back_end_api}/animais/remove/${id}`);
      this.$router.go()
    },
  },

}
</script>

<style>
.table {
  margin-top: 2em;
}
</style>
