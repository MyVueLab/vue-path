<template>
  <div id="app">
    <h1>Contador</h1>
    <counters />
  </div>
</template>

<script>
import Counters from './Counters.vue';

export default {
  components: {
    Counters
  },
  data() {
    return {
      counter: 0
    }
  }
}
</script>

<style>

</style>

