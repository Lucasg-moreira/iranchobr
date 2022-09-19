<template>
  <div>
    <form>
      <h4>Editar</h4>
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" v-model="no_pessoa">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" v-model="no_email">
      </div>
      <div class="form-group">
        <label for="address">Endereço</label>
        <input type="text" class="form-control" id="address" v-model="endereco">
      </div>
      <div class="form-group">
        <label for="sexo">Selecione o sexo</label>
        <select name="Sexo" id="sexo" v-model="sexo" class="form-control">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div class="form-group check-container">
        <label for="ic">Ic ativo?</label>
        <input type="checkbox" id="ic" class="form-control check" v-model="ic_ativo">
      </div>
      <button class="btn btn-primary"  @click="onSubmit()">Editar</button>
      <button class="btn btn-outline-secondary">
        <router-link to="/">Voltar</router-link>
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
let back_end_api = "http://localhost:3000"

export default {
  name: "UpdatePessoas",
  data() {
    return {
      id: null,
      no_pessoa: null,
      no_email: null,
      endereco: null,
      sexo: null,
      ic_ativo: null
    }
  },
  props: {
    data: Array
  },
  async created() {
    const id = this.$route.params.id;
    const res = await axios.get(`${back_end_api}/pessoas/${id}`)
    const data = res.data

    this.no_pessoa = data.no_pessoa;
    this.no_email = data.no_email;
    this.endereco = data.endereco;
    this.sexo = data.sexo;
    this.ic_ativo = data.ic_ativo;
    this.id = id;
  },
  methods: {
    async onSubmit() {
      await axios.post(`${back_end_api}/pessoas/update`, this.$data);
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .check {
  max-width: 30px;
  padding: 0;
  margin: 0;
  margin-left: 1em;
}
.check-container {
  display: flex;
  align-items: flex-end;
}
</style>
