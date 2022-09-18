<template>
  <div>
    <div v-if="animais.data.length > 0">
      <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome do animal</th>
              <th scope="col">Id Fazenda</th>
              <th scope="col">Raça</th>
              <th scope="col">Sexo</th>
              <th scope="col">Data de nascimento</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="animal in animais.data">
              <td>{{ animal.id }}</td>
              <td>{{ animal.no_animal }}</td>
              <td>{{ animal.id_fazenda }}</td>
              <td>{{ animal.no_raca }}</td>
              <td>{{ animal.sexo }}</td>
              <td>{{ animal.dt_nascimento }}</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'TableAnimals',
    props: {
      animais: []
    }
  }
</script>

<style>
</style>
