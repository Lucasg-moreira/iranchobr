<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <form>
          <h4>Adicionar Pessoa</h4>
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
            <input type="text" class="form-control" id="address" v-model="endereco">
          </div>
          <div class="form-group">
            <label for="sexo">Selecione o sexo</label>
            <select name="sexo" id="sexo" v-model="sexo" class="form-control">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="form-group check-container">
            <label for="ic">Ic ativo?</label>
            <input type="checkbox" id="ic" v-model="ic" class="form-control check">
          </div>
          <button @click="criarPessoa" class="btn btn-primary">Enviar</button>
          <button class="btn btn-outline-secondary">
            <router-link to="/">Voltar </router-link>
          </button>
        </form>
      </div>
    </div>

  </div>
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
      this.$router.push("/");
    }
  }
}
</script>

<style>
button a {
  text-decoration: none;
  color: black;
}
form {
  width: 300px;
  margin: auto;
}
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
