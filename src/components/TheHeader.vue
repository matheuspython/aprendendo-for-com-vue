<template>
  <header>
    {{text}}
    {{busca}}
  </header>
</template>

<script>
  import {busca,a} from '../services/api'
  console.log(busca, a)
  export default {
  name: 'TheHeader',
  props:{
    text: String
    },
    data(){
      return {
        busca
      }
    }
  
  }
</script>


<style scoped>
  header {
    background-color: #24bb72;
    color:#fff;
    height: 75px;
    font-size: 20px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>