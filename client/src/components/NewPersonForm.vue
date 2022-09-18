<template>
  <form>
    <div class="form-group">
      <label for="name">Nome</label>
      <input type="text" class="form-control" id="name" aria-describedby="emailHelp" v-model="nome">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" class="form-control" id="email" v-model="email">
    </div>
    <div class="form-group">
      <label for="address">Endereço</label>
      <input type="email" class="form-control" id="address" v-model="endereco">
    </div>
    <div class="form-group">
      <label for="sexo">Selecione o sexo</label>
      <select name="Sexo" id="sexo" v-model="sexo">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div class="form-group">
      <input type="checkbox" id="ic" v-model="ic">
      <label for="ic">Ic ativo?</label>
    </div>
    <button @click="criarPessoa">Enviar</button>
    <button>
      <router-link to="/">Voltar </router-link>
    </button>
  </form>
</template>

<script>
import AddAnimalsVue from './AddAnimals.vue';
import axios from 'axios';
export default {
  name: 'NewPersonForm',
  components: { AddAnimalsVue },
  data() {
    return {
      nome: null,
      email: null,
      sexo: null,
      endereco: null,
      ic: null
    }

  },
  methods: {
    async criarPessoa(e) {
      e.preventDefault()
      const data = {
        no_pessoa: this.nome,
        no_email: this.email,
        endereco: this.endereco,
        sexo: this.sexo,
        ic_ativo: this.ic ? true : false
      }
      await axios.post("http://localhost:3000/pessoas/add", data)
    }
  }
}
</script>

<style>
button a {
  text-decoration: none;
  color: black;
}
</style>
