<template>
  <div v-show="img" class="film">
    <img v-bind:src="'https://image.tmdb.org/t/p/original'+img" alt="img">
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default {
    name: 'FilmVue',
    props: {
      img: String,
      name: String,
    }
  }
</script>

<style scoped>
  .film{
    width: 100%;
    max-width: 300px;
    transition: .4s;
  }
  .film:hover{
    max-width: 310px;
  }
  .film img{
    width: 100%;
  }
  .film p {
    text-align: center;
  }
</style>