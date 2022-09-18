<template>
  <div>
    <button @click="addPeoples()">
        <router-link to="/pessoas">Add</router-link>
      </button>
    <div v-if="data.length > 0">
      <h1>Tabela</h1>
      <router-view />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Endereço</th>
            <th scope="col">sexo</th>
            <th scope="col">ic</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pessoa in data">
            <td>{{ pessoa.id }}</td>
            <td>{{ pessoa.no_pessoa }}</td>
            <td>{{ pessoa.no_email }}</td>
            <td>{{ pessoa.endereco }}</td>
            <td>{{ pessoa.sexo }}</td>
            <td>{{ pessoa.ic_ativo }}</td>
            <div>
              <button>Details</button>
              <button>Edit</button>
              <button @click="remove(pessoa.id)">Remove</button>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h1>Não tem nenhum item na tabela! Tente adicionar um!</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
let back_end_api = "http://localhost:3000"

export default {
  data() {
    return {
      data: [],
      id: null
    }
  },
  created() {
    this.getPessoas();
  },
  methods: {
    async remove(id) {
     await axios.delete(`${back_end_api}/pessoas/${id}/remove`)
      this.getPessoas();
    },
    async getPessoas() {
      await axios.get(`${back_end_api}/pessoas`)
        .then(response => {
          const data = response.data;
          this.data = data;
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
}
</script>
<style>
table,
td {
  padding: 1em;
}
</style>
