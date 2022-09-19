<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div v-if="data.length > 0">
          <h1 class="text-center" style="color: #67613C">Tabela de pessoas</h1>
          <table class="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Endereço</th>
                <th scope="col">sexo</th>
                <th scope="col">ic</th>
                <th scope="col">
                  <button class="btn btn-outline-dark btn-add align-self-end" @click="addPeoples()">
                    Add
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pessoa in data">
                <td>{{ pessoa.id }}</td>
                <td>{{ pessoa.no_pessoa }}</td>
                <td>{{ pessoa.no_email }}</td>
                <td>{{ pessoa.endereco }}</td>
                <td>{{ pessoa.sexo }}</td>
                <td v-if="pessoa.ic_ativo === true"><input type="checkbox" class="form-control" checked onclick="return false"></td>
                <td v-else><input type="checkbox" class="form-control" readonly onclick="return false"></td>
                <div>
                  <button @click="shareData(pessoa.id)" class="btn btn-outline-success btn-sm">Animais</button>
                  <button @click="update(pessoa.id)" class="btn btn-outline-info btn-sm">Edit</button>
                  <button @click="remove(pessoa.id)" class="btn btn-outline-danger btn-sm">Remove</button>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <h1>Não tem nenhum item na tabela! Tente adicionar um!</h1>
        </div>
      </div>
      <div class="col-md-2">

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AddAnimalsVue from '../components/AddAnimals.vue'
let back_end_api = "http://localhost:3000"

export default {
  data() {
    return {
      data: [],
      id: null
    }
  },
  components: {
    AddAnimalsVue
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
    },
    shareData(id) {
      this.$router.push({
        name: "AddAnimals", params: {
          user_id: id
        }
      })
    },
    update(id) {
      this.$router.push({
        name: "UpdatePessoas", params: {
          id: id
        }
      })
    },
    addPeoples() {
      this.$router.push({
        name: "NewPersonForm"
      })
    }
  },
}
</script>
<style>
.btn.btn-sm {
  margin-top: 0.5em;
}

.btn.btn-primary {
  margin: auto
}

.btn-add {
  padding: 0.3em;
  min-width: 100px;
  margin-left: 5em;
}

.btn-add a {
  padding: 10px
}
</style>
