<template>
  <div id="app">
    <NavBar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TestComponent msg="Test done"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import TestComponent from './components/TestComponent.vue'
import HelloWorld from './components/HelloWorld.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TestComponent,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
