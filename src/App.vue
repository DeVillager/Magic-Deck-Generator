<template lang="en">
  <img alt="Magic logo" src="./assets/magic_logo.png">
  <CardSearch msg="Magic Deck generator"/>
</template>

<script>
import CardSearch from './components/CardSearch.vue'

export default {
  name: 'App',
  components: {
    CardSearch
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
html, body, h1 {
  font-family: Bebas, sans-serif;
}

#app {
  font-family: 'Bebas Neue', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
