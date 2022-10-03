<template>
  <div>
    <div class="row ">
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
          <button type="submit" @click="addAnimal()" class="btn btn-primary">Adicionar</button>
          <button class="btn btn-secondary">
            <router-link to="/">Voltar</router-link>
          </button>
        </form>
      </div>
      <div class="col-md" v-if="animais.data.length > 0">
        <TableAnimals :animais="animais" />
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import TableAnimals from './TableAnimals.vue'
import { BACK_END_API } from '../../config/dev.env.js';

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
    const { user_id } = this.$route.params;
    try {
      const res = await axios.get(`${BACK_END_API}/animais/${user_id}`)
      this.animais = res;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async addAnimal() {
      const { user_id } = this.$route.params;
      try {
        const res = await axios.post(`${BACK_END_API}/animais/add/${user_id}`, this.$data);
        this.animais = res.data;
        this.clearFields();
      } catch (err) {
        console.log(err)
      }
    },
    clearFields() {
      this.$data.dt_nascimento = undefined;
      this.$data.id_fazenda = undefined;
      this.$data.no_animal = undefined;
      this.$data.no_raca = undefined;
      this.$data.sexo = undefined;
      this.$data.vr_peso = undefined;
    }
  }
}
</script>

