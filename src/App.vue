<template>
  <div id="app">
    <div class="manu">
      <router-link to="/" class="pages">Склад</router-link>
      <router-link to="/addGoods" class="pages">Накладна прийому товару</router-link>
      <router-link to="/removeGoods" class="pages">Накладна видачі товару</router-link>
    </div>
    <br>
    <hr>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.pages {
  border-radius: 4px;
  background-color: black;
  margin-left: 20px;
  padding: 10px;
  color: white;
  text-decoration: none;
}
</style>
