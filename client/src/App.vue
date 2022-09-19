<template>
  <div>
    <div class="img-rancho">
      <router-link to="/">
        <img src="./assets/logoIRancho.png" height="100">
      </router-link>
    </div>
    <div id="app" class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      modalShow: false
    }
  }
}
</script>

<style lang="scss">
@import './assets/styles/variables';
@import './assets/styles/bootstrap';

.img-rancho {
  background-color: #93A52D;
  width: 100%;
  margin-bottom: 1em;
}
img {
  cursor: pointer;
}
</style>
