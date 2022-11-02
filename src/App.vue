<template>
  <div id="app">
    <TestWork/>
  </div>
</template>

<script>
import TestWork from './components/TestWork.vue'

export default {
  name: 'App',
  components: {
    TestWork
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

</style>
