<template>
  <TheHeader text="seja bem vindo a esse site!"/>
  <TheMainVue />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMainVue from './components/TheMain.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheMainVue
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body{
  font-family: sans-serif;
}
</style>
