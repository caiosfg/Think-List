<template>
  <div id="app">
    <h1>Tarefas</h1>
    <TaskGrid :tasks="tasks" />
  </div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue'

export default {
  name: 'App',
  components:{ TaskGrid},
  data(){
    return {
       tasks:[
         { name: 'Lavar a louça', pending: false },
         { name: 'Arrumar quintal', pending: true }
       ]
    }
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
</style>
