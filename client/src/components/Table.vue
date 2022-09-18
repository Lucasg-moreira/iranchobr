<template>
  <div>
    <button>New</button>
    <h1>Tabela</h1>
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
        <tr v-for="pessoas in data">
          <td>{{ pessoas.id }}</td>
          <td>{{ pessoas.no_pessoa }}</td>
          <td>{{ pessoas.no_email }}</td>
          <td>{{ pessoas.endereco }}</td>
          <td>{{ pessoas.sexo }}</td>
          <td>{{ pessoas.ic_ativo }}</td>
          <div>
            <button>Details</button>
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      data: []
    }
  },
  async created() {
    await axios.get('http://localhost:3000/pessoas')
      .then(response => {
        const data = response.data;
        this.data = data;
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>


<style>
table,
td {
  padding: 1em;
}
</style>
