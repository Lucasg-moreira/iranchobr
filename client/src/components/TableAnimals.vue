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
          <tr v-for="animal in dataAnimal.data">
            <td>{{ animal.id }}</td>
            <td>{{ animal.no_animal }}</td>
            <td>{{ animal.id_fazenda }}</td>
            <td>{{ animal.no_raca }}</td>
            <td>{{ animal.sexo }}</td>
            <td>{{ formatDate(animal.dt_nascimento) }}</td>
            <button @click="remove(animal.id)" class="btn btn-danger btn-sm">Remover</button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';
import { BACK_END_API } from '../../config/dev.env.js'
export default {
  name: 'TableAnimals',
  data() {
    return { dataAnimal: this.animais }
  },
  props: {
    animais: []
  },
  methods: {
    async remove(id) {
      await axios.delete(`${BACK_END_API}/animais/remove/${id}`);
      const paramsId = this.$route.params.user_id;
      const res = await axios.get(`${BACK_END_API}/animais/${paramsId}`);
      this.$data.dataAnimal = res;
    },
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format('DD/MM/YYYY');
    }
  }
}
</script>

<style>
.table {
  margin-top: 2em;
}
</style>
