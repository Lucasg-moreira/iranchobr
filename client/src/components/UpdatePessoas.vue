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
        <select id="sexo" v-model="sexo" class="form-control">
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </div>
      <div class="form-group check-container">
        <label for="ic">Ic ativo?</label>
        <input type="checkbox" id="ic" class="form-control check" v-model="ic_ativo">
      </div>
      <button class="btn btn-primary" @click="onSubmit()" type="button">Editar</button>
      <button class="btn btn-outline-secondary">
        <router-link to="/">Voltar</router-link>
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { BACK_END_API } from '../../config/dev.env.js'
export default {
  name: "UpdatePessoas",
  data() {
    return {
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
    const res = await axios.get(`${BACK_END_API}/pessoas/${id}`)
    const data = res.data

    this.no_pessoa = data.no_pessoa;
    this.no_email = data.no_email;
    this.endereco = data.endereco;
    this.sexo = data.sexo;
    this.ic_ativo = data.ic_ativo;
  },
  methods: {
    async onSubmit() {
      const { id } = this.$route.params;
      const res = await axios.post(`${BACK_END_API}/pessoas/${id}/update`, this.$data);
      if (res.status === 200) {
        this.$router.push("/")
      }
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
