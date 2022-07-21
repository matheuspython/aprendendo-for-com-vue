<template>
  <main>
    <h1>lista de filmes</h1>
    <div class="container">
      <FilmVue v-for="film in infoListFromApi" v-bind:key="film" v-bind:img="film.backdrop_path" v-bind:name="film.name"/>
    </div>
  </main>
</template>

<script>
import FilmVue from './Film.vue'
import axios from 'axios'
  export default {
    name: 'TheMain',
    components:{
      FilmVue
    },
    data() {
      return {
        infoListFromApi: null
      }
    },
    mounted() {
      const key = '6ca014c078ab885f23a1f191a11bbd08'
      axios.get(`https://api.themoviedb.org/3/discover/tv?with_network=213&language=pt-BR&api_key=${key}`)
      .then(res => this.infoListFromApi = res.data.results)
    },
  }
</script>

<style scoped>
  main {
    width: 100%;
  }
  h1{
    text-align: center;
    margin: 15px;
    text-transform: uppercase;
  }
  main .container{
    width: 100%;
    justify-content: center;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
</style>