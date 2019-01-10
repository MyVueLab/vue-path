<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Data test with VueJS'
    }
  }
}
</script>

<style>
  #app {
    background-color: orangered;
    color: #fff;
  }
</style>
