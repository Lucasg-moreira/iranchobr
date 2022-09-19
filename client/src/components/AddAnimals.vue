<template>
  <div>
    <div class="row">
      <div class="col-md-4">
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
            <input type="date" v-model="dt_nascimento" class="form-control">
          </div>
          <div class="form-group">
            <label for="vr">Vr peso</label>
            <input type="number" id="vr" v-model="vr_peso" class="form-control">
          </div>
          <div class="form-group">
            <label for="sexo">Sexo</label>
            <select name="sexo" id="sexo" v-model="sexo" class="form-control">
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <button type="submit" @click="addAnimal()" class="btn btn-primary">Adcionar</button>
          <button class="btn btn-secondary">
            <router-link to="/">Voltar</router-link>
          </button>
        </form>
      </div>
    <div class="col-md-8">
      <TableAnimals :animais="animais" />
    </div>
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
      await axios.post(`${back_end_api}/animais/add/${id}`, this.$data);
      this.clearFields();
    },
    clearFields() {
      this.$data.animais = null;
      this.$data.dt_nascimento = null;
      this.$data.id_fazenda = null;
      this.$data.no_animal = null;
      this.$data.no_raca = null;
      this.$data.sexo = null;
      this.$data.vr_peso = null;
    }
  }
}
</script>

