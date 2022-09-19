<template>
  <div>
    <form>
      <div class="form-group">
        <label for="name">ID fazenda</label>
        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" v-model="id_fazenda">
      </div>
      <div class="form-group">
        <label for="email">Animal</label>
        <input type="text" class="form-control" id="email" v-model="no_animal">
      </div>
      <div class="form-group">
        <label for="address">Raça</label>
        <input type="text" class="form-control" id="address" v-model="no_raca">
      </div>
      <div class="form-group">
        <label for="dt_ nascimento">Data de nascimento</label>
        <input type="date" v-model="dt_nascimento">
      </div>
      <div class="form-group">
        <label for="vr">Vr peso</label>
        <input type="number" id="vr" v-model="vr_peso">
      </div>
      <div class="form-group">
        <label for="sexo">Sexo</label>
        <select name="sexo" id="sexo" v-model="sexo">
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </div>
      <button type="submit" @click="addAnimal()">Enviar</button>
      <button>
        <router-link to="/">Voltar</router-link>
      </button>
    </form>
    <div>
      <TableAnimals :animais="animais"/>
    </div>

  </div>
</template>


<script>
import axios from 'axios';
import TableAnimals from './TableAnimals.vue'
let back_end_api = "http://localhost:3000"

export default {
  name: 'AddAnimals',
  data() {
    return {
      id_fazenda: null,
      no_animal: null,
      no_raca: null,
      sexo: null,
      dt_nascimento: null,
      vr_peso: null,
      animais: []
    }
  },
  components: {
    TableAnimals
  },
  async created() {
    let id = this.$route.params.user_id;
    const res = await axios.get(`${back_end_api}/animais/${id}`)
    this.animais = res;
  },
  methods: {
    async addAnimal() {
      let id = this.$route.params.user_id;
      await axios.post(`${back_end_api}/animais/add/${id}`, this.$data)
    }
  }
}
</script>

<style>
form {
  margin-top: 2em;
}
</style>
