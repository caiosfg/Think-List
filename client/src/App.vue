<template>
  <div id="app">
    <h1>Tarefas</h1>
    <NewTask @taskAdded="addTask" />
    <TaskGrid @taskDeleted="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue'
import NewTask from './components/NewTask.vue'

export default {
  name: 'App',
  components:{ NewTask, TaskGrid},
  data(){
    return {
       tasks:[
         { name: 'Lavar a louça', pending: false },
         { name: 'Arrumar quintal', pending: true }
       ]
    }
  },
  methods: {
    addTask(task){
      const sameName = t => t.name === task.name
      const reallyNew = this.tasks.filter(sameName).length == 0
      reallyNew && this.tasks.push({
          name: task.name,
          pending: task.pending || true
        })
    },
    deleteTask(i){
      this.tasks.splice(i, 1)
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
